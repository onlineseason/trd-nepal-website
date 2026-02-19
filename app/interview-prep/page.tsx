import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Mic2, Users, TrendingUp, Award, Clock, Brain, Target, ArrowRight, Zap } from "lucide-react"

export const metadata = {
  title: "Interview Preparation | TRD - Master Your Interviews",
  description: "Expert interview coaching for university admission and visa interviews. Get mock interviews, personalized feedback, and proven strategies from TRD.",
}

export default function InterviewPrepPage() {
  const services = [
    {
      icon: Mic2,
      title: "University Admission Interviews",
      description: "Master interviews for top universities",
      features: ["Mock interview practice", "Common question prep", "Story preparation", "Q&A strategies", "Confidence building"],
      successRate: "94%",
    },
    {
      icon: Users,
      title: "Visa Interviews",
      description: "Navigate visa officer questioning",
      features: ["Visa question database", "Document preparation", "Financial proof review", "Story alignment", "Behavior coaching"],
      successRate: "96%",
    },
    {
      icon: Brain,
      title: "Research/Technical Interviews",
      description: "For research-focused programs",
      features: ["Research question prep", "Technical deep dives", "Publication discussion", "Future plans", "Thought clarity"],
      successRate: "91%",
    },
  ]

  const tips = [
    { title: "Research Thoroughly", description: "Know the university, program, department, and interviewer" },
    { title: "Tell Your Story", description: "Craft a compelling narrative about your background and goals" },
    { title: "Show Enthusiasm", description: "Demonstrate genuine interest in the institution and program" },
    { title: "Answer Strategically", description: "Use STAR method and provide specific examples" },
    { title: "Ask Good Questions", description: "Prepare thoughtful questions about the program and experience" },
    { title: "Practice, Practice, Practice", description: "Conduct mock interviews multiple times before the real thing" },
  ]

  const modules = [
    { number: "1", title: "Interview Fundamentals", duration: "2 weeks", topics: ["Interview types", "Assessment criteria", "Expectations"] },
    { number: "2", title: "Question Preparation", duration: "3 weeks", topics: ["Common questions", "Behavioral patterns", "Technical prep"] },
    { number: "3", title: "Mock Interviews", duration: "2 weeks", topics: ["Live practice", "Feedback", "Refinement"] },
    { number: "4", title: "Final Coaching", duration: "1 week", topics: ["Fine-tuning", "Confidence", "Last tips"] },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative container mx-auto max-w-7xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Master Your <span className="gradient-text">Interviews</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Expert coaching for university admission and visa interviews. Get personalized feedback, mock interviews, and proven strategies to ace your interviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white">
                <Link href="/contact">Book Interview Coaching</Link>
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="bg-gradient-to-br from-pink-500/20 to-pink-600/20 border-pink-500/30 p-6 text-center animate-fade-in-up">
              <div className="text-3xl font-bold text-pink-400 mb-2">94%</div>
              <div className="text-gray-300">Success Rate</div>
            </Card>
            <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-500/30 p-6 text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl font-bold text-purple-400 mb-2">2000+</div>
              <div className="text-gray-300">Students Coached</div>
            </Card>
            <Card className="bg-gradient-to-br from-violet-500/20 to-violet-600/20 border-violet-500/30 p-6 text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-violet-400 mb-2">1000+</div>
              <div className="text-gray-300">Mock Interviews</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl font-bold text-white text-center mb-16">Interview Coaching Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <Card key={idx} className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-pink-500/50 transition-all p-8 animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center mb-4 border border-pink-500/30">
                    <Icon className="w-6 h-6 text-pink-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-pink-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center pt-4 border-t border-slate-700">
                    <div className="text-sm text-gray-400 mb-1">Success Rate</div>
                    <div className="text-2xl font-bold text-pink-400">{service.successRate}</div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-900/20 via-slate-900 to-purple-900/20 border-y border-slate-700">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl font-bold text-white text-center mb-16">4-Week Program Structure</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((module, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-8 hover:border-pink-500/50 transition-all animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center border border-pink-500/30 mb-4">
                      <span className="text-xl font-bold text-pink-400">{module.number}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{module.title}</h3>
                  </div>
                  <div className="text-right">
                    <Clock className="w-5 h-5 text-pink-400 mb-2" />
                    <p className="text-sm text-gray-400">{module.duration}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {module.topics.map((topic, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-pink-400"></div>
                      {topic}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl font-bold text-white text-center mb-16">Interview Tips & Strategies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {tips.map((tip, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-8 hover:border-purple-500/50 transition-all animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center border border-purple-500/30 flex-shrink-0 mt-1">
                    <Zap className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{tip.title}</h3>
                    <p className="text-gray-400">{tip.description}</p>
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
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Ace Your Interview?</h2>
          <p className="text-xl text-gray-300 mb-8">Get expert coaching from experienced interview specialists</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white group">
              <Link href="/contact" className="flex items-center gap-2">
                Book Your First Session
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
