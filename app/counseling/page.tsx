import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CounselingForm } from "@/components/counseling-form"
import { CheckCircle, Globe, Users, FileText, Award, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Study Abroad Counseling | TRD - Expert Guidance",
  description: "Professional study abroad counseling with expert guidance on university selection, visa processing, and application preparation. Get personalized counseling from TRD.",
}

export default function CounselingPage() {
  const services = [
    {
      title: "Country Selection",
      description: "Choose the perfect destination based on your academic goals, budget, and career aspirations",
      features: ["50+ countries covered", "Cost-benefit analysis", "Quality of education", "Career prospects"],
      icon: Globe,
    },
    {
      title: "University Guidance",
      description: "Find the right university and program that matches your academic profile and career goals",
      features: ["University shortlisting", "Program selection", "Admission requirements", "Deadline tracking"],
      icon: Award,
    },
    {
      title: "Application Support",
      description: "Complete assistance with your application process from documentation to submission",
      features: ["Document preparation", "SOP & LOR writing", "Application submission", "Visa assistance"],
      icon: FileText,
    },
    {
      title: "Interview Prep",
      description: "Master university and visa interviews with expert coaching and mock sessions",
      features: ["Mock interviews", "Technical preparation", "Confidence building", "Question bank"],
      icon: Users,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-40 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Expert <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Study Abroad</span> Counseling
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Navigate your international education journey with personalized guidance from experienced counselors. From country selection to visa processing, we're with you every step.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg">
              <Link href="/contact" className="flex items-center gap-2">
                Book Your Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Counseling Services</h2>
            <p className="text-xl text-gray-300">Comprehensive guidance at every stage of your study abroad journey</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <Card key={idx} className="bg-slate-800/50 border-slate-700 hover:border-purple-500 transition-all duration-300 overflow-hidden group">
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/30 transition-colors">
                        <Icon className="w-7 h-7 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-gray-400">{service.description}</p>
                      </div>
                    </div>

                    <div className="space-y-3 mt-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Our Counseling Process</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Initial Assessment", desc: "Understand your goals and academic profile" },
              { step: "2", title: "University Shortlist", desc: "Identify suitable universities and programs" },
              { step: "3", title: "Application Support", desc: "Guide through complete application process" },
              { step: "4", title: "Visa & Beyond", desc: "Support from visa to arrival preparation" },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 h-full">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-purple-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counseling Form Section */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Get Your Free Counseling Session</h2>
            <p className="text-xl text-gray-300">Fill out the form below and our expert counselors will contact you within 2 hours</p>
          </div>
          <CounselingForm />
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Prefer Direct Contact?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            You can also reach out to us directly via WhatsApp or email
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white rounded-lg">
              <a href="https://wa.me/9779704565262" target="_blank" rel="noopener noreferrer">
                📱 WhatsApp: +977-9704565262
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-gray-500 text-gray-300 hover:bg-gray-500/10 rounded-lg">
              <a href="mailto:soptrd@gmail.com">
                📧 Email: soptrd@gmail.com
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
