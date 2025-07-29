// app/contact/page.tsx (Next.js 13+ structure using App Router)

import React from 'react';

export default function ContactPage() {
  return (
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
  );
}
