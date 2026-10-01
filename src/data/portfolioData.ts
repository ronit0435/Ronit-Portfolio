export interface Project {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  liveUrl: string;
  imageUrl: string;
  tags: string[];
  features: string[];
  accentColor: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    description: string;
  }[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  summary: string;
  deliverables: string[];
  icon: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string;
}

export interface JourneyItem {
  id: string;
  period: string;
  title: string;
  subtitle: string;
  description: string;
  skillsUsed: string[];
  isEditablePlaceholder?: boolean;
}

export const PORTFOLIO_HERO = {
  name: "Ronit",
  title: "Digital Marketing Professional | SEO Specialist | Website Designer",
  headlinePrefix: "Turning Ideas Into",
  headlineHighlight: "Digital Experiences",
  headlineSuffix: ".",
  subheadline: "Digital Marketing | SEO | Website Design",
  description:
    "I help businesses build a stronger online presence through strategic marketing, search visibility, and modern website experiences.",
  linkedin: "https://www.linkedin.com/in/ronit20",
  github: "https://github.com/ronit0435",
};

export const ABOUT_DATA = {
  heading: "More Than Marketing. A Mindset for Growth.",
  bio: [
    "I'm passionate about the connection between creative design, technology, and digital marketing. My focus is on creating meaningful digital experiences, improving search visibility, and helping businesses communicate their value online.",
    "From building websites to working on SEO and paid advertising, I enjoy exploring practical solutions that make digital platforms more useful for businesses and their customers.",
  ],
  pillars: [
    {
      title: "Digital Marketing",
      subtitle: "Strategic Acquisition",
      description: "Data-informed campaigns across Google, Meta, and content channels that capture high-intent audiences.",
    },
    {
      title: "SEO Strategy",
      subtitle: "Organic Visibility",
      description: "On-page, technical structure, keyword research, and local SEO to build lasting discoverability.",
    },
    {
      title: "Website Design",
      subtitle: "Modern Experiences",
      description: "Responsive, purposeful website layouts crafted to articulate brand value and convert visitors.",
    },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "marketing",
    title: "Digital Marketing",
    description: "Multi-channel marketing approaches to engage audiences and generate demand.",
    iconName: "TrendingUp",
    skills: [
      {
        name: "Digital Marketing Strategy",
        description: "Aligning digital channels, audiences, and messaging with business objectives.",
      },
      {
        name: "Social Media Marketing",
        description: "Engaging target demographics with tailored social messaging and brand consistency.",
      },
      {
        name: "Content Marketing",
        description: "Creating value-driven content that builds trust, addresses search intent, and nurtures leads.",
      },
      {
        name: "Lead Generation",
        description: "Structuring inbound funnels, call-to-actions, and landing pathways to capture inquiries.",
      },
    ],
  },
  {
    id: "seo",
    title: "SEO & Search Visibility",
    description: "Search engine optimization practices to increase discoverability and organic rankings.",
    iconName: "Search",
    skills: [
      {
        name: "On-Page SEO",
        description: "Optimizing headings, meta tags, content structure, image attributes, and internal linking.",
      },
      {
        name: "Off-Page SEO",
        description: "Building site authority through quality backlink profiles and digital citations.",
      },
      {
        name: "Technical SEO Fundamentals",
        description: "Auditing indexability, crawl efficiency, site architecture, and mobile usability.",
      },
      {
        name: "Local SEO",
        description: "Dominating local search queries, geo-targeted terms, and regional business directories.",
      },
      {
        name: "Keyword Research",
        description: "Analyzing search intent, volume, keyword difficulty, and competitive gaps.",
      },
      {
        name: "Link Building",
        description: "Executing backlink outreach and digital PR strategies for sustainable domain reputation.",
      },
    ],
  },
  {
    id: "advertising",
    title: "Paid Advertising",
    description: "Targeted paid campaigns designed to deliver qualified traffic and measurable business inquiries.",
    iconName: "Target",
    skills: [
      {
        name: "Google Ads",
        description: "High-intent search campaigns, keyword match types, negative keywords, and ad extensions.",
      },
      {
        name: "Meta Ads (Facebook & Instagram)",
        description: "Audience targeting, retargeting funnels, and creative format optimization on Meta platforms.",
      },
      {
        name: "Campaign Setup",
        description: "Account architecture, budget allocation, conversion tracking, and campaign launch structure.",
      },
      {
        name: "Ad Creative Planning",
        description: "Crafting compelling headlines, persuasive copy, and visual hooks tailored to specific personas.",
      },
      {
        name: "Campaign Monitoring",
        description: "Ongoing bid management, A/B testing, click-through rate optimization, and budget efficiency.",
      },
    ],
  },
  {
    id: "creative",
    title: "Web & Creative",
    description: "Designing responsive websites, persuasive copy, and complete brand touchpoints.",
    iconName: "Layout",
    skills: [
      {
        name: "WordPress",
        description: "Developing, customizing, and managing dynamic content sites and business themes.",
      },
      {
        name: "Website Design",
        description: "Building responsive, modern user interfaces focused on brand credibility and smooth UX.",
      },
      {
        name: "Landing Pages",
        description: "High-converting single-page layouts optimized for marketing campaigns and lead capture.",
      },
      {
        name: "Content Writing & Copywriting",
        description: "Clear, persuasive website copy, headlines, and articles that communicate value.",
      },
      {
        name: "Google Business Profile",
        description: "Setup, optimization, review management, and local posts for local search presence.",
      },
      {
        name: "Website Optimization",
        description: "Improving page load speed, responsiveness across viewports, and technical accessibility.",
      },
    ],
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "trusmile-dental",
    name: "TruSmile Dental Clinic",
    category: "Dental Website Design",
    tagline: "Modern healthcare presentation & patient inquiry platform",
    description:
      "A modern dental clinic website designed to present dental services, provide essential clinic information, and make it easier for potential patients to get in touch.",
    liveUrl: "https://ronit0435.github.io/Dentist-Clinic/",
    imageUrl: "/src/assets/images/project_trusmile_dental_1790765192420.jpg",
    tags: ["Healthcare UI", "Website Design", "Responsive Layout", "Patient Inquiry"],
    features: [
      "Clean clinical aesthetic with calming healthcare color palette",
      "Comprehensive dental service showcases (cosmetic, preventive, orthodontic)",
      "Clear clinic hours, practitioner details, and contact integration",
      "Mobile-optimized patient consultation call-to-actions",
    ],
    accentColor: "#7C9DFF",
  },
  {
    id: "ladies-first-salon",
    name: "Ladies First Beauty Salon",
    category: "Beauty & Salon Website Design",
    tagline: "Sophisticated salon showcase & luxury treatment menu",
    description:
      "A beauty salon website concept designed to showcase salon services, create an elegant brand experience, and help visitors explore the business online.",
    liveUrl: "https://ronit0435.github.io/Ladies-First-Beauty-Salon/",
    imageUrl: "/src/assets/images/project_ladies_salon_1790765210161.jpg",
    tags: ["Beauty & Wellness", "Brand Presentation", "Service Showcase", "Responsive Design"],
    features: [
      "Editorial feminine styling with champagne gold and warm accents",
      "Organized treatment menus for hair styling, skin care, and bridal services",
      "Visual gallery highlighting salon ambience and artistry",
      "Seamless booking and appointment inquiry touchpoints",
    ],
    accentColor: "#D6B779",
  },
  {
    id: "hotel-anchorage",
    name: "Hotel ANCHORAGE",
    category: "Hospitality Website Design",
    tagline: "Immersive boutique hotel digital experience",
    description:
      "A hospitality website project designed to present a hotel's identity, highlight its offerings, and provide visitors with an accessible digital experience.",
    liveUrl: "https://ronit0435.github.io/Hotel-ANCHORAGE-/",
    imageUrl: "/src/assets/images/project_hotel_anchorage_1790765224751.jpg",
    tags: ["Hospitality Design", "Luxury Visuals", "Accommodation Showcase", "Refined Layout"],
    features: [
      "Dark luxury hospitality aesthetic with rich photography focus",
      "Dedicated room and suite showcases with amenity highlights",
      "Dining, concierge, and local destination experience guides",
      "Intuitive navigation designed for leisure and business travelers",
    ],
    accentColor: "#D6B779",
  },
  {
    id: "eb-electrical",
    name: "EB Electrical Services Limited",
    category: "Business Website Design",
    tagline: "Industrial contractor presentation & inquiry capture",
    description:
      "A professional website concept for an electrical services business, focused on presenting services clearly and making it easy for customers to enquire.",
    liveUrl: "https://ronit0435.github.io/EB-Electrical-Services-Limited/",
    imageUrl: "/src/assets/images/project_eb_electrical_1790765241354.jpg",
    tags: ["Contractor UI", "Commercial & Residential", "Lead Capture", "Structured Services"],
    features: [
      "Modern industrial visual identity with high-contrast readability",
      "Categorized service offerings for residential, commercial, and emergency support",
      "Safety certification and reliability messaging prominent on all viewports",
      "Direct contact triggers and rapid quote inquiry form",
    ],
    accentColor: "#7C9DFF",
  },
];

export const SERVICES_DATA: Service[] = [
  {
    id: "web-design",
    number: "01",
    title: "Website Design",
    summary:
      "Modern, responsive websites that communicate your business value and help customers take action.",
    deliverables: [
      "Custom responsive layouts for desktop, tablet, and mobile",
      "User-friendly navigation and clear visual hierarchy",
      "Clean content architecture and conversion pathways",
      "Performance-tuned structure and fast loading assets",
    ],
    icon: "Layout",
  },
  {
    id: "seo-service",
    number: "02",
    title: "Search Engine Optimization",
    summary:
      "On-page, off-page, and local SEO strategies designed to improve your website's search visibility.",
    deliverables: [
      "Targeted keyword research and search intent mapping",
      "On-page heading, metadata, and URL structure optimization",
      "Crawlability and indexation technical health check",
      "Quality backlink and digital authority planning",
    ],
    icon: "Search",
  },
  {
    id: "google-ads",
    number: "03",
    title: "Google Ads",
    summary:
      "Search advertising campaigns planned around your business goals, relevant keywords, and target audience.",
    deliverables: [
      "Intent-focused Google Search campaign configuration",
      "Keyword matching, negative keyword hygiene, and extensions",
      "Compelling ad headline and description copywriting",
      "Conversion tracking setup and regular search term audits",
    ],
    icon: "Target",
  },
  {
    id: "meta-ads",
    number: "04",
    title: "Meta Ads",
    summary:
      "Facebook and Instagram advertising setup, creative planning, and campaign monitoring.",
    deliverables: [
      "Audience demographic and interest targeting",
      "Engaging ad creative planning for feeds and stories",
      "Campaign objective alignment (traffic, awareness, leads)",
      "Performance observation and budget efficiency testing",
    ],
    icon: "Share2",
  },
  {
    id: "local-seo-gbp",
    number: "05",
    title: "Local SEO & Google Business Profile",
    summary:
      "Optimize your business information, improve local search presence, and make it easier for nearby customers to discover your services.",
    deliverables: [
      "Google Business Profile (GBP) complete setup & verification",
      "Local category selection, service menu, and hours accuracy",
      "Geo-targeted keyword integration and local citations",
      "Review generation strategy and customer trust building",
    ],
    icon: "MapPin",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description: "Understand your business, target audience, requirements, and goals.",
    details:
      "We dive deep into your market context, identify what sets your brand apart, and map out the specific outcomes you want to achieve.",
  },
  {
    number: "02",
    title: "Planning",
    description: "Prepare the website structure, marketing approach, and project roadmap.",
    details:
      "Structuring site architecture, keyword priorities, messaging frameworks, and milestone timelines before jumping into production.",
  },
  {
    number: "03",
    title: "Design & Development",
    description: "Build a modern, responsive experience with attention to detail and usability.",
    details:
      "Crafting clean, accessible layouts with refined typography, responsive behavior, and clear user actions across every screen size.",
  },
  {
    number: "04",
    title: "Optimization",
    description: "Apply relevant SEO fundamentals, review performance, and improve the user experience.",
    details:
      "Refining on-page tags, site speed, responsive touch targets, and search engine readiness for maximum visibility.",
  },
  {
    number: "05",
    title: "Delivery & Support",
    description: "Present the completed project, explain its features, and discuss any agreed ongoing support.",
    details:
      "Smooth launch walkthrough, hands-on guidance on managing your platform, and reviewing ongoing growth opportunities.",
  },
];

export const INITIAL_JOURNEY_ITEMS: JourneyItem[] = [
  {
    id: "journey-1",
    period: "Ongoing / Freelance Practice",
    title: "Independent Digital Practice & Website Development",
    subtitle: "Client Projects & Creative Platforms",
    description:
      "Designing responsive websites and advising growing businesses on digital marketing, local search visibility, and online brand presentation.",
    skillsUsed: ["Website Design", "WordPress", "SEO", "Client Collaboration"],
    isEditablePlaceholder: true,
  },
  {
    id: "journey-2",
    period: "Specialized Implementation",
    title: "SEO, Google Ads & Meta Advertising",
    subtitle: "Performance Campaigns & Organic Visibility",
    description:
      "Hands-on execution of search engine optimization, Google Ads keyword campaigns, Meta social ads, and Google Business Profile enhancements.",
    skillsUsed: ["Google Ads", "Meta Ads", "On-Page SEO", "Local SEO", "Keyword Research"],
    isEditablePlaceholder: true,
  },
  {
    id: "journey-3",
    period: "Foundation & Skill Development",
    title: "Digital Marketing Training & Project Experience",
    subtitle: "Marketing Fundamentals & Content Strategy",
    description:
      "Structured learning, content writing, copywriting, and practical coursework covering digital marketing channels, web architecture, and analytics.",
    skillsUsed: ["Content Writing", "Social Media Marketing", "Market Research"],
    isEditablePlaceholder: true,
  },
];
