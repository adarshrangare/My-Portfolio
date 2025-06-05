"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Eye, Star, GitFork, Calendar } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A comprehensive e-commerce solution with advanced features including real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe"],
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/adarshrangare/ecommerce",
    category: "fullstack",
    featured: true,
    stats: { stars: 45, forks: 12, commits: 156 },
    status: "Production",
    year: "2023",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative project management tool with real-time updates, team collaboration features, and advanced analytics dashboard.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Firebase", "Tailwind CSS", "Context API", "Chart.js"],
    liveUrl: "https://example.com/taskmanager",
    githubUrl: "https://github.com/adarshrangare/taskmanager",
    category: "frontend",
    featured: true,
    stats: { stars: 32, forks: 8, commits: 89 },
    status: "Active",
    year: "2023",
  },
  {
    id: 3,
    title: "Blog Platform",
    description:
      "A modern content management system with markdown support, SEO optimization, and social sharing capabilities.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "MongoDB", "Express", "Node.js", "MDX"],
    liveUrl: "https://example.com/blogplatform",
    githubUrl: "https://github.com/adarshrangare/blogplatform",
    category: "fullstack",
    featured: false,
    stats: { stars: 28, forks: 6, commits: 67 },
    status: "Completed",
    year: "2023",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description:
      "An interactive weather application with location-based forecasts, interactive maps, and detailed analytics.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "API Integration", "Chart.js", "Geolocation", "PWA"],
    liveUrl: "https://example.com/weather",
    githubUrl: "https://github.com/adarshrangare/weather",
    category: "frontend",
    featured: false,
    stats: { stars: 19, forks: 4, commits: 43 },
    status: "Completed",
    year: "2022",
  },
  {
    id: 5,
    title: "RESTful API Service",
    description:
      "A robust and scalable API service with comprehensive documentation, rate limiting, and advanced security features.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "Swagger", "Docker"],
    liveUrl: "https://example.com/api-docs",
    githubUrl: "https://github.com/adarshrangare/api-service",
    category: "backend",
    featured: false,
    stats: { stars: 15, forks: 3, commits: 78 },
    status: "Maintained",
    year: "2022",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website with advanced animations, glassmorphism design, and interactive terminal.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    liveUrl: "https://example.com/portfolio",
    githubUrl: "https://github.com/adarshrangare/portfolio",
    category: "frontend",
    featured: true,
    stats: { stars: 52, forks: 18, commits: 124 },
    status: "Active",
    year: "2023",
  },
]

const filterOptions = [
  { key: "all", label: "All Projects", count: projects.length },
  { key: "featured", label: "Featured", count: projects.filter((p) => p.featured).length },
  { key: "frontend", label: "Frontend", count: projects.filter((p) => p.category === "frontend").length },
  { key: "backend", label: "Backend", count: projects.filter((p) => p.category === "backend").length },
  { key: "fullstack", label: "Fullstack", count: projects.filter((p) => p.category === "fullstack").length },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [filter, setFilter] = useState("all")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects =
    filter === "all"
      ? projects
      : filter === "featured"
        ? projects.filter((project) => project.featured)
        : projects.filter((project) => project.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production":
        return "from-green-500 to-emerald-500"
      case "Active":
        return "from-blue-500 to-cyan-500"
      case "Completed":
        return "from-gray-500 to-slate-500"
      case "Maintained":
        return "from-yellow-500 to-orange-500"
      default:
        return "from-gray-500 to-slate-500"
    }
  }

  return (
    <section id="projects" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="floating-orb top-20 left-20 w-40 h-40 bg-gradient-to-r from-cyan-500 to-blue-500" />
        <div className="floating-orb bottom-40 right-20 w-32 h-32 bg-gradient-to-r from-blue-500 to-indigo-500" />
        <div className="floating-orb top-1/2 left-1/2 w-28 h-28 bg-gradient-to-r from-indigo-500 to-purple-500" />
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Explore my portfolio of web applications and software projects. Each project represents a unique challenge
            and showcases different aspects of modern web development, from responsive frontends to scalable backends.
          </p>
        </motion.div>

        {/* Enhanced Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="glass p-2 rounded-2xl border-cyan-500/30">
            <div className="flex flex-wrap gap-2 justify-center">
              {filterOptions.map(({ key, label, count }) => (
                <motion.div key={key} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant={filter === key ? "default" : "ghost"}
                    onClick={() => setFilter(key)}
                    className={`rounded-xl px-6 py-3 transition-all duration-300 ${
                      filter === key
                        ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                        : "hover:bg-white/10 text-gray-300 hover:text-cyan-300"
                    }`}
                  >
                    {label}
                    <Badge variant="secondary" className="ml-2 bg-white/20 text-xs">
                      {count}
                    </Badge>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group"
              >
                <Card className="h-full overflow-hidden glass border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Project Status Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge
                        className={`bg-gradient-to-r ${getStatusColor(project.status)} text-white border-0 shadow-lg`}
                      >
                        {project.status}
                      </Badge>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 shadow-lg">
                            ⭐ Featured
                          </Badge>
                        </motion.div>
                      </div>
                    )}

                    {/* Hover overlay with actions */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                      className="absolute inset-0 bg-black/60 flex items-center justify-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: hoveredProject === project.id ? 1 : 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="flex gap-4"
                      >
                        <Button size="sm" className="glass border-cyan-500/30" asChild>
                          <Link href={project.githubUrl} target="_blank">
                            <Github className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button size="sm" className="glass border-cyan-500/30" asChild>
                          <Link href={project.liveUrl} target="_blank">
                            <Eye className="h-4 w-4" />
                          </Link>
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="gradient-text group-hover:text-cyan-300 transition-colors text-xl">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <Calendar className="h-3 w-3" />
                        {project.year}
                      </div>
                    </div>
                    <CardDescription className="text-gray-300 leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Project Stats */}
                    <div className="flex justify-between items-center text-sm text-gray-400">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          {project.stats.stars}
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork className="h-3 w-3" />
                          {project.stats.forks}
                        </div>
                        <div className="text-xs">{project.stats.commits} commits</div>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <motion.div key={i} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                          <Badge
                            variant="secondary"
                            className="glass border-cyan-500/30 text-cyan-300 hover:border-cyan-500/50 transition-colors"
                          >
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-between pt-2">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="outline" size="sm" className="glass border-cyan-500/30" asChild>
                          <Link href={project.githubUrl} target="_blank">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Link>
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 shadow-lg shadow-cyan-500/25"
                          asChild
                        >
                          <Link href={project.liveUrl} target="_blank">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </Link>
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 glass p-8 rounded-3xl border-cyan-500/30"
        >
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">Project Statistics</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { label: "Total Projects", value: projects.length, icon: "🚀" },
              { label: "Featured Projects", value: projects.filter((p) => p.featured).length, icon: "⭐" },
              { label: "Total Stars", value: projects.reduce((acc, p) => acc + p.stats.stars, 0), icon: "🌟" },
              { label: "Total Commits", value: projects.reduce((acc, p) => acc + p.stats.commits, 0), icon: "💻" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="space-y-2"
              >
                <div className="text-3xl">{stat.icon}</div>
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
