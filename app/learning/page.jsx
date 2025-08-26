import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Clock, Users, ExternalLink } from "lucide-react"

const learningTopics = [
  {
    id: "html",
    title: "HTML",
    description: "Master the foundation of web development with semantic HTML",
    color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    icon: "🏗️",
    level: "Beginner",
    playlists: [
      {
        title: "HTML Crash Course for Beginners",
        channel: "Traversy Media",
        duration: "2h 15m",
        views: "1.2M",
        thumbnail: "/html-tutorial-thumbnail.png",
        description: "Complete HTML tutorial covering all essential tags and semantic elements",
      },
      {
        title: "Modern HTML5 & CSS3 From Scratch",
        channel: "Brad Traversy",
        duration: "4h 30m",
        views: "890K",
        thumbnail: "/html5-course-thumbnail.png",
        description: "Build responsive websites with modern HTML5 features and best practices",
      },
      {
        title: "HTML Forms & Validation",
        channel: "Web Dev Simplified",
        duration: "1h 45m",
        views: "650K",
        thumbnail: "/html-forms-tutorial.png",
        description: "Master HTML forms, input types, and client-side validation techniques",
      },
    ],
  },
  {
    id: "css",
    title: "CSS",
    description: "Style beautiful and responsive user interfaces",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    icon: "🎨",
    level: "Beginner",
    playlists: [
      {
        title: "CSS Grid & Flexbox Masterclass",
        channel: "Kevin Powell",
        duration: "3h 20m",
        views: "2.1M",
        thumbnail: "/css-grid-flexbox-tutorial.png",
        description: "Master modern CSS layout techniques with Grid and Flexbox",
      },
      {
        title: "CSS Animation & Transitions",
        channel: "DevEd",
        duration: "2h 45m",
        views: "1.5M",
        thumbnail: "/css-animations-tutorial.png",
        description: "Create smooth animations and transitions for engaging user experiences",
      },
      {
        title: "Responsive Web Design",
        channel: "freeCodeCamp",
        duration: "4h 15m",
        views: "3.2M",
        thumbnail: "/responsive-design-tutorial.png",
        description: "Build websites that work perfectly on all devices and screen sizes",
      },
    ],
  },
  {
    id: "javascript",
    title: "JavaScript",
    description: "Learn the programming language that powers the web",
    color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    icon: "⚡",
    level: "Intermediate",
    playlists: [
      {
        title: "JavaScript Fundamentals",
        channel: "The Net Ninja",
        duration: "6h 30m",
        views: "4.5M",
        thumbnail: "/javascript-fundamentals-tutorial.png",
        description: "Complete JavaScript course covering variables, functions, objects, and more",
      },
      {
        title: "Async JavaScript & Promises",
        channel: "Academind",
        duration: "3h 15m",
        views: "1.8M",
        thumbnail: "/javascript-async-promises-tutorial.png",
        description: "Master asynchronous JavaScript, promises, and async/await patterns",
      },
      {
        title: "ES6+ Modern JavaScript",
        channel: "Wes Bos",
        duration: "5h 45m",
        views: "2.3M",
        thumbnail: "/es6-modern-javascript-tutorial.png",
        description: "Learn modern JavaScript features like arrow functions, destructuring, and modules",
      },
    ],
  },
  {
    id: "react",
    title: "React",
    description: "Build dynamic user interfaces with React",
    color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
    icon: "⚛️",
    level: "Intermediate",
    playlists: [
      {
        title: "React Complete Course",
        channel: "Codevolution",
        duration: "8h 20m",
        views: "3.7M",
        thumbnail: "/react-complete-course-tutorial.png",
        description: "Comprehensive React tutorial from basics to advanced concepts",
      },
      {
        title: "React Hooks Deep Dive",
        channel: "Ben Awad",
        duration: "4h 10m",
        views: "1.9M",
        thumbnail: "/react-hooks-tutorial.png",
        description: "Master React hooks including useState, useEffect, and custom hooks",
      },
      {
        title: "React Context & State Management",
        channel: "Dave Gray",
        duration: "3h 35m",
        views: "1.2M",
        thumbnail: "/react-context-state-management.png",
        description: "Learn React Context API and modern state management patterns",
      },
    ],
  },
  {
    id: "nodejs",
    title: "Node.js",
    description: "Server-side JavaScript runtime for backend development",
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    icon: "🟢",
    level: "Intermediate",
    playlists: [
      {
        title: "Node.js Crash Course",
        channel: "Traversy Media",
        duration: "3h 45m",
        views: "2.8M",
        thumbnail: "/node-js-crash-course-tutorial.png",
        description: "Learn Node.js fundamentals, modules, and building REST APIs",
      },
      {
        title: "Express.js & MongoDB",
        channel: "The Net Ninja",
        duration: "5h 20m",
        views: "2.1M",
        thumbnail: "/express-mongodb-tutorial.png",
        description: "Build full-stack applications with Express.js and MongoDB",
      },
      {
        title: "Node.js Authentication",
        channel: "Web Dev Simplified",
        duration: "2h 55m",
        views: "1.4M",
        thumbnail: "/node-js-authentication-tutorial.png",
        description: "Implement secure authentication with JWT and session management",
      },
    ],
  },
  {
    id: "mongodb",
    title: "MongoDB",
    description: "NoSQL database for modern applications",
    color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
    icon: "🍃",
    level: "Intermediate",
    playlists: [
      {
        title: "MongoDB Complete Tutorial",
        channel: "freeCodeCamp",
        duration: "4h 30m",
        views: "1.9M",
        thumbnail: "/placeholder.svg?height=120&width=200",
        description: "Master MongoDB from basics to advanced queries and aggregation",
      },
      {
        title: "Mongoose ODM Guide",
        channel: "Academind",
        duration: "3h 15m",
        views: "1.1M",
        thumbnail: "/placeholder.svg?height=120&width=200",
        description: "Learn Mongoose for elegant MongoDB object modeling in Node.js",
      },
      {
        title: "MongoDB Atlas & Deployment",
        channel: "Programming with Mosh",
        duration: "2h 40m",
        views: "850K",
        thumbnail: "/placeholder.svg?height=120&width=200",
        description: "Deploy and manage MongoDB databases in the cloud with Atlas",
      },
    ],
  },
]

export default function LearningPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-gradient-to-b from-muted/50 to-background py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">Learning Hub</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Master the MERN stack with our curated collection of high-quality video tutorials and learning resources.
              From HTML basics to advanced React patterns.
            </p>
          </div>
        </section>

        {/* Topics Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {learningTopics.map((topic) => (
                <Card key={topic.id} className="overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{topic.icon}</span>
                        <div>
                          <CardTitle className="font-serif text-2xl">{topic.title}</CardTitle>
                          <Badge variant="secondary" className={topic.color}>
                            {topic.level}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-base">{topic.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {topic.playlists.map((playlist, index) => (
                        <div
                          key={index}
                          className="flex gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex-shrink-0">
                            <img
                              src={playlist.thumbnail || "/placeholder.svg"}
                              alt={playlist.title}
                              className="w-20 h-12 object-cover rounded bg-muted"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-sm mb-1 line-clamp-1">{playlist.title}</h4>
                            <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{playlist.description}</p>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Users className="h-3 w-3" />
                                {playlist.channel}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {playlist.duration}
                              </span>
                              <span className="flex items-center gap-1">
                                <Play className="h-3 w-3" />
                                {playlist.views} views
                              </span>
                            </div>
                          </div>
                          <Button size="sm" variant="ghost" className="flex-shrink-0">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Path Section */}
        <section className="bg-muted/30 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-6">Recommended Learning Path</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Follow this structured path to master the MERN stack efficiently
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"].map((tech, index) => (
                <div key={tech} className="flex items-center">
                  <Badge variant="outline" className="px-4 py-2 text-sm">
                    {index + 1}. {tech}
                  </Badge>
                  {index < 5 && <div className="w-8 h-px bg-border mx-2 hidden sm:block" />}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
