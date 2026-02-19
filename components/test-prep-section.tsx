import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Globe, Target, Award, Zap, TrendingUp } from "lucide-react"
import Link from "next/link"

export function TestPrepSection() {
  const testServices = [
    {
      title: "IELTS",
      icon: <Globe className="h-8 w-8 text-green-600" />,
      description: "Master listening, reading, writing, and speaking",
      emoji: "🌍",
    },
    {
      title: "TOEFL",
      icon: <Target className="h-8 w-8 text-purple-600" />,
      description: "iBT preparation for US universities",
      emoji: "🎯",
    },
    {
      title: "SAT",
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      description: "Comprehensive undergraduate entrance prep",
      emoji: "📚",
    },
    {
      title: "GRE",
      icon: <Award className="h-8 w-8 text-red-600" />,
      description: "Graduate entrance exam mastery",
      emoji: "🏆",
    },
    {
      title: "GMAT",
      icon: <TrendingUp className="h-8 w-8 text-orange-600" />,
      description: "MBA and business school entrance",
      emoji: "💼",
    },
    {
      title: "PTE & Duolingo",
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      description: "Fast alternative English proficiency tests",
      emoji: "⚡",
    },
  ]

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            📖 Expert Exam Coaching
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Test Preparation Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Master SAT, IELTS, TOEFL, PTE, Duolingo, GRE, GMAT, and ACT with our expert instructors and proven coaching methods
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {testServices.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-t-4 border-t-blue-500">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl">{service.emoji}</span>
                  {service.icon}
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    Learn More
                  </Button>
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    Enroll
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white p-8 rounded-lg border border-blue-200 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Ace Your Test?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of successful students who have achieved their target scores with our comprehensive coaching programs
          </p>
          <Link href="/test-prep">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
              <BookOpen className="mr-2 h-5 w-5" />
              Explore All Test Prep Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
