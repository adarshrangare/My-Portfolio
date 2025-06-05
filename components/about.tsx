"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText, Code, Coffee, Zap } from "lucide-react"
import Link from "next/link"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { icon: Code, label: "Projects Completed", value: "15+" },
    { icon: Coffee, label: "Cups of Coffee", value: "500+" },
    { icon: Zap, label: "Technologies", value: "10+" },
  ]

  return (
    <section id="about" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="floating-orb top-10 right-10 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500" />
        <div className="floating-orb bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500" />
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
                className="aspect-square relative rounded-3xl overflow-hidden glass border-2 border-purple-500/30 shadow-2xl shadow-purple-500/20"
              >
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Adarsh Rangare"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
              </motion.div>

              {/* Floating decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -top-6 -right-6 w-16 h-16 glass rounded-full flex items-center justify-center"
              >
                <Code className="h-8 w-8 text-purple-400" />
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -bottom-6 -left-6 w-20 h-20 glass rounded-full flex items-center justify-center"
              >
                <Zap className="h-10 w-10 text-cyan-400" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-3xl font-bold mb-4 gradient-text">Fullstack MERN Developer</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I&apos;m Adarsh Rangare, a passionate Fullstack Developer with one year of professional experience,
                currently working as a Frontend Software Engineer at{" "}
                <span className="text-purple-400 font-semibold">Superleap</span>. I specialize in building modern web
                applications using the MERN stack.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                My journey in web development started with a strong foundation in JavaScript, and I&apos;ve since
                expanded my skills to include modern frameworks and tools. I&apos;m passionate about creating clean,
                efficient, and user-friendly applications that solve real problems.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { label: "Name", value: "Adarsh Rangare" },
                  { label: "Email", value: "adarshrangare@example.com" },
                  { label: "Location", value: "India" },
                  { label: "Experience", value: "1+ Year" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="glass p-4 rounded-xl"
                  >
                    <h4 className="font-semibold text-purple-400 mb-1">{item.label}:</h4>
                    <p className="text-gray-300 text-sm">{item.value}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="glass hover:bg-purple-600/20 border-purple-500/30" asChild>
                  <Link href="#" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Download Resume
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-8 rounded-2xl text-center group hover:border-purple-500/50 transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                className="inline-block mb-4"
              >
                <stat.icon className="h-12 w-12 text-purple-400 group-hover:text-pink-400 transition-colors" />
              </motion.div>
              <h3 className="text-3xl font-bold gradient-text mb-2">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
