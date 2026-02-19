"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { BookOpen, Target, Users, CheckCircle, Clock, Zap, Award, TrendingUp, ArrowRight, Sparkles } from "lucide-react"

export default function TestPrepPage() {
  const [selectedTest, setSelectedTest] = useState(0)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const tests = [
    {
      id: "sat",
      title: "SAT Preparation",
      emoji: "📚",
      description: "Master critical reading, math, and writing for top US universities",
      price: "NPR 3,500",
      duration: "12 weeks",
      features: ["Full-length tests", "Section coaching", "Time management", "Study plans", "Weekly tracking"],
      successRate: "98%",
      avgScore: "1520",
      highlights: ["Perfect score strategies", "Practice materials", "One-on-one support"],
    },
    {
      id: "ielts",
      title: "IELTS Preparation",
      emoji: "🌍",
      description: "Expert training for listening, reading, writing, and speaking modules",
      price: "NPR 2,500",
      duration: "10 weeks",
      features: ["Module-wise training", "Speaking practice", "Writing feedback", "Mock tests", "Score guarantee"],
      successRate: "96%",
      avgScore: "7.5",
      highlights: ["British & American", "Speaking partner", "Exam tips"],
    },
    {
      id: "toefl",
      title: "TOEFL Preparation",
      emoji: "🎯",
      description: "Comprehensive TOEFL iBT training for English proficiency",
      price: "NPR 2,800",
      duration: "10 weeks",
      features: ["iBT format", "Integrated skills", "Score improvement", "Mock exams", "Personalized plans"],
      successRate: "94%",
      avgScore: "102",
      highlights: ["Latest format", "Speaking practice", "Score tracking"],
    },
    {
      id: "gre",
      title: "GRE Preparation",
      emoji: "🧮",
      description: "Advanced GRE coaching for graduate admissions",
      price: "NPR 4,000",
      duration: "14 weeks",
      features: ["Verbal & Quant", "Analytical writing", "Full-length tests", "Strategy coaching", "Progress tracking"],
      successRate: "93%",
      avgScore: "325",
      highlights: ["Top MBA schools", "Score guarantee", "Expert instructors"],
    },
    {
      id: "gmat",
      title: "GMAT Preparation",
      emoji: "💼",
      description: "Expert GMAT coaching for business school admissions",
      price: "NPR 4,500",
      duration: "16 weeks",
      features: ["Quant mastery", "Verbal excellence", "AWA practice", "Mock CATs", "Personalized coaching"],
      successRate: "97%",
      avgScore: "710",
      highlights: ["MBA focused", "Score improvement", "Live sessions"],
    },
    {
      id: "duolingo",
      title: "Duolingo Preparation",
      emoji: "🎓",
      description: "Fast-track English proficiency certification for international universities",
      price: "NPR 1,500",
      duration: "4 weeks",
      features: ["Practice questions", "Test strategies", "Quick prep", "Score guarantee", "Certificate ready"],
      successRate: "99%",
      avgScore: "120",
      highlights: ["Fastest option", "Global accepted", "Affordable"],
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
            Master Your Test <span className="gradient-text">Prep</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Expert coaching for SAT, IELTS, TOEFL, GRE, GMAT, Duolingo and more. Achieve your target score with our proven strategies.
          </p>
        </div>
      </section>

      {/* Tests Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Choose Your Test</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tests.map((test, idx) => (
              <Card key={test.id} className="group bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-blue-500/50 transition-all duration-300 overflow-hidden cursor-pointer" onClick={() => setSelectedTest(idx)}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
                
                <div className="relative p-8 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl">{test.emoji}</span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-400">{test.successRate}</div>
                      <div className="text-xs text-gray-400">Success Rate</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{test.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 flex-1">{test.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Clock className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      {test.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <TrendingUp className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      Avg Score: {test.avgScore}
                    </div>
                  </div>

                  <div className="inline-block mb-6">
                    <span className="text-2xl font-bold text-blue-400">{test.price}</span>
                    <span className="text-sm text-gray-400 ml-2">onwards</span>
                  </div>

                  <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white group/btn">
                    <Link href={`/contact?test=${test.id}`} className="flex items-center justify-center gap-2">
                      Enroll Now
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Test Details */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
            <div className="p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="text-6xl">{tests[selectedTest].emoji}</div>
                <div>
                  <h2 className="text-4xl font-bold text-white">{tests[selectedTest].title}</h2>
                  <p className="text-gray-400 mt-2">{tests[selectedTest].description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12 pb-12 border-b border-slate-700">
                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30 text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">{tests[selectedTest].price}</div>
                  <div className="text-sm text-gray-400">Starting Price</div>
                </div>
                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30 text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">{tests[selectedTest].duration}</div>
                  <div className="text-sm text-gray-400">Course Duration</div>
                </div>
                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30 text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">{tests[selectedTest].successRate}</div>
                  <div className="text-sm text-gray-400">Success Rate</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-xl font-bold text-white mb-6">What's Included</h3>
                  <div className="space-y-3">
                    {tests[selectedTest].features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-6">Why This Course</h3>
                  <div className="space-y-3">
                    {tests[selectedTest].highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-blue-500/10 border border-blue-500/30">
                        <Sparkles className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                        <span className="text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Button asChild size="lg" className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white h-12">
                <Link href={`/contact?test=${tests[selectedTest].id}`}>Start Preparing Today</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800 border-t border-slate-700">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl font-bold text-white text-center mb-16">Why Our Prep?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Expert Instructors", desc: "Certified professionals with 10+ years experience" },
              { icon: TrendingUp, title: "Proven Results", desc: "98% of students reach their target scores" },
              { icon: Users, title: "Small Batches", desc: "Personalized attention for maximum learning" },
              { icon: Zap, title: "Latest Materials", desc: "Updated practice tests and study resources" },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <Card key={idx} className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-8 text-center hover:border-blue-500/50 transition-all animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Ace Your Test?</h2>
          <p className="text-xl text-gray-300 mb-8">Get personalized coaching and achieve your target score</p>
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white px-8 h-12 group">
            <Link href="/contact" className="flex items-center gap-2">
              Get Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
