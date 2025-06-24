"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Download, Mail, Github, Linkedin, Twitter, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [isDownloading, setIsDownloading] = useState(false)
  const roles = ["Flutter Developer", "Middleware Integration", "IBM ACE Developer", "Mobile App Developer"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
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

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-float" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 animate-float-delayed" />
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-green-200 dark:bg-green-800 rounded-full opacity-20 animate-float" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Abhishek Ghogare
              </span>
            </h1>
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300">
                <span className="inline-block transition-all duration-500 ease-in-out transform">
                  {roles[currentRole]}
                </span>
              </h2>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Specializing in{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">IBM Integration technologies</span> and
            <span className="font-semibold text-purple-600 dark:text-purple-400"> Flutter development</span>. Building
            scalable enterprise integrations and cross-platform mobile applications.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">1+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">6+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects Built</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">4</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">2</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Banking Clients</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg group"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">View Projects</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              disabled={isDownloading}
              className="px-8 py-3 rounded-full border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 group relative overflow-hidden"
              onClick={handleResumeDownload}
            >
              {isDownloading ? (
                <>
                  <Printer className="mr-2 w-4 h-4 animate-bounce" />
                  <span className="animate-pulse">Preparing Download...</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </>
              ) : (
                <>
                  <Download className="mr-2 w-4 h-4 group-hover:animate-bounce transition-all duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Download Resume</span>
                </>
              )}
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <Button
              variant="ghost"
              size="sm"
              className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 group"
              onClick={() => window.open("mailto:abhishekghogare45@gmail.com", "_blank")}
            >
              <Mail className="w-5 h-5 group-hover:animate-pulse" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 group"
              onClick={() => window.open("https://github.com/flutter-AbhishekGhogare", "_blank")}
            >
              <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 group"
              onClick={() => window.open("https://linkedin.com/in/ghogareabhishek", "_blank")}
            >
              <Linkedin className="w-5 h-5 group-hover:animate-pulse" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 group"
              onClick={() => window.open("https://x.com/Abhishekrg96", "_blank")}
            >
              <Twitter className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
