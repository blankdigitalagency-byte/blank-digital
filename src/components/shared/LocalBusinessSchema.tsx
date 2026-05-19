export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.blankdigital.co.uk/#business",
        name: "Blank Digital",
        url: "https://www.blankdigital.co.uk",
        email: "info@blankdigital.co.uk",
        description:
          "Edinburgh digital agency specialising in website design, brand identity, logo design, SEO and generative engine optimisation for local tradespeople, restaurants and service businesses.",
        image: "https://www.blankdigital.co.uk/images/blank-digital-edinburgh-office.png",
        logo: "https://www.blankdigital.co.uk/images/logo.png",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Edinburgh",
          addressRegion: "Scotland",
          addressCountry: "GB",
        },
        areaServed: [
          { "@type": "City", name: "Edinburgh" },
          { "@type": "Neighborhood", name: "Leith" },
          { "@type": "Neighborhood", name: "Morningside" },
          { "@type": "Neighborhood", name: "Stockbridge" },
          { "@type": "Neighborhood", name: "Portobello" },
          { "@type": "Neighborhood", name: "Newington" },
          { "@type": "Neighborhood", name: "Corstorphine" },
          { "@type": "AdministrativeArea", name: "East Lothian" },
          { "@type": "AdministrativeArea", name: "Midlothian" },
          { "@type": "Country", name: "United Kingdom" },
        ],
        serviceType: [
          "Website Design",
          "Web Development",
          "Logo Design",
          "Brand Identity",
          "SEO Optimisation",
          "Generative Engine Optimisation",
          "Digital Marketing",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Digital Agency Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Website Design Edinburgh",
                description: "Custom website design and development for Edinburgh small businesses and tradespeople.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Logo Design Edinburgh",
                description: "Professional logo design for Edinburgh businesses.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Brand Identity Edinburgh",
                description: "Complete brand identity design for local Edinburgh businesses.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "SEO Optimisation Edinburgh",
                description: "Local SEO services to help Edinburgh businesses rank on Google.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Generative Engine Optimisation",
                description: "GEO services to get Edinburgh businesses recommended by AI tools like ChatGPT and Perplexity.",
              },
            },
          ],
        },
        knowsAbout: [
          "Website design for tradespeople Edinburgh",
          "Local SEO Edinburgh",
          "Generative Engine Optimisation",
          "Branding for small businesses Edinburgh",
          "Web development Edinburgh",
          "Digital marketing Edinburgh",
        ],
        priceRange: "££",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
        ],
        sameAs: [
          "https://www.instagram.com/blankdigital",
          "https://www.linkedin.com/company/blankdigital",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.blankdigital.co.uk/#website",
        url: "https://www.blankdigital.co.uk",
        name: "Blank Digital",
        description: "Edinburgh digital agency for local businesses",
        publisher: { "@id": "https://www.blankdigital.co.uk/#business" },
        inLanguage: "en-GB",
      },
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
