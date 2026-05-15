export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Blank Digital",
    url: "https://www.blankdigital.co.uk",
    email: "info@blankdigital.co.uk",
    description:
      "Edinburgh digital agency specialising in website design, brand identity, logo design, SEO and generative engine optimisation for local tradespeople, restaurants and service businesses.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Edinburgh",
      addressRegion: "Scotland",
      addressCountry: "GB",
    },
    areaServed: [
      { "@type": "City", name: "Edinburgh" },
      { "@type": "AdministrativeArea", name: "East Lothian" },
      { "@type": "AdministrativeArea", name: "Midlothian" },
      { "@type": "Country", name: "United Kingdom" },
    ],
    serviceType: [
      "Website Design",
      "Web Development",
      "Brand Identity",
      "Logo Design",
      "SEO Optimisation",
      "Generative Engine Optimisation",
    ],
    knowsAbout: [
      "Website design for tradespeople",
      "Local SEO Edinburgh",
      "Generative Engine Optimisation",
      "Branding for small businesses",
    ],
    priceRange: "££",
    sameAs: [
      "https://www.instagram.com/blankdigital",
      "https://www.linkedin.com/company/blankdigital",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
