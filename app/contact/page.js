import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const ContactPage = () => {
  return (
    <>
      <NavBar />
      <div className="pt-[72px]">
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
