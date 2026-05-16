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
        image: "https://www.blankdigital.co.uk/images/blank-digital-edinburgh-office.jpg",
        logo: "https://www.blankdigital.co.uk/images/logo.png",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Edinburgh",
          addressRegion: "Scotland",
          postalCode: "EH1",
          addressCountry: "GB",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 55.9533,
          longitude: -3.1883,
        },
        areaServed: [
          { "@type": "City", name: "Edinburgh" },
          { "@type": "Neighborhood", name: "Leith" },
          { "@type": "Neighborhood", name: "Morningside" },
          { "@type": "Neighborhood", name: "Stockbridge" },
          { "@type": "Neighborhood", name: "Portobello" },
          { "@type": "AdministrativeArea", name: "East Lothian" },
          { "@type": "AdministrativeArea", name: "Midlothian" },
          { "@type": "Country", name: "United Kingdom" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Digital Agency Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Design Edinburgh" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Logo Design Edinburgh" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand Identity Edinburgh" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Optimisation Edinburgh" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Generative Engine Optimisation" } },
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
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.blankdigital.co.uk/?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
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
