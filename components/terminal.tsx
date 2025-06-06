"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TerminalIcon, Minimize2, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Command {
  input: string;
  output: string[];
  timestamp: string;
}

const commands = {
  help: [
    "Available commands:",
    "  help          - Show this help message",
    "  about         - Learn about Adarsh",
    "  skills        - View technical skills",
    "  projects      - List recent projects",
    "  experience    - Show work experience",
    "  contact       - Get contact information",
    "  education     - View educational background",
    "  achievements  - List key achievements",
    "  clear         - Clear terminal",
    "  whoami        - Display current user info",
    "",
    "Type any command to get started!",
  ],
  about: [
    "👨‍💻 Adarsh Rangare - Fullstack MERN Developer",
    "",
    "🚀 Passionate developer with 1+ years of experience",
    "🏢 Currently working at Superleap as Frontend Software Engineer",
    "💡 Specialized in React, Node.js, and modern web technologies",
    "🎯 Focus on creating efficient, scalable web applications",
    "",
    '"Code is poetry written in logic" - Adarsh',
  ],
  skills: [
    "🛠️  Technical Skills:",
    "",
    "Frontend:",
    "  ▸ React.js / Next.js",
    "  ▸ JavaScript / TypeScript",
    "  ▸ HTML5 / CSS3",
    "  ▸ Tailwind CSS",
    "  ▸ Redux / Context API",
    "",
    "Backend:",
    "  ▸ Node.js / Express.js",
    "  ▸ MongoDB / Mongoose",
    "  ▸ RESTful APIs",
    "  ▸ JWT Authentication",
    "",
    "Tools & Others:",
    "  ▸ Git / GitHub",
    "  ▸ VS Code",
    "  ▸ Postman",
    "  ▸ Figma",
  ],
  projects: [
    "📁 Recent Projects:",
    "",
    "1. E-Commerce Platform",
    "   ├─ Tech: React, Node.js, MongoDB",
    "   └─ Features: Payment integration, Admin panel",
    "",
    "2. Task Management App",
    "   ├─ Tech: React, Firebase, Tailwind",
    "   └─ Features: Real-time updates, Collaboration",
    "",
    "3. Blog Platform",
    "   ├─ Tech: Next.js, MongoDB, Express",
    "   └─ Features: Markdown support, CMS",
    "",
    "4. Weather Dashboard",
    "   ├─ Tech: React, Chart.js, APIs",
    "   └─ Features: Interactive maps, Forecasts",
    "",
    "Type 'contact' to discuss a project!",
  ],
  experience: [
    "💼 Work Experience:",
    "",
    "🏢 Frontend Software Engineer @ Superleap",
    "   📅 2023 - Present",
    "   🎯 Building modern web applications",
    "   ⚡ React, Next.js, TypeScript",
    "",
    "💻 Freelance Web Developer",
    "   📅 2022 - 2023",
    "   🎯 Custom web solutions for clients",
    "   ⚡ MERN stack development",
    "",
    "📈 Delivered 15+ successful projects",
  ],
  contact: [
    "📞 Contact Information:",
    "",
    "📧 Email: adarshrangare@example.com",
    "🔗 LinkedIn: linkedin.com/in/adarshrangare",
    "🐙 GitHub: github.com/adarshrangare",
    "📍 Location: India",
    "",
    "💬 Feel free to reach out for:",
    "  ▸ Job opportunities",
    "  ▸ Project collaborations",
    "  ▸ Technical discussions",
    "  ▸ Freelance work",
  ],
  education: [
    "🎓 Educational Background:",
    "",
    "🏫 Bachelor of Technology - Computer Science",
    "   📅 2018 - 2022",
    "   🏆 CGPA: 8.5/10",
    "   🥇 Best Project Award",
    "",
    "💻 Web Development Bootcamp",
    "   📅 2022",
    "   🏆 Top 5% of cohort",
    "   🚀 Built 8+ projects",
  ],
  achievements: [
    "🏆 Key Achievements:",
    "",
    "🚀 Professional:",
    "  ▸ Built 15+ production applications",
    "  ▸ Improved app performance by 40%",
    "  ▸ 100% client satisfaction rate",
    "  ▸ Led UI/UX improvements at Superleap",
    "",
    "🎓 Academic:",
    "  ▸ Best Project Award in college",
    "  ▸ Tech Club President",
    "  ▸ Top 5% in bootcamp",
    "  ▸ Mentored 10+ junior developers",
  ],
  whoami: [
    "guest@adarsh-portfolio:~$ whoami",
    "",
    "👋 You are a visitor exploring Adarsh's portfolio",
    "🌟 Welcome to the interactive terminal!",
    "💡 Use 'help' to see available commands",
    "",
    "Current session: " + new Date().toLocaleString(),
  ],
};

export default function Terminal() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Command[]>([
    {
      input: "welcome",
      output: [
        "🚀 Welcome to Adarsh's Interactive Terminal!",
        "",
        "Type 'help' to see available commands.",
        "Explore my skills, projects, and experience through terminal commands.",
        "",
      ],
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | undefined;
    if (inView) {
      timeoutId = setTimeout(() => {
        inputRef.current?.focus();
      }, 500); // wait half a second to avoid scroll jump
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [inView]);

  const executeCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    const timestamp = new Date().toLocaleTimeString();

    if (command === "clear") {
      setHistory([]);
      return;
    }

    let output: string[] = [];

    if (command in commands) {
      output = commands[command as keyof typeof commands];
    } else if (command === "") {
      output = [""];
    } else {
      output = [`Command '${command}' not found.`, "Type 'help' to see available commands."];
    }

    const newCommand: Command = {
      input: cmd,
      output,
      timestamp,
    };

    setHistory((prev: Command[]) => [...prev, newCommand]);
    setCommandHistory((prev: string[]) => [...prev, cmd]);
    setHistoryIndex(-1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      executeCommand(input);
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  if (isMinimized) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-4 left-4 z-50"
      >
        <Button
          onClick={() => setIsMinimized(false)}
          className="glass hover:bg-purple-600/20 border-purple-500/30"
        >
          <TerminalIcon className="h-4 w-4 mr-2" />
          Terminal
        </Button>
      </motion.div>
    );
  }

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Interactive <span className="gradient-text">Terminal</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Explore my portfolio through terminal commands. Type 'help' to get started!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mx-auto glass border-purple-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 ${
            isMaximized ? "fixed inset-4 z-50" : "max-w-4xl"
          }`}
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between p-4 bg-gray-900/50 border-b border-purple-500/30">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <TerminalIcon className="h-4 w-4" />
                <span className="text-sm font-mono">adarsh@portfolio:~</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 hover:bg-purple-600/20"
                onClick={() => setIsMaximized(!isMaximized)}
              >
                {isMaximized ? (
                  <Minimize2 className="h-4 w-4" />
                ) : (
                  <Maximize2 className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          {/* Terminal Content */}
          <div
            ref={terminalRef}
            className={`bg-gray-900/80 text-green-400 font-mono text-sm p-6 overflow-y-auto ${
              isMaximized ? "h-full" : "h-96"
            }`}
            onClick={() => inputRef.current?.focus()}
          >
            <AnimatePresence>
              {history.map((cmd, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-4"
                >
                  {cmd.input !== "welcome" && (
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-purple-400">guest@adarsh-dev:~$</span>
                      <span className="text-white">{cmd.input}</span>
                      <span className="text-gray-500 text-xs ml-auto">{cmd.timestamp}</span>
                    </div>
                  )}
                  <div className="pl-4 space-y-1">
                    {cmd.output.map((line, lineIndex) => (
                      <motion.div
                        key={lineIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.1, delay: lineIndex * 0.05 }}
                        className="whitespace-pre-wrap"
                      >
                        {line}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Input Line */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <span className="text-purple-400">guest@adarsh-dev:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none text-white"
                placeholder="Type a command..."
              />
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                className="w-2 h-5 bg-green-400"
              />
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
