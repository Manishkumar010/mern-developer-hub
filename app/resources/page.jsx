"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ExternalLink, Search, Star, TrendingUp, Clock } from "lucide-react"

const resources = {
  deployment: [
    {
      id: 1,
      name: "Vercel",
      description: "Deploy your React and Next.js applications with zero configuration",
      url: "https://vercel.com",
      category: "Deployment",
      rating: 4.9,
      tags: ["Next.js", "React", "Serverless"],
      featured: true,
    },
    {
      id: 2,
      name: "Netlify",
      description: "Build, deploy, and manage modern web projects with continuous deployment",
      url: "https://netlify.com",
      category: "Deployment",
      rating: 4.8,
      tags: ["Static Sites", "JAMstack", "CI/CD"],
      featured: false,
    },
  ],
  databases: [
    {
      id: 3,
      name: "MongoDB Atlas",
      description: "Cloud-based MongoDB database service with global clusters",
      url: "https://mongodb.com/atlas",
      category: "Database",
      rating: 4.7,
      tags: ["NoSQL", "Cloud", "Scalable"],
      featured: true,
    },
    {
      id: 4,
      name: "Supabase",
      description: "Open source Firebase alternative with PostgreSQL database",
      url: "https://supabase.com",
      category: "Database",
      rating: 4.6,
      tags: ["PostgreSQL", "Real-time", "Auth"],
      featured: false,
    },
  ],
  development: [
    {
      id: 5,
      name: "Postman",
      description: "API development environment for testing and documenting APIs",
      url: "https://postman.com",
      category: "Development",
      rating: 4.8,
      tags: ["API", "Testing", "Documentation"],
      featured: false,
    },
    {
      id: 6,
      name: "VS Code",
      description: "Lightweight but powerful source code editor with extensive extensions",
      url: "https://code.visualstudio.com",
      category: "Development",
      rating: 4.9,
      tags: ["Editor", "Extensions", "IntelliSense"],
      featured: true,
    },
  ],
  design: [
    {
      id: 7,
      name: "Dribbble",
      description: "Design inspiration and showcase platform for creative professionals",
      url: "https://dribbble.com",
      category: "Design",
      rating: 4.5,
      tags: ["Inspiration", "UI/UX", "Portfolio"],
      featured: false,
    },
    {
      id: 8,
      name: "Behance",
      description: "Creative portfolio platform to showcase and discover creative work",
      url: "https://behance.net",
      category: "Design",
      rating: 4.4,
      tags: ["Portfolio", "Creative", "Showcase"],
      featured: false,
    },
  ],
  monitoring: [
    {
      id: 9,
      name: "Sentry",
      description: "Application monitoring and error tracking for better software quality",
      url: "https://sentry.io",
      category: "Monitoring",
      rating: 4.6,
      tags: ["Error Tracking", "Performance", "Debugging"],
      featured: false,
    },
    {
      id: 10,
      name: "LogRocket",
      description: "Session replay and performance monitoring for web applications",
      url: "https://logrocket.com",
      category: "Monitoring",
      rating: 4.5,
      tags: ["Session Replay", "Analytics", "Performance"],
      featured: false,
    },
  ],
}

const newResources = [
  {
    id: 11,
    name: "Vite",
    description: "Next generation frontend tooling with lightning fast HMR",
    url: "https://vitejs.dev",
    category: "Development",
    rating: 4.8,
    tags: ["Build Tool", "Fast", "Modern"],
    addedDate: "2024-01-15",
  },
  {
    id: 12,
    name: "Prisma",
    description: "Next-generation ORM for Node.js and TypeScript",
    url: "https://prisma.io",
    category: "Database",
    rating: 4.7,
    tags: ["ORM", "TypeScript", "Database"],
    addedDate: "2024-01-12",
  },
  {
    id: 13,
    name: "Framer Motion",
    description: "Production-ready motion library for React",
    url: "https://framer.com/motion",
    category: "Development",
    rating: 4.6,
    tags: ["Animation", "React", "Motion"],
    addedDate: "2024-01-10",
  },
]

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const allResources = [
    ...resources.deployment,
    ...resources.databases,
    ...resources.development,
    ...resources.design,
    ...resources.monitoring,
  ]

  const filteredResources = allResources.filter((resource) => {
    const matchesCategory = selectedCategory === "all" || resource.category.toLowerCase() === selectedCategory
    const matchesSearch =
      resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const categories = ["all", "deployment", "database", "development", "design", "monitoring"]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-gradient-to-b from-muted/50 to-background py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">Resources</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover essential tools, services, and platforms to enhance your MERN stack development workflow.
            </p>
          </div>
        </section>

        {/* New Resources Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-8">
              <TrendingUp className="h-6 w-6 text-accent" />
              <h2 className="font-serif text-2xl font-bold">New Resources Added This Week</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {newResources.map((resource) => (
                <Card key={resource.id} className="hover:shadow-lg transition-shadow border-accent/20">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary" className="bg-accent/10 text-accent">
                        New
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Star className="h-4 w-4 mr-1 fill-current text-yellow-500" />
                        {resource.rating}
                      </div>
                    </div>
                    <CardTitle className="font-serif text-lg">{resource.name}</CardTitle>
                    <CardDescription className="text-sm">{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {resource.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        Added {new Date(resource.addedDate).toLocaleDateString()}
                      </div>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 border-b">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    size="sm"
                    className="capitalize"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <Card
                  key={resource.id}
                  className={`overflow-hidden hover:shadow-lg transition-shadow ${resource.featured ? "border-accent/50" : ""}`}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="capitalize">
                          {resource.category}
                        </Badge>
                        {resource.featured && <Badge className="bg-accent/10 text-accent">Featured</Badge>}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Star className="h-4 w-4 mr-1 fill-current text-yellow-500" />
                        {resource.rating}
                      </div>
                    </div>
                    <CardTitle className="font-serif text-lg">{resource.name}</CardTitle>
                    <CardDescription className="text-sm">{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {resource.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button size="sm" variant="outline" className="w-full bg-transparent">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit Resource
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredResources.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No resources found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
