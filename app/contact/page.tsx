import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Contact <span className="gradient-text">SOP TRD Nepal</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ready to start your journey? Get in touch with us today for professional SOP and visa writing services.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm
                title="📝 Get Your Free Quote"
                description="Fill out the form and we'll send to soptrd@gmail.com. We'll get back to you within 24 hours"
              />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-300 mb-8">
                  We're here to help you achieve your academic dreams. Reach out to us through any of the following channels. All messages are forwarded to soptrd@gmail.com
                </p>
              </div>

              <div className="space-y-6">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <div className="flex items-center">
                      <Phone className="h-6 w-6 text-blue-400 mr-3" />
                      <CardTitle className="text-white">Phone & WhatsApp</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 mb-2">Call or message us anytime</p>
                    <a href="tel:+9779704565262" className="text-blue-400 hover:text-blue-300 font-semibold">
                      +977-9704565262
                    </a>
                    <div className="mt-3">
                      <Button asChild size="sm" className="bg-green-600 hover:bg-green-700">
                        <a href="https://wa.me/9779704565262" target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          WhatsApp Us
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <div className="flex items-center">
                      <Mail className="h-6 w-6 text-red-400 mr-3" />
                      <CardTitle className="text-white">Email</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 mb-2">Send us your requirements</p>
                    <a href="mailto:soptrd@gmail.com" className="text-red-400 hover:text-red-300 font-semibold">
                      soptrd@gmail.com
                    </a>
                    <p className="text-xs text-gray-500 mt-3">All form submissions are forwarded to this email</p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <div className="flex items-center">
                      <MapPin className="h-6 w-6 text-green-400 mr-3" />
                      <CardTitle className="text-white">Location</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 mb-1">Remote Work - Serving Globally</p>
                    <p className="text-sm text-gray-500">Based in Nepal, Working Worldwide</p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <div className="flex items-center">
                      <Clock className="h-6 w-6 text-yellow-400 mr-3" />
                      <CardTitle className="text-white">Response Time</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 mb-2">We typically respond within:</p>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>✉️ Email: 2-6 hours</li>
                      <li>💬 WhatsApp: 30 minutes - 2 hours</li>
                      <li>📞 Phone: Immediate during business hours</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-6 rounded-lg border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button asChild variant="outline" className="w-full justify-start bg-transparent border-slate-600 text-gray-300 hover:bg-slate-700/50">
                    <a href="/services" className="flex items-center">
                      🎯 View All Services
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-start bg-transparent border-slate-600 text-gray-300 hover:bg-slate-700/50">
                    <a href="/test-prep" className="flex items-center">
                      📚 Explore Test Prep
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-start bg-transparent border-slate-600 text-gray-300 hover:bg-slate-700/50">
                    <a href="/blog" className="flex items-center">
                      📖 Read Guides & FAQs
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Common Questions</h2>
            <p className="text-lg text-gray-300">Quick answers to frequently asked questions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">How long does it take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Standard delivery is 3-5 days. Express delivery (24-48 hours) is available at extra cost.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">What's included in the price?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Complete document writing, 2 free revisions, plagiarism check, and email support.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Do you offer revisions?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Yes! We offer up to 2 free revisions within 3 days of delivery to ensure your satisfaction.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">How do I make payment?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  We accept eSewa, Khalti, Bank Transfer, and other payment methods. Payment instructions provided after order confirmation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
