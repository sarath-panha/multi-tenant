// types/tenant.ts
export interface TenantConfig {
  id: string;
  name: string;
  subdomain: string;
  logo?: string;
  primaryColor: string;
  secondaryColor: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
  services: Service[];
  team: TeamMember[];
  about: {
    description: string;
    mission: string;
    experience: string;
  };
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price?: string;
  duration?: string;
  image?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  education?: string[];
  specializations?: string[];
}
