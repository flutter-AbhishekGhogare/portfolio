"use client"

import { useState } from "react"
import { Calendar, MapPin, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface TimelineItem {
  id: string
  type: "work" | "education" | "certification"
  title: string
  organization: string
  location?: string
  period: string
  description: string[]
  technologies?: string[]
  achievements?: string[]
  link?: string
}

const timelineData: TimelineItem[] = [
  {
    id: "1",
    type: "work",
    title: "IBM App Connect Enterprise Developer",
    organization: "Eidiko Systems Integrators",
    location: "Remote",
    period: "Aug 2024 – Present",
    description: [
      "Designed integration flows to connect enterprise systems and transform data",
      "Implemented routing, validation, error handling, and logging for reliable messaging",
      "Supported multiple data formats (XML, JSON, CSV) with comprehensive documentation",
    ],
    technologies: ["IBM App Connect", "HTTP", "SOAP", "GitHub", "ODBC", "SQL", "Postman"],
    achievements: [
      "Successfully integrated Steward Bank (Zimbabwe) enterprise systems",
      "Developed REST APIs and message transformations for Deshan Bank (Ethiopia)",
      "Wrote ESQL for database access and Java-based encryption for secure data flow",
      "Managed testing, analysis, and synchronous/asynchronous messaging",
    ],
  },
  {
    id: "2",
    type: "education",
    title: "Bachelor of Engineering (Electronics & Telecommunication)",
    organization: "TSSM's Bhivarabai Sawant College of Engineering & Research",
    location: "Pune",
    period: "2020 – 2024",
    description: [
      "Specialized in Electronics & Telecommunication Engineering",
      "Focused on software development and integration technologies",
      "Completed various projects in mobile and desktop application development",
    ],
  },
  {
    id: "3",
    type: "certification",
    title: "IBM Integration Bus - Developer Track (Badge)",
    organization: "IBM",
    period: "2024 – 2025",
    description: [
      "Earned IBM Integration Bus Developer certification with badge",
      "Demonstrated expertise in enterprise integration patterns",
      "Validated skills in IBM ACE/IIB development and ESQL programming",
    ],
    link: "https://www.credly.com/badges/your-badge-id",
  },
  {
    id: "4",
    type: "certification",
    title: "ServiceNow Fundamentals",
    organization: "ServiceNow",
    period: "2023 – 2024",
    description: [
      "Completed ServiceNow platform fundamentals training",
      "Learned GlideRecord, Script Includes, and CMDB concepts",
      "Applied knowledge in enterprise service management solutions",
    ],
  },
  {
    id: "5",
    type: "certification",
    title: "Flutter Development",
    organization: "Incubator",
    period: "2020 – 2024",
    description: [
      "Comprehensive Flutter development training program",
      "Learned cross-platform mobile app development with Dart",
      "Built multiple projects including PG Management and Billing systems",
    ],
  },
  {
    id: "6",
    type: "certification",
    title: "Java Programming",
    organization: "Core2Web",
    period: "2019 – 2020",
    description: [
      "Foundational Java programming certification",
      "Object-oriented programming concepts and best practices",
      "Core Java fundamentals and application development",
    ],
  },
  {
    id: "7",
    type: "education",
    title: "Higher Secondary Certificate (Science)",
    organization: "Shankarrao Mohite Mahavidyalaya",
    location: "Akluj",
    period: "2019 – 2020",
    description: [
      "Completed Higher Secondary education with Science stream",
      "Strong foundation in Mathematics, Physics, and Chemistry",
      "Prepared for engineering entrance examinations",
    ],
  },
  {
    id: "8",
    type: "education",
    title: "Secondary School Certificate (SSC)",
    organization: "Jijamata Shikshan Prasarak Mandal",
    location: "Sarati",
    period: "2017 – 2018",
    description: [
      "Completed secondary education with excellent academic performance",
      "Built strong foundation in core subjects",
      "Developed interest in technology and programming",
    ],
  },
]

export function Timeline() {
  const [expandedItems, setExpandedItems] = useState<string[]>([]) // No items expanded by default
  const [filter, setFilter] = useState<"all" | "work" | "education" | "certification">("all")

  const toggleExpanded = (id: string) => {
    setExpandedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const filteredData = filter === "all" ? timelineData : timelineData.filter((item) => item.type === filter)

  const getTypeColor = (type: string) => {
    switch (type) {
      case "work":
        return "bg-blue-500"
      case "education":
        return "bg-green-500"
      case "certification":
        return "bg-purple-500"
      default:
        return "bg-gray-500"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "work":
        return "💼"
      case "education":
        return "🎓"
      case "certification":
        return "🏆"
      default:
        return "📋"
    }
  }

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Journey</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From education to professional experience, here's my path in technology and development
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { key: "all", label: "All", icon: "📋" },
              { key: "work", label: "Work", icon: "💼" },
              { key: "education", label: "Education", icon: "🎓" },
              { key: "certification", label: "Certifications", icon: "🏆" },
            ].map(({ key, label, icon }) => (
              <Button
                key={key}
                variant={filter === key ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(key as any)}
                className={`transition-all duration-300 ${
                  filter === key
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <span className="mr-2">{icon}</span>
                {label}
              </Button>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line - Hidden on mobile, centered on desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"></div>

            {/* Mobile Timeline Line - Left aligned */}
            <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"></div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {filteredData.map((item, index) => (
                <div key={item.id} className="relative flex items-center">
                  {/* Timeline Dot - Different positioning for mobile and desktop */}
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center z-10">
                    <div
                      className={`w-12 h-12 rounded-full ${getTypeColor(item.type)} flex items-center justify-center text-white text-lg font-bold shadow-lg border-4 border-white dark:border-gray-900`}
                    >
                      {getTypeIcon(item.type)}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full pl-20 md:pl-0 md:w-full flex ${
                      index % 2 === 0 ? "md:justify-start md:pr-8" : "md:justify-end md:pl-8"
                    }`}
                  >
                    <div className={`w-full ${index % 2 === 0 ? "md:w-1/2 md:pr-8" : "md:w-1/2 md:pl-8"}`}>
                      <Card className="w-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                        <CardContent className="p-6">
                          {/* Header - Consistent layout */}
                          <div className="mb-4">
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                              <Calendar className="w-4 h-4 flex-shrink-0" />
                              <span className="font-medium">{item.period}</span>
                              {item.location && (
                                <>
                                  <span>•</span>
                                  <MapPin className="w-4 h-4 flex-shrink-0" />
                                  <span>{item.location}</span>
                                </>
                              )}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                              {item.title}
                            </h3>
                            <p className="text-blue-600 dark:text-blue-400 font-semibold text-base">
                              {item.organization}
                            </p>
                          </div>

                          {/* Description - Consistent spacing */}
                          <div className="mb-4">
                            {expandedItems.includes(item.id) ? (
                              <div className="space-y-2">
                                {item.description.map((desc, i) => (
                                  <p key={i} className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    • {desc}
                                  </p>
                                ))}
                              </div>
                            ) : (
                              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                {item.description[0]}
                              </p>
                            )}
                          </div>

                          {/* Technologies - Consistent layout */}
                          {item.technologies && expandedItems.includes(item.id) && (
                            <div className="mb-4">
                              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                Technologies:
                              </h4>
                              <div className="flex flex-wrap gap-1">
                                {item.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full font-medium"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Achievements - Consistent layout */}
                          {item.achievements && expandedItems.includes(item.id) && (
                            <div className="mb-4">
                              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                Key Achievements:
                              </h4>
                              <div className="space-y-1">
                                {item.achievements.map((achievement, i) => (
                                  <p key={i} className="text-green-600 dark:text-green-400 text-sm leading-relaxed">
                                    ✓ {achievement}
                                  </p>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Actions - Consistent layout */}
                          <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => toggleExpanded(item.id)}
                              className="text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium"
                            >
                              {expandedItems.includes(item.id) ? (
                                <>
                                  <ChevronUp className="w-4 h-4 mr-1" />
                                  Show Less
                                </>
                              ) : (
                                <>
                                  <ChevronDown className="w-4 h-4 mr-1" />
                                  Show More
                                </>
                              )}
                            </Button>
                            {item.link && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => window.open(item.link, "_blank")}
                                className="text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 font-medium"
                              >
                                <ExternalLink className="w-4 h-4 mr-1" />
                                View
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
