import { NavHeader } from "@/components/nav-header"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Use Cases | techsplot",
  description: "How technical writing improves developer experience, team productivity, and engineering outcomes.",
}

export default function UseCases() {
  const useCases = [
    {
      title: "For Individual Developers",
      description: "Level up your engineering skills with practical, hands-on guides",
      points: [
        "Learn DevOps and deployment strategies from production experience",
        "Master backend patterns like error handling, authentication, and optimization",
        "Understand complex systems through clear, technical explanations",
        "Stay current with Next.js, Node.js, and modern infrastructure tools",
      ],
      example:
        "Articles like 'Graceful Shutdown in Node.js' and 'Database I/O Optimization' provide directly applicable patterns you can implement immediately.",
    },
    {
      title: "For Engineering Teams & Leads",
      description: "Reduce onboarding time and standardize best practices across teams",
      points: [
        "Share production-ready patterns for authentication, error handling, and logging",
        "Document infrastructure decisions (Docker, OAuth2, Kubernetes)",
        "Establish baseline knowledge for CI/CD pipelines and deployment strategies",
        "Create internal reference materials based on real-world implementations",
      ],
      example:
        "The OAuth2 deployment guide and graceful shutdown patterns can become team standards, reducing knowledge silos.",
    },
    {
      title: "For DevRel & Developer Advocacy",
      description: "Build developer-first messaging and reduce time-to-value for users",
      points: [
        "Create authentic, hands-on content that resonates with working engineers",
        "Showcase real performance improvements and system design decisions",
        "Build technical credibility across platforms (Medium, Dev.to, official docs)",
        "Educate audiences on complex topics without oversimplification",
      ],
      example:
        "The Vultr Docs publication demonstrates ability to create official documentation that drives platform adoption and user success.",
    },
    {
      title: "For Engineering Managers & Decision-Makers",
      description: "Understand infrastructure trade-offs and technical implementation costs",
      points: [
        "Learn how to evaluate self-hosted vs. managed solutions (e.g., Authentik case study)",
        "Understand performance optimization impact on user experience and infrastructure costs",
        "Make informed decisions on technology adoption based on real implementations",
        "Communicate technical concepts to non-technical stakeholders",
      ],
      example:
        "Case studies like database optimization (100s → 3ms) demonstrate measurable technical ROI and implementation thinking.",
    },
    {
      title: "For Content & Editorial Teams",
      description: "Access credible, production-ready technical content from a software engineer",
      points: [
        "No fabricated examples—all content comes from hands-on engineering experience",
        "Authoritative voice on DevOps, backend systems, and cloud infrastructure",
        "Published across respected platforms (Vultr, Medium, Dev.to, Galaxy Cloud)",
        "Ready-to-publish articles with technical depth and clarity",
      ],
      example:
        "12 published articles across 4 platforms, with 3 featured case studies demonstrating technical impact and editorial credibility.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <NavHeader currentPage="use-cases" />

      <main className="container mx-auto max-w-4xl px-4">
        {/* Hero Section */}
        <section className="py-20 md:py-32 space-y-8">
          <div className="space-y-6">
            <h1 className="text-balance text-5xl md:text-6xl font-bold text-foreground">
              How This Technical Writing Helps You
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              As a technical writer and software engineer, I create documentation that reduces friction and increases
              developer velocity through clarity, depth, and hands-on experience.
            </p>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="py-20 md:py-32 space-y-12">
          <div className="grid gap-12">
            {useCases.map((useCase, index) => (
              <div key={index} className="space-y-6 pb-12 border-b border-border last:border-b-0">
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold text-foreground">{useCase.title}</h2>
                  <p className="text-lg text-accent font-medium">{useCase.description}</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">Benefits</h3>
                  <ul className="space-y-3">
                    {useCase.points.map((point, idx) => (
                      <li key={idx} className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-secondary/50 rounded-lg p-6 border border-border">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2">Real Example</h3>
                  <p className="text-muted-foreground">{useCase.example}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 space-y-8 border-t border-border">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ready to explore?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Check out the full writing portfolio, dive into case studies, or get in touch to discuss how technical
              writing can support your goals.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/writing">
              <Button size="lg" className="w-full sm:w-auto">
                Browse All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                Read Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
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
