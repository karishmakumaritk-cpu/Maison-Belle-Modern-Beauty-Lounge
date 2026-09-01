/**
 * =========================================================================
 * MAISON BELLE — CENTRAL BUSINESS CONFIGURATION
 * =========================================================================
 * Customize all salon business information in this single file.
 * All changes here will automatically reflect across the entire template.
 * =========================================================================
 */

const SALON_CONFIG = {
  // Brand Identity
  businessName: "Maison Belle",
  subtitle: "Modern Beauty Lounge",
  tagline: "Modern Beauty. Made Personal.",
  shortDescription: "Thoughtful hair, beauty and self-care services in a space designed around you.",

  // Contact Details (DEMO CONTENT — REPLACE WITH CLIENT DETAILS)
  phone: "+91 99999 99999",
  phoneRaw: "919999999999",
  whatsapp: "919999999999",
  email: "hello@maisonbellebeauty.com",

  // Location Details
  address: "123 Studio Lane, Design District",
  city: "New Delhi, India",
  postalCode: "110001",
  mapUrl: "https://maps.google.com/?q=New+Delhi+India",

  // Operating Hours
  openingHours: {
    monSat: "10:00 AM – 8:00 PM",
    sunday: "11:00 AM – 6:00 PM",
    holidays: "By Prior Appointment Only"
  },

  // Social Media Links (DEMO CONTENT — REPLACE WITH REAL SOCIAL URLS)
  social: {
    instagram: "https://instagram.com/maisonbellebeauty",
    instagramHandle: "@maisonbellebeauty",
    facebook: "https://facebook.com/maisonbellebeauty",
    youtube: "https://youtube.com/@maisonbellebeauty"
  },

  // Localization & Booking Config
  currency: "₹",
  bookingMessage: "Hi Maison Belle, I would like to book an appointment.",

  // Trust Statistics
  stats: {
    rating: "4.9/5",
    ratingCount: "Client Rating",
    appointments: "5,000+",
    appointmentsLabel: "Appointments",
    experience: "10+ Years",
    experienceLabel: "Experience"
  },

  // Featured Experience
  featuredExperience: {
    title: "Signature Hair Transformation",
    category: "FEATURED EXPERIENCE",
    description: "A personalized consultation followed by a tailored cut, styling and finish designed for your lifestyle.",
    price: "₹2,499",
    steps: [
      "Personalized Consultation",
      "Tailored Haircut & Wash",
      "Deep Nourishing Hair Spa",
      "Signature Heat & Style Finish"
    ]
  },

  // Master Services Catalog
  services: [
    {
      id: "haircuts-styling",
      number: "01",
      name: "Haircuts & Styling",
      category: "Hair",
      price: "₹800",
      priceRaw: 800,
      description: "Precision cuts, bespoke fringe shaping, and polished blowout styling tailored to your face shape.",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "hair-color",
      number: "02",
      name: "Hair Color",
      category: "Hair",
      price: "₹2,500",
      priceRaw: 2500,
      description: "Luminous global color, seamless balayage, subtle glossing, and dimensional foil highlights.",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "facials-skin",
      number: "03",
      name: "Facials & Skin",
      category: "Skin",
      price: "₹1,200",
      priceRaw: 1200,
      description: "Botanical deep cleansing, barrier-repair hydra facials, and radiance-boosting cellular therapy.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "makeup",
      number: "04",
      name: "Makeup",
      category: "Makeup",
      price: "₹2,000",
      priceRaw: 2000,
      description: "Minimalist dewy daytime glams, editorial looks, and camera-ready evening occasion wear.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "nails",
      number: "05",
      name: "Nails",
      category: "Nails",
      price: "₹600",
      priceRaw: 600,
      description: "Organic cuticle care, gel overlays, minimalist nail artistry, and hydrating spa pedicures.",
      image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: "bridal-beauty",
      number: "06",
      name: "Bridal Beauty",
      category: "Bridal",
      price: "₹15,000",
      priceRaw: 15000,
      description: "Comprehensive bridal packages including pre-wedding skin prep, HD makeup, draping, and styling.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80"
    }
  ],

  // Team Members
  team: [
    {
      name: "Aarohi Shah",
      role: "Senior Hair Artist",
      experience: "8+ Years Craft",
      bio: "Specializing in precision dry-cutting, French balayage, and restorative hair wellness rituals.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Meera Kapoor",
      role: "Beauty & Skin Specialist",
      experience: "6+ Years Craft",
      bio: "Certified clinical aesthetician passionate about microbiome-friendly skin therapies and holistic facials.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Rhea Malhotra",
      role: "Bridal & Editorial Makeup Artist",
      experience: "7+ Years Craft",
      bio: "Renowned for soft-focus skin finishes, sculpted brows, and timeless modern wedding beauty.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
    }
  ],

  // Client Testimonials (DEMO REVIEWS — NOT VERIFIED ENDORSEMENTS)
  testimonials: [
    {
      name: "Aanya Mehta",
      service: "Signature Haircut & Gloss",
      quote: "The consultation alone changed how I look at my hair. Maison Belle feels like a quiet sanctuary where you actually leave feeling like yourself, only elevated.",
      rating: 5
    },
    {
      name: "Sara Kapoor",
      service: "Hydra Radiance Facial",
      quote: "Incredible attention to skin health rather than quick superficial fixes. My skin has never stayed this balanced and glowing for weeks after an appointment.",
      rating: 5
    },
    {
      name: "Ishita Sharma",
      service: "Bridal Beauty Package",
      quote: "From trials to the wedding day, Rhea and the team made the entire experience effortless. The makeup was lightweight, luminous, and lasted 14 hours flawlessly.",
      rating: 5
    }
  ]
};

// Export for module/script usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SALON_CONFIG;
}
