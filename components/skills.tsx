"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Database, Layout, Server, Terminal, Palette, Zap, Shield, Smartphone, Cloud } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="h-6 w-6" />,
    description: "Building responsive and interactive user interfaces",
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "React.js", level: 90, icon: "⚛️" },
      { name: "Next.js", level: 85, icon: "▲" },
      { name: "TypeScript", level: 80, icon: "📘" },
      { name: "Tailwind CSS", level: 90, icon: "🎨" },
      { name: "JavaScript", level: 95, icon: "🟨" },
    ],
  },
  {
    title: "Backend Development",
    icon: <Server className="h-6 w-6" />,
    description: "Creating robust server-side applications and APIs",
    color: "from-blue-500 to-indigo-500",
    skills: [
      { name: "Node.js", level: 85, icon: "🟢" },
      { name: "Express.js", level: 80, icon: "🚀" },
      { name: "MongoDB", level: 75, icon: "🍃" },
      { name: "RESTful APIs", level: 85, icon: "🔗" },
      { name: "JWT Auth", level: 80, icon: "🔐" },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: <Terminal className="h-6 w-6" />,
    description: "Modern development tools and workflows",
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "Git & GitHub", level: 85, icon: "🐙" },
      { name: "VS Code", level: 95, icon: "💙" },
      { name: "Docker", level: 70, icon: "🐳" },
      { name: "AWS", level: 65, icon: "☁️" },
      { name: "Figma", level: 75, icon: "🎨" },
    ],
  },
]

const additionalSkills = [
  { name: "Responsive Design", icon: <Smartphone />, level: 95 },
  { name: "Performance Optimization", icon: <Zap />, level: 80 },
  { name: "UI/UX Design", icon: <Palette />, level: 75 },
  { name: "Database Design", icon: <Database />, level: 80 },
  { name: "API Security", icon: <Shield />, level: 75 },
  { name: "Cloud Deployment", icon: <Cloud />, level: 70 },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="skills" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="floating-orb top-20 left-20 w-40 h-40 bg-gradient-to-r from-cyan-500 to-blue-500" />
        <div className="floating-orb bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-500 to-indigo-500" />
        <div className="floating-orb top-1/2 right-1/3 w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500" />
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            I've developed a comprehensive skill set in modern web development technologies. From frontend frameworks to
            backend services, I create full-stack solutions that deliver exceptional user experiences.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onHoverStart={() => setActiveCategory(index)}
              className="group cursor-pointer"
            >
              <Card
                className={`h-full glass border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                  activeCategory === index ? "border-cyan-500/60 shadow-xl shadow-cyan-500/20" : ""
                }`}
              >
                <CardHeader className="text-center pb-4">
                  <motion.div
                    animate={{
                      rotate: activeCategory === index ? 360 : 0,
                      scale: activeCategory === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                    className={`inline-block p-4 rounded-2xl bg-gradient-to-r ${category.color} mb-4 mx-auto`}
                  >
                    {category.icon}
                  </motion.div>
                  <CardTitle className="text-xl gradient-text mb-2">{category.title}</CardTitle>
                  <p className="text-gray-400 text-sm">{category.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + skillIndex * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="font-medium text-gray-300">{skill.name}</span>
                        </div>
                        <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-fill"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1.5, delay: index * 0.2 + skillIndex * 0.1 + 0.5 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-cyan-400/50 to-blue-400/50"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="glass p-8 rounded-3xl border-cyan-500/30"
        >
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">Additional Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-6 rounded-2xl border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                    className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all"
                  >
                    {skill.icon}
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-300 group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h4>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex-1 h-2 bg-gray-700/50 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1.5, delay: 1.2 + index * 0.1 }}
                        />
                      </div>
                      <span className="text-sm text-cyan-400 font-medium">{skill.level}%</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
