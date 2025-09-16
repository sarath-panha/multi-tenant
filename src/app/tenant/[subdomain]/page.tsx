// app/tenant/[subdomain]/page.tsx
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";

export default function TenantHomePage() {
  return (
    <>
      <Hero />
      <Services />
    </>
  );
}
