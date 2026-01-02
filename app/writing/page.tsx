import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const articles = {
  devops: [
    {
      title: "Deploy a Self-Hosted OAuth2 Provider on Vultr Using Authentik and Docker Compose",
      description:
        "Step-by-step guide to deploying a self-hosted OAuth2 identity provider using Authentik and Docker Compose on a Vultr cloud server.",
      platform: "Vultr Docs",
      url: "https://docs.vultr.com/how-to-deploy-a-self-hosted-oauth2-provider-on-vultr-using-authentik-and-docker-compose",
    },
    {
      title: "A Beginner's Guide to Docker for Web Developers",
      description:
        "A practical introduction to Docker for web developers, covering the basics of containers and workflows.",
      platform: "Medium",
      url: "https://medium.com/@techsplot/a-beginners-guide-to-docker-for-web-developers-run-and-understand-your-first-container",
    },
  ],
  backend: [
    {
      title: "A Practical Guide to Graceful Shutdown in Node.js Applications",
      description:
        "A hands-on guide to implementing graceful shutdown logic in Node.js apps to ensure stability and safe shutdowns in modern deployment environments.",
      platform: "Galaxy Cloud Blog",
      url: "https://blog.galaxycloud.app/a-practical-guide-to-graceful-shutdown-in-node-js-applications",
    },
    {
      title: "Error Handling and Logging in Node.js with Winston",
      description:
        "Explores building robust error handling and structured logging in Node.js using Winston, focusing on scalable production patterns.",
      platform: "Galaxy Cloud Blog",
      url: "https://blog.galaxycloud.app/error-handling-and-logging-in-node-js-with-winston/",
    },
    {
      title: "Getting Started with GraphQL and JavaScript",
      description: "A step-by-step tutorial for building your first GraphQL API using Node.js, Prisma, and SQLite.",
      platform: "Medium",
      url: "https://medium.com/@techsplot/getting-started-with-graphql-and-javascript",
    },
    {
      title: "How I Optimized Database I/O from 100 Seconds to 3ms Using Multi-Level Indexing",
      description: "A deep dive into optimizing database I/O performance through multi-level indexing strategies.",
      platform: "Medium",
      url: "https://medium.com/@techsplot/how-i-optimized-database-i-o-from-100-seconds-to-3ms-using-multi-level-indexing",
    },
  ],
  frontend: [
    {
      title: "Client-to-Cluster Optimization: Improving Next.js App Performance on Civo Kubernetes",
      description: "Performance optimization strategies for Next.js applications on Civo Kubernetes.",
      platform: "Medium",
      url: "https://medium.com/@techsplot/client-to-cluster-optimization-improving-next-js-app-performance-on-civo-kubernetes",
    },
    {
      title: "How to Connect Your Name.com Domain to Netlify: A Beginner's Guide",
      description:
        "A beginner-friendly walkthrough of connecting a Name.com domain to Netlify and common configuration pitfalls.",
      platform: "DEV.to",
      url: "https://dev.to/techsplot/how-to-connect-your-name-com-domain-to-netlify-a-beginners-guide",
    },
    {
      title: "Enhance Your Web Development Skills with These Rare HTML Attributes",
      description: "Highlights lesser-known but valuable HTML attributes to elevate your development toolkit.",
      platform: "Medium",
      url: "https://medium.com/@techsplot/enhance-your-web-development-skills-with-these-rare-html-attributes",
    },
  ],
  professional: [
    {
      title: "How Meta's Automated Systems Are Punishing Scam Victims in Nigeria",
      description:
        "An insight-driven exploration of how automated moderation systems on major platforms can negatively impact scam victims in Nigeria.",
      platform: "Medium",
      url: "https://medium.com/@techsplot/how-metas-automated-systems-are-punishing-scam-victims-in-nigeria",
    },
    {
      title: "Using GetResponse with Ease: A Comprehensive Guide to Email Marketing",
      description: "A comprehensive walkthrough of using GetResponse for email marketing, from setup to execution.",
      platform: "Medium",
      url: "https://medium.com/@techsplot/using-getresponse-with-ease-a-comprehensive-guide-to-email-marketing",
    },
    {
      title: "Solving the NPM 'Can't Find Path' Error on Windows",
      description: "A practical guide to resolving the common NPM path error on Windows.",
      platform: "Medium",
      url: "https://medium.com/@techsplot/solving-the-npm-cant-find-path-error-on-windows",
    },
  ],
}

interface ArticleProps {
  title: string
  description: string
  platform: string
  url: string
}

function ArticleCard({ title, description, platform, url }: ArticleProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 rounded-lg border border-border hover:border-accent hover:bg-secondary transition-all"
    >
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">{title}</h3>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent flex-shrink-0 mt-1" />
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        <Badge variant="secondary" className="w-fit">
          {platform}
        </Badge>
      </div>
    </a>
  )
}

export default function WritingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 max-w-4xl items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-semibold text-lg text-foreground">techsplot</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8 text-sm">
            <Link href="/writing" className="text-accent font-medium">
              Writing
            </Link>
            <Link href="/case-studies" className="text-muted-foreground hover:text-foreground transition-colors">
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
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">Writing Portfolio</h1>
          <p className="text-xl text-muted-foreground">
            Articles on DevOps, backend systems, frontend performance, and cloud infrastructure.
          </p>
        </div>

        {/* DevOps & CI/CD */}
        <section className="space-y-8 mb-20">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">DevOps & Infrastructure</h2>
            <p className="text-muted-foreground">Deployment, containerization, and cloud systems.</p>
          </div>
          <div className="grid gap-6">
            {articles.devops.map((article) => (
              <ArticleCard key={article.url} {...article} />
            ))}
          </div>
        </section>

        {/* Backend & APIs */}
        <section className="space-y-8 mb-20">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Backend & APIs</h2>
            <p className="text-muted-foreground">Node.js, authentication, database optimization, and system design.</p>
          </div>
          <div className="grid gap-6">
            {articles.backend.map((article) => (
              <ArticleCard key={article.url} {...article} />
            ))}
          </div>
        </section>

        {/* Frontend Engineering */}
        <section className="space-y-8 mb-20">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Frontend Engineering</h2>
            <p className="text-muted-foreground">Next.js, performance optimization, and web development.</p>
          </div>
          <div className="grid gap-6">
            {articles.frontend.map((article) => (
              <ArticleCard key={article.url} {...article} />
            ))}
          </div>
        </section>

        {/* Professional & General Tech */}
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Professional & General Tech</h2>
            <p className="text-muted-foreground">Insights on technology, systems, and troubleshooting.</p>
          </div>
          <div className="grid gap-6">
            {articles.professional.map((article) => (
              <ArticleCard key={article.url} {...article} />
            ))}
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
