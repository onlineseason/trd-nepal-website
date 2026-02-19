"use client"

import { useState, useEffect } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Loader2, Sparkles } from "lucide-react"

interface ContactFormProps {
  title?: string
  description?: string
  compact?: boolean
}

export function ContactForm({ title, description, compact = false }: ContactFormProps) {
  const [state, handleSubmit] = useForm("mrzkldrq") // Updated to send to soptrd@gmail.com
  const [selectedService, setSelectedService] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  })

  useEffect(() => {
    // Check if there's a pre-selected service from sessionStorage
    const preSelectedService = sessionStorage.getItem("selectedService")
    if (preSelectedService) {
      setSelectedService(preSelectedService)
      // Clear the sessionStorage after setting
      sessionStorage.removeItem("selectedService")
    }

    // Scroll to the contact form on component mount
    const contactForm = document.getElementById("contact-form")
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [])

  if (state.succeeded) {
    const whatsappMessage = `Hello TRD! I have submitted a form request. Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}, Service: ${formData.service}`
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
            Your request has been submitted successfully to soptrd@gmail.com. We'll get back to you within 24 hours with a personalized quote.
          </p>
          <p className="text-sm text-gray-500 mb-6">Check your email for confirmation and next steps.</p>
          <div className="flex gap-3 justify-center mb-4">
            <Button onClick={() => window.location.reload()} className="mt-2" variant="outline">
              Send Another Request
            </Button>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button className="mt-2 bg-green-600 hover:bg-green-700">
                📱 Message on WhatsApp
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
    <div id="contact-form" className="scroll-mt-20">
      <form
        onSubmit={(e) => {
          handleSubmit(e)
        }}
        className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-xl space-y-6 border border-gray-200 animate-fade-in-up"
      >
        {title && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">📝 {title}</h2>
            {description && <p className="text-gray-600">{description}</p>}
          </div>
        )}

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <Input
            id="name"
            type="text"
            name="name"
            required
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <Input
            id="email"
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            WhatsApp / Phone Number
          </label>
          <Input
            id="phone"
            type="text"
            name="phone"
            placeholder="+977-98XXXXXXXX"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            Select Service *
          </label>
          <Select name="service" required value={selectedService} onValueChange={setSelectedService}>
            <SelectTrigger className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200">
              <SelectValue placeholder="-- Select a service --" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sop">📄 Statement of Purpose (SOP)</SelectItem>
              <SelectItem value="cv">📃 Curriculum Vitae (CV)</SelectItem>
              <SelectItem value="appeal">📢 Appeal Letter (Canada)</SelectItem>
              <SelectItem value="motivation">💌 Motivation Letter</SelectItem>
              <SelectItem value="admission">🎓 Admission Essay</SelectItem>
              <SelectItem value="scholarship">🏆 Scholarship Essay</SelectItem>
            </SelectContent>
          </Select>
          <input type="hidden" name="service" value={selectedService} />
          <ValidationError prefix="Service" field="service" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Your Background / Notes *
          </label>
          <Textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Mention your background, country/university, deadlines, or any important notes"
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 resize-none"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <Button
          type="submit"
          disabled={state.submitting}
          className="w-full py-3 text-white font-semibold bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {state.submitting ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            <>📬 Submit Request</>
          )}
        </Button>

        <p className="text-xs text-gray-500 text-center">
          🔒 Your information is secure and will only be used to provide you with our services.
          <br />
          ⏱️ We typically respond within 24 hours.
        </p>
      </form>
    </div>
  )
}
