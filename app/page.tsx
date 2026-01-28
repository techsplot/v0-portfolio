import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "@/components/theme-toggle"

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
            <a
              href="/writing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Writing
            </a>
            <a href="#featured-work" className="text-muted-foreground hover:text-foreground transition-colors">
              Case Studies
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
            <a href="/Ayomide olofinsawe resume.pdf" download>
              <Button variant="outline" size="sm" className="ml-2 bg-transparent">
                Download Resume
              </Button>
            </a>
            <ThemeToggle />
          </nav>
          <div className="flex md:hidden items-center">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto max-w-4xl px-4">
        <section className="py-20 md:py-32 space-y-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <p className="text-lg text-accent font-medium">Hi, I'm Olofinsawe Ayomide</p>
              <Badge variant="outline" className="text-accent border-accent">
                Available for Freelance
              </Badge>
            </div>
            <h1 className="text-balance text-5xl md:text-6xl font-bold text-foreground">
               A Technical writer and Software engineer 
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              I help teams and individuals build and ship faster by turning complex systems into documentation that’s clear, practical, and actually useful.also i am currently learning elixir. 
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <a href="#featured-work">
              <Button size="lg" className="w-full sm:w-auto">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
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
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/writing">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                Read Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Metrics Section - UPDATE WITH REAL NUMBERS */}
        <section className="py-20 md:py-32 space-y-12 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-bold text-foreground">10+</p>
              <p className="text-sm text-muted-foreground">Published Articles</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-bold text-foreground">10K+</p>
              <p className="text-sm text-muted-foreground">Readers Reached</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-bold text-foreground">2+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </section>

        {/* How I Help Teams Ship Faster */}
        <section className="py-20 md:py-32 space-y-12 border-t border-border">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">How I Help Teams Ship Faster</h2>
            <p className="text-muted-foreground max-w-3xl">
              I transform complex technical systems into clear, actionable documentation that accelerates developer
              onboarding and reduces integration time—no matter the technology stack.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3 p-6 rounded-lg border border-border hover:border-accent transition-all group">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-semibold">01</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  Code-Level Precision
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I dive deep into your codebase—whether it's DevOps pipelines, backend APIs, cloud infrastructure, or
                frontend architecture—to create documentation with accurate code examples that developers can copy,
                paste, and deploy.
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-lg border border-border hover:border-accent transition-all group">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-semibold">02</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  Integration-First Approach
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                From authentication flows to deployment strategies, I document the critical paths developers actually
                need. Each guide is structured to minimize time-to-first-working-implementation.
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-lg border border-border hover:border-accent transition-all group">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-semibold">03</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  Real-World Context
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I don't just explain how something works—I explain when to use it, common pitfalls to avoid, and
                production best practices. Documentation that answers the questions developers ask before they ask them.
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-lg border border-border hover:border-accent transition-all group">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-semibold">04</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  Technology Agnostic
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                While I've written extensively about Node.js, Docker, Kubernetes, GraphQL, and AWS, my approach works
                for any tech stack. I learn your systems quickly and document them with the same clarity and depth.
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 rounded-lg border-2 border-accent/20 bg-accent/5">
            <h3 className="text-xl font-semibold text-foreground mb-4">Technologies I've Documented</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Node.js",
                "TypeScript",
                "Python",
                "React",
                "Next.js",
                "Docker",
                "Kubernetes",
                "CI/CD Pipelines",
                "AWS",
                "PostgreSQL",
                "GraphQL",
                "REST APIs",
                "Authentication Systems",
                "Database Optimization",
                "Cloud Infrastructure",
                "Container Orchestration",
              ].map((tech) => (
                <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
            <p className="text-muted-foreground mt-4 text-sm">
              ... and many more. If your team uses it, I can document it.
            </p>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-20 md:py-32 space-y-12 border-t border-border">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Tech Stack</h2>
            <p className="text-muted-foreground">Technologies I work with and write about</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "TypeScript",
              "Node.js",
              "React",
              "Next.js",
              "Docker",
              "Kubernetes",
              "AWS",
              "PostgreSQL",
              "GraphQL",
              "CI/CD",
              "Git",
              "Python",
              "REST APIs",
            ].map((tech) => (
              <Badge key={tech} variant="secondary" className="px-4 py-2 text-sm border border-border">
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        {/* Featured Work Section */}
        <section id="featured-work" className="py-20 md:py-32 space-y-12 border-t border-border">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Work</h2>
            <p className="text-muted-foreground">
              Case studies and technical articles demonstrating real-world solutions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <article className="group p-6 rounded-lg border border-border hover:border-accent transition-all space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-medium">Vultr Docs</span>
                <span>•</span>
                <time>2024</time>
              </div>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                How to Deploy a Self-Hosted OAuth2 Provider on Vultr Using Authentik and Docker Compose
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Step-by-step guide for deploying a production-ready OAuth2 authentication provider using Authentik and
                Docker Compose on Vultr infrastructure. Covers container orchestration, environment configuration, and
                security best practices for self-hosted authentication systems.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">
                  DevOps
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Docker
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  OAuth2
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Authentication
                </Badge>
              </div>
              <a
                href="https://docs.vultr.com/how-to-deploy-a-self-hosted-oauth2-provider-on-vultr-using-authentik-and-docker-compose"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                Read article
                <ExternalLink className="h-4 w-4" />
              </a>
            </article>

            <article className="group p-6 rounded-lg border border-border hover:border-accent transition-all space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-medium">Galaxy Cloud Blog</span>
                <span>•</span>
                <time>2024</time>
              </div>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                Error Handling and Logging in Node.js with Winston
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Comprehensive guide to implementing production-grade error handling and structured logging in Node.js
                applications using Winston. Covers log levels, custom transports, error tracking strategies, and
                debugging techniques for scalable backend systems.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">
                  Node.js
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Backend
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Error Handling
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Logging
                </Badge>
              </div>
              <a
                href="https://blog.galaxycloud.app/error-handling-and-logging-in-node-js-with-winston/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                Read article
                <ExternalLink className="h-4 w-4" />
              </a>
            </article>

            <article className="group p-6 rounded-lg border border-border hover:border-accent transition-all space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-medium">Medium</span>
                <span>•</span>
                <time>2024</time>
              </div>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                How I Optimized Database I/O from 100 Seconds to 3ms Using Multi-Level Indexing
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Real-world case study demonstrating dramatic database performance improvements through strategic
                multi-level indexing. Deep dive into query optimization, index design patterns, and measuring
                performance gains in production environments.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">
                  Database
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Performance
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  PostgreSQL
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Optimization
                </Badge>
              </div>
              <a
                href="https://medium.com/@techsplot/how-i-optimized-database-i-o-from-100-seconds-to-3ms-using-multi-level-indexing-ef71602960c6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                Read article
                <ExternalLink className="h-4 w-4" />
              </a>
            </article>
          </div>
          <div className="flex justify-center pt-8">
            <a href="https://medium.com/@techsplot" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline">
                View All Articles
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
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
              href="https://docs.vultr.com/author/ayomide-olofinsawe"
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
              href="https://blog.galaxycloud.app/author/ayomideb007/"
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
