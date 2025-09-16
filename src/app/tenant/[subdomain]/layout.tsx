// app/tenant/[subdomain]/layout.tsx
import { notFound } from "next/navigation";
import { getTenantConfig } from "@/lib/tenant-config";
import { TenantProvider } from "@/contexts/TenantContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

interface TenantLayoutProps {
  children: React.ReactNode;
  params: { subdomain: string };
}

export default function TenantLayout({ children, params }: TenantLayoutProps) {
  const tenant = getTenantConfig(params.subdomain);

  if (!tenant) {
    notFound();
  }

  return (
    <TenantProvider tenant={tenant}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </TenantProvider>
  );
}
