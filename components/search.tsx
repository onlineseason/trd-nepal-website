"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Search, FileText, Users, Award, BookOpen, DollarSign } from "lucide-react"
import { useRouter } from "next/navigation"

interface SearchResult {
  title: string
  description: string
  url: string
  type: "Service" | "Page" | "Info"
  icon: React.ReactNode
}

interface SearchComponentProps {
  onFocusChange?: (isFocused: boolean) => void
}

export function SearchComponent({ onFocusChange }: SearchComponentProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const searchData: SearchResult[] = [
    // Services first (highest priority)
    {
      title: "Statement of Purpose (SOP)",
      description: "Professional SOP writing for university applications - Starting from NPR 1,800",
      url: "/contact#contact-form",
      type: "Service",
      icon: <FileText className="h-4 w-4" />,
    },
    {
      title: "Curriculum Vitae (CV)",
      description: "ATS-friendly CV writing services - Starting from NPR 1,200",
      url: "/contact#contact-form",
      type: "Service",
      icon: <Users className="h-4 w-4" />,
    },
    {
      title: "Appeal Letter (Canada)",
      description: "Visa appeal letters for Canada rejections - Starting from NPR 2,200",
      url: "/contact#contact-form",
      type: "Service",
      icon: <Award className="h-4 w-4" />,
    },
    {
      title: "Motivation Letter",
      description: "Compelling motivation letters for applications - Starting from NPR 1,500",
      url: "/contact#contact-form",
      type: "Service",
      icon: <FileText className="h-4 w-4" />,
    },
    {
      title: "Admission Essay",
      description: "University admission essays - Starting from NPR 1,800",
      url: "/contact#contact-form",
      type: "Service",
      icon: <BookOpen className="h-4 w-4" />,
    },
    {
      title: "Scholarship Essay",
      description: "Scholarship application essays - Starting from NPR 1,600",
      url: "/contact#contact-form",
      type: "Service",
      icon: <Award className="h-4 w-4" />,
    },
    // Pages (medium priority)
    {
      title: "All Services",
      description: "View complete list of our writing services",
      url: "/services",
      type: "Page",
      icon: <FileText className="h-4 w-4" />,
    },
    {
      title: "Pricing Details",
      description: "Check detailed pricing for all services",
      url: "/pricing",
      type: "Page",
      icon: <DollarSign className="h-4 w-4" />,
    },
    {
      title: "About SOP TRD Nepal",
      description: "Learn about our company and team",
      url: "/about",
      type: "Page",
      icon: <Users className="h-4 w-4" />,
    },
    {
      title: "Blog & FAQ",
      description: "Read our blog and frequently asked questions",
      url: "/blog",
      type: "Page",
      icon: <BookOpen className="h-4 w-4" />,
    },
    // Info (lowest priority)
    {
      title: "Free Quote",
      description: "Get a personalized quote for your writing needs",
      url: "/contact#contact-form",
      type: "Info",
      icon: <FileText className="h-4 w-4" />,
    },
    {
      title: "WhatsApp Support",
      description: "Chat with us directly on WhatsApp",
      url: "https://wa.me/9779704565262",
      type: "Info",
      icon: <Users className="h-4 w-4" />,
    },
  ]

  useEffect(() => {
    if (query.trim() === "") {
      setResults([])
      if (!isFocused) {
        setIsOpen(false)
      }
      return
    }

    const filteredResults = searchData.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()),
    )

    // Sort results: Services first, then Pages, then Info
    const sortedResults = filteredResults.sort((a, b) => {
      const order = { Service: 1, Page: 2, Info: 3 }
      return order[a.type] - order[b.type]
    })

    setResults(sortedResults.slice(0, 6)) // Limit to 6 results
    setIsOpen(true)
  }, [query, isFocused])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setIsFocused(false)
        onFocusChange?.(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [onFocusChange])

  const handleResultClick = (url: string) => {
    if (url.startsWith("http")) {
      window.open(url, "_blank")
    } else {
      router.push(url)
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }, 100)
    }
    setIsOpen(false)
    setQuery("")
    setIsFocused(false)
    onFocusChange?.(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const handleInputFocus = () => {
    setIsFocused(true)
    onFocusChange?.(true)
    if (query) setIsOpen(true)
  }

  const handleInputBlur = () => {
    // Don't set isFocused to false here, let the click outside handler do it
    // This prevents the dropdown from closing when clicking on a result
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Service":
        return "bg-blue-100 text-blue-800"
      case "Page":
        return "bg-green-100 text-green-800"
      case "Info":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div ref={searchRef} className="relative max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          type="text"
          placeholder="Search for services, pricing, or information..."
          className="pl-10 py-3 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl"
          value={query}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-xl z-50 search-dropdown">
          {results.length > 0 ? (
            <div className="p-2">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 hover:bg-blue-50 rounded-lg cursor-pointer transition-colors border-b border-gray-100 last:border-b-0"
                  onClick={() => handleResultClick(result.url)}
                >
                  <div className="flex-shrink-0 mr-3 p-2 bg-gray-100 rounded-full">{result.icon}</div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-gray-900">{result.title}</h4>
                      <span className={`px-2 py-1 text-xs rounded-full font-medium ${getTypeColor(result.type)}`}>
                        {result.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{result.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : query ? (
            <div className="p-6 text-center text-gray-500">
              <Search className="h-8 w-8 mx-auto mb-2 text-gray-400" />
              <p className="font-medium">No results found for "{query}"</p>
              <p className="text-sm mt-1">Try searching for "SOP", "CV", "pricing", or "services"</p>
            </div>
          ) : (
            <div className="p-6 text-center text-gray-500">
              <Search className="h-8 w-8 mx-auto mb-2 text-gray-400" />
              <p className="font-medium">Start typing to search</p>
              <p className="text-sm mt-1">Search for services, pricing, or information</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
