"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ExternalLink, Search, Filter, Clock, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const portfolioItems = [
  {
    title: "Crisis-Proof Cuisine: How Michelin-Star Kitchens Reinvent Themselves in Uncertainty",
    date: "March 2025",
    excerpt:
      "Michelin-star kitchens are built on precision, ritual, and rigor...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcoIXGVdTQCc6ONCeu5zOfqZPIIcvfJOA35Q&s?height=300&width=400",
    category: "Food & Dining",
    publication: "Modern Flavor Media",
    readTime: "7 min read",
    wordCount: "1,477",
    link: "Crisis_Proof_Cuisine.pdf",
  },
  {
    title: "Viral Tiktok Snack Trends That Ended up Nationwide",
    date: "June 2025",
    excerpt:
      "TikTok isn’t just fueling food fads. It’s reshaping what ends up in grocery carts...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPeoO0VdmQcYoZbQEuQM15NcWpTUMFlykyiQ&s?height=300&width=400",
    category: "Food & Dining",
    publication: "Tasting Table",
    readTime: "4 min read",
    wordCount: "874",
    link: "Viral_Tiktok_Snack_Trends.pdf",
  },
  {
    title: "The Underrated Food Cities That Should Be on Your 2025 Travel List",
    date: "May 2025",
    excerpt:
      "For years, the same cities have dominated food-travel lists...",
    image:
      "https://drinkohza.com/cdn/shop/articles/AdobeStock_253046012_1_feec800e-e9a7-4810-9b46-b8f49b4a14e4.jpg?v=1640798753?height=300&width=400",
    category: "Food & Dining",
    publication: "The Spruce Eats",
    readTime: "5 min read",
    wordCount: "1,060",
    link: "The_Underrated_Food_Cities.pdf",
  },
];

const categories = [
  "All",
  "Feature Articles",
  "Ingredient Science",
  "Restaurant Analysis",
  "Cocktail Culture",
  "Food Culture",
  "Food Trends",
  "Grocery Reviews",
  "Cooking Tips",
];

const publications = [
  "All Publications",
  "The Spruce Eats",
  "Tasting Table",
  "Eat This, Not That!",
  "Modern Flavor Media",
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPublication, setSelectedPublication] = useState("All Publications");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = portfolioItems.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesPublication = selectedPublication === "All Publications" || item.publication === selectedPublication;
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesPublication && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <nav className="bg-[#F5F3F0] border-b border-[#E67E22]/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-[#2C3E50] font-serif">
                Jesus Martinez
              </Link>
              <span className="ml-3 text-sm text-[#D35400] font-medium">Food & Drink Writer</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-[#2C3E50] hover:text-[#D35400]">Home</Link>
              <Link href="/about" className="text-[#2C3E50] hover:text-[#D35400]">About</Link>
              <Link href="/portfolio" className="text-[#D35400] font-semibold">Portfolio</Link>
              <Link href="/services" className="text-[#2C3E50] hover:text-[#D35400]">Services</Link>
              <Link href="/contact" className="text-[#2C3E50] hover:text-[#D35400]">Contact</Link>
              <a href="resume.docx" download>
                <Button className="bg-[#E67E22] hover:bg-[#D35400] text-white">Hire Me</Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#F8FBF8] to-[#FEFEFE]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-[#2C3E50] mb-6 font-serif">Published Work</h1>
          <p className="text-xl text-[#2C3E50] mb-8 max-w-3xl mx-auto leading-relaxed">
            A comprehensive collection of food journalism, ingredient deep-dives, and cultural analysis published across leading food and lifestyle publications.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <div className="relative h-48">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#27AE60] text-white text-xs">{item.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-[#D35400]">
                    <span className="font-semibold">{item.publication}</span>
                    <span>•</span>
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#2C3E50] mb-3 font-serif leading-tight">{item.title}</h3>
                  <p className="text-[#2C3E50] mb-4 text-sm leading-relaxed">{item.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-[#2C3E50]/70">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{item.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        <span>{item.wordCount} words</span>
                      </div>
                    </div>
                    <Link href={item.link} className="inline-flex items-center text-[#E67E22] hover:text-[#D35400] font-semibold text-sm">
                      Read
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-[#2C3E50] mb-4">No articles found matching your criteria.</p>
              <Button
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedPublication("All Publications");
                  setSearchTerm("");
                }}
                className="bg-[#E67E22] hover:bg-[#D35400] text-white"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <footer className="bg-[#2C3E50] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 font-serif">Jesus Martinez</h3>
              <p className="text-white/80 mb-4 leading-relaxed">
                Food & drink feature writer specializing in American culinary culture, ingredient science, and restaurant trends. Based in Cedar Creek, Texas.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/about" className="block text-white/80 hover:text-white">About</Link>
                <Link href="/portfolio" className="block text-white/80 hover:text-white">Portfolio</Link>
                <Link href="/services" className="block text-white/80 hover:text-white">Services</Link>
                <Link href="/resume" className="block text-white/80 hover:text-white">Resume</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-white/80">
                <div>m4artinezjesus@gmail.com</div>
                <div>254-827-4871</div>
                <div>24hr response time</div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 Jesus Martinez. All rights reserved. | Professional food & drink writer</p>
          </div>
        </div>
      </footer>
    </div>
  );
}