"use client"

import { useState } from "react"
import { Github, ExternalLink, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  category: "mobile" | "backend" | "integration" | "desktop"
  image: string
  githubUrl?: string
  liveUrl?: string
  apkUrl?: string
  features: string[]
  status: "completed" | "in-progress" | "planned"
}

const projects: Project[] = [
  {
    id: "1",
    title: "PG Management Mobile App",
    description:
      "Flutter-based mobile application for managing hostel and PG operations with multi-tenant architecture.",
    longDescription:
      "A comprehensive mobile application built with Flutter for managing hostel and PG operations. Features include resident management, payment tracking, document storage, and reporting with role-based access control.",
    technologies: ["Flutter", "Dart", "SQLite", "Firebase", "Provider", "Material Design"],
    category: "mobile",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    githubUrl: "https://github.com/flutter-AbhishekGhogare/pg-management",
    features: [
      "Multi-tenant architecture supporting multiple PGs",
      "Resident management with profile and document storage",
      "Payment tracking and automated billing",
      "Role-based access control for different user types",
      "Real-time notifications and reporting",
      "Offline support with data synchronization",
    ],
    status: "in-progress",
  },
  {
    id: "2",
    title: "Windows Billing System",
    description: "Desktop billing and inventory management application built with Flutter for Windows.",
    longDescription:
      "A comprehensive Windows-based billing and inventory management system with SQLite database, PDF generation, and automated invoice management.",
    technologies: ["Flutter", "SQLite", "PDF Generation", "Windows API", "Provider"],
    category: "desktop",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
    githubUrl: "https://github.com/flutter-AbhishekGhogare/Workshop-Billing",
    features: [
      "Complete inventory management with CRUD operations",
      "Automated invoice generation with unique numbering",
      "PDF export and sharing functionality",
      "Product categorization and GST calculations",
      "Vehicle information tracking for delivery",
      "Modular codebase with clean architecture",
    ],
    status: "completed",
  },
  {
    id: "3",
    title: "Steward Bank Integration",
    description: "Enterprise integration solution using IBM ACE for connecting banking systems.",
    longDescription:
      "Built integration flows using IBM App Connect Enterprise to connect Steward Bank's core banking systems, enabling seamless transaction processing and data transformation.",
    technologies: ["IBM ACE", "ESQL", "SOAP", "REST", "XML", "JSON", "ODBC"],
    category: "integration",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    features: [
      "Real-time transaction processing integration",
      "Multi-format data transformation (XML, JSON, CSV)",
      "Custom error handling and logging",
      "Secure message routing and validation",
      "Performance monitoring and optimization",
      "Comprehensive documentation and testing",
    ],
    status: "completed",
  },
  {
    id: "4",
    title: "Deshan Bank API Gateway",
    description: "REST API development and message transformation for Ethiopian banking integration.",
    longDescription:
      "Developed REST APIs and implemented JSON-SOAP message transformations to integrate Deshan Bank systems across multiple platforms with secure data exchange.",
    technologies: ["IBM ACE", "REST API", "SOAP", "Java", "Swagger", "Postman"],
    category: "backend",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
    features: [
      "RESTful API design and implementation",
      "JSON to SOAP message transformation",
      "Java-based encryption for data security",
      "Comprehensive API documentation with Swagger",
      "Synchronous and asynchronous messaging support",
      "Thorough testing and requirement analysis",
    ],
    status: "completed",
  },
]

const categories = [
  { key: "all", label: "All Projects", icon: "📋" },
  { key: "mobile", label: "Mobile", icon: "📱" },
  { key: "backend", label: "Backend", icon: "⚙️" },
  { key: "integration", label: "Integration", icon: "🔗" },
  { key: "desktop", label: "Desktop", icon: "💻" },
]

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "in-progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "planned":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed":
        return "✅ Completed"
      case "in-progress":
        return "🚧 In Progress"
      case "planned":
        return "📋 Planned"
      default:
        return status
    }
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Showcasing my expertise in Flutter development, enterprise integrations, and full-stack solutions
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(({ key, label, icon }) => (
              <Button
                key={key}
                variant={selectedCategory === key ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(key)}
                className={`transition-all duration-300 ${
                  selectedCategory === key
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <span className="mr-2">{icon}</span>
                {label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={getStatusColor(project.status)}>{getStatusLabel(project.status)}</Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(project.githubUrl, "_blank")
                        }}
                        className="flex-1 group"
                      >
                        <Github className="w-4 h-4 mr-1 group-hover:rotate-12 transition-transform duration-300" />
                        Code
                      </Button>
                    )}
                    {(project.liveUrl || project.apkUrl) && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(project.liveUrl || project.apkUrl, "_blank")
                        }}
                        className="flex-1 group"
                      >
                        <ExternalLink className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform duration-300" />
                        {project.apkUrl ? "APK" : "Live"}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Project Detail Modal */}
          {selectedProject && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
              <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{selectedProject.title}</h3>
                      <Badge className={getStatusColor(selectedProject.status)}>
                        {getStatusLabel(selectedProject.status)}
                      </Badge>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => setSelectedProject(null)}>
                      <X className="w-4 h-4" />
                    </Button>
                  </div>

                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />

                  <p className="text-gray-600 dark:text-gray-400 mb-6">{selectedProject.longDescription}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    {selectedProject.githubUrl && (
                      <Button
                        onClick={() => window.open(selectedProject.githubUrl, "_blank")}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white group"
                      >
                        <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                        View Code
                      </Button>
                    )}
                    {(selectedProject.liveUrl || selectedProject.apkUrl) && (
                      <Button
                        variant="outline"
                        onClick={() => window.open(selectedProject.liveUrl || selectedProject.apkUrl, "_blank")}
                        className="group"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        {selectedProject.apkUrl ? "Download APK" : "View Live"}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
