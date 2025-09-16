// app/tenant/[subdomain]/services/page.tsx
"use client";

import React from "react";
import { Clock, DollarSign, ArrowRight } from "lucide-react";
import { useTenant } from "@/contexts/TenantContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

export default function ServicesPage() {
  const { tenant } = useTenant();

  if (!tenant) return null;

  return (
    <div className="py-20">
      <Container>
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive dental care using state-of-the-art technology and
            personalized treatment plans for every patient.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tenant.services.map((service) => (
            <Card key={service.id} className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg flex items-center justify-center">
                  <div className="text-gray-400 text-center">
                    <div className="text-sm">Service Image</div>
                    <div className="text-xs mt-1">{service.name}</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.price && (
                      <div className="flex items-center space-x-2 text-gray-600">
                        <DollarSign className="w-4 h-4" />
                        <span className="font-medium">{service.price}</span>
                      </div>
                    )}
                    {service.duration && (
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{service.duration}</span>
                      </div>
                    )}
                  </div>

                  <Button className="group">
                    Book Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
