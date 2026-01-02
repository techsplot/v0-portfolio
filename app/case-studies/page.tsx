import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

interface CaseStudyProps {
  title: string
  url: string
  problem: string
  audience: string
  approach: string
  technologies: string[]
  outcome: string
}

function CaseStudyCard({ title, url, problem, audience, approach, technologies, outcome }: CaseStudyProps) {
  return (
    <div className="space-y-8 pb-12 border-b border-border last:border-0">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-accent hover:underline"
        >
          Read Article
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-semibold uppercase text-muted-foreground mb-2">Problem Statement</h3>
            <p className="text-lg text-foreground leading-relaxed">{problem}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase text-muted-foreground mb-2">Target Audience</h3>
            <p className="text-base text-foreground leading-relaxed">{audience}</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-semibold uppercase text-muted-foreground mb-3">Technical Approach</h3>
            <p className="text-base text-foreground leading-relaxed">{approach}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase text-muted-foreground mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span key={tech} className="inline-block px-3 py-1 rounded bg-secondary text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase text-muted-foreground mb-3">Outcome & Impact</h3>
        <p className="text-lg text-foreground leading-relaxed">{outcome}</p>
      </div>
    </div>
  )
}

const caseStudies: CaseStudyProps[] = [
  {
    title: "Database I/O Optimization: 100 Seconds to 3ms",
    url: "https://medium.com/@techsplot/how-i-optimized-database-i-o-from-100-seconds-to-3ms-using-multi-level-indexing",
    problem:
      "An application was experiencing severe performance degradation with database queries taking over 100 seconds to complete. This directly impacted user experience and system reliability in production environments.",
    audience:
      "Backend engineers, database administrators, and technical leads looking to understand query optimization techniques and indexing strategies at scale.",
    approach:
      "Analyzed query execution plans, identified missing indexes, implemented multi-level indexing strategies, and documented the entire optimization process. The article walks through the diagnostic methodology, explains the indexing approach, and demonstrates the measurable performance improvements.",
    technologies: ["SQL", "Database Indexing", "Query Optimization", "Performance Monitoring"],
    outcome:
      "Reduced query execution time from 100+ seconds to 3ms—a 33x performance improvement. The article serves as a reference guide for engineers facing similar bottlenecks, demonstrating the critical importance of proper database schema design and query planning.",
  },
  {
    title: "Self-Hosted OAuth2 with Authentik on Vultr",
    url: "https://docs.vultr.com/how-to-deploy-a-self-hosted-oauth2-provider-on-vultr-using-authentik-and-docker-compose",
    problem:
      "Organizations needed a self-hosted identity provider alternative to third-party OAuth2 services. Traditional SaaS solutions presented vendor lock-in risks and privacy concerns for enterprises with strict data residency requirements.",
    audience:
      "DevOps engineers, infrastructure teams, and platform engineers implementing self-hosted authentication systems. Also valuable for security-conscious organizations and those requiring on-premise identity management.",
    approach:
      "Created a comprehensive, step-by-step deployment guide using Docker Compose for container orchestration and Authentik as the OAuth2 provider. The guide covers infrastructure setup, configuration, security best practices, and troubleshooting common deployment issues.",
    technologies: ["Docker", "Docker Compose", "Authentik", "OAuth2", "Vultr Cloud", "Identity Management"],
    outcome:
      "Published on Vultr's official documentation—demonstrating platform credibility and technical depth. The guide enables organizations to deploy secure, self-hosted authentication with clear, actionable instructions. Serves as a reference for DevOps teams implementing enterprise identity solutions.",
  },
  {
    title: "Graceful Shutdown Patterns in Node.js",
    url: "https://blog.galaxycloud.app/a-practical-guide-to-graceful-shutdown-in-node-js-applications",
    problem:
      "Node.js applications in production often crash or lose in-flight requests during deployments or server shutdowns. Without proper graceful shutdown handling, data loss and poor user experience occur in critical systems.",
    audience:
      "Backend engineers, DevOps professionals, and production-focused Node.js developers managing long-running services, microservices, and API servers.",
    approach:
      "Provided hands-on implementation patterns for graceful shutdown, including signal handling, connection draining, request completion, and database cleanup. The article explains the theory, demonstrates practical code examples, and covers real-world deployment scenarios.",
    technologies: ["Node.js", "Signal Handling", "Process Management", "Docker", "Kubernetes"],
    outcome:
      "Developers and teams implementing graceful shutdown have a production-ready reference guide. The article reduces deployment-related incidents, improves system stability, and ensures no data loss during restarts. Now a standard reference for Node.js best practices in modern deployment environments.",
  },
]

export default function CaseStudiesPage() {
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
            <Link href="/case-studies" className="text-accent font-medium">
              Case Studies
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
        <div className="space-y-3 mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">Case Studies</h1>
          <p className="text-xl text-muted-foreground">
            In-depth breakdowns of featured technical articles, highlighting engineering decisions and outcomes.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard key={index} {...caseStudy} />
          ))}
        </div>

        {/* CTA to Writing */}
        <div className="mt-16 pt-12 border-t border-border space-y-6">
          <p className="text-lg text-muted-foreground">
            Interested in reading more? Check out the full writing portfolio across all categories.
          </p>
          <Link href="/writing">
            <Button size="lg" className="w-full sm:w-auto">
              View All Articles
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
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
