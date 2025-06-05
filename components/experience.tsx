"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, Calendar, MapPin, Award, TrendingUp, Users, Code } from "lucide-react"
import { useState } from "react"

const experiences = [
  {
    id: 1,
    title: "Frontend Software Engineer",
    company: "Superleap",
    period: "2023 - Present",
    duration: "1+ year",
    location: "Remote, India",
    description:
      "Leading frontend development initiatives using React, Next.js, and TypeScript. Implementing responsive designs, optimizing performance, and collaborating with cross-functional teams to deliver exceptional user experiences.",
    achievements: [
      "Built 5+ production applications serving 10k+ users",
      "Improved application performance by 40% through optimization",
      "Led UI/UX improvements resulting in 25% better user engagement",
      "Mentored 3 junior developers and conducted code reviews",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    type: "work",
    current: true,
    impact: "High",
    teamSize: "8-12 people",
  },
  {
    id: 2,
    title: "Freelance Web Developer",
    company: "Self-employed",
    period: "2022 - 2023",
    duration: "1 year",
    location: "India",
    description:
      "Developed custom websites and web applications for various clients across different industries. Specialized in full-stack solutions using the MERN stack, delivering projects from conception to deployment.",
    achievements: [
      "Delivered 10+ client projects with 100% satisfaction rate",
      "Built e-commerce platforms generating $50k+ in sales",
      "Established long-term partnerships with 5 recurring clients",
      "Developed custom CMS solutions for content management",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "WordPress"],
    type: "work",
    current: false,
    impact: "Medium",
    teamSize: "1-3 people",
  },
  {
    id: 3,
    title: "Bachelor of Technology in Computer Science",
    company: "Engineering College",
    period: "2018 - 2022",
    duration: "4 years",
    location: "India",
    description:
      "Comprehensive study of computer science fundamentals including data structures, algorithms, software engineering, and web development. Active participation in coding competitions and technical projects.",
    achievements: [
      "CGPA: 8.5/10 with distinction",
      "Best Project Award for final year capstone project",
      "Tech Club President - organized 5+ technical events",
      "Published research paper on web optimization techniques",
    ],
    technologies: ["Java", "Python", "C++", "MySQL", "HTML/CSS"],
    type: "education",
    current: false,
    impact: "Foundation",
    teamSize: "Academic",
  },
  {
    id: 4,
    title: "Web Development Bootcamp",
    company: "Online Learning Platform",
    period: "2022",
    duration: "6 months",
    location: "Online",
    description:
      "Intensive bootcamp focused on modern web development technologies including the MERN stack. Hands-on projects, pair programming, and industry best practices with experienced mentors.",
    achievements: [
      "Top 5% of cohort with 95% completion rate",
      "Built 8+ full-stack projects from scratch",
      "Mentored 10+ junior students in the program",
      "Received certification in Full-Stack Web Development",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "Git"],
    type: "education",
    current: false,
    impact: "Skill Building",
    teamSize: "Cohort of 50",
  },
]

const stats = [
  { label: "Years of Experience", value: "2+", icon: <Calendar className="h-5 w-5" /> },
  { label: "Projects Completed", value: "15+", icon: <Code className="h-5 w-5" /> },
  { label: "Team Members Mentored", value: "13+", icon: <Users className="h-5 w-5" /> },
  { label: "Performance Improvement", value: "40%", icon: <TrendingUp className="h-5 w-5" /> },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedExperience, setSelectedExperience] = useState<number | null>(null)

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High":
        return "from-green-500 to-emerald-500"
      case "Medium":
        return "from-blue-500 to-cyan-500"
      case "Foundation":
        return "from-purple-500 to-indigo-500"
      case "Skill Building":
        return "from-orange-500 to-yellow-500"
      default:
        return "from-gray-500 to-slate-500"
    }
  }

  return (
    <section id="experience" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="floating-orb top-20 right-20 w-36 h-36 bg-gradient-to-r from-cyan-500 to-blue-500" />
        <div className="floating-orb bottom-20 left-20 w-28 h-28 bg-gradient-to-r from-blue-500 to-indigo-500" />
        <div className="floating-orb top-1/2 right-1/3 w-32 h-32 bg-gradient-to-r from-indigo-500 to-purple-500" />
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            From academic foundations to professional excellence, explore my career progression and the milestones that
            have shaped my expertise in web development and software engineering.
          </p>
        </motion.div>

        {/* Experience Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-6 rounded-2xl text-center border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                className="inline-block p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl mb-3"
              >
                {stat.icon}
              </motion.div>
              <h3 className="text-2xl font-bold gradient-text mb-1">{stat.value}</h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Enhanced Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-indigo-500 rounded-full shadow-lg shadow-cyan-500/50"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className="mb-16 relative pl-20"
                onHoverStart={() => setSelectedExperience(exp.id)}
                onHoverEnd={() => setSelectedExperience(null)}
              >
                {/* Enhanced Timeline Node */}
                <motion.div
                  className="absolute left-4 top-8 w-8 h-8 rounded-full flex items-center justify-center z-10 border-2 border-white/20"
                  animate={{
                    scale: selectedExperience === exp.id ? 1.3 : 1,
                    boxShadow:
                      selectedExperience === exp.id
                        ? "0 0 30px rgba(6, 182, 212, 0.8)"
                        : "0 0 15px rgba(6, 182, 212, 0.4)",
                  }}
                  style={{
                    background: exp.current
                      ? "linear-gradient(45deg, #06b6d4, #3b82f6)"
                      : "linear-gradient(45deg, #6366f1, #8b5cf6)",
                  }}
                >
                  {exp.type === "work" ? (
                    <Briefcase className="h-4 w-4 text-white" />
                  ) : (
                    <GraduationCap className="h-4 w-4 text-white" />
                  )}
                </motion.div>

                {/* Current Position Indicator */}
                {exp.current && (
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="absolute left-2 top-6 w-12 h-12 rounded-full border-2 border-cyan-400"
                  />
                )}

                <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.3 }} className="group">
                  <Card className="glass border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <CardTitle className="text-xl gradient-text mb-1 group-hover:text-cyan-300 transition-colors">
                            {exp.title}
                          </CardTitle>
                          <CardDescription className="text-lg font-medium text-cyan-300 mb-2">
                            {exp.company}
                          </CardDescription>
                          <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{exp.location}</span>
                            </div>
                            <Badge variant="outline" className="border-cyan-500/30 text-cyan-300">
                              {exp.duration}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          {exp.current && (
                            <motion.div
                              animate={{ scale: [1, 1.05, 1] }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                            >
                              <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
                                Current
                              </Badge>
                            </motion.div>
                          )}
                          <Badge className={`bg-gradient-to-r ${getImpactColor(exp.impact)} text-white border-0`}>
                            {exp.impact}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <p className="text-gray-300 leading-relaxed">{exp.description}</p>

                      {/* Key Metrics */}
                      <div className="grid md:grid-cols-2 gap-4 p-4 glass rounded-xl border-cyan-500/20">
                        <div className="text-center">
                          <div className="text-lg font-bold text-cyan-400">Team Size</div>
                          <div className="text-sm text-gray-400">{exp.teamSize}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-cyan-400">Impact Level</div>
                          <div className="text-sm text-gray-400">{exp.impact}</div>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Code className="h-4 w-4 text-cyan-400" />
                          <span className="text-sm font-medium text-cyan-300">Technologies Used</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <motion.div key={i} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                              <Badge
                                variant="secondary"
                                className="glass border-cyan-500/30 text-cyan-300 hover:border-cyan-500/50 transition-colors"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-cyan-400" />
                          <span className="text-sm font-medium text-cyan-300">Key Achievements</span>
                        </div>
                        <div className="grid gap-3">
                          {exp.achievements.map((achievement, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                              transition={{ duration: 0.4, delay: 0.8 + index * 0.2 + i * 0.1 }}
                              className="flex items-start gap-3 p-3 glass rounded-lg border-cyan-500/20 hover:border-cyan-500/40 transition-colors group"
                            >
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 mt-2 group-hover:scale-125 transition-transform"></div>
                              <span className="text-sm text-gray-300 leading-relaxed">{achievement}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
