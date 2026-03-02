"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Sparkles } from "lucide-react"

export function ContactForm() {
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    // Load Tally Script
    const script = document.createElement("script")
    script.src = "https://tally.so/widgets/embed.js"
    script.async = true
    document.head.appendChild(script)

    script.onload = () => {
      // @ts-ignore
      if (typeof Tally !== "undefined") {
        // @ts-ignore
        Tally.loadEmbeds()
      }
    }

    // Listen for Tally submission event
    const handleMessage = (event: any) => {
      if (event.data?.event === "Tally.FormSubmitted") {
        setShowSuccess(true)
      }
    }

    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
  }, [])

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-blue-50 to-white relative">
      <Card className="max-w-4xl mx-auto rounded-3xl shadow-2xl border border-gray-200 bg-white/80 backdrop-blur-lg">
        <CardContent className="p-10">
          <div className="text-center mb-8">
            <Sparkles className="h-8 w-8 text-blue-600 animate-pulse mx-auto mb-3" />
            <h2 className="text-3xl font-bold text-gray-800">
              Get Your Professional Document Ready 🚀
            </h2>
            <p className="text-gray-600 mt-2">
              Fill out the form and our team will contact you within 24 hours.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <iframe
              data-tally-src="https://tally.so/embed/xXdVMk?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="500"
              frameBorder="0"
              title="TRD Nepal Form"
              className="w-full"
            ></iframe>
          </div>

          <p className="text-xs text-gray-500 text-center mt-6">
            🔒 Your information is secure and confidential.
          </p>
        </CardContent>
      </Card>

      {/* ✅ Success Popup Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl transform transition-all duration-300 scale-100 animate-scale-in">

            <div className="relative mb-4">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto animate-bounce" />
              <Sparkles className="h-6 w-6 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              🎉 Submission Successful!
            </h3>

            <p className="text-gray-600 mb-6">
              Thank you for contacting TRD Nepal.  
              Our team will reach you within 24 hours.
            </p>

            <div className="flex gap-3 justify-center">
              <Button
                onClick={() => setShowSuccess(false)}
                variant="outline"
              >
                Close
              </Button>

              <a
                href="https://wa.me/9779704565262"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  📱 WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
