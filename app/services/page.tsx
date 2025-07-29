import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Clock, DollarSign, FileText, Users, ArrowRight, Star } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Feature Writing & Food Journalism",
    description:
      "Long-form articles with deep research, expert interviews, and compelling narratives that engage readers and establish authority.",
    features: [
      "2,000+ word in-depth articles",
      "Research-based reporting",
      "Cultural and trend analysis",
      "Expert source interviews",
      "AP Style formatting",
    ],
    rate: "$0.50-$0.75/word",
    turnaround: "5-7 business days",
    icon: <FileText className="h-8 w-8" />,
    color: "bg-[#E67E22]",
  },
  {
    title: "Ingredient Deep-Dives & Cooking Science",
    description:
      "Scientific approach to cooking with nutritional analysis, sourcing stories, and the chemistry behind culinary techniques.",
    features: [
      "Scientific research and analysis",
      "Nutritional breakdowns",
      "Sourcing and sustainability focus",
      "Kitchen testing and verification",
      "Consumer-friendly explanations",
    ],
    rate: "$500-$800/article",
    turnaround: "7-10 business days",
    icon: <Star className="h-8 w-8" />,
    color: "bg-[#27AE60]",
  },
  {
    title: "Restaurant & Chain Coverage",
    description:
      "Industry trend reporting with menu analysis, consumer insights, and comprehensive coverage of dining culture.",
    features: [
      "Menu analysis and reviews",
      "Industry trend reporting",
      "Consumer-focused insights",
      "Chain restaurant coverage",
      "Local dining scene analysis",
    ],
    rate: "$400-$600/piece",
    turnaround: "5-7 business days",
    icon: <Users className="h-8 w-8" />,
    color: "bg-[#D35400]",
  },
  {
    title: "Cocktail Culture & Bar Trends",
    description:
      "Beverage industry expertise covering mixology trends, recipe development, and the cultural context of drinking culture.",
    features: [
      "Beverage industry analysis",
      "Recipe development and testing",
      "Cultural context and history",
      "Bar trend reporting",
      "Cocktail technique guides",
    ],
    rate: "$350-$500/article",
    turnaround: "5-7 business days",
    icon: <Clock className="h-8 w-8" />,
    color: "bg-[#8E44AD]",
  },
  {
    title: "Grocery & Product Reviews",
    description:
      "Consumer product testing with comparative analysis and shopping guide creation for informed purchasing decisions.",
    features: [
      "Consumer product testing",
      "Comparative analysis",
      "Shopping guide creation",
      "Brand comparison studies",
      "Value assessment",
    ],
    rate: "$300-$450/review",
    turnaround: "3-5 business days",
    icon: <DollarSign className="h-8 w-8" />,
    color: "bg-[#16A085]",
  },
  {
    title: "SEO-Optimized Content",
    description:
      "Search-friendly content with keyword research, meta descriptions, and formatting optimized for organic discovery.",
    features: [
      "Keyword research included",
      "Search-friendly formatting",
      "Meta descriptions and headers",
      "Internal linking strategy",
      "Performance tracking setup",
    ],
    rate: "$0.40-$0.60/word",
    turnaround: "5-7 business days",
    icon: <ArrowRight className="h-8 w-8" />,
    color: "bg-[#E74C3C]",
  },
]

const workingStyle = [
  {
    title: "AP Style Proficiency",
    description: "All content follows Associated Press style guidelines for consistency and professionalism.",
  },
  {
    title: "CMS Platform Experience",
    description: "Familiar with WordPress, Contentful, and custom content management systems.",
  },
  {
    title: "Remote Collaboration",
    description: "Seamless communication via Slack, email, and video calls with regular progress updates.",
  },
  {
    title: "Deadline-Focused Delivery",
    description: "Consistent on-time delivery with clear project timelines and milestone communication.",
  },
  {
    title: "Original Research",
    description: "Thorough fact-checking, source verification, and original reporting for every piece.",
  },
  {
    title: "Revision Process",
    description: "Two rounds of revisions included with detailed feedback incorporation.",
  },
]

const testimonials = [
  {
    quote:
      "Jesus consistently delivers well-researched, engaging content that our readers love. His turnaround time is excellent and his writing always hits the mark.",
    author: "Sarah Chen",
    title: "Senior Editor",
    company: "The Spruce Eats",
  },
  {
    quote:
      "Working with Jesus is seamless. He understands our brand voice and delivers content that drives engagement every time.",
    author: "Michael Rodriguez",
    title: "Content Director",
    company: "Tasting Table",
  },
]

export default function ServicesPage() {
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
              <Link href="/services" className="text-[#D35400] font-semibold">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#F8FBF8] to-[#FEFEFE]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-[#2C3E50] mb-6 font-serif">Professional Writing Services</h1>
          <p className="text-xl text-[#2C3E50] mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive food journalism and content creation services designed to engage your audience, establish
            authority, and drive results for your publication or brand.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact">
              <Button size="lg" className="bg-[#E67E22] hover:bg-[#D35400] text-white px-8">
                Request Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="border-[#E67E22] text-[#E67E22] hover:bg-[#E67E22] hover:text-white px-8 bg-transparent"
              >
                View Sample Work
              </Button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#E67E22] mb-1">24hr</div>
              <div className="text-[#2C3E50] text-sm">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#E67E22] mb-1">2,800</div>
              <div className="text-[#2C3E50] text-sm">Avg Word Count</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#E67E22] mb-1">98%</div>
              <div className="text-[#2C3E50] text-sm">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-4 font-serif">Service Offerings</h2>
            <p className="text-xl text-[#2C3E50]">Specialized content creation tailored to your publication's needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <CardHeader className={`${service.color} text-white p-6`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-white/20 rounded-lg">{service.icon}</div>
                    <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
                  </div>
                  <p className="text-white/90 leading-relaxed">{service.description}</p>
                </CardHeader>

                <CardContent className="p-6">
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-[#27AE60] flex-shrink-0 mt-0.5" />
                        <span className="text-[#2C3E50] text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[#2C3E50] font-medium">Rate:</span>
                      <span className="text-[#E67E22] font-bold">{service.rate}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#2C3E50] font-medium">Turnaround:</span>
                      <span className="text-[#2C3E50]">{service.turnaround}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Working Style */}
      <section className="bg-[#F8FBF8] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-4 font-serif">How I Work</h2>
            <p className="text-xl text-[#2C3E50]">
              Professional standards and collaborative approach for every project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workingStyle.map((item, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg text-center">
                <CardContent className="p-0">
                  <h3 className="text-lg font-bold text-[#2C3E50] mb-3 font-serif">{item.title}</h3>
                  <p className="text-[#2C3E50] leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-4 font-serif">Transparent Pricing</h2>
            <p className="text-xl text-[#2C3E50]">
              Clear rates with no hidden fees - custom quotes available for larger projects
            </p>
          </div>

          <Card className="p-8 border-0 shadow-xl">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#2C3E50] mb-6 font-serif">Standard Rates</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#2C3E50]">Feature Articles (2,000+ words)</span>
                      <span className="font-semibold text-[#E67E22]">$0.50-$0.75/word</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#2C3E50]">Ingredient Deep-Dives</span>
                      <span className="font-semibold text-[#E67E22]">$500-$800/article</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#2C3E50]">Restaurant Coverage</span>
                      <span className="font-semibold text-[#E67E22]">$400-$600/piece</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-[#2C3E50]">Product Reviews</span>
                      <span className="font-semibold text-[#E67E22]">$300-$450/review</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-[#2C3E50]">SEO Content</span>
                      <span className="font-semibold text-[#E67E22]">$0.40-$0.60/word</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#2C3E50] mb-6 font-serif">What's Included</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#27AE60] flex-shrink-0 mt-0.5" />
                      <span className="text-[#2C3E50]">Thorough research and fact-checking</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#27AE60] flex-shrink-0 mt-0.5" />
                      <span className="text-[#2C3E50]">AP Style formatting</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#27AE60] flex-shrink-0 mt-0.5" />
                      <span className="text-[#2C3E50]">Two rounds of revisions</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#27AE60] flex-shrink-0 mt-0.5" />
                      <span className="text-[#2C3E50]">Meta descriptions (SEO content)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#27AE60] flex-shrink-0 mt-0.5" />
                      <span className="text-[#2C3E50]">Source citations and links</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#27AE60] flex-shrink-0 mt-0.5" />
                      <span className="text-[#2C3E50]">24-hour response time</span>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-[#E67E22]/10 rounded-lg">
                    <p className="text-[#2C3E50] text-sm">
                      <strong>Bulk Project Discounts:</strong> 10% off for 5+ articles, 15% off for 10+ articles.
                      Long-term contracts available with preferred rates.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="bg-[#F8FBF8] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-4 font-serif">Client Testimonials</h2>
            <p className="text-xl text-[#2C3E50]">What editors and content managers say about working with me</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#E67E22] text-[#E67E22]" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-[#2C3E50] mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>
                  <div>
                    <div className="font-semibold text-[#2C3E50]">{testimonial.author}</div>
                    <div className="text-[#D35400]">{testimonial.title}</div>
                    <div className="text-[#2C3E50] font-medium">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2C3E50] mb-4 font-serif">My Process</h2>
            <p className="text-xl text-[#2C3E50]">
              From initial brief to final delivery - here's how we'll work together
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E67E22] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-3 font-serif">Project Brief</h3>
              <p className="text-[#2C3E50] leading-relaxed">
                We discuss your goals, target audience, key messages, and timeline to ensure perfect alignment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#27AE60] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-3 font-serif">Research & Outline</h3>
              <p className="text-[#2C3E50] leading-relaxed">
                Thorough research, expert interviews, and detailed outline shared for your approval before writing
                begins.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#D35400] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-3 font-serif">Writing & Review</h3>
              <p className="text-[#2C3E50] leading-relaxed">
                First draft delivered on schedule with two rounds of revisions based on your feedback.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#8E44AD] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold text-[#2C3E50] mb-3 font-serif">Final Delivery</h3>
              <p className="text-[#2C3E50] leading-relaxed">
                Polished final piece delivered in your preferred format with all sources and citations included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#E67E22] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's discuss your content needs and create compelling food journalism that engages your audience. Currently
            accepting new projects for Q2 2024.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#E67E22] hover:bg-gray-100 px-8">
                Request Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#E67E22] px-8 bg-transparent"
              >
                View Portfolio
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/90 text-sm">
            <div className="flex items-center justify-center gap-2">
              <Clock className="h-4 w-4" />
              <span>24hr Response Time</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Check className="h-4 w-4" />
              <span>Two Revision Rounds</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <FileText className="h-4 w-4" />
              <span>AP Style Formatting</span>
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
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2">
                <div className="text-white/80">Feature Writing</div>
                <div className="text-white/80">Ingredient Science</div>
                <div className="text-white/80">Restaurant Coverage</div>
                <div className="text-white/80">SEO Content</div>
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
