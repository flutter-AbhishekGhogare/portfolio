"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Skill {
  name: string
  category: string
  icon: string
}

const skills: Skill[] = [
  // Flutter & Mobile Development
  { name: "Flutter", category: "Mobile", icon: "📱" },
  { name: "Dart", category: "Mobile", icon: "🎯" },
  { name: "SQLite", category: "Mobile", icon: "💿" },

  // IBM Integration
  { name: "IBM ACE", category: "Integration", icon: "🔗" },
  { name: "ESQL", category: "Integration", icon: "💾" },
  { name: "IBM MQ", category: "Integration", icon: "📨" },

  // Backend & APIs
  { name: "REST API", category: "Backend", icon: "🌐" },
  { name: "SOAP", category: "Backend", icon: "🧼" },
  { name: "JSON/XML", category: "Backend", icon: "📄" },

  // Programming Languages
  { name: "Java", category: "Languages", icon: "☕" },
  { name: "Python", category: "Languages", icon: "🐍" },

  // Database
  { name: "SQL", category: "Database", icon: "🗄️" },
  { name: "MySQL", category: "Database", icon: "🐬" },
  { name: "ODBC", category: "Database", icon: "🔌" },

  // ServiceNow
  { name: "ServiceNow", category: "Platform", icon: "🔧" },
  { name: "GlideRecord", category: "Platform", icon: "📊" },

  // Tools & Others
  { name: "Git", category: "Tools", icon: "🔀" },
  { name: "Postman", category: "Tools", icon: "📮" },
  { name: "Firebase", category: "Cloud", icon: "🔥" },
]

const categories = [
  { key: "all", label: "All Skills" },
  { key: "Mobile", label: "Mobile" },
  { key: "Integration", label: "Integration" },
  { key: "Backend", label: "Backend" },
  { key: "Languages", label: "Languages" },
  { key: "Database", label: "Database" },
  { key: "Platform", label: "Platform" },
  { key: "Tools", label: "Tools" },
  { key: "Cloud", label: "Cloud" },
]

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredSkills =
    selectedCategory === "all" ? skills : skills.filter((skill) => skill.category === selectedCategory)

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My technical expertise spans across mobile development, enterprise integrations, and full-stack solutions
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(({ key, label }) => (
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
                {label}
              </Button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {filteredSkills.map((skill) => (
              <Card
                key={skill.name}
                className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border-2 hover:border-blue-300 dark:hover:border-blue-600"
              >
                <CardContent className="p-4 text-center">
                  <div className="flex flex-col items-center space-y-2">
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </span>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white leading-tight">{skill.name}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {skills.filter((s) => ["Flutter", "IBM ACE", "Java", "REST API", "SQL"].includes(s.name)).length}
                </div>
                <p className="text-gray-600 dark:text-gray-400">Core Technologies</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{skills.length}</div>
                <p className="text-gray-600 dark:text-gray-400">Total Skills</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  {new Set(skills.map((s) => s.category)).size}
                </div>
                <p className="text-gray-600 dark:text-gray-400">Technology Categories</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
