import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, ArrowRight } from "lucide-react"
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
            <a href="https://medium.com/@techsplot" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
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
            <a href="/resume.pdf" download>
              <Button variant="outline" size="sm" className="ml-2">
                Download Resume
              </Button>
            </a>
          </nav>
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
              Turn Complex Systems Into Clear Documentation
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              I help engineering teams ship faster with production-ready documentation. DevOps pipelines, backend 
              architecture, cloud infrastructure—explained with code-level precision that developers actually use.
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
            <a href="https://medium.com/@techsplot" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                Read Articles
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
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
              <p className="text-3xl md:text-4xl font-bold text-foreground">10k+</p>
              <p className="text-sm text-muted-foreground">Readers Reached</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-bold text-foreground">2+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </section>

        {/* Writing Focus Areas */}
        <section className="py-20 md:py-32 space-y-12 border-t border-border">
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

        {/* Tech Stack Section */}
        <section className="py-20 md:py-32 space-y-12 border-t border-border">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Tech Stack</h2>
            <p className="text-muted-foreground">
              Technologies I work with and write about
            </p>
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
              "REST APIs"
            ].map((tech) => (
              <Badge key={tech} variant="secondary" className="px-4 py-2 text-sm border border-border">
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        {/* Featured Work Section - TODO: UPDATE WITH REAL ARTICLES */}
        <section id="featured-work" className="py-20 md:py-32 space-y-12 border-t border-border">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Work</h2>
            <p className="text-muted-foreground">
              Case studies and technical articles demonstrating real-world solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Article 1 - TODO: Replace with real article */}
            <article className="group p-6 rounded-lg border border-border hover:border-accent transition-all space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-medium">Vultr Docs</span>
                <span>•</span>
                <time>2024</time>
              </div>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                Building Production-Ready CI/CD Pipelines
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A comprehensive guide to setting up automated deployment workflows with Docker, GitHub Actions, 
                and cloud infrastructure for scalable applications.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">DevOps</Badge>
                <Badge variant="secondary" className="text-xs">CI/CD</Badge>
                <Badge variant="secondary" className="text-xs">Docker</Badge>
              </div>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                Read case study
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>

            {/* Article 2 - TODO: Replace with real article */}
            <article className="group p-6 rounded-lg border border-border hover:border-accent transition-all space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-medium">Medium</span>
                <span>•</span>
                <time>2024</time>
              </div>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                Optimizing Node.js Performance at Scale
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Deep dive into Node.js optimization techniques, from event loop management to database query 
                optimization, with measurable performance improvements.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">Node.js</Badge>
                <Badge variant="secondary" className="text-xs">Performance</Badge>
                <Badge variant="secondary" className="text-xs">Backend</Badge>
              </div>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                Read case study
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>

            {/* Article 3 - TODO: Replace with real article */}
            <article className="group p-6 rounded-lg border border-border hover:border-accent transition-all space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-medium">DEV.to</span>
                <span>•</span>
                <time>2024</time>
              </div>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                Kubernetes Deployment Strategies Explained
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Practical guide to zero-downtime deployments, rolling updates, and canary releases in production 
                Kubernetes environments.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">Kubernetes</Badge>
                <Badge variant="secondary" className="text-xs">DevOps</Badge>
                <Badge variant="secondary" className="text-xs">Cloud</Badge>
              </div>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                Read case study
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>

            {/* Article 4 - TODO: Replace with real article */}
            <article className="group p-6 rounded-lg border border-border hover:border-accent transition-all space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-medium">Galaxy Cloud Blog</span>
                <span>•</span>
                <time>2024</time>
              </div>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                Building Scalable GraphQL APIs
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                From schema design to query optimization, a complete guide to building GraphQL APIs that handle 
                millions of requests efficiently.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">GraphQL</Badge>
                <Badge variant="secondary" className="text-xs">API Design</Badge>
                <Badge variant="secondary" className="text-xs">Backend</Badge>
              </div>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                Read case study
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          </div>
        </section>

        {/* Testimonial Section - TODO: UPDATE WITH REAL TESTIMONIAL */}
        <section className="py-20 md:py-32 border-t border-border">
          <blockquote className="border-l-4 border-accent pl-6 italic space-y-4">
            <p className="text-xl md:text-2xl text-muted-foreground">
              "Ayomide's technical documentation helped our team reduce onboarding time by 60%. His ability to 
              translate complex systems into clear, actionable guides is exceptional."
            </p>
            <footer className="text-base text-foreground not-italic">
              <strong>— Engineering Manager</strong>
              <span className="text-muted-foreground"> at Tech Company</span>
            </footer>
          </blockquote>
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
