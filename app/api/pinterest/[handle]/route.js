import { NextResponse } from 'next/server';

const decodeEntities = (str) => {
  if (!str) return '';
  return str
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/&amp;/g, '&')
    .replace(/&#39;/g, "'");
};

export async function GET(request, { params }) {
  const { handle } = await params;
  
  if (!handle) {
    return NextResponse.json({ error: 'Missing handle parameter' }, { status: 400 });
  }

  let accessToken = process.env.PINTEREST_ACCESS_TOKEN;
  if (handle === 'devdossier') {
    accessToken = process.env.DEVDOSSIER_PINTEREST_SECRET_ID || accessToken;
  } else if (handle === 'shalimarmehra') {
    accessToken = process.env.SHALIMARMEHRA_PINTEREST_SECRET_ID || accessToken;
  }

  if (accessToken) {
    // ----------------------------------------------------
    // Mode A: Official Pinterest Developer API v5
    // ----------------------------------------------------
    try {
      console.log(`Fetching from Pinterest API for handle: ${handle}`);
      const response = await fetch(
        'https://api.pinterest.com/v5/pins',
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          },
          next: { revalidate: 3600 } // Cache the response for 1 hour
        }
      );

      if (!response.ok) {
        console.error("Pinterest API error status:", response.status, response.statusText);
        const errText = await response.text();
        console.error("Pinterest API error details:", errText);
        // Fall back to RSS feed if API request fails
        return await fetchFromRSS(handle);
      }

      const data = await response.json();
      
      if (!data.items || data.items.length === 0) {
        // Fall back to RSS feed if API returned no items
        return await fetchFromRSS(handle);
      }

      const formattedPins = data.items.map(pin => {
        // Get highest resolution image available
        const images = pin.media?.images || {};
        const imageUrl = images['600x']?.url || images['originals']?.url || images['400x300']?.url || images['150x150']?.url || '';

        return {
          id: pin.id,
          title: decodeEntities(pin.title || pin.description || 'Pinterest Pin'),
          description: decodeEntities(pin.description || ''),
          link: pin.link || `https://www.pinterest.com/pin/${pin.id}/`,
          image: imageUrl,
          pubDate: pin.created_at || ''
        };
      });

      return NextResponse.json({
        title: `${handle.charAt(0).toUpperCase() + handle.slice(1)} on Pinterest`,
        description: 'Curated board fetched via Pinterest API',
        link: `https://www.pinterest.com/${handle}/`,
        pins: formattedPins
      });

    } catch (apiError) {
      console.error("Pinterest API exception, falling back to RSS:", apiError);
      return await fetchFromRSS(handle);
    }
  } else {
    // ----------------------------------------------------
    // Mode B: Public Pinterest RSS Feed Fallback
    // ----------------------------------------------------
    return await fetchFromRSS(handle);
  }
}

async function fetchFromRSS(handle) {
  try {
    console.log(`Fetching from Pinterest RSS for handle: ${handle}`);
    const response = await fetch(
      `https://www.pinterest.com/${handle}/feed.rss`,
      {
        next: { revalidate: 3600 } // Cache the response for 1 hour
      }
    );

    if (!response.ok) {
      console.error("Pinterest RSS error status:", response.status, response.statusText);
      return NextResponse.json({ error: `Failed to fetch Pinterest RSS for ${handle}` }, { status: 500 });
    }

    const xmlText = await response.text();

    // Parse Channel Info (Title, Description, Link)
    const channelTitleMatch = xmlText.match(/<channel>[\s\S]*?<title>([\s\S]*?)<\/title>/);
    const channelDescriptionMatch = xmlText.match(/<channel>[\s\S]*?<description>([\s\S]*?)<\/description>/);
    const channelLinkMatch = xmlText.match(/<channel>[\s\S]*?<link>([\s\S]*?)<\/link>/);

    const channelTitle = channelTitleMatch ? channelTitleMatch[1].trim() : handle;
    const channelDescription = channelDescriptionMatch ? channelDescriptionMatch[1].trim() : '';
    const channelLink = channelLinkMatch ? channelLinkMatch[1].trim() : `https://www.pinterest.com/${handle}`;

    const formattedPins = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;

    while ((match = itemRegex.exec(xmlText)) !== null) {
      const itemContent = match[1];

      const titleMatch = itemContent.match(/<title>([\s\S]*?)<\/title>/);
      const linkMatch = itemContent.match(/<link>([\s\S]*?)<\/link>/);
      const descriptionMatch = itemContent.match(/<description>([\s\S]*?)<\/description>/);
      const pubDateMatch = itemContent.match(/<pubDate>([\s\S]*?)<\/pubDate>/);

      const title = titleMatch ? titleMatch[1].trim() : '';
      const link = linkMatch ? linkMatch[1].trim() : '';
      const descriptionHtml = descriptionMatch ? descriptionMatch[1].trim() : '';
      const pubDate = pubDateMatch ? pubDateMatch[1].trim() : '';

      // Extract image URL from description Html
      const imgRegex = /src="([^"]+)"|src=&quot;([^&]+)&quot;/;
      const imgMatch = descriptionHtml.match(imgRegex);
      let imageUrl = '';
      if (imgMatch) {
        imageUrl = imgMatch[1] || imgMatch[2];
        // Convert thumbnail size (236x) to original high resolution
        imageUrl = imageUrl.replace('/236x/', '/originals/');
      }

      // Extract clean description text
      let cleanDescription = descriptionHtml
        .replace(/<[^>]+>/g, '') // remove HTML tags
        .replace(/&lt;[^&]+&gt;/g, '') // remove encoded tags
        .trim();

      if (!cleanDescription && title) {
        cleanDescription = title;
      }

      // Extract pin ID from link to ensure each pin has a unique string ID
      const pinIdMatch = link.match(/\/pin\/(\d+)/);
      const pinId = pinIdMatch ? pinIdMatch[1] : Math.random().toString(36).substring(7);

      formattedPins.push({
        id: pinId,
        title: decodeEntities(title || cleanDescription || 'Pinterest Pin'),
        description: decodeEntities(cleanDescription),
        link,
        image: imageUrl,
        pubDate
      });
    }

    return NextResponse.json({
      title: decodeEntities(channelTitle),
      description: decodeEntities(channelDescription),
      link: channelLink,
      pins: formattedPins
    });

  } catch (error) {
    console.error("Pinterest RSS parse error:", error);
    return NextResponse.json({ error: `Internal server error for handle ${handle}` }, { status: 500 });
  }
}
