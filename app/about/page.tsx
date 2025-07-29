import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Award, BookOpen, ChefHat, Utensils, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const timeline = [
  {
    year: "2018–Present",
    title: "Freelance Food & Lifestyle Writer",
    description:
      "Writing long-form, research-based food features for digital publications. Contributing to The Spruce Eats, Tasting Table, and Eat This, Not That! with 2,000+ word articles exploring U.S. restaurant chains, snack trends, and home cooking practices.",
    icon: <BookOpen className="h-6 w-6" />,
  },
  {
    year: "2017–2018",
    title: "Food Content Contributor - Modern Flavor Media",
    description:
      "Delivered weekly trend roundups and grocery product reviews. Covered U.S. grocery chains and seasonal meal planning with a consumer-first perspective on pantry staples and products.",
    icon: <Utensils className="h-6 w-6" />,
  },
  {
    year: "2015–2017",
    title: "Kitchen Staff & Line Cook",
    description:
      "Hands-on experience in Austin, TX independent kitchens. Developed expertise in ingredient sourcing and prep techniques, providing the foundation for authentic food writing and technical knowledge.",
    icon: <ChefHat className="h-6 w-6" />,
  },
  {
    year: "2014",
    title: "Associate Degree in Communications",
    description:
      "Austin Community College - Built foundational skills in writing, research, and media communication that inform my approach to food journalism today.",
    icon: <Award className="h-6 w-6" />,
  },
]

const philosophy = [
  {
    title: "Research-Driven Approach",
    description:
      "Every article begins with thorough research, from academic studies to expert interviews, ensuring accuracy and depth in every piece.",
  },
  {
    title: "Kitchen-Informed Writing",
    description:
      "My hands-on kitchen experience provides authentic insights into cooking techniques, ingredient behavior, and culinary processes.",
  },
  {
    title: "Reader-Focused Content",
    description:
      "I structure articles with actionable insights and clear explanations, making complex food science accessible to home cooks.",
  },
  {
    title: "Cultural Context",
    description:
      "Understanding food through the lens of American culture, regional differences, and evolving consumer preferences.",
  },
]

export default function AboutPage() {
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
              <Link href="/about" className="text-[#D35400] font-semibold">
                About
              </Link>
              <Link href="/portfolio" className="text-[#2C3E50] hover:text-[#D35400] transition-colors">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-[#2C3E50] mb-6 font-serif">From Kitchen to Keyboard</h1>
              <p className="text-xl text-[#2C3E50] mb-8 leading-relaxed">
                My journey as a food writer began in the kitchens of Austin, Texas, where I learned that the best food
                stories come from understanding both the science and soul of cooking. Today, I bring that hands-on
                experience to every article I write.
              </p>
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2 text-[#D35400]">
                  <MapPin className="h-5 w-5" />
                  <span className="font-medium">Cedar Creek, TX</span>
                </div>
                <div className="flex items-center gap-2 text-[#D35400]">
                  <Clock className="h-5 w-5" />
                  <span className="font-medium">6+ Years Writing</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Jesus Martinez in kitchen"
                width={500}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Philosophy */}
      <section className="bg-[#F8FBF8] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-4 font-serif">My Writing Philosophy</h2>
            <p className="text-xl text-[#2C3E50] max-w-3xl mx-auto">
              Every great food story starts with curiosity and ends with understanding. I believe in making complex
              culinary concepts accessible while maintaining journalistic integrity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {philosophy.map((item, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-[#2C3E50] mb-3 font-serif">{item.title}</h3>
                  <p className="text-[#2C3E50] leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-4 font-serif">Professional Journey</h2>
            <p className="text-xl text-[#2C3E50]">
              From line cook to published food journalist - a path that informs every story I tell
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#E67E22] rounded-full flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-xl font-bold text-[#2C3E50] font-serif">{item.title}</h3>
                    <Badge className="bg-[#27AE60]/10 text-[#27AE60]">{item.year}</Badge>
                  </div>
                  <p className="text-[#2C3E50] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Advantage */}
      <section className="bg-[#F8FBF8] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#2C3E50] mb-6 font-serif">Texas-Based, Nationally Focused</h2>
              <p className="text-xl text-[#2C3E50] mb-6 leading-relaxed">
                Being based in Texas gives me unique insights into American food culture. From H-E-B's regional
                influence to understanding how food trends spread from coast to heartland, my location provides
                authentic perspective on how Americans really eat.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#E67E22] rounded-full mt-2"></div>
                  <p className="text-[#2C3E50]">
                    Firsthand familiarity with major grocery chains and regional preferences
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#E67E22] rounded-full mt-2"></div>
                  <p className="text-[#2C3E50]">
                    Understanding of how food trends evolve across different American regions
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#E67E22] rounded-full mt-2"></div>
                  <p className="text-[#2C3E50]">Access to diverse culinary influences from Mexican to BBQ traditions</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Texas food culture"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-4 font-serif">Core Competencies</h2>
            <p className="text-xl text-[#2C3E50]">Skills developed through years of kitchen work and food journalism</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-[#E67E22]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-[#E67E22]" />
                </div>
                <h3 className="text-xl font-bold text-[#2C3E50] mb-3 font-serif">Feature Writing</h3>
                <p className="text-[#2C3E50] leading-relaxed">
                  Long-form journalism with deep research, expert interviews, and compelling narratives
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-[#27AE60]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChefHat className="h-8 w-8 text-[#27AE60]" />
                </div>
                <h3 className="text-xl font-bold text-[#2C3E50] mb-3 font-serif">Culinary Knowledge</h3>
                <p className="text-[#2C3E50] leading-relaxed">
                  Hands-on kitchen experience informing authentic ingredient and technique coverage
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-[#D35400]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-[#D35400]" />
                </div>
                <h3 className="text-xl font-bold text-[#2C3E50] mb-3 font-serif">Industry Analysis</h3>
                <p className="text-[#2C3E50] leading-relaxed">
                  Restaurant trends, grocery insights, and consumer behavior analysis
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#E67E22] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">Let's Tell Your Food Story</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Whether you need ingredient deep-dives, restaurant analysis, or cultural food features, I bring the perfect
            blend of culinary knowledge and journalistic expertise to every project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/portfolio">
              <Button size="lg" className="bg-white text-[#E67E22] hover:bg-gray-100 px-8">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#E67E22] px-8 bg-transparent"
              >
                Start a Project
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
