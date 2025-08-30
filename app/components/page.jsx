"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Github, Star, Search, ExternalLink } from "lucide-react"

const componentsData = {
  components: [
    {
      id: 1,
      name: "Modern Button Component",
      description: "Customizable button component with multiple variants, sizes, and loading states",
      complexity: "Easy",
      downloads: "12.5K",
      preview: "/placeholder.svg?height=100&width=200",
      tags: ["Button", "UI", "Interactive"],
    },
    {
      id: 2,
      name: "Responsive Navbar",
      description: "Mobile-first navigation component with dropdown menus and search functionality",
      complexity: "Medium",
      downloads: "8.9K",
      preview: "/placeholder.svg?height=100&width=200",
      tags: ["Navigation", "Responsive", "Menu"],
    },
    {
      id: 3,
      name: "Card Collection",
      description: "Versatile card components for displaying content with various layouts and styles",
      complexity: "Easy",
      downloads: "15.2K",
      preview: "/placeholder.svg?height=100&width=200",
      tags: ["Card", "Layout", "Content"],
    },
    {
      id: 4,
      name: "Form Validation Suite",
      description: "Complete form components with built-in validation and error handling",
      complexity: "Hard",
      downloads: "6.7K",
      preview: "/placeholder.svg?height=100&width=200",
      tags: ["Form", "Validation", "Input"],
    },
  ],
  templates: [
    {
      id: 5,
      name: "Admin Dashboard",
      description: "Complete admin dashboard template with charts, tables, and user management",
      complexity: "Hard",
      downloads: "4.2K",
      preview: "/placeholder.svg?height=100&width=200",
      tags: ["Dashboard", "Admin", "Charts"],
    },
    {
      id: 6,
      name: "Landing Page Template",
      description: "Modern landing page template with hero section, features, and contact form",
      complexity: "Medium",
      downloads: "9.8K",
      preview: "/placeholder.svg?height=100&width=200",
      tags: ["Landing", "Marketing", "Responsive"],
    },
    {
      id: 7,
      name: "E-commerce Product Page",
      description: "Product page template with image gallery, reviews, and shopping cart integration",
      complexity: "Hard",
      downloads: "3.5K",
      preview: "/placeholder.svg?height=100&width=200",
      tags: ["E-commerce", "Product", "Shopping"],
    },
    {
      id: 8,
      name: "Authentication System",
      description: "Complete auth system with login, register, forgot password, and profile pages",
      complexity: "Hard",
      downloads: "7.1K",
      preview: "/placeholder.svg?height=100&width=200",
      tags: ["Auth", "Login", "Security"],
    },
  ],
  repos: [
    {
      id: 9,
      name: "React Starter Kit",
      description: "Production-ready React starter with TypeScript, Tailwind, and testing setup",
      complexity: "Medium",
      stars: "2.1K",
      preview: "/placeholder.svg?height=100&width=200",
      tags: ["Starter", "React", "TypeScript"],
    },
    {
      id: 10,
      name: "MERN Stack Boilerplate",
      description: "Full-stack MERN boilerplate with authentication, API, and deployment configs",
      complexity: "Hard",
      stars: "1.8K",
      preview: "/placeholder.svg?height=100&width=200",
      tags: ["MERN", "Boilerplate", "Full-stack"],
    },
    {
      id: 11,
      name: "UI Component Library",
      description: "Comprehensive React component library with Storybook and documentation",
      complexity: "Hard",
      stars: "3.4K",
      preview: "/placeholder.svg?height=100&width=200",
      tags: ["Components", "Library", "Storybook"],
    },
    {
      id: 12,
      name: "Next.js Blog Template",
      description: "SEO-optimized blog template with MDX support and dark mode",
      complexity: "Medium",
      stars: "1.2K",
      preview: "/placeholder.svg?height=100&width=200",
      tags: ["Next.js", "Blog", "MDX"],
    },
  ],
}

export default function ComponentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("components")

  const getComplexityColor = (complexity) => {
    switch (complexity.toLowerCase()) {
      case "easy":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "hard":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  const filterItems = (items) => {
    return items.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
    )
  }

  return (
    <div className="min-h-screen flex flex-col ">
      <Navigation />

      <main className="flex-1 ">
        {/* Header Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#dfe2fe] via-[#b1cbfa] to-[#8e98f5]">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">Components & Templates</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Accelerate your development with our collection of ready-to-use React components, templates, and GitHub
              repositories.
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-amber-100 bg-gradient-to-r from-[#dfe2fe] via-[#b1cbfa] to-[#8e98f5]" >
          <div className="max-w-7xl mx-auto">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search components, templates, or repos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#dfe2fe] via-[#b1cbfa] to-[#8e98f5]">
          <div className="max-w-7xl mx-auto">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
                <TabsTrigger value="components">Components</TabsTrigger>
                <TabsTrigger value="templates">Templates</TabsTrigger>
                <TabsTrigger value="repos">GitHub Repos</TabsTrigger>
              </TabsList>

              <TabsContent value="components" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterItems(componentsData.components).map((item) => (
                    <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-video bg-muted">
                        <img
                          src={item.preview || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between mb-2">
                          <Badge className={getComplexityColor(item.complexity)}>{item.complexity}</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Download className="h-4 w-4 mr-1" />
                            {item.downloads}
                          </div>
                        </div>
                        <CardTitle className="font-serif text-lg">{item.name}</CardTitle>
                        <CardDescription className="text-sm">{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {item.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                          <Button size="sm" variant="outline">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="templates" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterItems(componentsData.templates).map((item) => (
                    <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-video bg-muted">
                        <img
                          src={item.preview || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between mb-2">
                          <Badge className={getComplexityColor(item.complexity)}>{item.complexity}</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Download className="h-4 w-4 mr-1" />
                            {item.downloads}
                          </div>
                        </div>
                        <CardTitle className="font-serif text-lg">{item.name}</CardTitle>
                        <CardDescription className="text-sm">{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {item.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                          <Button size="sm" variant="outline">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="repos" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterItems(componentsData.repos).map((item) => (
                    <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-video bg-muted">
                        <img
                          src={item.preview || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between mb-2">
                          <Badge className={getComplexityColor(item.complexity)}>{item.complexity}</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Star className="h-4 w-4 mr-1" />
                            {item.stars}
                          </div>
                        </div>
                        <CardTitle className="font-serif text-lg">{item.name}</CardTitle>
                        <CardDescription className="text-sm">{item.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {item.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1">
                            <Github className="h-4 w-4 mr-2" />
                            View Repo
                          </Button>
                          <Button size="sm" variant="outline">
                            <Star className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
