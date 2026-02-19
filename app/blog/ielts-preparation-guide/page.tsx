"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Share2, ArrowLeft } from "lucide-react"

export default function IELTSBlogPage() {
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
          <Badge className="mb-4 bg-blue-100 text-blue-800">IELTS Preparation</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete IELTS Preparation Guide: Score 8+ Bands
          </h1>
          <div className="flex flex-col sm:flex-row gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>February 12, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>12 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <article className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            IELTS (International English Language Testing System) is one of the most recognized English proficiency tests globally. Whether you're planning to study, work, or migrate abroad, a high IELTS score can significantly impact your opportunities. This comprehensive guide will help you achieve your target band score.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Understanding IELTS</h2>
          <p className="text-gray-700 mb-4">
            IELTS is available in two formats: Academic and General Training. The Academic version is for university admissions, while General Training is for migration and work purposes.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-l-blue-600 my-8">
            <h3 className="font-bold text-gray-900 mb-3">Test Structure:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Listening:</strong> 40 minutes (40 questions)</li>
              <li><strong>Reading:</strong> 60 minutes (40 questions)</li>
              <li><strong>Writing:</strong> 60 minutes (2 tasks)</li>
              <li><strong>Speaking:</strong> 11-14 minutes (3 parts)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">IELTS Band Scores Explained</h2>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="border p-3 text-left">Band Score</th>
                  <th className="border p-3 text-left">Level</th>
                  <th className="border p-3 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { score: "8-9", level: "Expert", desc: "Fluent, accurate, natural use of language" },
                  { score: "7-7.5", level: "Good", desc: "Mostly fluent with minor errors" },
                  { score: "6-6.5", level: "Competent", desc: "Generally accurate and fluent" },
                  { score: "5-5.5", level: "Modest", desc: "Manages most situations despite errors" },
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : ""}>
                    <td className="border p-3 font-semibold">{row.score}</td>
                    <td className="border p-3">{row.level}</td>
                    <td className="border p-3">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Listening Module Tips</h2>
          <p className="text-gray-700 mb-4">The listening section is the first module and can set the tone for your entire test.</p>
          <div className="space-y-4 mb-8">
            <div className="bg-white p-6 border-l-4 border-l-green-500">
              <h4 className="font-bold text-gray-900 mb-2">✓ Read questions ahead of time</h4>
              <p className="text-gray-700">Spend 30 seconds before each section reading the questions to understand context.</p>
            </div>
            <div className="bg-white p-6 border-l-4 border-l-green-500">
              <h4 className="font-bold text-gray-900 mb-2">✓ Use note-taking strategy</h4>
              <p className="text-gray-700">Write down keywords and numbers while listening, then transfer to answer sheet.</p>
            </div>
            <div className="bg-white p-6 border-l-4 border-l-green-500">
              <h4 className="font-bold text-gray-900 mb-2">✓ Practice different accents</h4>
              <p className="text-gray-700">Listen to British, American, Australian, and Indian English to adapt your ear.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Reading Module Strategy</h2>
          <p className="text-gray-700 mb-4">
            Time management is crucial for the reading section. You have 60 minutes for 3 long texts and 40 questions.
          </p>
          <div className="bg-yellow-50 p-6 rounded-lg my-8">
            <h3 className="font-bold text-gray-900 mb-3">Time allocation:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Skim passage: 3-4 minutes</li>
              <li>Read questions: 2 minutes</li>
              <li>Answer questions: 15-20 minutes</li>
              <li>Review and transfer: 5 minutes</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Writing Module Excellence</h2>
          <p className="text-gray-700 mb-4">
            Task 1 and Task 2 have different requirements. Task 1 focuses on describing data, while Task 2 requires an argumentative essay.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Task 1: Descriptive Writing</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>150 words minimum required</li>
            <li>Describe trends, processes, or data</li>
            <li>Use comparative language and vocabulary</li>
            <li>Spend 20 minutes maximum</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Task 2: Argumentative Essay</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>250 words minimum required</li>
            <li>Address the prompt fully with clear position</li>
            <li>Provide 2-3 relevant examples</li>
            <li>Spend 40 minutes on this task</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Speaking Module Mastery</h2>
          <p className="text-gray-700 mb-4">
            Many students struggle with the speaking section due to anxiety. Here's how to excel:
          </p>

          <div className="space-y-6 mb-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-2 text-lg">Part 1: Introduction (4-5 minutes)</h4>
              <p className="text-gray-700">Expect questions about yourself, family, hobbies, and daily life. Give detailed answers with explanations.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2 text-lg">Part 2: Long Turn (3-4 minutes)</h4>
              <p className="text-gray-700">You'll receive a cue card with a topic. Speak continuously for 1-2 minutes about the topic provided.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2 text-lg">Part 3: Discussion (4-5 minutes)</h4>
              <p className="text-gray-700">Discuss abstract ideas related to Part 2. Show your ability to analyze and discuss complex topics.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">12-Week Study Plan</h2>
          <div className="bg-white p-8 border rounded-lg my-8">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">Wks 1-3</div>
                <div>
                  <h4 className="font-bold text-gray-900">Foundation Building</h4>
                  <p className="text-gray-700">Focus on vocabulary, basic grammar, and understanding test format</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">Wks 4-8</div>
                <div>
                  <h4 className="font-bold text-gray-900">Skill Development</h4>
                  <p className="text-gray-700">Practice all modules separately, take half-length tests, and build stamina</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">Wks 9-12</div>
                <div>
                  <h4 className="font-bold text-gray-900">Full Test Practice</h4>
                  <p className="text-gray-700">Take full-length practice tests weekly and refine weak areas</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Resources & Tools</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
            <li><strong>Official IELTS Practice Tests:</strong> Most authentic practice material</li>
            <li><strong>Cambridge IELTS Books:</strong> Series 1-19 with answer keys and audio</li>
            <li><strong>Online Platforms:</strong> British Council website, IELTS.org</li>
            <li><strong>YouTube Channels:</strong> IELTS Advantage, E2 IELTS, Rachel's English</li>
            <li><strong>Apps:</strong> IELTS Practice Pro, Magoosh IELTS</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Mistakes to Avoid</h2>
          <div className="space-y-3 mb-8">
            {[
              "Neglecting the speaking section - it's 25% of your score",
              "Not managing time properly during reading and writing",
              "Using overly complex vocabulary when simple language suffices",
              "Not proofreading your writing for spelling and grammar",
              "Failing to address all parts of the writing prompt",
              "Speaking too fast or too slow during speaking test",
            ].map((mistake, idx) => (
              <div key={idx} className="flex gap-3">
                <span className="text-red-600 font-bold flex-shrink-0">✗</span>
                <p className="text-gray-700">{mistake}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Next Steps</h2>
          <p className="text-gray-700 mb-6">
            Ready to achieve your target IELTS score? SOP TRD Nepal offers comprehensive IELTS preparation courses with experienced instructors, personalized study plans, and proven results. Our students have achieved band scores of 8.0+ and secured admissions to top universities worldwide.
          </p>

          <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-l-blue-600 my-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Enroll in Our IELTS Preparation Course</h3>
            <p className="text-gray-700 mb-6">
              Get expert coaching, unlimited mock tests, speaking practice with native speakers, and personalized feedback.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/test-prep/ielts">Start Your Preparation</Link>
            </Button>
          </div>
        </article>

        {/* Related Posts */}
        <div className="mt-16 pt-8 border-t">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <Badge className="mb-3">Test Preparation</Badge>
                <h4 className="font-bold text-gray-900 mb-2">TOEFL vs IELTS: Which Test Should You Take?</h4>
                <p className="text-gray-600 text-sm mb-4">Compare IELTS and TOEFL to choose the right exam for your study abroad goals.</p>
                <Button variant="outline" size="sm">
                  <Link href="/blog">Read More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Badge className="mb-3">Study Abroad</Badge>
                <h4 className="font-bold text-gray-900 mb-2">English Proficiency Tests for Study Abroad</h4>
                <p className="text-gray-600 text-sm mb-4">Complete guide to IELTS, TOEFL, PTE, and Duolingo for international education.</p>
                <Button variant="outline" size="sm">
                  <Link href="/blog">Read More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
