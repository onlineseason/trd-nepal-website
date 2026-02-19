"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, GraduationCap, Loader2 } from "lucide-react"

export default function CounselingPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    currentCountry: "",
    preferredCountry: "",
    academicQualification: "",
    ieltsScore: "",
    pteScore: "",
    message: "",
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000) // Show popup after 3 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        // Auto close after 3 seconds
        setTimeout(() => {
          setIsVisible(false)
        }, 3000)
      } else {
        throw new Error("Failed to send email")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Failed to submit form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const countries = ["Nepal", "India", "USA", "Canada", "UK", "Australia", "Germany", "France", "Netherlands", "Other"]

  const studyCountries = [
    "USA",
    "Canada",
    "UK",
    "Australia",
    "Germany",
    "France",
    "Netherlands",
    "New Zealand",
    "Ireland",
    "Other",
  ]

  const qualifications = ["High School (+2)", "Bachelor's Degree", "Master's Degree", "PhD", "Diploma", "Other"]

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="relative">
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-full">
              <GraduationCap className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <CardTitle className="text-2xl text-blue-600">Study Abroad Counseling</CardTitle>
              <CardDescription>Get personalized guidance for your international education journey</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <GraduationCap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-600 mb-2">Thank You!</h3>
              <p className="text-gray-600">
                We have received your request. Our counseling team will get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+977-9876543210"
                  />
                </div>
                <div>
                  <Label htmlFor="currentCountry">Current Country *</Label>
                  <Select onValueChange={(value) => handleInputChange("currentCountry", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your current country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country} value={country}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="preferredCountry">Preferred Study Country *</Label>
                  <Select onValueChange={(value) => handleInputChange("preferredCountry", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Where do you want to study?" />
                    </SelectTrigger>
                    <SelectContent>
                      {studyCountries.map((country) => (
                        <SelectItem key={country} value={country}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="academicQualification">Academic Qualification *</Label>
                  <Select onValueChange={(value) => handleInputChange("academicQualification", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your qualification" />
                    </SelectTrigger>
                    <SelectContent>
                      {qualifications.map((qual) => (
                        <SelectItem key={qual} value={qual}>
                          {qual}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="ieltsScore">IELTS Score (if taken)</Label>
                  <Input
                    id="ieltsScore"
                    type="text"
                    value={formData.ieltsScore}
                    onChange={(e) => handleInputChange("ieltsScore", e.target.value)}
                    placeholder="e.g., 7.0"
                  />
                </div>
                <div>
                  <Label htmlFor="pteScore">PTE Score (if taken)</Label>
                  <Input
                    id="pteScore"
                    type="text"
                    value={formData.pteScore}
                    onChange={(e) => handleInputChange("pteScore", e.target.value)}
                    placeholder="e.g., 65"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message">Additional Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell us about your study goals, preferred courses, or any specific questions..."
                  rows={3}
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Request"
                )}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
