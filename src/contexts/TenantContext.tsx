// contexts/TenantContext.tsx
"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { TenantConfig } from "@/types/tenant";

interface TenantContextType {
  tenant: TenantConfig | null;
}

const TenantContext = createContext<TenantContextType>({ tenant: null });

export function TenantProvider({
  children,
  tenant,
}: {
  children: ReactNode;
  tenant: TenantConfig | null;
}) {
  return (
    <TenantContext.Provider value={{ tenant }}>
      {children}
    </TenantContext.Provider>
  );
}

export function useTenant() {
  const context = useContext(TenantContext);
  if (!context) {
    throw new Error("useTenant must be used within TenantProvider");
  }
  return context;
}
