import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, BookOpen, Globe, Zap, Award, Users, FileText, Compass, Plane, Star, TrendingUp, CheckCircle } from "lucide-react"

export default function HomePage() {
  const services = [
    { icon: BookOpen, title: "Test Preparation", description: "SAT, IELTS, TOEFL, GRE, GMAT, PTE & more", link: "/test-prep", color: "#0066ff" },
    { icon: FileText, title: "SOP & Essay Writing", description: "Professional documents that get admissions", link: "/sop", color: "#ff4444" },
    { icon: Compass, title: "Study Abroad Counseling", description: "Expert guidance for university selection", link: "/counseling", color: "#00d4ff" },
    { icon: Plane, title: "Visa & Immigration", description: "Complete visa assistance for all countries", link: "/visa", color: "#ff6600" },
    { icon: Award, title: "Scholarship Guidance", description: "Find and secure global scholarships", link: "/scholarships", color: "#00ff88" },
    { icon: Users, title: "Interview Preparation", description: "Master university & visa interviews", link: "/interview-prep", color: "#ff00ff" },
  ]

  const stats = [
    { number: "5000+", label: "Students Guided", icon: "👨‍🎓" },
    { number: "95%", label: "Success Rate", icon: "🎯" },
    { number: "50+", label: "Countries Served", icon: "🌍" },
    { number: "1000+", label: "Universities", icon: "🏫" },
  ]

  const testimonials = [
    { name: "Aarav Sharma", uni: "MIT, USA", text: "Got admitted with full scholarship!", score: "SAT: 1550" },
    { name: "Priya Singh", uni: "Oxford, UK", text: "IELTS 8.5 - Dream university!", score: "IELTS: 8.5" },
    { name: "Rohan Patel", uni: "U of Toronto, Canada", text: "Smooth visa & interview process!", score: "TOEFL: 115" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 w-fit">
                <Zap className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-semibold text-blue-400">Trusted by 5000+ Students Worldwide</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                  <span className="block text-white">Your Path to</span>
                  <span className="gradient-text text-6xl md:text-7xl">Global Education</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                  Complete study abroad platform with expert guidance in test prep, SOP writing, visa assistance, and university admissions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg h-12 px-8 group">
                  <Link href="#services" className="flex items-center gap-2">
                    Explore Services
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-gray-500 text-gray-300 hover:bg-gray-500/10 rounded-lg h-12 px-8">
                  <Link href="/contact">Get Free Consultation</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-8">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-blue-500/30 transition-all">
                    <div className="text-2xl font-bold text-blue-400">{stat.number}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-96 md:h-full flex items-center justify-center animate-float">
              <div className="relative w-full h-full max-h-96 md:max-h-full">
                <Image
                  src=" Public/Logo.png"
                  alt="TRD Study Abroad"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-24 px-4 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Complete Study Abroad <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Everything you need for a successful journey to top universities</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <Link key={idx} href={service.link}>
                  <Card className="h-full bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer overflow-hidden">
                    {/* Animated gradient border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
                    
                    <div className="relative p-8 h-full flex flex-col">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-red-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-blue-500/30">
                        <Icon className="w-8 h-8 text-blue-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                      <p className="text-gray-400 flex-1 group-hover:text-gray-300 transition-colors">{service.description}</p>
                      <div className="flex items-center gap-2 text-blue-400 mt-4 group-hover:gap-3 transition-all">
                        <span className="text-sm font-semibold">Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 px-4 bg-gradient-to-r from-blue-900/20 via-slate-900 to-red-900/20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">95% Success Rate</h3>
              </div>
              <p className="text-gray-400">Our proven methodology ensures maximum admission success across tier-1 universities</p>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center border border-red-500/30">
                  <Award className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Expert Team</h3>
              </div>
              <p className="text-gray-400">Experienced counselors, test instructors, and admission specialists dedicated to your success</p>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
                  <Globe className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Global Network</h3>
              </div>
              <p className="text-gray-400">Direct partnerships with 1000+ universities in 50+ countries worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-xl text-gray-400">Real students achieving their dreams</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Card key={i} className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-blue-500/50 transition-all group" style={{ animationDelay: `${i * 0.2}s` }}>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="font-bold text-white text-lg">{t.name}</div>
                      <div className="text-sm text-blue-400">{t.uni}</div>
                    </div>
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{t.text}"</p>
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30">
                    <span className="text-sm text-blue-400 font-semibold">{t.score}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 bg-gradient-to-r from-blue-600/20 via-slate-900 to-red-600/20 border-y border-slate-700">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-500 rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
        </div>

        <div className="relative container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start your journey to top universities today. Get personalized guidance from our expert counselors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg h-12 px-8 group">
              <Link href="/contact" className="flex items-center gap-2">
                Book Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-gray-500 text-gray-300 hover:bg-gray-500/10 rounded-lg h-12 px-8">
              <a href="https://wa.me/9779704565262" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
