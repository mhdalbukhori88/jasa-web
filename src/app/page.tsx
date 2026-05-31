import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { siteConfig } from "@/config/site";

export default function Home() {
  // Structured data (JSON-LD) untuk membantu SEO.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.contact.address,
      addressCountry: "ID",
    },
    areaServed: "ID",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Technologies />
        <Process />
        <Pricing />
        <Testimonials />
        <Faq />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
