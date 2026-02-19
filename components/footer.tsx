import Link from "next/link"
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  MessageCircle,
  Home,
  Users,
  FileText,
  DollarSign,
} from "lucide-react"

export function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent mb-4">TRD Study Abroad</h3>
              <p className="text-gray-400 mb-4">
                Complete study abroad platform offering test preparation, SOP writing, visa counseling, and comprehensive guidance for students pursuing global education.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/trd.com.np"
                  className="text-gray-500 hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/trd.com.np/"
                  className="text-gray-500 hover:text-red-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/9779704565262"
                  className="text-gray-500 hover:text-green-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/test-prep" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Test Prep
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                    Blog & FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                  <span className="text-gray-300">Remote Work - Global Service</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-gray-400" />
                  <a href="tel:+9779704565262" className="text-gray-300 hover:text-white transition-colors">
                    +977-9704565262
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-gray-400" />
                  <a href="mailto:soptrd@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                    soptrd@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-gray-400">&copy; 2025 SOP TRD Nepal. All rights reserved.</p>
                <p className="text-gray-400 mt-2">Made with ❤️ in Nepal</p>
              </div>

              {/* Legal Links */}
              <div className="flex flex-col sm:flex-row gap-4 text-center">
                <Link
                  href="/terms"
                  className="text-gray-300 hover:text-white transition-colors flex items-center justify-center gap-1"
                >
                  📄 Terms and Conditions
                </Link>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-white transition-colors flex items-center justify-center gap-1"
                >
                  🔐 Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="grid grid-cols-5 h-16">
          <Link
            href="/about"
            className="flex flex-col items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
          >
            <Users className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium">About</span>
          </Link>

          <Link
            href="/services"
            className="flex flex-col items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
          >
            <FileText className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium">Services</span>
          </Link>

          <Link
            href="/"
            className="flex flex-col items-center justify-center text-blue-600 bg-blue-50 border-t-2 border-blue-600"
          >
            <Home className="h-6 w-6 mb-1" />
            <span className="text-xs font-semibold">Home</span>
          </Link>

          <Link
            href="/pricing"
            className="flex flex-col items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
          >
            <DollarSign className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium">Pricing</span>
          </Link>

          <Link
            href="/contact"
            className="flex flex-col items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
          >
            <Phone className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium">Contact</span>
          </Link>
        </div>
      </div>

      {/* Add bottom padding to body content on mobile to account for fixed bottom nav */}
      <div className="md:hidden h-16"></div>
    </>
  )
}
