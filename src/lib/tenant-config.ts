// lib/tenant-config.ts

import { TenantConfig } from "@/types/tenant";

const tenantConfigs: Record<string, TenantConfig> = {
  clinic1: {
    id: "clinic1",
    name: "Bright Smile Dental",
    subdomain: "clinic1",
    primaryColor: "#2563eb",
    secondaryColor: "#1e40af",
    phone: "(555) 123-4567",
    email: "info@brightsmile.com",
    address: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
    services: [
      {
        id: "1",
        name: "General Dentistry",
        description:
          "Comprehensive oral health care including cleanings, fillings, and preventive treatments.",
        price: "From $150",
        duration: "60 min",
      },
      {
        id: "2",
        name: "Cosmetic Dentistry",
        description:
          "Transform your smile with veneers, whitening, and aesthetic treatments.",
        price: "From $500",
        duration: "90 min",
      },
    ],
    team: [
      {
        id: "1",
        name: "Dr. Sarah Johnson",
        role: "Lead Dentist",
        bio: "Dr. Johnson has over 15 years of experience in cosmetic and general dentistry.",
        education: [
          "Harvard School of Dental Medicine",
          "NYU College of Dentistry",
        ],
        specializations: ["Cosmetic Dentistry", "Implantology"],
      },
    ],
    about: {
      description:
        "Your premier destination for comprehensive dental care in the heart of New York.",
      mission:
        "To provide exceptional dental care that enhances the health and beauty of every smile.",
      experience: "15+ years serving the community",
    },
  },
  clinic2: {
    id: "clinic2",
    name: "Modern Dental Care",
    subdomain: "clinic2",
    primaryColor: "#059669",
    secondaryColor: "#047857",
    phone: "(555) 987-6543",
    email: "contact@moderndentalcare.com",
    address: "456 Oak Avenue",
    city: "Los Angeles",
    state: "CA",
    zip: "90210",
    services: [
      {
        id: "1",
        name: "Orthodontics",
        description:
          "Straighten your teeth with modern braces and clear aligners.",
        price: "From $3000",
        duration: "12-24 months",
      },
    ],
    team: [
      {
        id: "1",
        name: "Dr. Michael Chen",
        role: "Orthodontist",
        bio: "Specialized in modern orthodontic techniques and digital smile design.",
        education: ["UCLA School of Dentistry"],
        specializations: ["Orthodontics", "Digital Smile Design"],
      },
    ],
    about: {
      description:
        "Advanced dental care using the latest technology and techniques.",
      mission:
        "To revolutionize dental care through innovation and personalized treatment.",
      experience: "10+ years of excellence",
    },
  },
};

export function getTenantConfig(subdomain: string): TenantConfig | null {
  return tenantConfigs[subdomain] || null;
}
