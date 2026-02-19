import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Award, Users, Globe, Zap, TrendingUp, Target, CheckCircle, ArrowRight, Star, Lightbulb, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
                About <span className="gradient-text">TRD</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Nepal's most trusted study abroad platform, helping 5000+ students achieve admission to top universities worldwide since our inception.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white">
                  <Link href="/contact">Get Started Today</Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-500/30 p-8 text-center hover:border-blue-500/60 transition-all">
                <div className="text-4xl font-bold text-blue-400 mb-2">5000+</div>
                <div className="text-gray-300 text-sm">Students Guided</div>
              </Card>
              <Card className="bg-gradient-to-br from-red-500/20 to-red-600/20 border-red-500/30 p-8 text-center hover:border-red-500/60 transition-all">
                <div className="text-4xl font-bold text-red-400 mb-2">95%</div>
                <div className="text-gray-300 text-sm">Success Rate</div>
              </Card>
              <Card className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border-cyan-500/30 p-8 text-center hover:border-cyan-500/60 transition-all">
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300 text-sm">Countries</div>
              </Card>
              <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-500/30 p-8 text-center hover:border-purple-500/60 transition-all">
                <div className="text-4xl font-bold text-purple-400 mb-2">1000+</div>
                <div className="text-gray-300 text-sm">Universities</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl font-bold text-white text-center mb-16">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <p className="text-lg text-gray-300 leading-relaxed">
                Founded with a vision to transform international education accessibility, TRD has become Nepal's most trusted study abroad platform. What started as a passion to help friends with their applications has grown into a comprehensive service supporting thousands of students.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Today, we proudly serve students across 50+ countries, partnering with 1000+ universities and maintaining a 95% success rate. Our commitment to quality, affordability, and personalized service remains unchanged.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-red-500"></div>
                <p className="text-gray-400 italic">Turning dreams into reality, one admission at a time.</p>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 rounded-lg bg-blue-500/10 border border-blue-500/30">
                  <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-red-500/10 border border-red-500/30">
                  <div className="text-3xl font-bold text-red-400 mb-2">24/7</div>
                  <div className="text-sm text-gray-400">Support</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">100+</div>
                  <div className="text-sm text-gray-400">Partner Universities</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-purple-500/10 border border-purple-500/30">
                  <div className="text-3xl font-bold text-purple-400 mb-2">Global</div>
                  <div className="text-sm text-gray-400">Reach</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/20 via-slate-900 to-red-900/20 border-y border-slate-700">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-blue-500/50 transition-all p-8 animate-fade-in-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To provide world-class educational guidance and professional services that empower every student to achieve their international education dreams, regardless of their background or circumstances.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-red-500/50 transition-all p-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center border border-red-500/30">
                  <Lightbulb className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To become the leading study abroad platform globally, known for excellence, innovation, and student success. We envision a world where talent and ambition, not privilege, determine educational opportunities.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl font-bold text-white text-center mb-16">Why Choose TRD?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Expert Team", desc: "Experienced counselors with 10+ years in education consulting" },
              { icon: TrendingUp, title: "95% Success Rate", desc: "Proven track record with admissions to top tier universities" },
              { icon: Globe, title: "Global Network", desc: "Partnerships with 1000+ universities in 50+ countries" },
              { icon: Award, title: "Personalized Service", desc: "Individual attention to understand your unique goals" },
              { icon: CheckCircle, title: "Affordable Pricing", desc: "High-quality services at competitive rates" },
              { icon: Zap, title: "24/7 Support", desc: "Always available to answer questions and provide updates" },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <Card key={idx} className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-blue-500/50 transition-all p-8 group animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-blue-500/30">
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

      {/* Core Values */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/20 via-slate-900 to-red-900/20 border-y border-slate-700">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl font-bold text-white text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: CheckCircle, title: "Quality First", desc: "Rigorous review ensures every document meets the highest standards", color: "blue" },
              { icon: Heart, title: "Student-Centric", desc: "Your success is our success - we prioritize your goals above all" },
              { icon: Award, title: "Integrity", desc: "Authenticity and honesty in every document we create" },
            ].map((value, idx) => {
              const Icon = value.icon
              const colorClass = value.color === "blue" ? "from-blue-500/20 to-blue-600/20 border-blue-500/30" : "from-slate-800 to-slate-900 border-slate-700"
              return (
                <Card key={idx} className={`bg-gradient-to-br ${colorClass} p-8 text-center hover:border-blue-500/50 transition-all animate-fade-in-up`} style={{ animationDelay: `${idx * 0.15}s` }}>
                  <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                    <Icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.desc}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl text-gray-300 mb-8">Start your journey to top universities today with personalized guidance</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white group">
              <Link href="/contact" className="flex items-center gap-2">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-gray-500 text-gray-300 hover:bg-gray-500/10">
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
