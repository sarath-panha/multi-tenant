// app/tenant/[subdomain]/about/page.tsx
"use client";

import React from "react";
import { Award, Users, Heart, Star } from "lucide-react";
import { useTenant } from "@/contexts/TenantContext";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

export default function AboutPage() {
  const { tenant } = useTenant();

  if (!tenant) return null;

  return (
    <div className="py-20">
      <Container>
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About {tenant.name}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {tenant.about.description}
          </p>
        </div>

        {/* Mission */}
        <div className="mb-20">
          <Card className="p-8 lg:p-12 text-center">
            <Heart className="w-12 h-12 text-red-500 mx-auto mb-6" />
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {tenant.about.mission}
            </p>
          </Card>
        </div>

        {/* Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600">
              Experienced professionals dedicated to your oral health
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tenant.team.map((member) => (
              <Card key={member.id} className="p-6 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-50 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="text-gray-400 text-xs">Photo</div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>

                {member.education && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Education
                    </h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {member.education.map((edu, index) => (
                        <li key={index}>{edu}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {member.specializations && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Specializations
                    </h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.specializations.map((spec, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 text-center">
            <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
            <p className="text-gray-600 text-sm">
              We strive for the highest standards in every treatment and service
              we provide.
            </p>
          </Card>

          <Card className="p-6 text-center">
            <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Compassion</h3>
            <p className="text-gray-600 text-sm">
              Your comfort and well-being are our top priorities throughout your
              care journey.
            </p>
          </Card>

          <Card className="p-6 text-center">
            <Star className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
            <p className="text-gray-600 text-sm">
              We embrace the latest technology and techniques for superior
              patient outcomes.
            </p>
          </Card>
        </div>
      </Container>
    </div>
  );
}
