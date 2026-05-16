export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  content: Section[];
}

export interface Section {
  type: "intro" | "h2" | "h3" | "p" | "ul" | "ol" | "cta";
  text?: string;
  items?: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "how-much-does-a-website-cost-edinburgh",
    title: "How Much Does a Website Cost in Edinburgh?",
    excerpt:
      "A straight-talking breakdown of what you can expect to pay for a professional business website in Edinburgh, and what you get at each price point.",
    date: "2026-05-01",
    category: "Web Design",
    readTime: "5 min read",
    content: [
      {
        type: "intro",
        text: "If you have ever tried to get a straight answer on website pricing, you will know how frustrating it can be. Quotes range from a few hundred pounds to tens of thousands, with very little explanation of why. This guide breaks it down honestly so you know what to expect before you speak to anyone.",
      },
      {
        type: "h2",
        text: "Why Website Prices Vary So Much",
      },
      {
        type: "p",
        text: "A website is not like buying a van or a piece of equipment where you can compare like for like. The price depends on who builds it, what tools they use, how much is custom versus templated, and how much ongoing support is included. A freelancer charging low rates might deliver something that looks fine but loads slowly, breaks on mobile, or disappears from Google. An agency charging high rates might be charging for a fancy Soho office rather than better work.",
      },
      {
        type: "p",
        text: "Here is what you actually get at different price points in Edinburgh.",
      },
      {
        type: "h2",
        text: "Under £500: DIY and Budget Builds",
      },
      {
        type: "p",
        text: "At this level, you are either building it yourself on Wix or Squarespace, or paying someone to use a basic template with very little customisation. These sites can work fine for businesses that just need a basic online presence, but they tend to have limitations around SEO, speed and flexibility.",
      },
      {
        type: "ul",
        items: [
          "Template-based design with limited customisation",
          "Basic mobile responsiveness",
          "Usually fine for 1 to 3 pages",
          "SEO is often an afterthought",
          "You may have to manage updates and hosting yourself",
        ],
      },
      {
        type: "p",
        text: "If you are a sole trader just starting out and need something live quickly, this can be a reasonable starting point. Just be aware of the limitations.",
      },
      {
        type: "h2",
        text: "£500 to £1,500: Small Business Websites",
      },
      {
        type: "p",
        text: "This is where most Edinburgh tradespeople, restaurants and service businesses should be looking. At this price point, a good agency or experienced freelancer will build you a custom site with proper SEO, fast loading speeds, mobile-first design and a contact form that actually works.",
      },
      {
        type: "ul",
        items: [
          "Custom design built around your business",
          "4 to 8 pages (home, about, services, contact, etc.)",
          "On-page SEO included as standard",
          "Mobile-first and fast loading",
          "Contact forms and click-to-call buttons",
          "Google Maps integration",
          "Hosting and domain guidance",
        ],
      },
      {
        type: "p",
        text: "This is the sweet spot for most local businesses. You get a professional result without overpaying.",
      },
      {
        type: "h2",
        text: "£1,500 to £5,000: More Pages, More Features",
      },
      {
        type: "p",
        text: "If you need more pages, an online booking system, an e-commerce shop, a client portal or more advanced SEO work built in from the start, expect to pay in this range. The design will be more tailored, the build more complex and the result more capable.",
      },
      {
        type: "ul",
        items: [
          "10 to 30 pages of content",
          "Online booking or reservation systems",
          "E-commerce with payment processing",
          "Blog or news section",
          "Advanced local SEO strategy",
          "Custom integrations (CRM, email marketing, etc.)",
        ],
      },
      {
        type: "h2",
        text: "Over £5,000: Large or Complex Sites",
      },
      {
        type: "p",
        text: "At this level, you are typically looking at bespoke web applications, large e-commerce sites, or businesses with very specific technical requirements. Most small and medium Edinburgh businesses do not need to spend this much.",
      },
      {
        type: "h2",
        text: "What Should You Ask Before You Pay?",
      },
      {
        type: "p",
        text: "Whatever your budget, these are the questions to ask any designer or agency before you hand over any money:",
      },
      {
        type: "ol",
        items: [
          "Is the price fixed or could it go up?",
          "Who owns the website when it is finished?",
          "Will I be able to make changes myself?",
          "What happens if something breaks?",
          "Is SEO included, and what exactly does that mean?",
          "Can I see examples of websites you have built for similar businesses?",
          "What ongoing costs will I have after launch (hosting, maintenance, etc.)?",
        ],
      },
      {
        type: "h2",
        text: "The Honest Answer",
      },
      {
        type: "p",
        text: "For most Edinburgh tradespeople and service businesses, a well-built website costs somewhere between £500 and £1,500. It is one of the best investments you can make in your business. A good website works for you 24 hours a day, 7 days a week, and unlike paying for ads, it keeps delivering without an ongoing cost.",
      },
      {
        type: "p",
        text: "If someone is quoting you significantly less than £500 for something custom, ask a lot of questions. If someone is quoting you significantly more than £1,500 for a basic site, also ask a lot of questions.",
      },
      {
        type: "cta",
        text: "Want a straight-talking quote for your Edinburgh business? We give you a fixed price before any work begins.",
      },
    ],
  },
  {
    slug: "local-seo-guide-edinburgh-tradespeople",
    title: "Local SEO Guide for Edinburgh Tradespeople",
    excerpt:
      "If you are a plumber, electrician or joiner in Edinburgh, here is exactly what you need to do to show up at the top of Google when customers search for your trade.",
    date: "2026-04-18",
    category: "SEO",
    readTime: "8 min read",
    content: [
      {
        type: "intro",
        text: "When a homeowner in Morningside needs a plumber at 8pm on a Tuesday, they are not asking their neighbours. They are typing 'plumber Edinburgh' into Google. If your business is not showing up in those results, that job goes to a competitor. This guide explains exactly what you need to do to fix that.",
      },
      {
        type: "h2",
        text: "What is Local SEO?",
      },
      {
        type: "p",
        text: "Local SEO is the process of making your business more visible in Google searches that have a location attached to them. When someone types 'electrician Edinburgh' or 'joiner near me', Google tries to show businesses that are relevant, local and trustworthy. Local SEO is about making sure Google sees you that way.",
      },
      {
        type: "p",
        text: "It is different from general SEO, which is about ranking for any topic. Local SEO is focused on getting found by people in your area who are ready to hire someone.",
      },
      {
        type: "h2",
        text: "Step One: Sort Your Google Business Profile",
      },
      {
        type: "p",
        text: "Your Google Business Profile is the most important free tool available to any local business. It controls what appears when someone searches for your business name, and it powers the map results that appear at the top of local searches.",
      },
      {
        type: "p",
        text: "To get it right:",
      },
      {
        type: "ul",
        items: [
          "Claim your profile at business.google.com if you have not already",
          "Fill in every single field — business name, category, description, opening hours, services",
          "Add your service areas (Edinburgh, East Lothian, Midlothian, etc.)",
          "Upload real photos of your work, your van, your team",
          "Make sure your address, phone number and website are exactly the same as on your website",
          "Post regular updates — Google treats active profiles better",
        ],
      },
      {
        type: "h2",
        text: "Step Two: Get Your Website Talking About Edinburgh",
      },
      {
        type: "p",
        text: "Your website needs to make it completely clear what you do and where you do it. Google reads your site carefully to decide whether you are relevant for local searches.",
      },
      {
        type: "ul",
        items: [
          "Include Edinburgh and specific areas (Leith, Stockbridge, Portobello, etc.) naturally in your page content",
          "Have a dedicated page for each service you offer",
          "Create pages for the specific areas you cover if you serve multiple locations",
          "Make sure your page titles include your trade and location (e.g. 'Plumber Edinburgh | Emergency Callouts')",
          "Add your NAP (name, address, phone number) to the footer of every page",
          "Embed a Google Map on your contact page",
        ],
      },
      {
        type: "h2",
        text: "Step Three: Build Your Local Citations",
      },
      {
        type: "p",
        text: "A citation is anywhere online that lists your business name, address and phone number. Google uses these to verify that your business is legitimate and to confirm your location. The more consistent and widespread these are, the more Google trusts you.",
      },
      {
        type: "p",
        text: "Make sure you are listed on:",
      },
      {
        type: "ul",
        items: [
          "Yell.com",
          "Checkatrade or Rated People (for tradespeople)",
          "Thomson Local",
          "Bing Places",
          "Apple Maps",
          "Facebook Business Page",
          "Edinburgh Chamber of Commerce directory",
          "Any trade association directories relevant to your industry",
        ],
      },
      {
        type: "p",
        text: "The key thing is consistency. Your business name, address and phone number must be identical across every listing. Even small differences (St vs Street, Ltd vs Limited) can confuse Google.",
      },
      {
        type: "h2",
        text: "Step Four: Get More Google Reviews",
      },
      {
        type: "p",
        text: "Google reviews are one of the strongest local ranking factors. More reviews mean higher rankings and more trust from potential customers. The businesses at the top of local searches almost always have significantly more reviews than their competitors.",
      },
      {
        type: "p",
        text: "The best strategy is simple: ask every happy customer to leave a review. Make it easy for them by sending a direct link to your Google review page. Most people are happy to do it if you ask straight after a good job, when the experience is fresh.",
      },
      {
        type: "h2",
        text: "Step Five: Get Links From Local Websites",
      },
      {
        type: "p",
        text: "When other websites link to yours, Google sees it as a vote of confidence. Local links are particularly valuable. Some ways to get them:",
      },
      {
        type: "ul",
        items: [
          "Join the Federation of Master Builders or a relevant trade body (they often link to members)",
          "Get listed on the Edinburgh City Council local business directory",
          "Sponsor a local event or sports team and ask for a link",
          "Write a guest article for a local Edinburgh website or blog",
          "Ask suppliers or business partners if they can link to your site",
        ],
      },
      {
        type: "h2",
        text: "How Long Does Local SEO Take?",
      },
      {
        type: "p",
        text: "You will typically start to see movement in your rankings within 3 to 6 months. Some things — like getting your Google Business Profile optimised and adding your first citations — can show results faster. The important thing is to be consistent and patient. Local SEO is a long game, but once you are ranking well, the results keep coming without ongoing ad spend.",
      },
      {
        type: "cta",
        text: "Want help with your local SEO in Edinburgh? We do this every day for tradespeople and service businesses across the city.",
      },
    ],
  },
  {
    slug: "what-is-generative-engine-optimisation",
    title: "What is Generative Engine Optimisation and Why Does It Matter?",
    excerpt:
      "ChatGPT and Google AI are changing how people find local businesses. Here is what Edinburgh business owners need to know about GEO and how to get ahead of competitors.",
    date: "2026-04-05",
    category: "GEO",
    readTime: "6 min read",
    content: [
      {
        type: "intro",
        text: "Something significant has changed in how people find local businesses. Alongside typing into Google, more and more people are asking AI tools like ChatGPT, Perplexity and Google's own AI Overviews to recommend services for them. Generative Engine Optimisation (GEO) is the process of making sure your business appears in those AI recommendations.",
      },
      {
        type: "h2",
        text: "How People Are Finding Businesses Differently",
      },
      {
        type: "p",
        text: "Three years ago, if you needed a plumber in Edinburgh, you would type 'plumber Edinburgh' into Google and click one of the top results. Many people still do this. But a growing number now open ChatGPT or Perplexity and ask something like 'who are the best plumbers in Edinburgh?' or 'can you recommend a web designer in Edinburgh that works with small businesses?'",
      },
      {
        type: "p",
        text: "These AI tools generate an answer — sometimes with specific business recommendations, sometimes with general advice. If your business is not in that answer, you miss the enquiry entirely. That is what GEO is about.",
      },
      {
        type: "h2",
        text: "What is Generative Engine Optimisation?",
      },
      {
        type: "p",
        text: "Generative Engine Optimisation is the practice of making your business, website and online presence more likely to be recommended by AI tools. It is a newer discipline than traditional SEO but it draws on many of the same principles — being trustworthy, authoritative and clearly associated with the right topics and locations.",
      },
      {
        type: "p",
        text: "The key difference is in how AI tools make decisions. Google's traditional search algorithm ranks web pages. AI tools are trained on huge amounts of data and try to give useful, trustworthy answers. They pull from web content, but they also weight things like structured data, reviews, how often your business is mentioned across the web, and how clearly you are associated with specific services and locations.",
      },
      {
        type: "h2",
        text: "How is GEO Different From SEO?",
      },
      {
        type: "p",
        text: "Traditional SEO focuses on getting your website to rank in Google's blue link results. GEO focuses on getting your business mentioned within AI-generated responses. Some of the techniques overlap, but GEO puts more emphasis on:",
      },
      {
        type: "ul",
        items: [
          "Structured data and schema markup that AI tools can easily interpret",
          "FAQ content that directly answers the questions people ask AI tools",
          "Being mentioned and cited by other credible websites",
          "Entity building — making sure AI systems clearly associate you with specific services, locations and expertise",
          "Clear, factual content that reads well to both humans and AI models",
          "Consistent business information across every platform",
        ],
      },
      {
        type: "h2",
        text: "Why Does This Matter for Edinburgh Businesses?",
      },
      {
        type: "p",
        text: "GEO is still early. Most Edinburgh businesses have not heard of it, let alone started working on it. That creates a significant opportunity. The businesses that establish a strong AI presence now — before it becomes competitive — will have an advantage that is very difficult for competitors to catch up with.",
      },
      {
        type: "p",
        text: "Think of it like getting on Google in 2006. The businesses that got their Google Business Profile and website sorted early enjoyed years of easy visibility before their competitors caught on. GEO is at a similar point right now.",
      },
      {
        type: "h2",
        text: "What Can You Do Right Now?",
      },
      {
        type: "p",
        text: "You do not need to wait for a full GEO strategy to start making progress. Here are some things that help immediately:",
      },
      {
        type: "ul",
        items: [
          "Add a FAQ section to your website that answers the questions your customers actually ask",
          "Make sure your Google Business Profile is complete and active with regular posts",
          "Get more Google reviews — AI tools weight businesses with strong review profiles",
          "Add schema markup to your website (this requires technical help but makes a big difference)",
          "Write content that answers specific local questions, like 'how much does a new kitchen cost in Edinburgh'",
          "Make sure your business name, services and location are clearly stated on every page of your website",
        ],
      },
      {
        type: "h2",
        text: "Will GEO Replace SEO?",
      },
      {
        type: "p",
        text: "No. Traditional Google search is still where the majority of searches happen and that is not changing quickly. GEO is an additional channel to be visible in, not a replacement for good SEO. In fact, many of the fundamentals that make you rank well in Google — trustworthy content, strong reviews, clear information, fast website — also help with GEO.",
      },
      {
        type: "p",
        text: "The businesses that will dominate local search in the next five years are the ones doing both.",
      },
      {
        type: "cta",
        text: "We help Edinburgh businesses get visible on both traditional search and AI tools. Get in touch to find out what a GEO strategy looks like for your business.",
      },
    ],
  },
  {
    slug: "do-edinburgh-restaurants-need-a-website",
    title: "Do Edinburgh Restaurants Still Need a Website in 2026?",
    excerpt:
      "With Google, TripAdvisor and Instagram all competing for attention, is a website still worth it for Edinburgh restaurants and cafes? The honest answer might surprise you.",
    date: "2026-03-22",
    category: "Web Design",
    readTime: "4 min read",
    content: [
      {
        type: "intro",
        text: "It is a fair question. You are already on TripAdvisor, you post on Instagram regularly, you have a Google Business Profile and customers can find your phone number and opening hours easily enough. So do you actually need a website? The short answer is yes, and here is why.",
      },
      {
        type: "h2",
        text: "Your Google Ranking Depends on It",
      },
      {
        type: "p",
        text: "When someone searches 'Italian restaurant Edinburgh' or 'best brunch near the Royal Mile', Google uses a combination of signals to decide what to show. Your Google Business Profile helps, but a proper website with the right content makes a significant difference to where you rank.",
      },
      {
        type: "p",
        text: "Restaurants without websites consistently rank below those that have one, even when the review score is similar. Google trusts websites in a way it does not fully trust third-party profiles.",
      },
      {
        type: "h2",
        text: "You Do Not Own Your Social Media",
      },
      {
        type: "p",
        text: "Instagram, Facebook and TripAdvisor can change their algorithms, their rules or their fees at any time. Many restaurant owners have seen their reach drop dramatically overnight because a platform changed how it works. You have no control over that.",
      },
      {
        type: "p",
        text: "Your website is yours. You own it, you control it, and nothing anyone does to a third-party platform can take it away from you. It is your permanent home on the internet.",
      },
      {
        type: "h2",
        text: "Customers Expect a Menu Online",
      },
      {
        type: "p",
        text: "Before most people decide where to eat, they check the menu. If your menu is not easily accessible online — ideally on your own website — you are losing customers to restaurants where it is. A PDF menu buried in a Facebook page or an Instagram highlight is not the same thing.",
      },
      {
        type: "p",
        text: "A proper website lets you show your full menu with photos, allergen information, prices and seasonal specials. It makes the decision to book much easier.",
      },
      {
        type: "h2",
        text: "Online Booking Means More Covers",
      },
      {
        type: "p",
        text: "If customers have to phone to book a table, you lose everyone who decides to eat out after your phone lines close, or who simply does not want to make a phone call. An online booking system on your website takes reservations 24 hours a day, 7 days a week, with zero effort from you.",
      },
      {
        type: "p",
        text: "For Edinburgh restaurants, this is particularly valuable around the Festival, Hogmanay and other busy periods when visitors from outside Scotland are planning their trips in advance and looking to book everything online.",
      },
      {
        type: "h2",
        text: "It Makes You Look More Serious",
      },
      {
        type: "p",
        text: "A well-designed website tells potential customers that you take your business seriously. It builds trust before they have walked through your door. For higher-end restaurants especially, customers are making a bigger financial commitment and they want to feel confident before they book.",
      },
      {
        type: "p",
        text: "A restaurant with only an Instagram page can look like it is just getting started. A restaurant with a polished website looks established and professional.",
      },
      {
        type: "h2",
        text: "What Should an Edinburgh Restaurant Website Include?",
      },
      {
        type: "ul",
        items: [
          "Full menu with prices (and seasonal menus if applicable)",
          "Online booking system or a prominent link to your booking platform",
          "High-quality food photography",
          "Your story — who you are, what makes your restaurant different",
          "Opening hours, address and how to find you",
          "Allergen and dietary information",
          "Gift vouchers if you offer them",
          "A link to leave a Google review",
          "Your Google Business Profile embedded map",
        ],
      },
      {
        type: "h2",
        text: "The Bottom Line",
      },
      {
        type: "p",
        text: "Social media and third-party platforms are great for visibility, but they work best when they point people back to your website. A website is not an alternative to Instagram or TripAdvisor. It is the foundation that makes everything else work better.",
      },
      {
        type: "cta",
        text: "We build websites for Edinburgh restaurants and cafes that are designed to rank on Google and convert visitors into bookings. Get in touch for a free quote.",
      },
    ],
  },
  {
    slug: "how-to-choose-a-web-designer-edinburgh",
    title: "How to Choose a Web Designer in Edinburgh: 7 Questions to Ask",
    excerpt:
      "Not all web designers are equal. Before you hand over any money, here are the seven questions that will separate the good from the not so good.",
    date: "2026-03-10",
    category: "Web Design",
    readTime: "7 min read",
    content: [
      {
        type: "intro",
        text: "Edinburgh has no shortage of people offering to build you a website. Prices range enormously, portfolios can be misleading, and it is hard to know what questions to ask when you are not a technical person. This guide gives you the seven questions that will quickly tell you whether a web designer is worth working with.",
      },
      {
        type: "h2",
        text: "1. Can You Show Me Websites You Have Built for Similar Businesses?",
      },
      {
        type: "p",
        text: "A good designer will have a portfolio and will be happy to show you real examples. Look for websites built for businesses similar to yours — same size, same industry, same type of customers. If they show you a portfolio of e-commerce fashion brands and you run a plumbing company, that might not be the right fit.",
      },
      {
        type: "p",
        text: "Also check that the websites actually work. Load them on your phone, check how fast they are, and see if they look professional in real life rather than just in screenshots.",
      },
      {
        type: "h2",
        text: "2. Is the Price Fixed, or Can It Change?",
      },
      {
        type: "p",
        text: "One of the most common complaints we hear from businesses who have been burned before is unexpected costs. A designer quotes one price and then adds charges for revisions, for adding pages, for setting up hosting, or for small changes that should have been included.",
      },
      {
        type: "p",
        text: "Ask for a fixed price in writing before any work begins, with a clear scope of what is included. A good agency or designer will be able to give you this. Anyone who is vague about pricing at the quote stage is likely to be vague about it throughout the project.",
      },
      {
        type: "h2",
        text: "3. Who Owns the Website When It Is Finished?",
      },
      {
        type: "p",
        text: "This matters more than most people realise. Some designers build your site on a platform where they retain ownership, meaning if you leave them, you lose the site. Some hosting arrangements tie you to a particular provider with fees that increase over time.",
      },
      {
        type: "p",
        text: "Always ask: when the project is complete, will I own the domain, the hosting account and the website itself? You should get a clear yes to all three.",
      },
      {
        type: "h2",
        text: "4. Will I Be Able to Make Changes Myself?",
      },
      {
        type: "p",
        text: "After your site launches, you will want to update your opening hours, add photos, change a price or post news. A good website should be built on a platform that lets you do this yourself without needing to pay a designer every time.",
      },
      {
        type: "p",
        text: "Ask the designer what content management system the site will use, and whether they will show you how to make basic edits. If the answer is that you will need to contact them for every change, that is a red flag and an ongoing cost you should factor in.",
      },
      {
        type: "h2",
        text: "5. Is SEO Included, and What Does That Actually Mean?",
      },
      {
        type: "p",
        text: "Almost every web designer will say they include SEO. Very few include anything meaningful. There is a big difference between 'we set up your page titles and meta descriptions' and 'we do thorough keyword research and build your site to rank in Edinburgh searches'.",
      },
      {
        type: "p",
        text: "Ask specifically: will my site be set up in Google Search Console? Will you submit my sitemap? Will you research the keywords my customers are actually searching for? Will I rank better in Edinburgh searches because of what you do? If the answers are vague, SEO is probably not genuinely included.",
      },
      {
        type: "h2",
        text: "6. What Happens if Something Goes Wrong After Launch?",
      },
      {
        type: "p",
        text: "Websites break. Plugins need updating, hosting goes down occasionally, and things change. Ask what support is included after launch and what happens if there is a problem six months after you have paid.",
      },
      {
        type: "p",
        text: "Some designers include a support period, others charge hourly for anything post-launch. Some disappear entirely. Make sure you know what you are getting before you start.",
      },
      {
        type: "h2",
        text: "7. What Are the Ongoing Costs?",
      },
      {
        type: "p",
        text: "Beyond the upfront design fee, ask what you will be paying on an ongoing basis. This usually includes:",
      },
      {
        type: "ul",
        items: [
          "Domain renewal (typically £10 to £20 per year)",
          "Hosting (typically £100 to £300 per year for a small business site)",
          "Any monthly maintenance or support fees",
          "Plugin or platform subscription costs if applicable",
        ],
      },
      {
        type: "p",
        text: "There are no wrong answers here, but you need to know upfront so there are no surprises. A designer who refuses to be transparent about ongoing costs is not one you want to work with.",
      },
      {
        type: "h2",
        text: "One More Thing: Trust Your Gut",
      },
      {
        type: "p",
        text: "Beyond these questions, pay attention to how the designer communicates. Are they responsive? Do they explain things clearly without being patronising? Do they seem genuinely interested in your business, or are they just trying to close a sale?",
      },
      {
        type: "p",
        text: "A website project involves working closely with someone for several weeks. You want someone who listens, communicates well and is invested in getting you a good result. The cheapest quote is rarely the best value.",
      },
      {
        type: "cta",
        text: "We are happy to answer all seven of these questions and more. Get in touch for a straight-talking conversation about what your business needs.",
      },
    ],
  },
  {
    slug: "google-business-profile-guide-edinburgh",
    title: "How to Set Up and Optimise Your Google Business Profile in Edinburgh",
    excerpt:
      "Your Google Business Profile is the single most important free tool for getting found locally. Here is how to set it up properly and make the most of it.",
    date: "2026-02-28",
    category: "SEO",
    readTime: "6 min read",
    content: [
      {
        type: "intro",
        text: "When someone searches for your type of business in Edinburgh, the results that appear in the map at the top of the page are controlled by Google Business Profile. It is free, it is powerful, and most Edinburgh businesses are either not using it at all or using it badly. Here is how to get it right.",
      },
      {
        type: "h2",
        text: "What is a Google Business Profile?",
      },
      {
        type: "p",
        text: "A Google Business Profile (previously called Google My Business) is a free listing that controls how your business appears in Google Search and Google Maps. When someone searches for 'electrician Edinburgh' and a map appears with three businesses listed below it, those businesses have optimised Google Business Profiles.",
      },
      {
        type: "p",
        text: "Getting into that map — the 'local pack' — is one of the highest-value things you can do for a local business. The three businesses shown get the vast majority of clicks.",
      },
      {
        type: "h2",
        text: "Step One: Claim and Verify Your Profile",
      },
      {
        type: "p",
        text: "Go to business.google.com and search for your business. If it already exists (Google sometimes creates listings automatically), claim it. If it does not exist, create it from scratch.",
      },
      {
        type: "p",
        text: "You will need to verify that you own the business. Google usually does this by sending a postcard to your business address with a verification code, though phone and email verification are sometimes available. Do not skip this step — unverified profiles have very limited visibility.",
      },
      {
        type: "h2",
        text: "Step Two: Fill In Everything",
      },
      {
        type: "p",
        text: "Google rewards complete profiles. Go through every field and fill it in properly:",
      },
      {
        type: "ul",
        items: [
          "Business name — use your real business name, exactly as it appears everywhere else",
          "Category — choose the most accurate primary category for your business, then add secondary categories",
          "Address — if you work from home and do not want to display your address, you can hide it and just show your service area",
          "Service area — list all the Edinburgh areas and Lothians locations you cover",
          "Phone number — use a consistent number that matches your website",
          "Website — link to your website homepage",
          "Opening hours — keep these accurate and update them for bank holidays",
          "Services — add every service you offer with a description",
          "Description — write a genuine 750-character description of your business, including your key services and location",
        ],
      },
      {
        type: "h2",
        text: "Step Three: Add Photos",
      },
      {
        type: "p",
        text: "Profiles with photos get significantly more clicks than those without. Add:",
      },
      {
        type: "ul",
        items: [
          "A logo",
          "A cover photo (something that represents your business well)",
          "Photos of your work — before and after, finished jobs, your team in action",
          "Photos of your premises or van if relevant",
          "At least 10 photos to start, then add more over time",
        ],
      },
      {
        type: "p",
        text: "Use real photos rather than stock images. Google and customers both prefer authenticity.",
      },
      {
        type: "h2",
        text: "Step Four: Get Google Reviews",
      },
      {
        type: "p",
        text: "Reviews are one of the most important ranking factors for local search. Businesses with more reviews, and higher scores, consistently rank above those with fewer reviews — even if the other signals are similar.",
      },
      {
        type: "p",
        text: "The simplest approach: after every good job, send the customer a direct link to your Google review page and ask them to share their experience. Most people are willing to do this if you make it easy.",
      },
      {
        type: "p",
        text: "Always respond to reviews — both positive and negative. Thank people for positive reviews and handle negative ones professionally and calmly. How you respond to a bad review tells potential customers a lot about how you run your business.",
      },
      {
        type: "h2",
        text: "Step Five: Post Regular Updates",
      },
      {
        type: "p",
        text: "Google Business Profile has a posts feature that works a bit like social media. You can share updates, offers, new services and news. Google seems to treat active profiles more favourably, and posts keep your listing looking current.",
      },
      {
        type: "p",
        text: "Aim to post at least once a fortnight. It does not need to be long — a photo of a recent job with a short description works perfectly.",
      },
      {
        type: "h2",
        text: "Step Six: Keep Everything Consistent",
      },
      {
        type: "p",
        text: "Your business name, address and phone number on your Google Business Profile must be identical to what appears on your website, on Yell, on Checkatrade and everywhere else you are listed. Google cross-references these to confirm your business is legitimate.",
      },
      {
        type: "p",
        text: "Even small inconsistencies — a different phone number, a shortened address, a slightly different business name — can reduce your local rankings. Check your listings regularly and correct any discrepancies you find.",
      },
      {
        type: "h2",
        text: "How Long Before You See Results?",
      },
      {
        type: "p",
        text: "Some improvements come quickly. A newly verified and properly filled-in profile often starts appearing in local results within a few weeks. Building up to strong rankings in the local pack takes longer — typically 3 to 6 months of consistent effort, regular reviews and growing online authority.",
      },
      {
        type: "p",
        text: "The businesses that show up at the top for competitive terms like 'plumber Edinburgh' have usually been working on this consistently for months or years. Start now and you will be in a much stronger position six months from today.",
      },
      {
        type: "cta",
        text: "We set up and optimise Google Business Profiles for Edinburgh businesses as part of our SEO service. Get in touch to find out how we can help.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}
