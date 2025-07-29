"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ExternalLink, Search, Filter, Clock, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const portfolioItems = [
  {
    title: "The Science Behind Perfect Pasta Water",
    publication: "The Spruce Eats",
    date: "March 2024",
    excerpt:
      "Exploring the chemistry of starch, salt, and temperature in creating restaurant-quality pasta at home through scientific analysis and kitchen testing.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Ingredient Science",
    readTime: "8 min read",
    wordCount: "2,200",
    link: "#",
    featured: true,
  },
  {
    title: "How Regional Grocery Chains Are Reshaping American Food Culture",
    publication: "Tasting Table",
    date: "February 2024",
    excerpt:
      "From H-E-B to Wegmans, regional grocers are driving local food trends and changing how Americans shop, eat, and discover new flavors.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Food Culture",
    readTime: "12 min read",
    wordCount: "3,100",
    link: "#",
    featured: true,
  },
  {
    title: "The Rise of Craft Cocktail Culture in Small-Town America",
    publication: "Eat This, Not That!",
    date: "January 2024",
    excerpt:
      "How mixology trends from major cities are finding new life in unexpected places across the heartland, transforming local drinking culture.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Cocktail Culture",
    readTime: "10 min read",
    wordCount: "2,800",
    link: "#",
    featured: true,
  },
  {
    title: "Inside the Sourdough Revival: More Than Just Bread",
    publication: "The Spruce Eats",
    date: "December 2023",
    excerpt:
      "The cultural and scientific factors driving America's renewed obsession with fermented foods and artisanal bread making.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Food Trends",
    readTime: "15 min read",
    wordCount: "3,500",
    link: "#",
    featured: false,
  },
  {
    title: "Decoding the Umami Revolution in American Restaurants",
    publication: "Tasting Table",
    date: "November 2023",
    excerpt:
      "How the fifth taste is transforming menus across America, from fine dining to fast casual, and what it means for home cooks.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Restaurant Analysis",
    readTime: "9 min read",
    wordCount: "2,400",
    link: "#",
    featured: false,
  },
  {
    title: "The Secret Life of Vanilla: From Bean to Bottle",
    publication: "The Spruce Eats",
    date: "October 2023",
    excerpt:
      "Investigating the complex supply chain, flavor chemistry, and cultural significance of America's favorite flavoring agent.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Ingredient Science",
    readTime: "11 min read",
    wordCount: "2,900",
    link: "#",
    featured: false,
  },
  {
    title: "Why Food Trucks Are Winning the Fast-Casual Wars",
    publication: "Eat This, Not That!",
    date: "September 2023",
    excerpt:
      "Mobile dining is reshaping American food culture, offering innovation and authenticity that traditional restaurants struggle to match.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Restaurant Analysis",
    readTime: "7 min read",
    wordCount: "1,800",
    link: "#",
    featured: false,
  },
  {
    title: "The Psychology of Menu Design: How Restaurants Influence Your Order",
    publication: "Tasting Table",
    date: "August 2023",
    excerpt:
      "Behavioral economics meets culinary marketing in this deep dive into how menu layout, pricing, and descriptions shape dining decisions.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Restaurant Analysis",
    readTime: "13 min read",
    wordCount: "3,200",
    link: "#",
    featured: false,
  },
  {
    title: "Fermentation Nation: America's Probiotic Food Renaissance",
    publication: "The Spruce Eats",
    date: "July 2023",
    excerpt:
      "From kimchi to kombucha, exploring how ancient preservation techniques are becoming modern health trends in American kitchens.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Food Trends",
    readTime: "14 min read",
    wordCount: "3,400",
    link: "#",
    featured: false,
  },
]

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
]

const publications = [
  "All Publications",
  "The Spruce Eats",
  "Tasting Table",
  "Eat This, Not That!",
  "Modern Flavor Media",
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedPublication, setSelectedPublication] = useState("All Publications")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredItems = portfolioItems.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
    const matchesPublication = selectedPublication === "All Publications" || item.publication === selectedPublication
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesCategory && matchesPublication && matchesSearch
  })

  const featuredItems = portfolioItems.filter((item) => item.featured)

  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      {/* Navigation */}
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
              <Link href="/about" className="text-[#2C3E50] hover:text-[#D35400] transition-colors">
                About
              </Link>
              <Link href="/portfolio" className="text-[#D35400] font-semibold">
                Portfolio
              </Link>
              <Link href="/services" className="text-[#2C3E50] hover:text-[#D35400] transition-colors">
                Services
              </Link>
              <Link href="/blog" className="text-[#2C3E50] hover:text-[#D35400] transition-colors">
                Blog
              </Link>
              <Link href="/contact">
                <Button className="bg-[#E67E22] hover:bg-[#D35400] text-white">Hire Me</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#F8FBF8] to-[#FEFEFE]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-[#2C3E50] mb-6 font-serif">Published Work</h1>
          <p className="text-xl text-[#2C3E50] mb-8 max-w-3xl mx-auto leading-relaxed">
            A comprehensive collection of food journalism, ingredient deep-dives, and cultural analysis published across
            leading food and lifestyle publications.
          </p>

          {/* Portfolio Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#E67E22] mb-2">2,000+</div>
              <div className="text-[#2C3E50] font-medium">Articles Published</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#E67E22] mb-2">2,800</div>
              <div className="text-[#2C3E50] font-medium">Avg Word Count</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#E67E22] mb-2">15+</div>
              <div className="text-[#2C3E50] font-medium">Publications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#E67E22] mb-2">6</div>
              <div className="text-[#2C3E50] font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2C3E50] mb-4 font-serif">Featured Articles</h2>
            <p className="text-lg text-[#2C3E50]">Recent highlights showcasing diverse expertise</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {featuredItems.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg"
              >
                <div className="relative h-48">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#E67E22] text-white">Featured</Badge>
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
                    <Link
                      href={item.link}
                      className="inline-flex items-center text-[#E67E22] hover:text-[#D35400] font-semibold text-sm"
                    >
                      Read
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-[#F8FBF8] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#2C3E50]/50" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-[#E67E22]/20 focus:border-[#E67E22]"
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-[#2C3E50]" />
                <span className="text-[#2C3E50] font-medium">Filter by:</span>
              </div>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-[#E67E22]/20 rounded-md bg-white text-[#2C3E50] focus:border-[#E67E22] focus:outline-none"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              <select
                value={selectedPublication}
                onChange={(e) => setSelectedPublication(e.target.value)}
                className="px-4 py-2 border border-[#E67E22]/20 rounded-md bg-white text-[#2C3E50] focus:border-[#E67E22] focus:outline-none"
              >
                {publications.map((pub) => (
                  <option key={pub} value={pub}>
                    {pub}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="text-center mb-8">
            <p className="text-[#2C3E50]">
              Showing {filteredItems.length} of {portfolioItems.length} articles
            </p>
          </div>
        </div>
      </section>

      {/* All Articles Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg"
              >
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
                    <Link
                      href={item.link}
                      className="inline-flex items-center text-[#E67E22] hover:text-[#D35400] font-semibold text-sm"
                    >
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
                  setSelectedCategory("All")
                  setSelectedPublication("All Publications")
                  setSearchTerm("")
                }}
                className="bg-[#E67E22] hover:bg-[#D35400] text-white"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Publications Section */}
      <section className="bg-[#F8FBF8] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#2C3E50] mb-8 font-serif">Featured Publications</h2>
          <p className="text-lg text-[#2C3E50] mb-12">Trusted by leading food and lifestyle publications</p>

          <div className="grid md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#E67E22] mb-2">The Spruce Eats</div>
              <p className="text-[#2C3E50] text-sm">45+ Articles</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#E67E22] mb-2">Tasting Table</div>
              <p className="text-[#2C3E50] text-sm">32+ Articles</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#E67E22] mb-2">Eat This, Not That!</div>
              <p className="text-[#2C3E50] text-sm">28+ Articles</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#E67E22] mb-2">Modern Flavor</div>
              <p className="text-[#2C3E50] text-sm">Archive</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#E67E22] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">Ready for Your Next Food Story?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's create compelling content that engages your audience and showcases your brand's expertise in the food
            industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#E67E22] hover:bg-gray-100 px-8">
                Start a Project
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#E67E22] px-8 bg-transparent"
              >
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C3E50] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 font-serif">Jesus Martinez</h3>
              <p className="text-white/80 mb-4 leading-relaxed">
                Food & drink feature writer specializing in American culinary culture, ingredient science, and
                restaurant trends. Based in Cedar Creek, Texas.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/about" className="block text-white/80 hover:text-white transition-colors">
                  About
                </Link>
                <Link href="/portfolio" className="block text-white/80 hover:text-white transition-colors">
                  Portfolio
                </Link>
                <Link href="/services" className="block text-white/80 hover:text-white transition-colors">
                  Services
                </Link>
                <Link href="/resume" className="block text-white/80 hover:text-white transition-colors">
                  Resume
                </Link>
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
  )
}
