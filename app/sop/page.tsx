import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, FileText, Target, Users, Award, Clock, ArrowRight, Sparkles, TrendingUp } from "lucide-react"

export const metadata = {
  title: "SOP Writing & Essay Service | TRD - Professional Statements of Purpose",
  description: "Expert SOP and essay writing service. Get professionally written Statements of Purpose that get admissions. Custom, plagiarism-free SOPs from TRD.",
}

export default function SOPPage() {
  const sopTypes = [
    {
      title: "Undergraduate SOP",
      description: "For bachelor's degree programs",
      keyPoints: ["Academic background", "Career aspirations", "Program fit", "Future goals"],
      length: "250-500 words",
      price: "NPR 1,800",
    },
    {
      title: "Graduate SOP",
      description: "For master's programs",
      keyPoints: ["Research interests", "Academic excellence", "Professional experience", "Research goals"],
      length: "500-800 words",
      price: "NPR 2,200",
    },
    {
      title: "Research SOP",
      description: "For research-focused programs",
      keyPoints: ["Research proposal", "Methodology", "Academic rigor", "Publication plans"],
      length: "600-900 words",
      price: "NPR 2,800",
    },
    {
      title: "PhD SOP",
      description: "For doctoral programs",
      keyPoints: ["Research expertise", "Innovation potential", "Academic contributions", "Future vision"],
      length: "800-1200 words",
      price: "NPR 3,500",
    },
  ]

  const process = [
    { step: "01", title: "Profile Assessment", description: "Evaluate your background, achievements, and goals" },
    { step: "02", title: "Research & Strategy", description: "Study university requirements and craft strategy" },
    { step: "03", title: "First Draft", description: "Write compelling SOP with your unique story" },
    { step: "04", title: "Review & Feedback", description: "Get detailed feedback and revision suggestions" },
    { step: "05", title: "Revisions", description: "Up to 2 free revisions for perfection" },
    { step: "06", title: "Final Delivery", description: "Get polished, admission-ready SOP" },
  ]

  const mistakes = [
    { mistake: "Generic Content", fix: "Personalized and university-specific writing" },
    { mistake: "Poor Grammar", fix: "Native English speakers ensuring fluency" },
    { mistake: "Wrong Tone", fix: "Professional yet personable approach" },
    { mistake: "Unclear Goals", fix: "Clear articulation of aspirations" },
    { mistake: "Copying Online", fix: "100% original, plagiarism-checked" },
    { mistake: "Missing Key Points", fix: "Strategic inclusion of all strengths" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative container mx-auto max-w-7xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Professional <span className="gradient-text">SOP Writing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Expert Statement of Purpose writing that showcases your unique story and gets you admitted to top universities worldwide. Custom, plagiarism-free SOPs tailored to your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white">
                <Link href="/contact">Order Your SOP Today</Link>
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mt-12">
            <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-500/30 p-6 text-center animate-fade-in-up">
              <div className="text-3xl font-bold text-blue-400 mb-2">1000+</div>
              <div className="text-gray-300 text-sm">SOPs Written</div>
            </Card>
            <Card className="bg-gradient-to-br from-red-500/20 to-red-600/20 border-red-500/30 p-6 text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl font-bold text-red-400 mb-2">95%</div>
              <div className="text-gray-300 text-sm">Acceptance Rate</div>
            </Card>
            <Card className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border-cyan-500/30 p-6 text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300 text-sm">Countries</div>
            </Card>
            <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-500/30 p-6 text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl font-bold text-purple-400 mb-2">2-5 Days</div>
              <div className="text-gray-300 text-sm">Quick Turnaround</div>
            </Card>
          </div>
        </div>
      </section>

      {/* SOP Types */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl font-bold text-white text-center mb-16">Types of SOPs We Write</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {sopTypes.map((sop, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-blue-500/50 transition-all p-8 animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <h3 className="text-2xl font-bold text-white mb-2">{sop.title}</h3>
                <p className="text-gray-400 mb-4">{sop.description}</p>
                <ul className="space-y-2 mb-6">
                  {sop.keyPoints.map((point, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center pt-4 border-t border-slate-700">
                  <div className="text-sm text-gray-400">{sop.length}</div>
                  <div className="text-lg font-bold text-blue-400">{sop.price}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/20 via-slate-900 to-red-900/20 border-y border-slate-700">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl font-bold text-white text-center mb-16">Our 6-Step Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {process.map((p, idx) => (
              <div key={idx} className="relative animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500/30 to-red-500/30 border-2 border-blue-500/50 flex items-center justify-center">
                      <span className="text-2xl font-bold text-blue-400">{p.step}</span>
                    </div>
                    {idx < process.length - 1 && (
                      <div className="absolute left-1/2 top-16 w-0.5 h-12 bg-gradient-to-b from-blue-500/50 to-transparent transform -translate-x-1/2"></div>
                    )}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                    <p className="text-gray-400">{p.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl font-bold text-white text-center mb-16">SOP Mistakes We Avoid</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {mistakes.map((item, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-6 hover:border-red-500/50 transition-all animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center border border-red-500/30">
                      <span className="text-red-400 font-bold">✕</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{item.mistake}</h3>
                    <p className="text-gray-400 text-sm mb-3">{item.fix}</p>
                    <div className="flex items-center gap-2 text-green-400 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      Our approach
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Get Your Professional SOP Today</h2>
          <p className="text-xl text-gray-300 mb-8">Join 1000+ students who got admitted with our expert SOPs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white group">
              <Link href="/contact" className="flex items-center gap-2">
                Order Your SOP
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
