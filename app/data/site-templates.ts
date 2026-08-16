export interface SiteTemplate {
  id: string;
  name: string;
  category: "corporate" | "ecommerce" | "saas" | "portfolio" | "docs" | "blog" | "hospitality" | "healthcare";
  description: string;
  badge?: string;
  previewImage: string;
  features: string[];
  componentsCount: number;
  layoutsCount: number;
  supportedThemes: string[];
}

export interface PublishedTenantSite {
  id: string;
  tenantSlug: string;
  companyName: string;
  primaryDomain: string;
  templateId: string;
  theme: string;
  status: "published" | "draft" | "syncing";
  monthlyVisits: number;
  sslActive: boolean;
  lastDeployed: string;
}

export const SITE_TEMPLATES: SiteTemplate[] = [
  {
    id: "corporate-lumina",
    name: "Lumina Enterprise Corporate",
    category: "corporate",
    badge: "Most Popular",
    description: "Executive multi-page enterprise site with investor relations, leadership profiles, case studies, and lead capture funnels.",
    previewImage: "/templates/corporate.png",
    features: ["Hero with Video Background", "Executive Leadership Grid", "Interactive Case Studies", "Investor Financials & ESG", "Enterprise Contact & RFP Form"],
    componentsCount: 38,
    layoutsCount: 12,
    supportedThemes: ["emerald", "sapphire", "obsidian", "slate"],
  },
  {
    id: "ecommerce-nexus",
    name: "Nexus Omnichannel Storefront",
    category: "ecommerce",
    badge: "ERP Synced",
    description: "High-performance digital commerce storefront with real-time UniERP inventory sync, dynamic pricing tiers, cart, and checkout.",
    previewImage: "/templates/ecommerce.png",
    features: ["Live Stock & Warehouse Sync", "B2B / B2C Tiered Pricing Rules", "Instant Search & Faceted Filter", "Slide-out Cart & Stripe Express", "Order Tracking Portal"],
    componentsCount: 45,
    layoutsCount: 15,
    supportedThemes: ["emerald", "amber", "sapphire", "ruby"],
  },
  {
    id: "saas-launchpad",
    name: "Launchpad SaaS & App Landing",
    category: "saas",
    badge: "High Conversion",
    description: "Modern product marketing landing page designed for software companies, featuring interactive feature tours and pricing tables.",
    previewImage: "/templates/saas.png",
    features: ["Interactive Product Walkthrough", "Monthly/Annual Pricing Switcher", "Live Testimonial Wall", "Integration Grid & SDK Badges", "Self-Service Trial Signup"],
    componentsCount: 32,
    layoutsCount: 8,
    supportedThemes: ["sapphire", "violet", "obsidian", "emerald"],
  },
  {
    id: "agency-folio",
    name: "Folio Creative & Agency",
    category: "portfolio",
    description: "Minimalist dark-mode portfolio for design studios, architecture firms, and consulting agencies with smooth project galleries.",
    previewImage: "/templates/portfolio.png",
    features: ["Masonry Project Showcase", "Interactive Project Detail Drawers", "Client Testimonial Sliders", "Service Offering Matrices", "Book a Consultation Scheduler"],
    componentsCount: 26,
    layoutsCount: 6,
    supportedThemes: ["obsidian", "slate", "emerald"],
  },
  {
    id: "docs-developer",
    name: "DocuHub Developer Documentation",
    category: "docs",
    description: "Fast, searchable API and product documentation site with interactive OpenAPI code runners, dark theme, and version switching.",
    previewImage: "/templates/docs.png",
    features: ["Instant Algolia-style Search", "Multi-Language Code Snippets", "Interactive API Playground", "Versioned Docs Selector", "Feedback & Edit on GitHub"],
    componentsCount: 22,
    layoutsCount: 5,
    supportedThemes: ["slate", "sapphire", "emerald"],
  },
  {
    id: "editorial-journal",
    name: "The Journal Editorial & Blog",
    category: "blog",
    description: "Clean typography-first news and editorial magazine layout with multi-author publishing, newsletter capture, and audio previews.",
    previewImage: "/templates/blog.png",
    features: ["Featured Story Spotlights", "Author Profiles & Byline Feeds", "Inline Reading Progress Bar", "Newsletter Subscription CTA", "Tag & Category Taxonomy"],
    componentsCount: 28,
    layoutsCount: 7,
    supportedThemes: ["emerald", "amber", "slate"],
  },
  {
    id: "hospitality-oasis",
    name: "Oasis Grand Resort & Hospitality",
    category: "hospitality",
    badge: "POS Synced",
    description: "Luxury hotel and dining booking site with room catalogs, dynamic availability calendar, table reservations, and event inquiries.",
    previewImage: "/templates/hotel.png",
    features: ["Real-time Room Booking Engine", "Interactive Suite Tour Gallery", "Dining Reservation Booking", "Concierge & Amenity Highlights", "Virtual 360 Tour Embeds"],
    componentsCount: 34,
    layoutsCount: 10,
    supportedThemes: ["amber", "emerald", "sapphire"],
  },
  {
    id: "healthcare-pulse",
    name: "Pulse Medical Center & Clinic",
    category: "healthcare",
    description: "Patient-centered healthcare portal with department directories, doctor scheduling, telemedicine links, and patient forms.",
    previewImage: "/templates/medical.png",
    features: ["Doctor Appointment Booking", "Department & Specialty Browser", "Patient Intake Forms", "Telehealth Video Gateway", "Emergency Care Protocols"],
    componentsCount: 30,
    layoutsCount: 9,
    supportedThemes: ["sapphire", "emerald", "slate"],
  },
];

export const PUBLISHED_TENANT_SITES: PublishedTenantSite[] = [
  {
    id: "site-001",
    tenantSlug: "acme-corp",
    companyName: "Acme Industrial Global",
    primaryDomain: "acme-industrial.com",
    templateId: "corporate-lumina",
    theme: "emerald",
    status: "published",
    monthlyVisits: 142800,
    sslActive: true,
    lastDeployed: "2026-08-15 14:22:10 UTC",
  },
  {
    id: "site-002",
    tenantSlug: "solaris-retail",
    companyName: "Solaris Omnichannel Fashion",
    primaryDomain: "shop.solaris-fashion.com",
    templateId: "ecommerce-nexus",
    theme: "sapphire",
    status: "published",
    monthlyVisits: 389400,
    sslActive: true,
    lastDeployed: "2026-08-16 09:11:45 UTC",
  },
  {
    id: "site-003",
    tenantSlug: "apex-cloud",
    companyName: "Apex Cloud Services",
    primaryDomain: "apexcloud.io",
    templateId: "saas-launchpad",
    theme: "violet",
    status: "published",
    monthlyVisits: 84200,
    sslActive: true,
    lastDeployed: "2026-08-14 18:30:00 UTC",
  },
  {
    id: "site-004",
    tenantSlug: "metropolis-hotel",
    companyName: "The Metropolis Hotel & Suites",
    primaryDomain: "metropolis-hotel.com",
    templateId: "hospitality-oasis",
    theme: "amber",
    status: "published",
    monthlyVisits: 67100,
    sslActive: true,
    lastDeployed: "2026-08-16 11:05:22 UTC",
  },
];
