"use client"

import { useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TermsPage() {
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
            📄 Terms and <span className="gradient-text">Conditions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Please read these terms and conditions carefully before using our services
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg">
            <CardHeader className="text-center border-b">
              <CardTitle className="text-2xl text-gray-900">Terms and Conditions – SOP TRD Nepal</CardTitle>
              <div className="text-sm text-gray-600 mt-2">
                <p>
                  <strong>Effective Date:</strong> 2019/01/01
                </p>
                <p>
                  <strong>Website:</strong> https://trd.com.np
                </p>
              </div>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h3>
                <p className="text-gray-700 leading-relaxed">
                  By accessing or using our services through this website, you agree to be bound by these Terms and
                  Conditions. If you do not agree, please do not use our services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Services Offered</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  SOP TRD Nepal provides customized writing services including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Statement of Purpose (SOP)</li>
                  <li>Appeal Letters</li>
                  <li>Motivation Letters</li>
                  <li>Curriculum Vitae (CV)</li>
                  <li>Admission Essays</li>
                  <li>Scholarship Essays</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-3">
                  All documents are written based on the information you provide and are for guidance and educational
                  purposes only.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. User Responsibilities</h3>
                <p className="text-gray-700 leading-relaxed mb-3">You agree to:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Provide accurate and complete information for the creation of documents.</li>
                  <li>Use the documents for legal and ethical purposes only.</li>
                  <li>Not submit any plagiarized or false information.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Payment and Refund Policy</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Full payment must be made in advance to initiate service.</li>
                  <li>Due to the nature of customized writing, no refunds are offered once the draft is delivered.</li>
                  <li>Minor edits and revisions are included within a 3-day window of delivery.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Turnaround Time</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Standard delivery is within 2–5 working days.</li>
                  <li>Express services (24–48 hours) are available with additional charges.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">6. Plagiarism and Originality</h3>
                <p className="text-gray-700 leading-relaxed">
                  All documents are created from scratch using the information provided. SOP TRD Nepal maintains
                  originality but does not guarantee 100% plagiarism-free content, especially if you request inclusion
                  of public templates or reused content.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">7. Privacy Policy</h3>
                <p className="text-gray-700 leading-relaxed">
                  Your personal information is confidential and will not be shared with third parties except for order
                  fulfillment or legal obligations. (See{" "}
                  <Link href="/privacy" className="text-blue-600 hover:text-blue-800 underline">
                    Privacy Policy
                  </Link>{" "}
                  for full details.)
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">8. Intellectual Property</h3>
                <p className="text-gray-700 leading-relaxed">
                  Once delivered, the content becomes your intellectual property. However, SOP TRD Nepal retains the
                  right to reuse anonymized content for sample or training purposes, unless you request otherwise.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">9. Limitation of Liability</h3>
                <p className="text-gray-700 leading-relaxed mb-3">We are not liable for:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Visa denials or admission rejections.</li>
                  <li>Delays caused by incorrect information provided by the user.</li>
                  <li>Misuse of the documents once delivered.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">10. Modifications to Terms</h3>
                <p className="text-gray-700 leading-relaxed">
                  SOP TRD Nepal reserves the right to update or modify these terms at any time. Continued use of our
                  services after changes indicates your acceptance of the new terms.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">11. Contact Information</h3>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions regarding these Terms, please contact us at:
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
