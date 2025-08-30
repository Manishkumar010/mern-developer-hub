"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Github, ExternalLink, Play, Clock, Star, Search } from "lucide-react"

const projects = {
  beginner: [
    {
      id: 1,
      name: "Personal Portfolio Website",
      description: "Build a responsive portfolio website to showcase your skills and projects",
      technologies: ["HTML", "CSS", "JavaScript"],
      duration: "2-3 days",
      features: ["Responsive Design", "Contact Form", "Project Gallery", "About Section"],
      github: "https://github.com/example/portfolio",
      youtube: "https://youtube.com/watch?v=example",
      demo: "https://portfolio-demo.vercel.app",
      difficulty: "Beginner",
      stars: 245,
    },
    {
      id: 2,
      name: "Todo List App",
      description: "Create a functional todo list with add, edit, delete, and mark complete features",
      technologies: ["HTML", "CSS", "JavaScript"],
      duration: "1-2 days",
      features: ["Add/Delete Tasks", "Mark Complete", "Local Storage", "Filter Options"],
      github: "https://github.com/example/todo-app",
      youtube: "https://youtube.com/watch?v=example",
      demo: "https://todo-demo.vercel.app",
      difficulty: "Beginner",
      stars: 189,
    },
    {
      id: 3,
      name: "Weather App",
      description: "Build a weather application using a weather API to display current conditions",
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      duration: "2-3 days",
      features: ["Current Weather", "5-Day Forecast", "Location Search", "Responsive UI"],
      github: "https://github.com/example/weather-app",
      youtube: "https://youtube.com/watch?v=example",
      demo: "https://weather-demo.vercel.app",
      difficulty: "Beginner",
      stars: 312,
    },
  ],
  intermediate: [
    {
      id: 4,
      name: "E-commerce Product Page",
      description: "Create a modern e-commerce product page with React and shopping cart functionality",
      technologies: ["React", "CSS", "Context API"],
      duration: "1 week",
      features: ["Product Gallery", "Add to Cart", "Quantity Selector", "Product Reviews"],
      github: "https://github.com/example/ecommerce-page",
      youtube: "https://youtube.com/watch?v=example",
      demo: "https://ecommerce-demo.vercel.app",
      difficulty: "Intermediate",
      stars: 456,
    },
    {
      id: 5,
      name: "Recipe Finder App",
      description: "Build a recipe search application using React and a recipe API",
      technologies: ["React", "API", "CSS Modules"],
      duration: "1-2 weeks",
      features: ["Recipe Search", "Ingredient List", "Cooking Instructions", "Favorites"],
      github: "https://github.com/example/recipe-finder",
      youtube: "https://youtube.com/watch?v=example",
      demo: "https://recipe-demo.vercel.app",
      difficulty: "Intermediate",
      stars: 378,
    },
    {
      id: 6,
      name: "Task Management Dashboard",
      description: "Create a Kanban-style task management board with drag and drop functionality",
      technologies: ["React", "React DnD", "Local Storage"],
      duration: "2 weeks",
      features: ["Drag & Drop", "Task Categories", "Due Dates", "Progress Tracking"],
      github: "https://github.com/example/task-dashboard",
      youtube: "https://youtube.com/watch?v=example",
      demo: "https://task-demo.vercel.app",
      difficulty: "Intermediate",
      stars: 523,
    },
  ],
  advanced: [
    {
      id: 7,
      name: "Full-Stack Social Media App",
      description: "Build a complete social media platform with authentication, posts, and real-time chat",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "JWT"],
      duration: "4-6 weeks",
      features: ["User Authentication", "Post Creation", "Real-time Chat", "Image Upload", "Follow System"],
      github: "https://github.com/example/social-media",
      youtube: "https://youtube.com/watch?v=example",
      demo: "https://social-demo.vercel.app",
      difficulty: "Advanced",
      stars: 892,
    },
    {
      id: 8,
      name: "E-learning Platform",
      description: "Create a comprehensive e-learning platform with course management and video streaming",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS S3"],
      duration: "6-8 weeks",
      features: ["Course Creation", "Video Streaming", "Payment Integration", "Progress Tracking", "Certificates"],
      github: "https://github.com/example/elearning-platform",
      youtube: "https://youtube.com/watch?v=example",
      demo: "https://elearning-demo.vercel.app",
      difficulty: "Advanced",
      stars: 1247,
    },
    {
      id: 9,
      name: "Real Estate Management System",
      description: "Build a full-stack real estate platform with property listings and admin dashboard",
      technologies: ["React", "Node.js", "MongoDB", "Cloudinary", "Maps API"],
      duration: "6-10 weeks",
      features: ["Property Listings", "Advanced Search", "Image Gallery", "Admin Dashboard", "Map Integration"],
      github: "https://github.com/example/real-estate",
      youtube: "https://youtube.com/watch?v=example",
      demo: "https://realestate-demo.vercel.app",
      difficulty: "Advanced",
      stars: 756,
    },
  ],
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const allProjects = [...projects.beginner, ...projects.intermediate, ...projects.advanced]

  const filteredProjects = allProjects.filter((project) => {
    const matchesCategory = selectedCategory === "all" || project.difficulty.toLowerCase() === selectedCategory
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case "beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "advanced":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#dfe2fe] via-[#b1cbfa] to-[#8e98f5]">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">Projects</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Build real-world projects to strengthen your MERN stack skills. Each project includes source code, video
              tutorials, and live demos.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 border-b">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border border-gray-200"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={selectedCategory === "all" ? "default" : "outline"}
                  onClick={() => setSelectedCategory("all")}
                  size="sm"
                >
                  All
                </Button>
                <Button
                  variant={selectedCategory === "beginner" ? "default" : "outline"}
                  onClick={() => setSelectedCategory("beginner")}
                  size="sm"
                >
                  Beginner
                </Button>
                <Button
                  variant={selectedCategory === "intermediate" ? "default" : "outline"}
                  onClick={() => setSelectedCategory("intermediate")}
                  size="sm"
                >
                  Intermediate
                </Button>
                <Button
                  variant={selectedCategory === "advanced" ? "default" : "outline"}
                  onClick={() => setSelectedCategory("advanced")}
                  size="sm"
                >
                  Advanced
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <Badge className={getDifficultyColor(project.difficulty)}>{project.difficulty}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Star className="h-4 w-4 mr-1" />
                        {project.stars}
                      </div>
                    </div>
                    <CardTitle className="font-serif text-xl mb-2">{project.name}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      {project.duration}
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {project.features.slice(0, 3).map((feature, index) => (
                          <li key={index}>• {feature}</li>
                        ))}
                        {project.features.length > 3 && <li>• +{project.features.length - 3} more features</li>}
                      </ul>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        <Play className="h-4 w-4 mr-2" />
                        Tutorial
                      </Button>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No projects found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
