import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, BarChart3, Brain, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
          <div className="container relative mx-auto px-4 py-24 md:py-32">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-sans text-5xl font-bold leading-tight tracking-tight text-balance md:text-6xl lg:text-7xl">
                Empowering Sales Teams with <span className="text-primary">AI Insights</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl">
                Transform your sales process with intelligent analytics, predictive insights, and automated workflows
                that help your team close more deals faster.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/dashboard">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                  <Link href="/docs">View Documentation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="border-t border-border bg-card/50 py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-start gap-4 rounded-lg border border-border bg-card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-sans text-xl font-semibold">AI-Powered Insights</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Leverage machine learning to predict customer behavior and identify high-value opportunities.
                </p>
              </div>

              <div className="flex flex-col items-start gap-4 rounded-lg border border-border bg-card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-sans text-xl font-semibold">Real-Time Analytics</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Monitor your sales pipeline with live dashboards and actionable metrics that drive results.
                </p>
              </div>

              <div className="flex flex-col items-start gap-4 rounded-lg border border-border bg-card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-sans text-xl font-semibold">Automated Workflows</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Streamline repetitive tasks and focus on what matters most—building relationships and closing deals.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
