"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X, Download, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

export function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleResumeDownload = async () => {
    setIsDownloading(true)

    // Simulate download process with animation
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Create and trigger download
    const link = document.createElement("a")
    link.href = "/Abhishek_Ghogare_Resume.pdf"
    link.download = "Abhishek_Ghogare_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    setIsDownloading(false)
  }

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-700"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Abhishek
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              disabled={isDownloading}
              className="bg-white dark:bg-gray-800 group relative overflow-hidden"
              onClick={handleResumeDownload}
            >
              {isDownloading ? (
                <>
                  <Printer className="w-4 h-4 mr-2 animate-bounce" />
                  <span className="animate-pulse">Downloading...</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  Resume
                </>
              )}
            </Button>
            <Button variant="ghost" size="sm" onClick={toggleDarkMode} className="p-2">
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button variant="ghost" size="sm" onClick={toggleDarkMode} className="p-2">
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 rounded-lg mt-2 shadow-lg">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={isDownloading}
                  className="w-full group relative overflow-hidden"
                  onClick={handleResumeDownload}
                >
                  {isDownloading ? (
                    <>
                      <Printer className="w-4 h-4 mr-2 animate-bounce" />
                      <span className="animate-pulse">Downloading...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                      Resume
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
