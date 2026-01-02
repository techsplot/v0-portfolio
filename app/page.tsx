import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ExternalLink, Twitter } from "lucide-react"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 max-w-4xl items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-semibold text-lg text-foreground">techsplot</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8 text-sm">
            <Link href="/writing" className="text-muted-foreground hover:text-foreground transition-colors">
              Writing
            </Link>
            <Link href="/case-studies" className="text-muted-foreground hover:text-foreground transition-colors">
              Case Studies
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto max-w-4xl px-4">
        <section className="py-20 md:py-32 space-y-8">
          <div className="space-y-6">
            <p className="text-lg text-accent font-medium">Hi, I'm Olofinsawe Ayomide</p>
            <h1 className="text-balance text-5xl md:text-6xl font-bold text-foreground">
              Technical Writer & Software Engineer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              I bring a software engineer's perspective to technical writing. DevOps, backend architecture, frontend
              performance, and cloud infrastructure—explained with clarity and production-level depth.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="lg" className="w-full sm:w-auto">
                  Get In Touch
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <a href="mailto:ayomideb007@gmail.com" className="flex items-center gap-2 cursor-pointer">
                    <Mail className="h-4 w-4" />
                    <span>Gmail</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="https://linkedin.com/in/olofinsawe-ayomide-b958881aa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span>LinkedIn</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Twitter className="h-4 w-4" />
                    <span>Twitter</span>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/use-cases">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                Use Cases
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/writing">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                Read Articles
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Writing Focus Areas */}
        <section className="py-20 md:py-32 space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Focus Areas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">DevOps & Infrastructure</h3>
              <p className="text-muted-foreground leading-relaxed">
                Container orchestration, CI/CD pipelines, self-hosted solutions, and cloud deployment strategies for
                production environments.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Backend & APIs</h3>
              <p className="text-muted-foreground leading-relaxed">
                Node.js best practices, authentication systems, error handling, database optimization, and system design
                patterns.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Frontend Performance</h3>
              <p className="text-muted-foreground leading-relaxed">
                Next.js optimization, DOM performance, deployment strategies, and modern JavaScript patterns for web
                applications.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Systems & Platforms</h3>
              <p className="text-muted-foreground leading-relaxed">
                GraphQL APIs, AWS/cloud services, database I/O optimization, and infrastructure-as-code principles.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 space-y-12 border-t border-border">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Published On</h2>
            <p className="text-muted-foreground">
              Technical articles on platforms trusted by engineers and decision-makers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://docs.vultr.com/author/olofinsawe-ayomide"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-md border border-border hover:border-accent hover:bg-secondary transition-all"
            >
              <span className="font-semibold text-foreground">Vultr Docs</span>
              <span className="text-sm text-muted-foreground ml-auto">Official documentation</span>
            </a>
            <a
              href="https://medium.com/@techsplot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-md border border-border hover:border-accent hover:bg-secondary transition-all"
            >
              <span className="font-semibold text-foreground">Medium</span>
              <span className="text-sm text-muted-foreground ml-auto">Technical articles</span>
            </a>
            <a
              href="https://dev.to/techsplot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-md border border-border hover:border-accent hover:bg-secondary transition-all"
            >
              <span className="font-semibold text-foreground">DEV.to</span>
              <span className="text-sm text-muted-foreground ml-auto">Developer community</span>
            </a>
            <a
              href="https://blog.galaxycloud.app/author/ayomide"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-md border border-border hover:border-accent hover:bg-secondary transition-all"
            >
              <span className="font-semibold text-foreground">Galaxy Cloud Blog</span>
              <span className="text-sm text-muted-foreground ml-auto">Cloud & DevOps</span>
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32 space-y-12 border-t border-border">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Get in Touch</h2>
            <p className="text-muted-foreground max-w-2xl">
              Interested in collaboration, feedback, or editorial opportunities? Let's connect.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:ayomideb007@gmail.com">
              <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </Button>
            </a>
            <a href="https://github.com/techsplot" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </a>
            <a href="https://linkedin.com/in/olofinsawe-ayomide-b958881aa" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="container mx-auto max-w-4xl px-4 py-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Olofinsawe Ayomide. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
