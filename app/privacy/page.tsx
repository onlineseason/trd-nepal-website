"use client"

import { useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PrivacyPage() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            🔐 Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your information
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg">
            <CardHeader className="text-center border-b">
              <CardTitle className="text-2xl text-gray-900">Privacy Policy – SOP TRD Nepal</CardTitle>
              <div className="text-sm text-gray-600 mt-2">
                <p>
                  <strong>Effective Date:</strong> 2019/01/01
                </p>
                <p>
                  <strong>Website:</strong> https://trd.com.np
                </p>
                <p>
                  <strong>Email:</strong> admin@trd.com.np
                </p>
              </div>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h3>
                <p className="text-gray-700 leading-relaxed">
                  At SOP TRD Nepal, we value your privacy. This Privacy Policy outlines how we collect, use, store, and
                  protect your personal information when you use our services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Information We Collect</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We may collect the following types of personal data:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Name, email address, WhatsApp number</li>
                  <li>Educational background, work experience, and goals (for SOP/CV writing)</li>
                  <li>Any supporting documents you upload</li>
                  <li>Payment details (only through secure third-party platforms)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. How We Use Your Information</h3>
                <p className="text-gray-700 leading-relaxed mb-3">We use your data to:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Provide personalized writing services</li>
                  <li>Communicate regarding your order</li>
                  <li>Improve our services</li>
                  <li>Maintain internal records</li>
                  <li>Handle refunds or revisions if applicable</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Data Sharing and Disclosure</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We do not sell, trade, or share your information with third parties except:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Service providers assisting in order processing (e.g., payment platforms)</li>
                  <li>If legally required by court order or government request</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Data Security</h3>
                <p className="text-gray-700 leading-relaxed">
                  We implement security measures to protect your personal data from unauthorized access, alteration, or
                  disclosure. All communication is encrypted and your documents are stored securely.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Data Retention</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We retain your information only as long as necessary to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Complete your order</li>
                  <li>Maintain service records</li>
                  <li>Comply with legal obligations</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  If you request deletion of your data, we will remove it within 7 working days.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">7. Your Rights</h3>
                <p className="text-gray-700 leading-relaxed mb-3">You have the right to:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Request access to your personal data</li>
                  <li>Request correction or deletion</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  Email us at{" "}
                  <a href="mailto:admin@trd.com.np" className="text-blue-600 hover:text-blue-800 underline">
                    admin@trd.com.np
                  </a>{" "}
                  to request any changes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">8. Use of Cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may use cookies to enhance user experience. You can control cookie settings through your browser.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">9. External Links</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our website may contain links to other websites. We are not responsible for their privacy practices.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">10. Changes to This Policy</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy occasionally. Updates will be posted on this page with a revised
                  effective date.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">11. Contact Us</h3>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact:
                </p>
                <p className="text-gray-700 mt-2">
                  📧 Email:{" "}
                  <a href="mailto:admin@trd.com.np" className="text-blue-600 hover:text-blue-800 underline">
                    admin@trd.com.np
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Contact Us for Questions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
