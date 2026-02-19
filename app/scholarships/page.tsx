import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Award, TrendingUp, Globe, Users, Clock, ArrowRight, Sparkles, Target } from "lucide-react"

export const metadata = {
  title: "Scholarship Guidance | TRD - Find & Secure Scholarships",
  description: "Expert scholarship guidance to find and secure funding for your studies. Get support in scholarship applications, essays, and interview preparation from TRD.",
}

export default function ScholarshipsPage() {
  const scholarships = [
    {
      name: "Merit-Based Scholarships",
      description: "Academic excellence based funding",
      benefits: ["50-100% tuition coverage", "Based on GPA/test scores", "Renewable annually", "Global opportunities"],
      successRate: "78%",
      avgAward: "$25,000+/year",
    },
    {
      name: "Need-Based Scholarships",
      description: "Financial need based support",
      benefits: ["Full financial coverage", "Income verification", "Additional living allowance", "Campus employment"],
      successRate: "62%",
      avgAward: "$30,000+/year",
    },
    {
      name: "Country-Specific Scholarships",
      description: "Government & institution programs",
      benefits: ["Sponsored by governments", "Full tuition + stipend", "Unique to each country", "Special conditions apply"],
      successRate: "45%",
      avgAward: "$40,000+/year",
    },
    {
      name: "Research Scholarships",
      description: "For research and innovation",
      benefits: ["Research funding", "Publication support", "Conference attendance", "Graduate assistance"],
      successRate: "55%",
      avgAward: "$20,000+/year",
    },
  ]

  const steps = [
    { number: "01", title: "Profile Assessment", description: "Evaluate your academic profile, test scores, and eligibility" },
    { number: "02", title: "Scholarship Search", description: "Identify scholarships matching your profile and goals" },
    { number: "03", title: "Application Prep", description: "Prepare strong essays, statements, and documentation" },
    { number: "04", title: "Interview Support", description: "Mock interviews and interview coaching" },
    { number: "05", title: "Follow-up", description: "Track applications and communicate with institutions" },
    { number: "06", title: "Award Negotiation", description: "Maximize your scholarship offer" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative container mx-auto max-w-7xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Find & Secure Your <span className="gradient-text">Scholarship</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Expert guidance to identify, apply for, and secure scholarships from top universities worldwide. Our counselors help you maximize funding opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white">
                <Link href="/contact">Start Your Journey</Link>
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border-yellow-500/30 p-6 text-center animate-fade-in-up">
              <div className="text-3xl font-bold text-yellow-400 mb-2">$500M+</div>
              <div className="text-gray-300">Funding Found</div>
            </Card>
            <Card className="bg-gradient-to-br from-amber-500/20 to-amber-600/20 border-amber-500/30 p-6 text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl font-bold text-amber-400 mb-2">3000+</div>
              <div className="text-gray-300">Students Awarded</div>
            </Card>
            <Card className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 border-orange-500/30 p-6 text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-orange-400 mb-2">68%</div>
              <div className="text-gray-300">Success Rate</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Scholarship Types */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl font-bold text-white text-center mb-16">Types of Scholarships</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {scholarships.map((scholarship, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-yellow-500/50 transition-all p-8 animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <h3 className="text-2xl font-bold text-white mb-3">{scholarship.name}</h3>
                <p className="text-gray-400 mb-4">{scholarship.description}</p>
                <ul className="space-y-2 mb-6">
                  {scholarship.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-yellow-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center pt-4 border-t border-slate-700">
                  <div>
                    <div className="text-sm text-gray-400">Success Rate</div>
                    <div className="text-xl font-bold text-yellow-400">{scholarship.successRate}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">Avg Award</div>
                    <div className="text-lg font-bold text-amber-400">{scholarship.avgAward}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-900/20 via-slate-900 to-orange-900/20 border-y border-slate-700">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl font-bold text-white text-center mb-16">Our 6-Step Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-yellow-500/30 to-amber-500/30 border-2 border-yellow-500/50 flex items-center justify-center">
                      <span className="text-2xl font-bold text-yellow-400">{step.number}</span>
                    </div>
                    {idx < steps.length - 1 && (
                      <div className="absolute left-1/2 top-16 w-0.5 h-12 bg-gradient-to-b from-yellow-500/50 to-transparent transform -translate-x-1/2"></div>
                    )}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Fund Your Education?</h2>
          <p className="text-xl text-gray-300 mb-8">Let our scholarship experts help you find and secure funding</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white group">
              <Link href="/contact" className="flex items-center gap-2">
                Get Scholarship Guidance
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
