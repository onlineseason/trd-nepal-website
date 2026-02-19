"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FileText, Users, Award, BookOpen, CheckCircle, Clock, Star, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function ServicesPage() {
  const router = useRouter()
  const [selectedTab, setSelectedTab] = useState(0)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const handleOrderNow = (serviceType: string) => {
    sessionStorage.setItem("selectedService", serviceType)
    router.push("/contact#contact-form")
  }

  const services = [
    {
      id: "sop",
      title: "Statement of Purpose",
      icon: FileText,
      emoji: "📄",
      price: "NPR 1,800",
      description: "Craft compelling SOPs that showcase your academic journey and career aspirations.",
      features: ["Personalized content", "University-specific", "Expert editing", "Plagiarism-free", "2 free revisions"],
      deliveryTime: "3-5 days",
      highlights: ["95% acceptance rate", "1000+ students placed", "Global universities"],
    },
    {
      id: "motivation",
      title: "Motivation Letters",
      icon: Sparkles,
      emoji: "✨",
      price: "NPR 1,500",
      description: "Compelling motivation letters that highlight your unique qualities and goals.",
      features: ["Custom written", "Emotion-driven", "Goal-aligned", "Professional tone", "Multiple versions"],
      deliveryTime: "2-4 days",
      highlights: ["Visa-approved format", "Research-backed", "Interview-ready"],
    },
    {
      id: "essay",
      title: "Essay & LOR Writing",
      icon: BookOpen,
      emoji: "📚",
      price: "NPR 2,000",
      description: "Professional essays and letters of recommendation that strengthen your profile.",
      features: ["Original writing", "Topic expertise", "Editing included", "Fast turnaround", "Unlimited revisions"],
      deliveryTime: "2-5 days",
      highlights: ["Scholarship essays", "Academic focus", "Professional LORs"],
    },
    {
      id: "editing",
      title: "Document Review & Editing",
      icon: Award,
      emoji: "✏️",
      price: "NPR 1,000",
      description: "Expert review and editing of your academic documents for maximum impact.",
      features: ["Grammar & structure", "Content review", "Clarity improvement", "Quick feedback", "Detailed comments"],
      deliveryTime: "1-3 days",
      highlights: ["Line-by-line editing", "Quality guarantee", "Expert feedback"],
    },
    {
      id: "cv",
      title: "CV & Resume Writing",
      icon: Users,
      emoji: "👔",
      price: "NPR 1,200",
      description: "Professional CVs and resumes optimized for international universities and scholarships.",
      features: ["ATS-optimized", "Achievement-focused", "Format flexibility", "Career summary", "Contact optimization"],
      deliveryTime: "2-3 days",
      highlights: ["Scholarship CV", "Academic focus", "Global standard"],
    },
    {
      id: "complete",
      title: "Complete Application Package",
      icon: Sparkles,
      emoji: "🎁",
      price: "NPR 5,000",
      description: "All-in-one comprehensive package covering all your application needs.",
      features: ["SOP + Letter", "Essay editing", "CV/Resume", "Document review", "Interview prep"],
      deliveryTime: "10-15 days",
      highlights: ["Save 40%", "Dedicated mentor", "Lifetime support"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative container mx-auto max-w-7xl text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            Professional <span className="gradient-text">Document Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Expert writing, editing, and review services that strengthen your application and boost your chances of admission.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <Card key={service.id} className="group bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-blue-500/50 transition-all duration-300 overflow-hidden cursor-pointer" onClick={() => setSelectedTab(idx)}>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
                  
                  <div className="relative p-8 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-blue-500/30">
                        <Icon className="w-8 h-8 text-blue-400" />
                      </div>
                      <span className="text-3xl">{service.emoji}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                    <div className="inline-block mb-4">
                      <span className="text-2xl font-bold text-blue-400">{service.price}</span>
                      <span className="text-sm text-gray-400 ml-2">onwards</span>
                    </div>

                    <p className="text-gray-400 text-sm mb-4 flex-1">{service.description}</p>

                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
                      <Clock className="w-4 h-4" />
                      Delivery in {service.deliveryTime}
                    </div>

                    <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white group/btn">
                      <Link href={`/contact?service=${service.id}`} className="flex items-center justify-center gap-2">
                        Get Started
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detailed Service Info */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
            <div className="p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="text-5xl">{services[selectedTab].emoji}</div>
                <div>
                  <h2 className="text-4xl font-bold text-white">{services[selectedTab].title}</h2>
                  <p className="text-gray-400 mt-2">Complete details and features</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">All Features Included</h3>
                  <div className="space-y-3">
                    {services[selectedTab].features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Why Choose This Service</h3>
                  <div className="space-y-3">
                    {services[selectedTab].highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-blue-500/10 border border-blue-500/30">
                        <Star className="w-5 h-5 text-yellow-400 flex-shrink-0 fill-yellow-400" />
                        <span className="text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-700">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">{services[selectedTab].price}</div>
                    <div className="text-sm text-gray-400">Starting price</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">{services[selectedTab].deliveryTime}</div>
                    <div className="text-sm text-gray-400">Delivery time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">2</div>
                    <div className="text-sm text-gray-400">Free revisions</div>
                  </div>
                </div>

                <Button asChild size="lg" className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white h-12">
                  <Link href={`/contact?service=${services[selectedTab].id}`}>Order Now</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-t border-slate-700">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Not Sure Which Service?</h2>
          <p className="text-xl text-gray-300 mb-8">Get personalized recommendations from our expert counselors</p>
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white px-8 h-12">
            <Link href="/counseling">Get Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
