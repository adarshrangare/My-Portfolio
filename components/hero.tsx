"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          style={{ y }}
          className="floating-orb top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500"
        />
        <motion.div
          style={{ y: useTransform(scrollY, [0, 500], [0, -100]) }}
          className="floating-orb bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500 to-blue-500"
        />
        <motion.div
          style={{ y: useTransform(scrollY, [0, 500], [0, 75]) }}
          className="floating-orb top-1/2 right-1/3 w-48 h-48 bg-gradient-to-r from-pink-500 to-purple-500"
        />
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="inline-block mb-4"
            >
              <Sparkles className="h-8 w-8 text-purple-400" />
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I&apos;m{" "}
              <span className="gradient-text relative">
                Adarsh Rangare
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.h2
              className="text-3xl md:text-4xl font-medium text-gray-300 mb-8"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              style={{
                background: "linear-gradient(90deg, #a855f7, #ec4899, #06b6d4, #a855f7)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Fullstack MERN Developer
            </motion.h2>
          </motion.div>

          <motion.div variants={itemVariants} className="glass p-8 rounded-2xl mb-10 max-w-3xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed">
              Building modern web applications with React, Node.js, and the MERN stack. Currently working as a Frontend
              Software Engineer at <span className="gradient-text font-semibold">Superleap</span>, crafting digital
              experiences that matter.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 mb-12">
            <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="glass hover:bg-purple-600/20 border-purple-500/30 text-white px-8 py-3 text-lg"
              >
                <Link href="#contact" className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Get in Touch
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="glass border-purple-500/30 hover:bg-purple-600/10 px-8 py-3 text-lg"
                asChild
              >
                <Link href="#projects">View Projects</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center space-x-8">
            {[
              { icon: Github, href: "https://github.com/adarshrangare", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/adarshrangare", label: "LinkedIn" },
              { icon: Mail, href: "mailto:adarshrangare@example.com", label: "Email" },
            ].map(({ icon: Icon, href, label }, index) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <Button variant="ghost" size="icon" className="glass hover:bg-purple-600/20 h-14 w-14" asChild>
                  <Link href={href} target="_blank">
                    <Icon className="h-6 w-6" />
                    <span className="sr-only">{label}</span>
                  </Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <Button
          variant="ghost"
          size="icon"
          className="glass rounded-full opacity-70 hover:opacity-100 hover:bg-purple-600/20"
          asChild
        >
          <Link href="#about">
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll down</span>
          </Link>
        </Button>
      </motion.div>
    </section>
  )
}
