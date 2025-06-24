"use client"

import { Github, Linkedin, Mail, Heart, ArrowUp, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Abhishek Ghogare
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Flutter Developer & Integration Specialist passionate about building scalable mobile applications and
                enterprise solutions.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-300"
                  onClick={() => window.open("https://github.com/flutter-AbhishekGhogare", "_blank")}
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 text-gray-400 hover:text-blue-400 hover:bg-gray-800 transition-all duration-300"
                  onClick={() => window.open("https://linkedin.com/in/ghogareabhishek", "_blank")}
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 text-gray-400 hover:text-blue-400 hover:bg-gray-800 transition-all duration-300"
                  onClick={() => window.open("https://x.com/Abhishekrg96", "_blank")}
                >
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 text-gray-400 hover:text-green-400 hover:bg-gray-800 transition-all duration-300"
                  onClick={() => window.open("mailto:abhishekghogare45@gmail.com", "_blank")}
                >
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <nav className="space-y-2">
                {[
                  { label: "About", href: "#about" },
                  { label: "Experience", href: "#experience" },
                  { label: "Projects", href: "#projects" },
                  { label: "Skills", href: "#skills" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Get in Touch</h4>
              <div className="space-y-2 text-gray-400">
                <p>📧 abhishekghogare45@gmail.com</p>
                <p>📱 +91-9022277360</p>
                <p>📍 Pune, Maharashtra, India</p>
              </div>
              <div className="flex items-center space-x-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Available for new projects</span>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>© {currentYear} Abhishek Ghogare. Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-300 group"
            >
              <ArrowUp className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
