// app/contact/page.tsx (Next.js 13+ structure using App Router)

import Link from 'next/link';
import React from 'react';
import { Button } from 'react-day-picker';

export default function ContactPage() {
  return (
    <>
    <nav className="bg-[#F5F3F0] border-b border-[#E67E22]/10 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-[#2C3E50] font-serif"
          >
            Jesus Martinez
          </Link>
          <span className="ml-3 text-sm text-[#D35400] font-medium">
            Food & Drink Writer
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
        <Link
            href="/"
            className="text-[#2C3E50] hover:text-[#D35400] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-[#2C3E50] hover:text-[#D35400] transition-colors"
          >
            About
          </Link>
          <Link href="/portfolio" className="text-[#D35400] font-semibold">
            Portfolio
          </Link>
          <Link
            href="/services"
            className="text-[#2C3E50] hover:text-[#D35400] transition-colors"
          >
            Services
          </Link>
          <Link href="/contact" className="text-[#2C3E50] hover:text-[#D35400] transition-colors">
            Contact
          </Link>
          <a
            href="resume.docx"
            download
            className="text-[#2C3E50] hover:text-[#D35400] transition-colors"
          >
            {/* <Link href="/contact"> */}
              <Button className="bg-[#E67E22] hover:bg-[#D35400] text-white">
                Hire Me
              </Button>
            {/* </Link> */}
          </a>
        </div>
      </div>
    </div>
  </nav>
    <div className="max-w-4xl mx-auto px-4 py-12">

      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Jesus Martinez</h1>

      <section className="space-y-4 mb-10">
        <p className="text-lg text-gray-700">
          Curious-minded, detail-driven freelance writer with over 6 years of experience writing about food, drink, and
          the evolving American kitchen. Passionate about unpacking the “how” and “why” behind home cooking and culinary
          traditions.
        </p>
        <p className="text-md text-gray-600">
          Based in Cedar Creek, TX, I specialize in food journalism, long-form features, and cocktail culture content
          for digital publications.
        </p>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6 space-y-4 border">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Contact Information</h2>
          <p className="text-gray-700">📍 14902 Dobush, Cedar Creek, TX 78617</p>
          <p className="text-gray-700">📧 <a href="mailto:m4artinezjesus@gmail.com" className="text-blue-600 underline">m4artinezjesus@gmail.com</a></p>
          <p className="text-gray-700">📞 <a href="tel:2548274871" className="text-blue-600 underline">(254) 827-4871</a></p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Professional Summary</h2>
          <p className="text-gray-700">
            I create high-quality, research-based food features, ingredient spotlights, and cocktail culture content.
            Known for producing clean, engaging copy with strong sourcing and sharp insight.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Core Competencies</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Feature Writing & Food Journalism</li>
            <li>Cooking Science & Ingredient Deep-Dives</li>
            <li>SEO & Headline Optimization</li>
            <li>Content Management (WordPress, custom CMS)</li>
            <li>Remote Collaboration & Deadline Management</li>
            <li>Cocktail Culture & Bar Trends</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Tools & Platforms</h2>
          <p className="text-gray-700">
            WordPress, Google Docs, Grammarly, Copyscape, SEO Surfer, Slack, Trello
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Affiliations</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Member, Association of Food Journalists (AFJ)</li>
            <li>Subscriber, Chowhound, Eater, Cook’s Illustrated</li>
          </ul>
        </div>
      </section>
    </div>
    </>
  );
}
