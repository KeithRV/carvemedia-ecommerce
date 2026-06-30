export type Service = {
  eyebrow?: string;
  number?: string;
  title: string;
  description: string;
  detailIntro?: string;
  includes?: string[];
  outcome?: string;
  ctaLabel?: string;
};

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Why It Matters", href: "#why-it-matters" },
  { label: "Packages", href: "#packages" },
  { label: "Local Area", href: "#local-area" },
  { label: "Contact", href: "#contact" },
];

export const problems = [
  "Products are hard to find",
  "Images are inconsistent or poor quality",
  "Product descriptions are thin or unclear",
  "SEO titles and meta descriptions are missing",
  "Collections are messy or confusing",
  "Shopify setup feels half-finished",
];

export const services: Service[] = [
  {
    eyebrow: "Store Structure",
    number: "01",
    title: "Shopify Store Clean-Up",
    description:
      "Clean up messy layouts, confusing menus, weak collection pages, broken sections, and poor product organisation so your store is easier to browse and manage.",
    detailIntro:
      "Best for stores that have grown messy over time, had too many theme or app changes, or are hard for customers and staff to use.",
    includes: [
      "Navigation and menu tidy-up",
      "Collection and product structure review",
      "Homepage and key section clean-up",
      "Broken layout or theme issue checks",
      "Product tags, filters, and grouping improvements",
      "Simple admin structure so the store is easier to manage",
    ],
    outcome:
      "A cleaner Shopify store that is easier to browse, easier to update, and less confusing for customers.",
    ctaLabel: "Start with a store clean-up",
  },
  {
    eyebrow: "Product Clarity",
    number: "02",
    title: "Product Page Optimisation",
    description:
      "Improve product titles, descriptions, images, alt text, metafields, size guides, product summaries, and buying confidence.",
    detailIntro:
      "Best for Shopify stores where products are uploaded, but the pages do not clearly explain what the product is, why it matters, or why a customer should buy it.",
    includes: [
      "Product title and description clean-up",
      "Stronger product summaries and key selling points",
      "Image order, image naming, and alt text improvements",
      "Metafield content for product highlights, specs, sizing, care, and usage",
      "Size guide and product information structure",
      "Content creation support for product copy, image direction, banners, and supporting page content",
      "Cleaner product presentation to improve customer confidence",
    ],
    outcome:
      "Product pages that feel clearer, more complete, easier to understand, and more useful for customers before they buy.",
    ctaLabel: "Improve my product pages",
  },
  {
    eyebrow: "Search Visibility",
    number: "03",
    title: "SEO Foundations",
    description:
      "Write better SEO titles, meta descriptions, image alt text, collection copy, product handles, and search-friendly content.",
    detailIntro:
      "Best for Shopify stores that have products online, but are missing the basic SEO structure that helps customers and search engines understand what each page is about.",
    includes: [
      "SEO title and meta description clean-up",
      "Product handle and URL structure improvements",
      "Image alt text and image naming support",
      "Collection page copy and structure",
      "Product page SEO copy improvements",
      "Search-friendly headings and on-page content",
      "Content creation support for product descriptions, collection copy, local landing copy, and supporting store content",
      "Basic local search wording for relevant service areas",
    ],
    outcome:
      "A clearer SEO foundation across the store, with product and collection pages that are easier for customers to understand and easier for search engines to read.",
    ctaLabel: "Strengthen my SEO foundations",
  },
  {
    eyebrow: "Browse + Buy",
    number: "04",
    title: "Online Merchandising",
    description:
      "Make products easier to browse, group, compare, and buy. Improve collections, filters, product tags, and front-end presentation.",
    detailIntro:
      "Best for Shopify stores where the products are available, but customers have to work too hard to find the right item, compare options, or understand what to buy next.",
    includes: [
      "Collection structure and product grouping",
      "Product tag and filter clean-up",
      "Featured product and collection presentation",
      "Homepage product flow and buying pathways",
      "Related product and cross-sell recommendations",
      "Product comparison support where relevant",
      "Seasonal, sale, and campaign merchandising",
      "Content creation support for collection copy, promo messaging, banners, product callouts, and buying guides",
    ],
    outcome:
      "A cleaner shopping experience where products feel easier to browse, collections make more sense, and customers can move through the store with more confidence.",
    ctaLabel: "Improve my store merchandising",
  },
  {
    eyebrow: "Visual Content",
    number: "05",
    title: "Content & Media Support",
    description:
      "Support product images, banners, video placement, homepage messaging, social content direction, and brand presentation — with content creation available where agreed.",
    detailIntro:
      "Best for Shopify stores that need cleaner visual presentation, better product content, stronger homepage messaging, or practical media support without turning the whole thing into a complicated agency project.",
    includes: [
      "Product image planning, sorting, and placement",
      "Banner and homepage content direction",
      "Video placement for product pages, landing pages, or homepage sections",
      "Social content direction for launches, offers, products, and seasonal campaigns",
      "Brand presentation improvements across the online store",
      "Product copy, collection copy, and campaign messaging support",
      "Content creation where agreed, including product copy, image direction, basic graphics, banners, short-form video direction, and supporting website content",
      "Practical advice on what content to create next and where it should be used",
    ],
    outcome:
      "A stronger and more consistent online presence, with product and brand content that feels clearer, better organised, and more useful across the store.",
    ctaLabel: "Discuss content support",
  },
  {
    eyebrow: "Staff Handover",
    number: "06",
    title: "Shopify Training & Handover",
    description:
      "Show the business owner or staff how to manage products, update content, check orders, make simple edits, and avoid breaking the store.",
    detailIntro:
      "Best for local businesses that want their Shopify store cleaned up, but also need the confidence to manage basic updates themselves without guessing, stressing, or accidentally breaking important sections.",
    includes: [
      "Basic Shopify admin walkthrough",
      "Product editing and product upload training",
      "Collection, tag, and menu management",
      "Homepage and content section editing",
      "Order checking and simple store admin tasks",
      "Image upload, image naming, and alt text basics",
      "Practical handover notes for repeatable tasks",
      "Staff training for simple updates and safe editing habits",
      "Guidance on what should be handled internally and what should be left for support",
    ],
    outcome:
      "The owner or staff can manage the day-to-day parts of the store with more confidence, while knowing when to make simple edits and when to ask for help.",
    ctaLabel: "Organise Shopify training",
  },
  {
    eyebrow: "Marketplace Flow",
    number: "07",
    title: "eBay / Marketplace Support",
    description:
      "Support product syncing, pricing rules, postage setup, listing clean-up, and general marketplace presentation where relevant.",
    detailIntro:
      "Best for Shopify stores that also sell through eBay or other marketplaces and need better consistency across products, pricing, shipping, listings, and store presentation.",
    includes: [
      "eBay and marketplace listing clean-up",
      "Product title and listing description improvements",
      "Pricing rule and margin review",
      "Postage setup and shipping rule support",
      "Shopify-to-marketplace product syncing checks",
      "Image order, image naming, and listing presentation support",
      "Basic marketplace category and item detail review",
      "Content creation where agreed, including listing copy, product summaries, image direction, and supporting marketplace content",
      "Practical advice on what should be managed in Shopify and what needs marketplace-specific attention",
    ],
    outcome:
      "A cleaner marketplace setup that is easier to manage, more consistent with the Shopify store, and clearer for customers browsing products outside the main website.",
    ctaLabel: "Clean up my marketplace listings",
  },
  {
    eyebrow: "Local Trust",
    number: "08",
    title: "Local Digital Presence",
    description:
      "Support Google Business Profile, online consistency, local search wording, store messaging, and customer trust signals for local businesses.",
    detailIntro:
      "Best for local businesses that need their online presence to feel more trustworthy, easier to find, and more consistent across their website, Google listing, social links, and customer-facing information.",
    includes: [
      "Google Business Profile review and basic clean-up",
      "Local service area wording and search-friendly copy",
      "Website messaging that clearly explains who the business helps and where it operates",
      "Contact details, opening hours, links, and customer-facing information checks",
      "Local trust signals across the website",
      "Review prompt and customer confidence improvements",
      "Basic consistency checks across website, Google, and social profiles",
      "Content creation where agreed, including local landing copy, business profile wording, website messaging, service descriptions, and supporting local content",
      "Practical advice on what needs to be clearer for customers before they enquire or visit",
    ],
    outcome:
      "A more consistent and trustworthy local digital presence that helps customers understand the business, find the right information, and feel more confident taking the next step.",
    ctaLabel: "Improve my local presence",
  },
  {
    eyebrow: "AI Workflows",
    number: "09",
    title: "Agentic Setup & Optimisation",
    description:
      "Set up practical AI-assisted workflows for Shopify, product uploads, SEO, content planning, customer support, admin tasks, and repeatable business processes.",
    detailIntro:
      "Best for local businesses that want to use AI in a practical way, but need it set up around real tasks instead of vague tools, scattered prompts, or confusing software.",
    includes: [
      "AI-assisted Shopify admin workflows",
      "Product upload, product copy, and SEO prompt systems",
      "Repeatable content planning workflows",
      "Customer support response templates and guidance",
      "Admin task checklists and process documentation",
      "Product description, collection copy, and metadata workflows",
      "Content creation support where agreed, including prompt systems, product copy, campaign messaging, social content direction, and website content drafts",
      "Simple workflow documentation so the process can be reused",
      "Practical advice on where AI should help and where human review is still needed",
    ],
    outcome:
      "A clearer AI-assisted workflow setup that saves time, improves consistency, and helps the business handle repeatable digital tasks without losing control of quality.",
    ctaLabel: "Set up practical AI workflows",
  },
];

// Edit package prices and inclusions here as the offer becomes more specific.
export const packages = [
  {
    name: "Online Store Health Check",
    bestFor: "Best for businesses that need a clear diagnosis.",
    price: "From $149",
    cta: "Book a Health Check",
    includes: [
      "Shopify or website review",
      "Product page review",
      "Collection/navigation review",
      "SEO foundation check",
      "Image and content review",
      "Priority fixes list",
    ],
  },
  {
    name: "Shopify Clean-Up Session",
    bestFor: "Best for stores that need practical fixes.",
    price: "From $349",
    cta: "Start a Clean-Up",
    featured: true,
    includes: [
      "Product title clean-up",
      "Product description improvements",
      "SEO title/meta updates",
      "Collection organisation",
      "Image alt text improvements",
      "Basic layout improvements",
      "Up to a set number of products/pages",
    ],
  },
  {
    name: "Local eCommerce Lift",
    bestFor: "Best for businesses wanting a stronger online presence.",
    price: "From $750",
    cta: "Lift My Store",
    includes: [
      "Store structure improvement",
      "Product and collection optimisation",
      "Homepage/landing page copy improvements",
      "SEO foundations",
      "Content direction",
      "Basic staff handover",
      "Follow-up review",
    ],
  },
];

// Edit service area tags here if the business expands.
export const serviceAreas = [
  "Rye",
  "Rosebud",
  "Tootgarook",
  "Blairgowrie",
  "Sorrento",
  "Portsea",
  "Mornington Peninsula",
];

export const credibilityPoints = [
  "Shopify product and collection experience",
  "SEO and product content writing",
  "Retail and eCommerce workflow understanding",
  "Local Mornington Peninsula business knowledge",
];

// Edit public contact details here before launch.
export const contactDetails = {
  email: "hello@carvemedia.com.au",
  phone: "0459879211",
  location: "Blairgowrie / Southern Mornington Peninsula",
};
