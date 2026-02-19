"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft } from "lucide-react"

export default function PTEDuolingoBlogPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
          <Badge className="mb-4 bg-blue-100 text-blue-800">English Proficiency</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            PTE vs Duolingo: Quick Alternative English Proficiency Tests
          </h1>
          <div className="flex flex-col sm:flex-row gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>February 10, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>9 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <article className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            If you're looking for faster and more convenient alternatives to IELTS and TOEFL, PTE Academic and Duolingo English Test are gaining popularity. Learn how they compare, their advantages, and preparation strategies.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">PTE Academic Overview</h2>
          <p className="text-gray-700 mb-4">
            Pearson Test of English (PTE) Academic is a computer-based test of English proficiency for international education and migration.
          </p>
          
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-l-blue-600 my-8">
            <h3 className="font-bold text-gray-900 mb-3">PTE Academic Features:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Format:</strong> Computer-based (fully integrated speaking & writing)</li>
              <li><strong>Duration:</strong> 2 hours 58 minutes</li>
              <li><strong>Score Range:</strong> 10-90 (in 1-point increments)</li>
              <li><strong>Test Availability:</strong> Multiple times per week</li>
              <li><strong>Results:</strong> Within 5 business days</li>
              <li><strong>Cost:</strong> USD 160-170</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Duolingo English Test Overview</h2>
          <p className="text-gray-700 mb-4">
            The Duolingo English Test is the fastest and most affordable English proficiency test, taken entirely online from your home or office.
          </p>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-l-green-600 my-8">
            <h3 className="font-bold text-gray-900 mb-3">Duolingo English Test Features:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Format:</strong> Online, AI-powered assessment</li>
              <li><strong>Duration:</strong> 1 hour</li>
              <li><strong>Score Range:</strong> 10-160</li>
              <li><strong>Test Availability:</strong> Available 24/7</li>
              <li><strong>Results:</strong> Within 1-2 days</li>
              <li><strong>Cost:</strong> USD 49 (very affordable)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">PTE vs Duolingo: Detailed Comparison</h2>
          
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="border p-3 text-left">Feature</th>
                  <th className="border p-3 text-left">PTE Academic</th>
                  <th className="border p-3 text-left">Duolingo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="border p-3 font-semibold">Testing Method</td>
                  <td className="border p-3">Test center only</td>
                  <td className="border p-3">Online from home</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Time Duration</td>
                  <td className="border p-3">3 hours</td>
                  <td className="border p-3">1 hour</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3 font-semibold">Cost</td>
                  <td className="border p-3">USD 160-170</td>
                  <td className="border p-3">USD 49</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">University Acceptance</td>
                  <td className="border p-3">Widely accepted</td>
                  <td className="border p-3">Growing acceptance</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3 font-semibold">Test Dates</td>
                  <td className="border p-3">Multiple per week</td>
                  <td className="border p-3">Anytime 24/7</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Results Timeline</td>
                  <td className="border p-3">5 business days</td>
                  <td className="border p-3">1-2 days</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-3 font-semibold">Scoring</td>
                  <td className="border p-3">Out of 90</td>
                  <td className="border p-3">Out of 160</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">PTE Academic Preparation Strategy</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Unique Features to Master:</h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
            <li><strong>Read Aloud:</strong> Practice reading with clear pronunciation and natural intonation</li>
            <li><strong>Repeat Sentence:</strong> Listen once and repeat the entire sentence accurately</li>
            <li><strong>Dictation:</strong> Listen and type what you hear with correct spelling</li>
            <li><strong>Summarize Spoken Text:</strong> Listen to a lecture and summarize in writing</li>
            <li><strong>Essay Writing:</strong> Write coherent essays within time constraints</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">PTE Preparation Tips:</h3>
          <div className="space-y-4 mb-8">
            <div className="bg-white p-6 border-l-4 border-l-blue-500 rounded">
              <h4 className="font-bold text-gray-900 mb-2">Fluency & Pronunciation</h4>
              <p className="text-gray-700">Practice speaking daily, record yourself, and compare with native speakers.</p>
            </div>
            <div className="bg-white p-6 border-l-4 border-l-blue-500 rounded">
              <h4 className="font-bold text-gray-900 mb-2">Dictation Practice</h4>
              <p className="text-gray-700">Use dictation apps and practice listening to academic lectures.</p>
            </div>
            <div className="bg-white p-6 border-l-4 border-l-blue-500 rounded">
              <h4 className="font-bold text-gray-900 mb-2">Mock Tests</h4>
              <p className="text-gray-700">Take full-length PTE mock tests to understand time management and question types.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Duolingo English Test Preparation</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Unique Features of Duolingo:</h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
            <li><strong>Conversation:</strong> Have a live conversation with an AI</li>
            <li><strong>Writing Prompt:</strong> Write an essay based on a given topic</li>
            <li><strong>Multiple Choice:</strong> Listen and select correct answers</li>
            <li><strong>Reading Comprehension:</strong> Complete short passages and answer questions</li>
            <li><strong>Adaptive Testing:</strong> Questions adjust to your proficiency level</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Duolingo Preparation Tips:</h3>
          <div className="space-y-4 mb-8">
            <div className="bg-white p-6 border-l-4 border-l-green-500 rounded">
              <h4 className="font-bold text-gray-900 mb-2">Practice the Duolingo App</h4>
              <p className="text-gray-700">Use the free Duolingo app to familiarize yourself with question types and UI.</p>
            </div>
            <div className="bg-white p-6 border-l-4 border-l-green-500 rounded">
              <h4 className="font-bold text-gray-900 mb-2">AI Conversation Practice</h4>
              <p className="text-gray-700">Practice speaking with AI chatbots to prepare for the conversation section.</p>
            </div>
            <div className="bg-white p-6 border-l-4 border-l-green-500 rounded">
              <h4 className="font-bold text-gray-900 mb-2">Online Practice Tests</h4>
              <p className="text-gray-700">Take practice tests available on Duolingo's official website.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">University Acceptance & Recognition</h2>

          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-l-yellow-600 my-8">
            <h3 className="font-bold text-gray-900 mb-4">PTE Academic:</h3>
            <p className="text-gray-700 mb-2">Accepted by 3,300+ institutions worldwide including:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>All UK universities</li>
              <li>Australian universities</li>
              <li>Canadian universities</li>
              <li>US universities (growing acceptance)</li>
              <li>Immigration departments (Australia, Canada)</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-l-yellow-600 my-8">
            <h3 className="font-bold text-gray-900 mb-4">Duolingo English Test:</h3>
            <p className="text-gray-700 mb-2">Accepted by 2,000+ institutions including:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Harvard University</li>
              <li>Yale University</li>
              <li>University of Chicago</li>
              <li>Many UK and Australian universities</li>
              <li>Growing acceptance worldwide</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Which Test Should You Choose?</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-white p-6 border-l-4 border-l-blue-500 rounded">
              <h4 className="font-bold text-gray-900 mb-2">Choose PTE if:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>You prefer a test center environment</li>
                <li>You're applying to Australian or UK universities</li>
                <li>You need a widely recognized international test</li>
                <li>You have more time for preparation</li>
              </ul>
            </div>
            <div className="bg-white p-6 border-l-4 border-l-green-500 rounded">
              <h4 className="font-bold text-gray-900 mb-2">Choose Duolingo if:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>You want quick results (1-2 days)</li>
                <li>You prefer testing from home</li>
                <li>Budget is a constraint (USD 49)</li>
                <li>You need flexibility in test dates</li>
                <li>You're applying to US universities</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Score Equivalence</h2>
          
          <div className="bg-white border rounded-lg overflow-hidden my-8">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-3 text-left">IELTS Band</th>
                  <th className="p-3 text-left">PTE Score</th>
                  <th className="p-3 text-left">Duolingo Score</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">8.0</td>
                  <td className="p-3">76-84</td>
                  <td className="p-3">130-150</td>
                </tr>
                <tr className="bg-gray-50 border-b">
                  <td className="p-3">7.5</td>
                  <td className="p-3">71-75</td>
                  <td className="p-3">120-129</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">7.0</td>
                  <td className="p-3">65-70</td>
                  <td className="p-3">110-119</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3">6.5</td>
                  <td className="p-3">58-64</td>
                  <td className="p-3">100-109</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Preparation Timeline</h2>
          
          <div className="bg-white p-8 border rounded-lg my-8">
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">For PTE (6-8 weeks):</h4>
                <p className="text-gray-700">Week 1-2: Learn test format and question types</p>
                <p className="text-gray-700">Week 3-5: Practice each section separately</p>
                <p className="text-gray-700">Week 6-8: Full mock tests and refinement</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">For Duolingo (2-4 weeks):</h4>
                <p className="text-gray-700">Week 1: Learn test format and practice online</p>
                <p className="text-gray-700">Week 2-4: Take multiple practice tests and improve weak areas</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Next Steps</h2>
          <p className="text-gray-700 mb-6">
            Whether you choose PTE or Duolingo, expert preparation can help you achieve excellent scores quickly. At SOP TRD Nepal, we offer specialized coaching for both tests to help you succeed in your study abroad journey.
          </p>

          <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-l-blue-600 my-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Expert Coaching for PTE & Duolingo</h3>
            <p className="text-gray-700 mb-6">
              Join our specialized coaching programs and achieve your target score with personalized guidance and practice.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/test-prep">View All Test Prep Courses</Link>
            </Button>
          </div>
        </article>
      </div>
    </div>
  )
}
