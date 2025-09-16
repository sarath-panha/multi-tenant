// components/sections/Hero.tsx
"use client";

import React from "react";
import { Star, ArrowRight, Calendar } from "lucide-react";
import { useTenant } from "@/contexts/TenantContext";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  const { tenant } = useTenant();

  if (!tenant) return null;

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      <Container className="py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-gray-600 text-sm">
                  Trusted by 1000+ patients
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Perfect
                <span className="block" style={{ color: tenant.primaryColor }}>
                  Smile Starts Here
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Experience exceptional dental care with our state-of-the-art
                facility and compassionate team. We make every visit comfortable
                and every smile brilliant.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Call {tenant.phone}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {tenant.about.experience}
                </div>
                <div className="text-gray-600">Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-gray-600">Happy Patients</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-gray-600">Services</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 lg:p-12">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl flex items-center justify-center">
                <div className="text-gray-400 text-center">
                  <div className="text-sm">Hero Image Placeholder</div>
                  <div className="text-xs mt-1">
                    Replace with dental clinic photo
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Available Today</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-xs text-gray-600">
                  Patient Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
