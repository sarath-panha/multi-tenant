// components/sections/Services.tsx
"use client";

import React from "react";
import { ArrowRight, Clock, DollarSign } from "lucide-react";
import { useTenant } from "@/contexts/TenantContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

export function Services() {
  const { tenant } = useTenant();

  if (!tenant) return null;

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Dental Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive dental care tailored to your needs, using the latest
            technology and techniques for optimal oral health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tenant.services.map((service) => (
            <Card key={service.id} className="p-6">
              <div className="space-y-4">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg flex items-center justify-center">
                  <div className="text-gray-400 text-center">
                    <div className="text-sm">Service Image</div>
                    <div className="text-xs mt-1">{service.name}</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  {service.price && (
                    <div className="flex items-center space-x-1">
                      <DollarSign className="w-4 h-4" />
                      <span>{service.price}</span>
                    </div>
                  )}
                  {service.duration && (
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                  )}
                </div>

                <Button variant="outline" className="w-full group">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg">View All Services</Button>
        </div>
      </Container>
    </section>
  );
}
