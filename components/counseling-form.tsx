"use client"

import { useState, useEffect } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Loader2, Sparkles } from "lucide-react"

export function CounselingForm() {
  const [state, handleSubmit] = useForm("mrzkldrq") // Same form endpoint for counseling
  const [selectedCountry, setSelectedCountry] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: ""
  })

  if (state.succeeded) {
    const whatsappMessage = `Hello TRD! I have submitted a counseling form. Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}, Interested Country: ${formData.country}`
    const whatsappUrl = `https://wa.me/9779704565262?text=${encodeURIComponent(whatsappMessage)}`

    return (
      <Card className="max-w-xl mx-auto bg-white shadow-xl border border-gray-200">
        <CardContent className="p-8 text-center">
          <div className="animate-bounce mb-4">
            <div className="relative">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
              <Sparkles className="h-6 w-6 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You! 🎉</h3>
          <p className="text-gray-600 mb-4">
            Your counseling request has been submitted to soptrd@gmail.com. Our expert counselors will contact you within 24 hours to discuss your study abroad goals.
          </p>
          <p className="text-sm text-gray-500 mb-6">Check your email for confirmation.</p>
          <div className="flex gap-3 justify-center">
            <Button onClick={() => window.location.reload()} variant="outline">
              Submit Another Request
            </Button>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-green-600 hover:bg-green-700">
                📱 Chat on WhatsApp
              </Button>
            </a>
          </div>
        </CardContent>
      </Card>
    )
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="scroll-mt-20">
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-xl space-y-6 border border-gray-200"
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">🎓 Free Study Abroad Counseling</h2>
          <p className="text-gray-600">Get expert guidance for your international education journey</p>
        </div>

        <div>
          <label htmlFor="c_name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <Input
            id="c_name"
            type="text"
            name="name"
            required
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="c_email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <Input
            id="c_email"
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="c_phone" className="block text-sm font-medium text-gray-700 mb-1">
            WhatsApp / Phone Number *
          </label>
          <Input
            id="c_phone"
            type="text"
            name="phone"
            required
            placeholder="+977-98XXXXXXXX"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="c_country" className="block text-sm font-medium text-gray-700 mb-1">
            Interested Countries *
          </label>
          <Select name="country" required value={selectedCountry} onValueChange={(value) => {
            setSelectedCountry(value)
            handleInputChange("country", value)
          }}>
            <SelectTrigger className="w-full p-3 border border-gray-300 rounded-lg bg-white">
              <SelectValue placeholder="-- Select countries --" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="usa">🇺🇸 USA</SelectItem>
              <SelectItem value="uk">🇬🇧 United Kingdom</SelectItem>
              <SelectItem value="canada">🇨🇦 Canada</SelectItem>
              <SelectItem value="australia">🇦🇺 Australia</SelectItem>
              <SelectItem value="germany">🇩🇪 Germany</SelectItem>
              <SelectItem value="netherlands">🇳🇱 Netherlands</SelectItem>
              <SelectItem value="new_zealand">🇳🇿 New Zealand</SelectItem>
              <SelectItem value="france">🇫🇷 France</SelectItem>
              <SelectItem value="multiple">🌍 Multiple Countries</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          <input type="hidden" name="country" value={selectedCountry} />
        </div>

        <div>
          <label htmlFor="c_message" className="block text-sm font-medium text-gray-700 mb-1">
            Tell Us About Your Goals *
          </label>
          <Textarea
            id="c_message"
            name="message"
            required
            rows={4}
            placeholder="Share your academic background, desired program, timeline, and any specific questions..."
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <Button
          type="submit"
          disabled={state.submitting}
          className="w-full py-3 text-white font-semibold bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl hover:shadow-lg transition-all hover:scale-105 disabled:opacity-50"
        >
          {state.submitting ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            <>📬 Request Counseling Session</>
          )}
        </Button>

        <p className="text-xs text-gray-500 text-center">
          🔒 Your information is secure. We'll contact you via email and WhatsApp.
          <br />
          ⏱️ Typical response time: Within 2 hours
        </p>
      </form>
    </div>
  )
}
