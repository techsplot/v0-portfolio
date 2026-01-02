import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
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
            <Link href="/about" className="text-accent font-medium">
              About
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
        <div className="max-w-3xl space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">About Me</h1>
            <p className="text-xl text-muted-foreground">
              Technical writer and software engineer focusing on DevOps, backend systems, and cloud infrastructure.
            </p>
          </div>

          {/* Bio Section */}
          <section className="space-y-6 border-t border-border pt-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Background</h2>
              <p className="text-lg leading-relaxed text-foreground">
                I'm a technical writer and software engineer based in Nigeria. My career has been defined by translating
                complex systems into practical, developer-friendly documentation. I write from hands-on,
                production-level experience—not theory.
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                My technical foundation spans full-stack development, with particular expertise in backend systems, API
                design, DevOps practices, and cloud infrastructure. I've debugged production outages at 2 AM, optimized
                database queries from seconds to milliseconds, and deployed applications across multiple cloud
                providers. These experiences inform how I write.
              </p>
            </div>
          </section>

          {/* Focus Areas */}
          <section className="space-y-6 border-t border-border pt-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">What I Write About</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I focus on topics where clarity and depth matter most:
              </p>
            </div>
            <div className="grid gap-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">DevOps & Infrastructure</h3>
                <p className="text-muted-foreground">
                  Docker, containerization, CI/CD pipelines, Kubernetes, and cloud deployment strategies. How to move
                  code to production reliably.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Backend Systems</h3>
                <p className="text-muted-foreground">
                  Node.js best practices, API design, authentication, error handling, and database optimization.
                  Building scalable, reliable services.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Frontend Performance</h3>
                <p className="text-muted-foreground">
                  Next.js optimization, performance metrics, deployment patterns, and JavaScript fundamentals. Making
                  web applications fast.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Real-World Engineering</h3>
                <p className="text-muted-foreground">
                  Database indexing, troubleshooting, optimization techniques, and system design patterns. Solutions to
                  problems developers actually face.
                </p>
              </div>
            </div>
          </section>

          {/* Writing Philosophy */}
          <section className="space-y-6 border-t border-border pt-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Writing Philosophy</h2>
              <p className="text-lg leading-relaxed text-foreground">
                I believe technical writing should be{" "}
                <span className="font-semibold">clear, practical, and honest</span>. Good technical documentation solves
                real problems. It explains the "why," not just the "what." It acknowledges trade-offs and doesn't shy
                away from complexity when complexity is necessary.
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                I write for engineers who value their time. Every article should teach something actionable or deepen
                understanding. No fluff, no unnecessary jargon, no fabricated examples.
              </p>
            </div>
          </section>

          {/* Technical Tools */}
          <section className="space-y-6 border-t border-border pt-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Technical Stack</h2>
              <p className="text-muted-foreground">
                Tools and technologies I use regularly and write about with confidence:
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "JavaScript",
                "Node.js",
                "React",
                "Next.js",
                "TypeScript",
                "PostgreSQL",
                "Docker",
                "Kubernetes",
                "CI/CD",
                "AWS",
                "Cloud Platforms",
                "GraphQL",
              ].map((tech) => (
                <div key={tech} className="px-4 py-2 rounded bg-secondary border border-border text-sm font-medium">
                  {tech}
                </div>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="space-y-6 border-t border-border pt-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Let's Connect</h2>
              <p className="text-lg text-muted-foreground">
                Interested in collaboration, editorial opportunities, or just want to discuss technical writing? I'm
                always open to conversations.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="mailto:ayomideb007@gmail.com">
                <Button className="w-full sm:w-auto">
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
        </div>
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
