import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, FileText, BookOpen, Award, Users } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const services = [
    {
      id: "sop",
      title: "Statement of Purpose",
      description: "Professional SOP writing for university applications",
      price: "NPR 3,000",
      originalPrice: "NPR 4,000",
      icon: FileText,
      features: [
        "Personalized content based on your profile",
        "University-specific formatting",
        "Multiple revisions included",
        "48-72 hours delivery",
        "Plagiarism-free guarantee",
        "Expert writer assignment",
      ],
      popular: true,
    },
    {
      id: "lor",
      title: "Letter of Recommendation",
      description: "Compelling LORs from academic and professional perspectives",
      price: "NPR 2,500",
      originalPrice: "NPR 3,500",
      icon: BookOpen,
      features: [
        "Academic or professional LOR",
        "Tailored to your field of study",
        "Strong endorsement language",
        "24-48 hours delivery",
        "Multiple format options",
        "Revision support",
      ],
    },
    {
      id: "scholarship",
      title: "Scholarship Essay",
      description: "Winning essays for scholarship applications",
      price: "NPR 4,000",
      originalPrice: "NPR 5,500",
      icon: Award,
      features: [
        "Research-based content",
        "Scholarship-specific approach",
        "Compelling narrative structure",
        "72-96 hours delivery",
        "Success-oriented writing",
        "Expert review process",
      ],
    },
    {
      id: "combo",
      title: "Complete Package",
      description: "SOP + 2 LORs + Scholarship Essay",
      price: "NPR 8,500",
      originalPrice: "NPR 12,000",
      icon: Users,
      features: [
        "All documents included",
        "Consistent narrative across documents",
        "Priority support",
        "5-7 days delivery",
        "Unlimited minor revisions",
        "Dedicated project manager",
        "Free consultation call",
      ],
      bestValue: true,
    },
  ]

  const additionalServices = [
    {
      title: "CV/Resume Writing",
      price: "NPR 2,000",
      description: "Professional academic CV or resume",
    },
    {
      title: "Personal Statement",
      price: "NPR 3,500",
      description: "For UK university applications",
    },
    {
      title: "Motivation Letter",
      price: "NPR 2,800",
      description: "For European university applications",
    },
    {
      title: "Research Proposal",
      price: "NPR 5,000",
      description: "For PhD and research programs",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 bg-blue-100 text-blue-800">💰 Transparent Pricing</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Affordable Pricing for Quality Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Choose from our range of professional writing services designed to help you succeed in your academic
              journey.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Main Services</h2>
            <p className="text-gray-600">Professional writing services with guaranteed quality</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={service.id}
                  className={`relative hover:shadow-lg transition-shadow ${
                    service.popular ? "ring-2 ring-blue-500" : ""
                  } ${service.bestValue ? "ring-2 ring-green-500" : ""}`}
                >
                  {service.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white">
                      Most Popular
                    </Badge>
                  )}
                  {service.bestValue && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white">
                      Best Value
                    </Badge>
                  )}

                  <CardHeader className="text-center">
                    <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-sm">{service.description}</CardDescription>
                    <div className="pt-4">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-3xl font-bold text-gray-900">{service.price}</span>
                        <span className="text-lg text-gray-500 line-through">{service.originalPrice}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button
                        className={`w-full ${
                          service.popular || service.bestValue
                            ? "bg-blue-600 hover:bg-blue-700"
                            : "bg-gray-900 hover:bg-gray-800"
                        }`}
                      >
                        Order Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-gray-600">Specialized writing services for specific requirements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                  <div className="pt-2">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full bg-transparent">
                      Order Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Services?</h2>
            <p className="text-gray-600">Quality guarantees that come with every order</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">100% original content with unlimited revisions until you're satisfied</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">On-Time Delivery</h3>
              <p className="text-gray-600">
                We respect deadlines and deliver your documents on or before the promised date
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Writers</h3>
              <p className="text-gray-600">Our team consists of experienced writers with advanced degrees</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">Contact us today for a free consultation and quote</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Free Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
