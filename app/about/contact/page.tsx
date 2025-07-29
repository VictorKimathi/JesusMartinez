"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Mail, Phone, Clock, CheckCircle, Calendar, Users } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    source: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#FEFEFE] flex items-center justify-center px-4">
        <Card className="max-w-md w-full text-center p-8 border-0 shadow-xl">
          <CardContent className="p-0">
            <div className="w-16 h-16 bg-[#27AE60] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[#2C3E50] mb-4 font-serif">Thank You!</h2>
            <p className="text-[#2C3E50] mb-6 leading-relaxed">
              Thanks for reaching out! I'll review your project details and respond within 24 hours. In the meantime,
              feel free to browse my portfolio or check out my latest articles.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/portfolio" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full border-[#E67E22] text-[#E67E22] hover:bg-[#E67E22] hover:text-white bg-transparent"
                >
                  View Portfolio
                </Button>
              </Link>
              <Link href="/" className="flex-1">
                <Button className="w-full bg-[#E67E22] hover:bg-[#D35400] text-white">Back to Home</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

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
              <Link href="/portfolio" className="text-[#2C3E50] hover:text-[#D35400] transition-colors">
                Portfolio
              </Link>
              <Link href="/services" className="text-[#2C3E50] hover:text-[#D35400] transition-colors">
                Services
              </Link>
              {/* <Link href="/blog" className="text-[#2C3E50] hover:text-[#D35400] transition-colors">
                Blog
              </Link> */}
              <Link href="/contact" className="text-[#D35400] font-semibold">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#F8FBF8] to-[#FEFEFE]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-[#2C3E50] mb-6 font-serif">Let's Work Together</h1>
          <p className="text-xl text-[#2C3E50] mb-8 leading-relaxed">
            Ready to create compelling food content that engages your audience? I'm currently accepting new projects and
            would love to discuss your needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center gap-3 text-[#2C3E50]">
              <Clock className="h-6 w-6 text-[#E67E22]" />
              <span className="font-medium">24hr Response</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-[#2C3E50]">
              <Users className="h-6 w-6 text-[#E67E22]" />
              <span className="font-medium">Remote Collaboration</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-[#2C3E50]">
              <Calendar className="h-6 w-6 text-[#E67E22]" />
              <span className="font-medium">Q2 2024 Availability</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-[#2C3E50] font-serif">Project Inquiry</CardTitle>
                <p className="text-[#2C3E50]">
                  Tell me about your project and I'll get back to you within 24 hours with a detailed proposal.
                </p>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-[#2C3E50] font-medium">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="mt-2 border-[#E67E22]/20 focus:border-[#E67E22]"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-[#2C3E50] font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="mt-2 border-[#E67E22]/20 focus:border-[#E67E22]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-[#2C3E50] font-medium">
                      Company/Publication
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="mt-2 border-[#E67E22]/20 focus:border-[#E67E22]"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-[#2C3E50] font-medium">Project Type *</Label>
                      <Select onValueChange={(value) => handleInputChange("projectType", value)}>
                        <SelectTrigger className="mt-2 border-[#E67E22]/20 focus:border-[#E67E22]">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="feature-writing">Feature Writing & Food Journalism</SelectItem>
                          <SelectItem value="ingredient-science">Ingredient Deep-Dives & Science</SelectItem>
                          <SelectItem value="restaurant-coverage">Restaurant & Chain Coverage</SelectItem>
                          <SelectItem value="cocktail-culture">Cocktail Culture & Bar Trends</SelectItem>
                          <SelectItem value="product-reviews">Grocery & Product Reviews</SelectItem>
                          <SelectItem value="seo-content">SEO-Optimized Content</SelectItem>
                          <SelectItem value="ongoing-contract">Ongoing Contract Work</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-[#2C3E50] font-medium">Budget Range</Label>
                      <Select onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger className="mt-2 border-[#E67E22]/20 focus:border-[#E67E22]">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-500">Under $500</SelectItem>
                          <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                          <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                          <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                          <SelectItem value="over-5000">Over $5,000</SelectItem>
                          <SelectItem value="ongoing">Ongoing Contract</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label className="text-[#2C3E50] font-medium">Timeline *</Label>
                    <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                      <SelectTrigger className="mt-2 border-[#E67E22]/20 focus:border-[#E67E22]">
                        <SelectValue placeholder="When do you need this completed?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP (Rush fee may apply)</SelectItem>
                        <SelectItem value="1-week">Within 1 week</SelectItem>
                        <SelectItem value="2-weeks">Within 2 weeks</SelectItem>
                        <SelectItem value="1-month">Within 1 month</SelectItem>
                        <SelectItem value="flexible">Flexible timeline</SelectItem>
                        <SelectItem value="ongoing">Ongoing project</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="description" className="text-[#2C3E50] font-medium">
                      Project Description *
                    </Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder="Please describe your project, target audience, key messages, and any specific requirements..."
                      className="mt-2 min-h-[120px] border-[#E67E22]/20 focus:border-[#E67E22]"
                      required
                    />
                  </div>

                  <div>
                    <Label className="text-[#2C3E50] font-medium">How did you find me?</Label>
                    <Select onValueChange={(value) => handleInputChange("source", value)}>
                      <SelectTrigger className="mt-2 border-[#E67E22]/20 focus:border-[#E67E22]">
                        <SelectValue placeholder="Optional - helps me understand my reach" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="google-search">Google Search</SelectItem>
                        <SelectItem value="social-media">Social Media</SelectItem>
                        <SelectItem value="referral">Referral</SelectItem>
                        <SelectItem value="publication">Saw my work in a publication</SelectItem>
                        <SelectItem value="networking">Networking event</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-[#E67E22] hover:bg-[#D35400] text-white py-3">
                    Send Project Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#2C3E50] font-serif">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#E67E22] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-medium text-[#2C3E50]">Location</div>
                    <div className="text-[#2C3E50]">Cedar Creek, TX</div>
                    <div className="text-sm text-[#2C3E50]/70">U.S.-Based, Remote Work</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-[#E67E22] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-medium text-[#2C3E50]">Email</div>
                    <div className="text-[#2C3E50]">m4artinezjesus@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-[#E67E22] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-medium text-[#2C3E50]">Phone</div>
                    <div className="text-[#2C3E50]">254-827-4871</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-[#E67E22] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-medium text-[#2C3E50]">Response Time</div>
                    <div className="text-[#2C3E50]">Within 24 hours</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#2C3E50] font-serif">Current Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#27AE60] rounded-full"></div>
                    <span className="text-[#2C3E50] font-medium">Available for new projects</span>
                  </div>
                  <div className="text-[#2C3E50]">
                    <strong>Next available start date:</strong> March 15, 2024
                  </div>
                  <div className="text-[#2C3E50]">
                    <strong>Current project load:</strong> 60% capacity
                  </div>
                  <div className="text-[#2C3E50]">
                    <strong>Preferred project types:</strong> Feature articles, ingredient deep-dives, restaurant
                    analysis
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-[#E67E22]/5">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-[#2C3E50] mb-3 font-serif">Trusted by Leading Publications</h3>
                  <p className="text-[#2C3E50] mb-4">
                    "Jesus consistently delivers well-researched, engaging content that our readers love."
                  </p>
                  <div className="text-sm text-[#D35400] font-medium">— Sarah Chen, Senior Editor, The Spruce Eats</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

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
