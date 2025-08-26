import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center mr-3">
                <span className="text-accent-foreground font-bold text-lg">M</span>
              </div>
              <span className="text-primary-foreground font-serif font-bold text-xl">MERN Developer Hub</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-md">
              Your comprehensive resource for MERN stack development. From learning materials and reusable components to
              project ideas and career opportunities - everything you need to excel as a full-stack developer.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-primary-foreground font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/learning"
                  className="text-primary-foreground/80 hover:text-accent text-sm transition-colors"
                >
                  Learning Hub
                </Link>
              </li>
              <li>
                <Link
                  href="/components"
                  className="text-primary-foreground/80 hover:text-accent text-sm transition-colors"
                >
                  Components
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-primary-foreground/80 hover:text-accent text-sm transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-primary-foreground/80 hover:text-accent text-sm transition-colors">
                  Career Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-primary-foreground font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-primary-foreground/80 hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-primary-foreground/80 hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-primary-foreground/80 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-primary-foreground/80 hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <p className="text-primary-foreground/60 text-sm text-center">
            © 2024 MERN Developer Hub. Built with Next.js and Tailwind CSS | Developed by 
             <a href="https://linkedin.com/in/manish-kumar-53023621a" className="underline ml-1" target="_blank">Manish Kumar</a>

          </p>
        </div>
      </div>
    </footer>
  )
}
