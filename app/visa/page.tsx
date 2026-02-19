import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Plane, FileCheck, Shield, Clock, Users, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Visa Processing & Immigration | TRD",
  description: "Expert visa processing and immigration support for USA, UK, Canada, Australia and more. Get complete visa guidance and documentation support from TRD.",
}

export default function VisaPage() {
  const countries = [
    { name: "United States", processTime: "4-6 weeks", successRate: "96%" },
    { name: "United Kingdom", processTime: "3-4 weeks", successRate: "98%" },
    { name: "Canada", processTime: "4-8 weeks", successRate: "97%" },
    { name: "Australia", processTime: "3-5 weeks", successRate: "95%" },
    { name: "Germany", processTime: "2-3 weeks", successRate: "99%" },
    { name: "Netherlands", processTime: "2-4 weeks", successRate: "98%" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 pt-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-green-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        </div>

        <div className="relative z-10 container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Expert <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Visa Processing</span> & Immigration Support
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Navigate visa requirements with confidence. Our expert team provides complete documentation support and guidance for 50+ countries.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white rounded-lg">
            <Link href="/contact" className="flex items-center gap-2">
              Get Visa Assistance
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Visa Services We Provide</h2>
            <p className="text-xl text-gray-300">Comprehensive visa processing for all major study destinations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FileCheck, title: "Documentation Support", desc: "Help with all required documents and forms" },
              { icon: Shield, title: "Application Review", desc: "Expert review before submission" },
              { icon: Clock, title: "Timeline Management", desc: "Ensure all deadlines are met" },
              { icon: Users, title: "Interview Coaching", desc: "Prepare for visa interview questions" },
              { icon: Plane, title: "Travel Arrangements", desc: "Support for final travel preparations" },
              { icon: CheckCircle, title: "Follow-up Support", desc: "Guidance after visa approval" },
            ].map((service, idx) => {
              const Icon = service.icon
              return (
                <Card key={idx} className="bg-slate-800/50 border-slate-700 hover:border-green-500 transition-all">
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-green-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400">{service.desc}</p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Countries We Cover</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country, idx) => (
              <Card key={idx} className="bg-slate-800/50 border-slate-700 hover:border-blue-500 transition-all">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{country.name}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Process Time:</span>
                      <span className="text-blue-400 font-semibold">{country.processTime}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Success Rate:</span>
                      <span className="text-green-400 font-semibold">{country.successRate}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Visa Processing Steps</h2>

          <div className="space-y-8 max-w-4xl mx-auto">
            {[
              { num: "01", title: "Document Collection", desc: "Gather all required documents and information" },
              { num: "02", title: "Application Preparation", desc: "Complete and review all application forms" },
              { num: "03", title: "Submission", desc: "Submit applications to visa processing centers" },
              { num: "04", title: "Interview Scheduling", desc: "Arrange and prepare for visa interview" },
              { num: "05", title: "Approval & Stamping", desc: "Collect your visa and complete formalities" },
            ].map((step, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-green-600 to-blue-600">
                    <span className="text-white font-bold">{step.num}</span>
                  </div>
                </div>
                <div className="pt-1 flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Don't Let Visa Stress Slow You Down</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get expert help with your visa application. Our team has a proven track record of successful visa approvals across all major countries.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white rounded-lg">
            <Link href="/contact">Start Your Visa Process</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
