import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Adarsh Rangare | Fullstack MERN Developer",
  description: "Portfolio website of Adarsh Rangare, a Fullstack MERN Developer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="bg-background text-foreground min-h-screen transition-colors duration-300">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
