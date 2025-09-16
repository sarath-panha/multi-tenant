// components/layout/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import { useTenant } from "@/contexts/TenantContext";
import { Container } from "@/components/ui/container";

export function Footer() {
  const { tenant } = useTenant();

  if (!tenant) return null;

  const socialIcons = {
    facebook: Facebook,
    instagram: Instagram,
    twitter: Twitter,
    linkedin: Linkedin,
  };

  return (
    <footer className="bg-gray-900 text-white">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: tenant.primaryColor }}
              >
                {tenant.name.charAt(0)}
              </div>
              <span className="text-xl font-bold">{tenant.name}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {tenant.about.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Services", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {tenant.services.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <p>{tenant.address}</p>
                  <p>
                    {tenant.city}, {tenant.state} {tenant.zip}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400 text-sm">{tenant.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400 text-sm">{tenant.email}</span>
              </div>
            </div>

            {/* Social Media */}
            {tenant.socialMedia && (
              <div className="mt-6">
                <div className="flex space-x-4">
                  {Object.entries(tenant.socialMedia).map(([platform, url]) => {
                    const Icon =
                      socialIcons[platform as keyof typeof socialIcons];
                    return url ? (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    ) : null;
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 {tenant.name}. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Powered by <span className="font-semibold text-white">Dentesy</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
