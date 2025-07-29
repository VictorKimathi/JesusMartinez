import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, FileText, Star, ArrowRight, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const featuredWork = [
  {
    title: "The Science Behind Perfect Pasta Water",
    publication: "The Spruce Eats",
    date: "March 2024",
    excerpt: "Exploring the chemistry of starch, salt, and temperature in creating restaurant-quality pasta at home.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Ingredient Science",
    readTime: "8 min read",
    link: "#",
  },
  {
    title: "How Regional Grocery Chains Are Reshaping American Food Culture",
    publication: "Tasting Table",
    date: "February 2024",
    excerpt: "From H-E-B to Wegmans, regional grocers are driving local food trends and changing how Americans shop.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Food Culture",
    readTime: "12 min read",
    link: "#",
  },
  {
    title: "The Rise of Craft Cocktail Culture in Small-Town America",
    publication: "Eat This, Not That!",
    date: "January 2024",
    excerpt: "How mixology trends from major cities are finding new life in unexpected places across the heartland.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Cocktail Culture",
    readTime: "10 min read",
    link: "#",
  },
  {
    title: "Inside the Sourdough Revival: More Than Just Bread",
    publication: "The Spruce Eats",
    date: "December 2023",
    excerpt: "The cultural and scientific factors driving America's renewed obsession with fermented foods.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Food Trends",
    readTime: "15 min read",
    link: "#",
  },
]

const testimonials = [
  {
    quote:
      "Jesus brings a unique blend of culinary knowledge and journalistic rigor to every piece. His ingredient deep-dives are consistently our most-read content.",
    author: "Sarah Chen",
    title: "Senior Editor, The Spruce Eats",
    company: "The Spruce Eats",
  },
  {
    quote:
      "Working with Jesus is a pleasure. He delivers well-researched, engaging content that resonates with our food-obsessed audience every time.",
    author: "Michael Rodriguez",
    title: "Content Director",
    company: "Tasting Table",
  },
  {
    quote:
      "Jesus has an exceptional ability to make complex food science accessible and entertaining. His work consistently drives high engagement.",
    author: "Lisa Thompson",
    title: "Managing Editor",
    company: "Eat This, Not That!",
  },
]

export default function HomePage() {
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
              <a href="resume.docx">
                <Button className="bg-[#E67E22] hover:bg-[#D35400] text-white">Download Resume</Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="h-5 w-5 text-[#D35400]" />
                <span className="text-[#2C3E50] font-medium">Cedar Creek, TX | U.S.-Based Food Journalist</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-[#2C3E50] mb-6 font-serif leading-tight">
                Jesus Martinez
              </h1>
              <h2 className="text-2xl lg:text-3xl text-[#D35400] mb-6 font-serif">Food & Drink Feature Writer</h2>
              <p className="text-xl text-[#2C3E50] mb-8 leading-relaxed">
                Exploring American culinary culture with curiosity, research, and insight. Specializing in ingredient
                science, restaurant trends, and the stories behind our food.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/portfolio">
                  <Button size="lg" className="bg-[#E67E22] hover:bg-[#D35400] text-white px-8">
                    Read My Work
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/resume.docx">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#E67E22] text-[#E67E22] hover:bg-[#E67E22] hover:text-white px-8 bg-transparent"
                  >
                    Hire Me
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-PIqzX1p7ueIQSi5p29gEtEf165sYb_DhWw&s?height=600&width=500"
                alt="Jesus Martinez - Food Writer"
                width={500}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Bar */}
      <section className="bg-[#F8FBF8] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#27AE60] mb-2">6+</div>
              <div className="text-[#2C3E50] font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#27AE60] mb-2">2,000+</div>
              <div className="text-[#2C3E50] font-medium">Articles Published</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#27AE60] mb-2">15+</div>
              <div className="text-[#2C3E50] font-medium">Publications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#27AE60] mb-2">AFJ</div>
              <div className="text-[#2C3E50] font-medium">Member</div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-[#2C3E50] mb-6">Featured in:</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <span className="text-xl font-semibold text-[#2C3E50]">The Spruce Eats</span>
              <span className="text-xl font-semibold text-[#2C3E50]">Tasting Table</span>
              <span className="text-xl font-semibold text-[#2C3E50]">Eat This, Not That!</span>
              <span className="text-xl font-semibold text-[#2C3E50]">Modern Flavor Media</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-4 font-serif">Featured Work</h2>
            <p className="text-xl text-[#2C3E50] max-w-3xl mx-auto">
              Recent articles exploring the intersection of food science, culture, and American dining trends
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredWork.map((article, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg"
              >
                <div className="relative h-64">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#E67E22] text-white">{article.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-[#D35400]">
                    <span className="font-semibold">{article.publication}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#2C3E50] mb-3 font-serif leading-tight">{article.title}</h3>
                  <p className="text-[#2C3E50] mb-4 leading-relaxed">{article.excerpt}</p>
                  <Link
                    href={article.link}
                    className="inline-flex items-center text-[#E67E22] hover:text-[#D35400] font-semibold"
                  >
                    Read Full Article
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="border-[#E67E22] text-[#E67E22] hover:bg-[#E67E22] hover:text-white bg-transparent"
              >
                View All Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section> */}

      {/* Professional Summary */}
      <section className="bg-[#F8FBF8] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#2C3E50] mb-8 font-serif">About My Approach</h2>
          <p className="text-xl text-[#2C3E50] leading-relaxed mb-8">
            "Curious-minded, detail-driven freelance writer passionate about unpacking the 'how' and 'why' behind home
            cooking, culinary traditions, and American food trends. I bring kitchen experience and journalistic rigor to
            every story, creating content that informs, engages, and inspires readers to explore their own culinary
            curiosity."
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-[#27AE60]/10 text-[#27AE60] px-4 py-2">
              Research-Driven
            </Badge>
            <Badge variant="secondary" className="bg-[#27AE60]/10 text-[#27AE60] px-4 py-2">
              Kitchen Experience
            </Badge>
            <Badge variant="secondary" className="bg-[#27AE60]/10 text-[#27AE60] px-4 py-2">
              AP Style
            </Badge>
            <Badge variant="secondary" className="bg-[#27AE60]/10 text-[#27AE60] px-4 py-2">
              SEO Optimized
            </Badge>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-4 font-serif">What Editors Say</h2>
            <p className="text-xl text-[#2C3E50]">Trusted by leading food publications</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#E67E22] text-[#E67E22]" />
                    ))}
                  </div>
                  <blockquote className="text-[#2C3E50] mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>
                  <div>
                    <div className="font-semibold text-[#2C3E50]">{testimonial.author}</div>
                    <div className="text-[#D35400] text-sm">{testimonial.title}</div>
                    <div className="text-[#2C3E50] text-sm font-medium">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#E67E22] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">Ready to Work Together?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's create compelling food content that engages your audience and drives results. I'm currently accepting
            new projects for Q2 2024.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#E67E22] hover:bg-gray-100 px-8">
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5" />
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
          <div className="mt-8 flex items-center justify-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>24hr Response</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>Remote Collaboration</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              <span>AP Style</span>
            </div>
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
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="h-4 w-4" />
                <span>Cedar Creek, TX</span>
              </div>
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
