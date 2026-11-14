/* ============================================================
   ⚙️  Single Source of Truth — Identity, Flagship AI Systems,
       Verified Metrics, Loom Walkthroughs & Full Project Catalog
   ============================================================ */
window.SITE = {
  name: "Abdelmalek Labbaci",
  role: {
    en: "AI Product Engineer · Full-Stack & Backend AI Systems",
    fr: "AI Product Engineer · Systèmes IA Full-Stack & Backend"
  },
  email: "abdelmaleklabbaci01@gmail.com",
  phone: "+213 697 660 969",
  phoneHref: "+213697660969",
  github: "https://github.com/Maleklabbaci",
  linkedin: "https://linkedin.com/in/labbacimalek",
  mcpEndpoint: "https://sawtify.space/mcp",
  location: {
    en: "Global Remote · UTC+1 (EU & US Overlap)",
    fr: "International & Remote · UTC+1 (Overlap EU & US)"
  },
  timezone: "Africa/Algiers",
  cv: "assets/abdelmalek_labbaci_resume_en.pdf",
  year: 2026,

  // --- Agency & Studio archives ---------------------------------
  agency: "https://ivision.agency/",
  portfolioSites: "https://ivision.agency/portfolio-sites-web-algerie.html",
  portfolioSocial: "https://ivision.agency/portfolio-social-media-algerie.html",

  // --- Optional 90s Loom Walkthrough URLs -----------------------
  // Paste a Loom share or embed URL (e.g. "https://www.loom.com/embed/xxxx")
  // to activate the embedded video player inside the System Modal.
  // When empty, the modal displays the live architecture diagram + walkthrough steps.
  loom: {
    sawtify: "",
    jawebflow: "",
    fidali: "",
    ivision: ""
  },

  // --- Footer & Contact links -----------------------------------
  socials: [
    { label: "GitHub (35 repos)", url: "https://github.com/Maleklabbaci" },
    { label: "LinkedIn", url: "https://linkedin.com/in/labbacimalek" },
    { label: "Architecture & ADRs", url: "architecture.html" },
    { label: "iVISION Agency", url: "https://ivision.agency/" },
    { label: "E-mail", url: "mailto:abdelmaleklabbaci01@gmail.com" },
    { label: "CV / Résumé (PDF)", url: "assets/abdelmalek_labbaci_resume_en.pdf", download: true }
  ],

  // --- 4 Flagship Production Systems (#work + System Modal) -----
  flagships: {
    sawtify: {
      id: "sawtify",
      title: "Sawtify",
      liveUrl: "https://sawtify.space",
      repoUrl: "https://github.com/Maleklabbaci/Sawtify",
      adrUrl: "architecture.html#adr-003",
      img: "real-sawtify.webp",
      stack: ["TypeScript", "Node / Express", "MCP SDK (OAuth 2.1)", "Gemini 3.8 TTS & Live", "Supabase", "FFmpeg", "Kotlin GSM Bridge"],
      metrics: {
        en: ["303/303 automated engine checks", "OAuth 2.1 + PKCE MCP Server", "30 voices · 24 kHz WAV"],
        fr: ["303/303 tests moteur automatisés", "Serveur MCP OAuth 2.1 + PKCE", "30 voix · WAV 24 kHz"]
      },
      tradeoff: {
        en: "Decoupled Gemini Live tool-calling from voice output (piping structured text into Sawtify's custom 24 kHz TTS) so live calls preserve authentic Algerian Darija prosody while enforcing server-side call metering and SHA-256 hashed developer keys.",
        fr: "Découplage du raisonnement/tool-calling Gemini Live et du rendu vocal (texte routé vers le moteur TTS 24 kHz Sawtify) pour garantir une vraie prosodie en darija algérienne, avec facturation serveur à la seconde et clés API hachées en SHA-256."
      },
      flow: ["Client / Claude MCP", "OAuth 2.1 + SHA-256 Gate", "Multi-Key Router + Retry", "24 kHz PCM / Live Agent", "Supabase Wallet"]
    },
    jawebflow: {
      id: "jawebflow",
      title: "JawebFlow",
      liveUrl: "https://jawebflow.pages.dev",
      repoUrl: "https://github.com/Maleklabbaci/Jawebflow",
      adrUrl: "architecture.html#adr-001",
      img: "real-jawebflow.webp",
      stack: ["TypeScript", "Cloudflare Pages Functions", "Supabase PostgreSQL", "Gemini Context Cache & RAG", "Instagram & Messenger Webhooks", "WebRTC Voice", "Stripe"],
      metrics: {
        en: ["−74% token cost (60-item catalog)", "−59% live voice prompt overhead", "−48% site-chat tokens via RAG"],
        fr: ["−74 % coût tokens (catalogue 60 fiches)", "−59 % taille prompt appel vocal", "−48 % tokens chat via RAG borné"]
      },
      tradeoff: {
        en: "Pre-flight token threshold (4,096 tokens) dynamically switches between per-turn bounded RAG for small shops and 10-minute explicit Context Caching (read at 10% cost) for larger catalogs—avoiding hourly cache storage bleed while reducing the risk of price hallucinations.",
        fr: "Seuil pré-appel (4 096 jetons) basculant dynamiquement entre RAG borné par tour (petits catalogues) et Context Caching explicite TTL 10 min (relu à 10 % du prix) pour les gros catalogues — évitant le surcoût de stockage horaire et limitant le risque d’hallucination de prix."
      },
      flow: ["Web / IG / Voice Event", "Signature + Rule Engine", "RAG / 10m Cache Router", "LLM + Strict KB Guardrail", "Lead & CRM Sync"]
    },
    fidali: {
      id: "fidali",
      title: "Fidali",
      liveUrl: "https://fidali.vercel.app/",
      repoUrl: "https://github.com/Maleklabbaci/fidali",
      adrUrl: "architecture.html#adr-005",
      img: "real-fidali.webp",
      stack: ["Next.js 14 App Router", "TypeScript", "Supabase PostgreSQL", "VAPID Web Push", "Shopify OAuth", "Zustand", "QR Crypto Validation"],
      metrics: {
        en: ["181 TypeScript modules (v2.0)", "Zero-app QR & VAPID Web Push", "Native Shopify OAuth sync"],
        fr: ["181 modules TypeScript (v2.0)", "QR sans app & Web Push VAPID", "Intégration Shopify OAuth"]
      },
      tradeoff: {
        en: "Chose browser-native cryptographic QR validation + VAPID Web Push over a native iOS/Android app, avoiding a native app download for customer onboarding while unifying merchant POS and Shopify online orders in one Postgres ledger.",
        fr: "Choix d'une validation QR cryptographique navigateur + Web Push VAPID plutôt qu'une app mobile native : enrôlement client en caisse sans téléchargement d’application, et synchronisation unifiée avec Shopify OAuth."
      },
      flow: ["POS Scan / Shopify Hook", "Next.js 14 Route Handler", "Supabase RLS Transaction", "VAPID Push Dispatcher", "Merchant Analytics"]
    },
    ivision: {
      id: "ivision",
      title: "iVISION AI & B2B Ops",
      liveUrl: "https://www.ivisionads.online/",
      repoUrl: "https://github.com/Maleklabbaci/ivision-plat",
      adrUrl: "",
      img: "real-ivisionad.webp",
      stack: ["TypeScript", "React 19", "AI Strategy Engine", "Webhook Lead Routing", "Meta / Google / TikTok APIs", "Automated PDF Contracts", "GA4"],
      metrics: {
        en: ["40+ active B2B client accounts", "Internal ERP + AI Strategy OS", "Automated lead-to-closer pipelines"],
        fr: ["40+ comptes clients B2B actifs", "ERP interne + module IA Stratégie", "Pipelines leads-to-closer automatisés"]
      },
      tradeoff: {
        en: "Built a custom internal operations & AI strategy platform (ivision-plat + automated lead forms & WhatsApp follow-ups) instead of stitching brittle SaaS tools, standardizing margin tracking, MRR revisions, and conversion pipelines across 40+ B2B accounts.",
        fr: "Développement d'un OS opérationnel sur mesure (ivision-plat + qualification de leads & relances automatisées) plutôt qu'un empilement no-code fragile, standardisant le suivi de marge, le MRR et l'acquisition sur 40+ comptes B2B."
      },
      flow: ["Ad Funnel / Lead Form", "Webhook + Attribution", "AI Strategy & Scoring", "Closer CRM + Auto-PDF", "40+ Client Accounts"]
    }
  },

  // --- ALL 20 Shipped Systems, SaaS & Studio Projects -----------
  // Categories: "ai" (AI & Agents), "saas" (SaaS & Platforms), "web" (Web, Growth & Brand)
  captures: [
    {
      id: "sawtify",
      cat: "ai",
      img: "real-sawtify.webp",
      label: "Sawtify",
      url: "https://sawtify.space",
      repo: "https://github.com/Maleklabbaci/Sawtify",
      adr: "architecture.html#adr-003",
      stack: "TypeScript · MCP (OAuth 2.1) · Gemini TTS/Live · Android GSM",
      desc: {
        en: "Dialectal Darija/FR/EN TTS engine, Live Voice Agent v5, SHA-256 Developer API & production MCP Server.",
        fr: "Moteur TTS darija/FR/EN, Agent vocal Live v5, Developer API SHA-256 & serveur MCP en production."
      }
    },
    {
      id: "jawebflow",
      cat: "ai",
      img: "real-jawebflow.webp",
      label: "JawebFlow",
      url: "https://jawebflow.pages.dev",
      repo: "https://github.com/Maleklabbaci/Jawebflow",
      adr: "architecture.html#adr-001",
      stack: "Cloudflare Edge · Supabase · Hybrid RAG/Cache · IG Webhooks",
      desc: {
        en: "Omnichannel B2B AI chat & voice agent (Web, Instagram, Messenger) with −74% cached token cost.",
        fr: "Agent IA B2B omnicanal texte & voix (Web, Instagram, Messenger) avec −74 % de coût tokens via cache."
      }
    },
    {
      id: "fidali",
      cat: "saas",
      img: "real-fidali.webp",
      label: "Fidali",
      url: "https://fidali.vercel.app/",
      repo: "https://github.com/Maleklabbaci/fidali",
      adr: "architecture.html#adr-005",
      stack: "Next.js 14 · TypeScript · Supabase · Web Push · Shopify OAuth",
      desc: {
        en: "Multi-tenant B2B2C digital loyalty SaaS with cryptographic QR validation, VAPID push & Shopify sync.",
        fr: "SaaS B2B2C de fidélité digitale avec QR code sécurisé, notifications Web Push VAPID & sync Shopify."
      }
    },
    {
      id: "rawdha",
      cat: "saas",
      blueprint: "RAWDHA+ · B2B SAAS & PWA · 507 FILES",
      route: "rawdativ2.vercel.app",
      label: "RAWDHA+",
      url: "https://rawdativ2.vercel.app",
      repo: "https://github.com/Maleklabbaci/rawdativ2",
      stack: "TypeScript · Supabase RLS · PWA Service Worker · Capacitor",
      desc: {
        en: "Full-stack childcare & nursery management SaaS: QR badge attendance, billing, classrooms, staff & parent reports.",
        fr: "Plateforme SaaS complète de gestion de crèches : pointage par QR permanent, paiements, classes, équipe & PWA."
      }
    },
    {
      id: "auradesign",
      cat: "ai",
      blueprint: "AURA DESIGN · MULTIMODAL AI STUDIO",
      route: "github.com/Maleklabbaci/AIcontent",
      label: "Aura Design (AIcontent)",
      url: "https://github.com/Maleklabbaci/AIcontent",
      repo: "https://github.com/Maleklabbaci/AIcontent",
      stack: "React 19 · TypeScript · Gemini API · Supabase Auth · Multi-layer Export",
      desc: {
        en: "AI design generation studio (carousels, product sheets, stories) with AR/Darija/FR/EN language lock & HD/PDF/Canva export.",
        fr: "Générateur IA de visuels & carrousels (verrouillage linguistique AR/Darija/FR/EN) avec export PNG HD, PDF & Canva."
      }
    },
    {
      id: "efolio",
      cat: "saas",
      img: "real-efolio.webp",
      label: "eFOLIO",
      url: "https://ivision.agency/portfolio-sites-web-algerie.html",
      repo: "https://github.com/Maleklabbaci",
      stack: "SaaS Platform · Multi-language (FR/EN/AR) · Creator Profiles",
      desc: {
        en: "Professional portfolio & talent discovery SaaS unifying projects, resources, and mission inquiries in one link.",
        fr: "Plateforme SaaS de portfolios professionnels et missions réunissant projets et ressources sur un lien unique."
      }
    },
    {
      id: "ivisionos",
      cat: "ai",
      blueprint: "iVISION OS · AGENCY ERP & AI STRATEGY",
      route: "github.com/Maleklabbaci/ivision-plat",
      label: "iVISION OS",
      url: "https://github.com/Maleklabbaci/ivision-plat",
      repo: "https://github.com/Maleklabbaci/ivision-plat",
      stack: "React 19 · TypeScript · Gemini AI · Firebase · Recharts · jsPDF",
      desc: {
        en: "Internal B2B operations OS: AI growth strategy generator, closer pipeline, margin calculator & automated PDF contracts.",
        fr: "ERP interne B2B : générateur IA de stratégie, dashboard closer, calculateur de marge, MRR & contrats PDF auto."
      }
    },
    {
      id: "dimago",
      cat: "saas",
      blueprint: "DIMA-GO · REALTIME DELIVERY DISPATCH",
      route: "github.com/Maleklabbaci/DIMA-GO",
      label: "DIMA-GO",
      url: "https://github.com/Maleklabbaci/DIMA-GO",
      repo: "https://github.com/Maleklabbaci/DIMA-GO",
      stack: "React 19 · TypeScript · Leaflet GPS · Dynamic Pricing · PWA",
      desc: {
        en: "Multi-role delivery dispatch PWA with live GPS rider radar, restaurant console, voucher admin & tested dynamic pricing.",
        fr: "PWA de dispatch livraison temps réel : radar GPS livreurs, console restaurant, vouchers & tarification dynamique testée."
      }
    },
    {
      id: "bacdz",
      cat: "ai",
      blueprint: "BACDZ · AI EDTECH & EXAM COACH",
      route: "github.com/Maleklabbaci/BacDZ",
      label: "BacDZ AI",
      url: "https://github.com/Maleklabbaci/BacDZ",
      repo: "https://github.com/Maleklabbaci/BacDZ",
      stack: "React 19 · TypeScript · Express · Gemini AI · Adaptive Study",
      desc: {
        en: "AI-powered exam preparation platform generating daily exercises, interactive study rooms & performance analytics.",
        fr: "Plateforme EdTech propulsée par l'IA : génération quotidienne d'exercices, salle d'entraînement & suivi analytique."
      }
    },
    {
      id: "influzy",
      cat: "saas",
      blueprint: "INFLUZY · CREATOR & CAMPAIGN PLATFORM",
      route: "influzy.vercel.app",
      label: "Influzy",
      url: "https://influzy.vercel.app",
      repo: "https://github.com/Maleklabbaci/influzy",
      stack: "TypeScript · React · Campaign Workflows · Vercel",
      desc: {
        en: "Influence marketing & creator campaign coordination platform built for brand-creator matchmaking.",
        fr: "Plateforme de coordination de campagnes d'influence et mise en relation marques-créateurs."
      }
    },
    {
      id: "dzbudget",
      cat: "saas",
      blueprint: "DZBUDGET · PERSONAL FINANCE WEB APP",
      route: "dz-budget.vercel.app",
      label: "DzBudget",
      url: "https://dz-budget.vercel.app",
      repo: "https://github.com/Maleklabbaci/DzBudget-",
      stack: "TypeScript · React · Financial Analytics · Vercel",
      desc: {
        en: "Streamlined budget tracking & expense categorization web application with clean visual breakdowns.",
        fr: "Application web de suivi budgétaire, catégorisation des dépenses et visualisation financière."
      }
    },
    {
      id: "nfcivision",
      cat: "saas",
      blueprint: "NFC iVISION · SMART DIGITAL CARDS",
      route: "nfc-ivision.vercel.app",
      label: "NFC iVISION",
      url: "https://nfc-ivision.vercel.app",
      repo: "https://github.com/Maleklabbaci/NFC-IVISION",
      stack: "TypeScript · NFC Profile Routing · Lead Capture",
      desc: {
        en: "Connected NFC business card & instant contact-capture web experience for B2B teams.",
        fr: "Système de cartes connectées NFC et capture instantanée de contacts professionnels B2B."
      }
    },
    {
      id: "ivisionad",
      cat: "web",
      img: "real-ivisionad.webp",
      label: "iVISION AD",
      url: "https://www.ivisionads.online/",
      repo: "https://github.com/Maleklabbaci/Follow-Ad-ivision",
      stack: "Growth Engineering · FR/AR · Conversion Architecture",
      desc: {
        en: "Bilingual FR/AR acquisition & performance marketing platform engineered for high-intent B2B lead conversion.",
        fr: "Plateforme d'acquisition B2B bilingue FR/AR conçue pour la conversion et la génération de revenus prévisibles."
      }
    },
    {
      id: "movesmart",
      cat: "web",
      img: "real-movesmart.webp",
      label: "MoveSmart (Dubai)",
      url: "https://movesmart-ecru.vercel.app/",
      repo: "https://github.com/Maleklabbaci/MOVESMART",
      stack: "TypeScript · React · International Real Estate UX",
      desc: {
        en: "Immersive Dubai real-estate investment platform featuring curated opportunities, editorial journal & lead routing.",
        fr: "Plateforme immobilière internationale pour Dubaï : opportunités d'investissement, journal éditorial & capture de leads."
      }
    },
    {
      id: "whiteaura",
      cat: "web",
      img: "real-whiteaura.webp",
      label: "White Aura",
      url: "https://white-aura.vercel.app/",
      repo: "https://github.com/Maleklabbaci/white-aura",
      stack: "TypeScript · E-commerce & Brand Experience · Vercel",
      desc: {
        en: "High-conversion modern storefront & brand experience built with TypeScript and fast edge delivery.",
        fr: "Expérience e-commerce et vitrine de marque haute conversion développée en TypeScript."
      }
    },
    {
      id: "noura",
      cat: "web",
      img: "real-noura.webp",
      label: "Cabinet Noura",
      url: "https://cabinet-noura.vercel.app/",
      stack: "Healthcare Web UX · Booking Funnel · Responsive",
      desc: {
        en: "Clean digital clinic presence & patient appointment funnel optimized for mobile clarity and trust.",
        fr: "Plateforme digitale de cabinet et tunnel de prise de rendez-vous optimisé mobile."
      }
    },
    {
      id: "dc16",
      cat: "web",
      img: "real-dc16.webp",
      label: "DC16 X WYN",
      url: "https://dc16.shop/",
      stack: "E-commerce · Cash-on-Delivery Funnel · Drop UX",
      desc: {
        en: "Streetwear & capsule drop e-commerce storefront engineered for rapid mobile checkout.",
        fr: "Boutique e-commerce streetwear & drops pensée pour la conversion mobile rapide."
      }
    },
    {
      id: "eminora",
      cat: "web",
      img: "real-eminora.webp",
      label: "Eminora",
      url: "https://eminorainfo.vercel.app",
      repo: "https://github.com/Maleklabbaci/EMINORAX",
      stack: "TypeScript · Brand & Product Showcase · Vercel",
      desc: {
        en: "Digital brand identity, product storytelling & web showcase shipped on Vercel.",
        fr: "Identité digitale, storytelling produit et plateforme web déployée sur Vercel."
      }
    },
    {
      id: "msc",
      cat: "web",
      img: "real-msc.webp",
      label: "MS Cherchell",
      url: "https://ivision.agency/portfolio-social-media-algerie.html",
      stack: "Art Direction · Visual Systems · Sports Media",
      desc: {
        en: "Art direction, typography & matchday visual identity system produced for MS Cherchell football club.",
        fr: "Direction artistique, typographie et système visuel matchday pour le club MS Cherchell."
      }
    },
    {
      id: "bissan",
      cat: "web",
      img: "real-bissan-2.webp",
      label: "Bissan",
      url: "https://ivision.agency/portfolio-social-media-algerie.html",
      stack: "Brand Campaign · Coworking & Coaching Visuals",
      desc: {
        en: "Visual campaign & brand communication system crafted for coaching and coworking spaces.",
        fr: "Campagne visuelle et direction créative pour un espace de coaching et coworking."
      }
    }
  ],

  seoTitle: {
    en: "Abdelmalek Labbaci — AI Product Engineer | Full-Stack & Backend AI Systems",
    fr: "Abdelmalek Labbaci — AI Product Engineer | Systèmes IA Full-Stack & Backend"
  },
  seoDescription: {
    en: "AI Product Engineer & Technical Founder building production LLM/Voice systems, OAuth 2.1 MCP servers, hybrid RAG/Context-Cache pipelines, and multi-tenant SaaS.",
    fr: "AI Product Engineer & Fondateur technique : systèmes LLM & Voice AI en production, serveurs MCP OAuth 2.1, pipelines RAG/Context-Cache hybrides et SaaS multi-tenant."
  }
};
