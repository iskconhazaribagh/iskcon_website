"use client";
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-orange-50 flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-8">
        Contact Us
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg space-y-6">
        <div className="flex items-center gap-4">
          <Phone className="text-orange-600" size={24} />
          <span className="text-lg font-medium">+91 82106 65015</span>
        </div>

        <div className="flex items-center gap-4">
          <Mail className="text-orange-600" size={24} />
          <span className="text-lg font-medium">iskconhazaribagh1@gmail.com</span>
        </div>

        <div className="flex items-start gap-4">
          <MapPin className="text-orange-600" size={24} />
          <span className="text-lg font-medium">
            PTC Kanhari Road, opposite Vrindavasadan Colony, <br />
            Hazaribagh, Jharkhand
          </span>
        </div>
      </div>
    </div>
  );
}
