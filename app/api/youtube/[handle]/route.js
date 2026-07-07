import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { handle } = await params;
  
  let apiKey, channelId;

  if (handle === "devdossier") {
    apiKey = process.env.DEVDOSSIER_YOUTUBE_API_KEY;
    channelId = process.env.DEVDOSSIER_CHANNEL_ID;
  } else if (handle === "shalimarmehra") {
    apiKey = process.env.SHALIMARMEHRA_YOUTUBE_API_KEY;
    channelId = process.env.SHALIMARMEHRA_CHANNEL_ID;
  }

  if (!apiKey || !channelId) {
    console.error(`Missing API Key or Channel ID for handle: ${handle}`);
    return NextResponse.json({ error: 'API configuration missing for this handle' }, { status: 500 });
  }

  try {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${apiKey}`,
      {
        next: { revalidate: 3600 }, // Cache the response for 1 hour
      }
    );

    if (!response.ok) {
      console.error("Failed to fetch YouTube stats:", response.statusText);
      return NextResponse.json({ error: 'Failed to fetch from YouTube API' }, { status: 500 });
    }

    const data = await response.json();
    
    if (data.items && data.items.length > 0) {
      const channel = data.items[0];
      return NextResponse.json({
        id: channel.id,
        title: channel.snippet.title,
        description: channel.snippet.description,
        customUrl: channel.snippet.customUrl,
        publishedAt: channel.snippet.publishedAt,
        thumbnailUrl: channel.snippet.thumbnails.high.url,
        subscriberCount: channel.statistics.subscriberCount,
        viewCount: channel.statistics.viewCount,
        videoCount: channel.statistics.videoCount,
      });
    }
    
    return NextResponse.json({ error: 'Channel not found' }, { status: 404 });
  } catch (error) {
    console.error("Error fetching YouTube stats:", error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
