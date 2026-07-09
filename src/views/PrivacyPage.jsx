"use client";
import { useEffect } from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
export function PrivacyPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (<div className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12 lg:px-16 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#F24E1E]/5 rounded-full filter blur-[120px] pointer-events-none"/>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Back navigation */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1"/>
            Back to Home
          </Link>
        </div>

        {/* Title */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center">
              <Shield className="w-4 h-4 text-[#F24E1E]"/>
            </div>
            <span className="text-xs uppercase font-mono tracking-widest text-zinc-400">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-zinc-400 font-mono text-xs">
            Last Updated: July 5, 2026
          </p>
        </div>

        {/* Policy Content */}
        <div className="space-y-12 text-zinc-300 font-light leading-relaxed text-base md:text-lg">
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-medium font-heading italic text-white">
              1. Introduction & Overview
            </h2>
            <p>
              Welcome to Intent Studio. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website, utilize our services, or inquire about our website audits and design packages.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-medium font-heading italic text-white">
              2. Data We Collect
            </h2>
            <p>
              We collect information that you voluntarily provide to us when submitting inquiries, requesting audits, or scheduling consultation calls. This may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400 font-normal text-sm md:text-base">
              <li>Contact details (e.g., name, email address, WhatsApp number)</li>
              <li>Business information (e.g., website URL, project objectives, current budget)</li>
              <li>Analytics data collected automatically (e.g., browser type, general geography, page interactions)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-medium font-heading italic text-white">
              3. How We Use Your Information
            </h2>
            <p>
              We use your data solely to deliver the requested services and maintain high design standards. Your information is used to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400 font-normal text-sm md:text-base">
              <li>Perform website audits and prepare professional design reviews.</li>
              <li>Schedule and conduct video/WhatsApp consultations.</li>
              <li>Enhance our digital studio experience and optimize conversion metrics.</li>
              <li>Comply with necessary legal and regulatory obligations.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-medium font-heading italic text-white">
              4. Data Sharing & Security
            </h2>
            <p>
              We respect your trust. We do not sell, rent, or trade your personal data. We implement strict, industry-compliant security parameters to prevent unauthorized access, alteration, or disclosure of your project data.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-medium font-heading italic text-white">
              5. Your Rights
            </h2>
            <p>
              You retain full authority over your data. You may request access to, correction of, or permanent deletion of your personal details at any time by contacting our team directly.
            </p>
          </section>

          <section className="space-y-4 pt-6 border-t border-white/10">
            <h2 className="text-xl md:text-2xl font-medium font-heading italic text-white">
              6. Contact Us
            </h2>
            <p className="text-zinc-400 text-sm md:text-base">
              For any privacy-related queries, please email us directly or connect via our WhatsApp portal.
            </p>
          </section>
        </div>
      </div>
    </div>);
}
