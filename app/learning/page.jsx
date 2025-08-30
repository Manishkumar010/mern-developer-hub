import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Clock, Users, ExternalLink } from "lucide-react"
import Link from "next/link"
import { link } from "fs"

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
        channel: "Apna college",
        duration: "2h 06m",
        views: "2M",
        link: "https://youtu.be/HcOc7P5BMi4?si=XLnIupyymICc-bK-",
        thumbnail: "/html-tutorial-thumbnail.png",
        description: "Complete HTML tutorial covering all essential tags and semantic elements",
      },
      {
        title: "Modern HTML5 From Scratch",
        channel: "CodeWithHarry ",
        duration: "2h 39m",
        views: "1.6M",
        link: "https://youtu.be/k2DSi1zGEc8?si=RQVCJLaLa915U1bV",
        thumbnail: "/html5-course-thumbnail.png",
        description: "Build responsive websites with modern HTML5 features and best practices",
      },
      {
        title: "HTML Forms & Validation & Everything",
        channel: "Thapa Technical",
        duration: "5h 37m",
        views: "910K",
        link: "https://youtu.be/5ccq_nLHneE?si=p1bNxYr3C6_B-i1k",
        thumbnail: "/html-forms-tutorial.png",
        description: "HTML Complete Tutorial for Beginners in Hindi🔥Free Notes + Codes",
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
        title: "CSS Tutorial for Beginners | Complete CSS with Project, Notes & Code",
        channel: "Apne College",
        duration: "7h 18m",
        views: "13M",
        link: "https://youtu.be/ESnrn1kAD4E?si=JyK3hgHFRJkdiYLE",
        thumbnail: "/css-grid-flexbox-tutorial.png",
        description: "Master modern CSS layout techniques with Grid and Flexbox",
      },
      {
        title: "Complete CSS Tutorial for Beginners in Hindi 🎓 Free Notes & Codes | Part 1",
        channel: "ThapaTechnical",
        duration: "11h",
        views: "700k",
        link: "https://youtu.be/MSICFljRcb4?si=kzqHnup_7Q0Lxq5Z",
        thumbnail: "/css-animations-tutorial.png",
        description: "Create smooth animations and transitions for engaging user experiences",
      },
      {
        title: "CSS Tutorial – Full Course for Beginners",
        channel: "freeCodeCamp",
        duration: "11h 08m",
        views: "2.5M",
        link: "https://youtu.be/OXGznpKZ_sA?si=1h5WNkqomQMAnyNh",
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
        title: "JavaScript Full Course Tutorial for Beginners in Hindi🔥Free Notes with 10+ Projects | P-1",
        channel: "Thapa Technical",
        duration: "11h 58m",
        views: "836K",
        link: "https://youtu.be/13gLB6hDHR8?si=TcPkxwp5t1t378Rw",
        thumbnail: "/javascript-fundamentals-tutorial.png",
        description: "Complete JavaScript course covering variables, functions, objects, and more",
      },
      {
        title: "JavaScript Full Course | JavaScript - Learn Everything",
        channel: "Sheryians Coding School",
        duration: "4h 15m",
        views: "444K",
        link: "https://youtu.be/a-wVHL0lpb0?si=AJXVfnEf8XXtKxbc",
        thumbnail: "/javascript-async-promises-tutorial.png",
        description: "Master asynchronous JavaScript, promises, and async/await patterns",
      },
      {
        title: "Learn JavaScript - Full Course for Beginner",
        channel: "freeCodeCamp",
        duration: "3h 26m",
        views: "20M",
        link: "https://youtu.be/PkZNo7MFNFg?si=rZkUr1HMJ7acwEkI",
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
        title: "React.js v19 Tutorials in Hindi - 2025",
        channel: "ThapaTechnical",
        duration: "141 Video",
        views: "2M",
        link: "https://youtube.com/playlist?list=PLwGdqUZWnOp1Rab71vx2zMF6qpwGDB2Z1&si=EqjtETDccb0gj_Bv",
        thumbnail: "/react-complete-course-tutorial.png",
        description: "Comprehensive React tutorial from basics to advanced concepts",
      },
      {
        title: "Complete React Tutorial Series in Hindi",
        channel: "Piyush Garg",
        duration: "35 video",
        views: "1M",
        link: "https://youtube.com/playlist?list=PLinedj3B30sCHqHtgbjg1lSYgWebm1dyI&si=wyDEKCtTJDnmgrxO",
        thumbnail: "/react-hooks-tutorial.png",
        description: "Master React hooks including useState, useEffect, and custom hooks",
      },
      {
        title: "React.js Full Course in Hindi | Zero to Advanced",
        channel: "Anurag Singh ProCodrr",
        duration: "55 video",
        views: "1.2M",
        link: 'https://youtube.com/playlist?list=PLfEr2kn3s-bqpPUbeTZP6iRXTxTLwNB7F&si=eBrQ3oXDAXn56T9r',
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
        title: "Node JS Tutorial for Beginners in Hindi",
        channel: "ThapaTechnical",
        duration: "129 videos",
        views: "555K",
        link: "https://youtube.com/playlist?list=PLwGdqUZWnOp3KELplHtc-RnJ5xTUPqdgH&si=DZtKV47Lnd0IhG0h",
        thumbnail: "/node-js-crash-course-tutorial.png",
        description: "Learn Node.js fundamentals, modules, and building REST APIs",
      },
      {
        title: "Master node.js and Express.js",
        channel: "Piyush Garg",
        duration: "48 videos",
        views: "4M",
        link: "https://youtube.com/playlist?list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo&si=DHjx0BX1tap_Yfxo",
        thumbnail: "/express-mongodb-tutorial.png",
        description: "Build full-stack applications with Express.js and MongoDB",
      },
      {
        title: "Node.js & Express.js Full Course 2025 - Beginner to Pro",
        channel: "Stacky Patel",
        duration: "3h 56M",
        views: "59K",
        link: "https://youtu.be/PCcMF1xTQO0?si=Wj1A3Jp3UmU5juW8",
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
        title: "MongoDB Complete Course Tutorial in Hindi🔥Free Notes & Projects",
        channel: "ThapaTechnical",
        duration: "5h 20m",
        views: "587K",
        link: "https://youtu.be/rU9ZODw5yvU?si=F2BlmixrzHEfopjU",
        thumbnail: "/placeholder.svg?height=120&width=200",
        description: "Master MongoDB from basics to advanced queries and aggregation",
      },
      {
        title: "MongoDB Playlist in Hindi",
        channel: "Academind",
        duration: "39 video",
        views: "1.2M",
        link: "https://youtube.com/playlist?list=PLA3GkZPtsafZydhN4nP0h7hw7PQuLsBv1&si=jk4iyO7bunE7wXen",
        thumbnail: "/placeholder.svg?height=120&width=200",
        description: "Learn Mongoose for elegant MongoDB object modeling in Node.js",
      },
      {
        title: "MongoDB Course | MongoDB Tutorial | MongoDB For Beginners | MongoDB Full Course ",
        channel: " Intellipaat",
        duration: "9h 44m",
        views: "850K",
        link: "https://www.youtube.com/live/aDd4HiGQSIU?si=t0JUAi55IcrPG_4T",
        thumbnail: "/placeholder.svg?height=120&width=200",
        description: "Deploy and manage MongoDB databases in the cloud with Atlas",
      },
    ],
  },
  {
    id: "fullStack",
    title: "FullStack",
    description: "full stack web developement",
    color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
    icon: "🍃",
    level: "Intermediate",
    playlists: [
      {
        title: "MERN STACK IN HINDI 2025",
        channel: "ThapaTechnical",
        duration: "56 video",
        views: "587K",
        link: "https://youtube.com/playlist?list=PLwGdqUZWnOp2Z3eFOgtOGvOWIk4e8Bsr_&si=Uicv2Pcw4TIX6nTr",
        thumbnail: "/react-complete-course-tutorial.png",
        description: "Master MongoDB from basics to advanced queries and aggregation",
      },
      {
        title: "Complete Web Dev using MERN stack",
        channel: "Code help - by Babbar",
        duration: "39 video",
        views: "1.2M",
        link: "https://youtube.com/playlist?list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD&si=DSUYwWchZ7g-5i-u",
        thumbnail: "/node-js-crash-course-tutorial.png",
        description: "Learn Mongoose for elegant MongoDB object modeling in Node.js",
      },
      {
        title: "Web Development Full Course in Hindi Playlist",
        channel: " Intellipaat",
        duration: "320 videos",
        views: "500K",
        link: "https://youtube.com/playlist?list=PLwmDa-QvqlfjwxtXCuar4LAAsp1aL5YPv&si=uCZLhAN5-t5NzXbd",
        thumbnail: "/responsive-design-tutorial.png",
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#dfe2fe] via-[#b1cbfa] to-[#8e98f5]">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">Learning Hub</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Master the MERN stack with our curated collection of high-quality video tutorials and learning resources.
              From HTML basics to advanced React patterns.
            </p>
          </div>
        </section>

        {/* Topics Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#dfe2fe] via-[#b1cbfa] to-[#8e98f5]">
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
                            <Link href={`${playlist.link}`}>
                              <ExternalLink className="h-4 w-4" />
                            </Link>
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
