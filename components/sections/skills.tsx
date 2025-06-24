"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Skill {
  name: string
  category: string
  logo: string 
}

const skills: Skill[] = [
  // Flutter & Mobile Development
  { name: "Flutter", category: "Mobile", logo: "/logos/flutter.png" },
  { name: "Dart", category: "Mobile", logo: "/logos/dart.png" },
  { name: "SQLite", category: "Mobile", logo: "/logos/sqlite.png" },

  // IBM Integration
  { name: "IBM ACE", category: "Integration", logo: "/logos/ibm.png" },
  { name: "ESQL", category: "Integration", logo: "/logos/sql.png" },
  { name: "IBM MQ", category: "Integration", logo: "/logos/ibm.png" },

  // Backend & APIs
  { name: "REST API", category: "Backend", logo: "/logos/rest-api.png" },
  { name: "SOAP", category: "Backend", logo: "/logos/soapui.jpeg" },
  { name: "JSON", category: "Backend", logo: "/logos/json.png" },
  { name: "XML", category: "Backend", logo: "/logos/xml.png" },

  // Programming Languages
  { name: "Java", category: "Languages", logo: "/logos/java.png" },
  { name: "Python", category: "Languages", logo: "/logos/python.png" },

  // Database
  { name: "SQL", category: "Database", logo: "/logos/sql.png" },
  { name: "MySQL", category: "Database", logo: "/logos/my-sql.png" },
  { name: "ODBC", category: "Database", logo: "/logos/database.png" },

  // ServiceNow
  { name: "ServiceNow", category: "Platform", logo: "/logos/servicenow.png" },

  // Tools & Others
  { name: "Git", category: "Tools", logo: "/logos/git.png" },
  { name: "Postman", category: "Tools", logo: "/logos/postman-inc.png" },
  { name: "Firebase", category: "Cloud", logo: "/logos/firebase.png" },
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
                    <img
                      src={skill.logo}
                      alt={skill.name + ' logo'}
                      className="w-12 h-12 object-contain mb-2"
                      style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.08))' }}
                    />
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white leading-tight">{skill.name}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

         
        </div>
      </div>
    </section>
  )
}
