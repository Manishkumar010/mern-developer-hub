import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  BookOpen,
  Code2,
  FolderOpen,
  Briefcase,
  ArrowRight,
  Play,
  Github,
  ExternalLink,
  Users,
  Star,
  TrendingUp,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-muted/50 to-background py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              All-in-One MERN Developer Hub 🚀
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Master the MERN stack with curated learning resources, reusable components, project ideas, and career
              opportunities. Everything you need to become a full-stack developer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/learning">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Start Learning
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                <Link href="/career">
                  <Briefcase className="mr-2 h-5 w-5" />
                  Explore Companies
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Preview Sections */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-center mb-12">Explore Our Platform</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Learning Hub Preview */}
              <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/50">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <BookOpen className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="font-serif">Learning Hub</CardTitle>
                  <CardDescription>
                    Curated YouTube playlists and tutorials for HTML, CSS, JavaScript, React, Node.js, and MongoDB
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Play className="h-4 w-4 mr-2" />
                      <span>150+ Video Tutorials</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      <span>6 Core Technologies</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      <span>Beginner to Advanced</span>
                    </div>
                  </div>
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full group-hover:bg-accent group-hover:text-accent-foreground"
                  >
                    <Link href="/learning">
                      Explore Learning
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Components Preview */}
              <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/50">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Code2 className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="font-serif">Components & Templates</CardTitle>
                  <CardDescription>
                    Ready-to-use React components, templates, and GitHub repositories for rapid development
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Code2 className="h-4 w-4 mr-2" />
                      <span>50+ Components</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Github className="h-4 w-4 mr-2" />
                      <span>Open Source</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Star className="h-4 w-4 mr-2" />
                      <span>Production Ready</span>
                    </div>
                  </div>
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full group-hover:bg-accent group-hover:text-accent-foreground"
                  >
                    <Link href="/components">
                      Browse Components
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Projects Preview */}
              <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/50">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <FolderOpen className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="font-serif">Projects</CardTitle>
                  <CardDescription>
                    Hands-on projects from beginner to advanced level with GitHub repos and video guides
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <FolderOpen className="h-4 w-4 mr-2" />
                      <span>30+ Projects</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      <span>3 Difficulty Levels</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      <span>Live Demos</span>
                    </div>
                  </div>
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full group-hover:bg-accent group-hover:text-accent-foreground"
                  >
                    <Link href="/projects">
                      View Projects
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Career Hub Preview */}
              <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/50">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Briefcase className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="font-serif">Career Hub</CardTitle>
                  <CardDescription>
                    Discover job opportunities, company insights, and career resources for MERN developers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Briefcase className="h-4 w-4 mr-2" />
                      <span>100+ Companies</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      <span>Remote & On-site</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      <span>Updated Daily</span>
                    </div>
                  </div>
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full group-hover:bg-accent group-hover:text-accent-foreground"
                  >
                    <Link href="/career">
                      Find Jobs
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-muted/30 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-foreground mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Video Tutorials</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Components</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground mb-2">30+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Companies</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">Ready to Start Your MERN Journey?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of developers who are building amazing full-stack applications with our comprehensive
              resources.
            </p>
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/learning">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
