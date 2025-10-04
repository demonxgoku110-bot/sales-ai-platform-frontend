import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Lightbulb, Users, Rocket } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h1 className="font-sans text-4xl font-bold text-balance md:text-5xl">About Sales AI Platform</h1>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
                Revolutionizing how sales teams work with artificial intelligence
              </p>
            </div>

            <div className="mb-12 rounded-lg border border-border bg-card p-8">
              <h2 className="mb-4 font-sans text-2xl font-semibold">Our Mission</h2>
              <p className="leading-relaxed text-muted-foreground">
                Sales AI Platform was built to empower sales teams with cutting-edge artificial intelligence technology.
                We believe that by combining human expertise with AI-powered insights, sales professionals can achieve
                unprecedented levels of productivity and success. Our platform analyzes millions of data points to
                provide actionable recommendations, predict customer behavior, and automate repetitive tasks—allowing
                your team to focus on what they do best: building relationships and closing deals.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="mb-6 font-sans text-2xl font-semibold">Core Values</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Target className="h-5 w-5 text-primary" />
                      </div>
                      Results-Driven
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      We measure our success by the tangible results our customers achieve. Every feature is designed to
                      drive revenue growth and improve sales efficiency.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Lightbulb className="h-5 w-5 text-primary" />
                      </div>
                      Innovation First
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      We continuously push the boundaries of what's possible with AI, staying ahead of industry trends
                      to deliver cutting-edge solutions.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      Customer-Centric
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Our customers are at the heart of everything we do. We listen, adapt, and build features that
                      solve real-world sales challenges.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Rocket className="h-5 w-5 text-primary" />
                      </div>
                      Continuous Growth
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      We believe in constant improvement—both for our platform and our team. Learning and evolution are
                      part of our DNA.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-8">
              <h2 className="mb-4 font-sans text-2xl font-semibold">Key Features</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  <p className="leading-relaxed text-muted-foreground">
                    <strong className="text-foreground">AI-Powered Lead Scoring:</strong> Automatically prioritize leads
                    based on conversion probability
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  <p className="leading-relaxed text-muted-foreground">
                    <strong className="text-foreground">Predictive Analytics:</strong> Forecast sales trends and
                    identify opportunities before your competitors
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  <p className="leading-relaxed text-muted-foreground">
                    <strong className="text-foreground">Automated Workflows:</strong> Eliminate manual tasks and focus
                    on high-value activities
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  <p className="leading-relaxed text-muted-foreground">
                    <strong className="text-foreground">Real-Time Insights:</strong> Access up-to-the-minute data and
                    recommendations
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  <p className="leading-relaxed text-muted-foreground">
                    <strong className="text-foreground">Seamless Integrations:</strong> Connect with your existing CRM
                    and sales tools
                  </p>
                </li>
              </ul>
            </div>

            <div className="mt-12 rounded-lg border border-primary/20 bg-primary/5 p-8 text-center">
              <h2 className="mb-3 font-sans text-2xl font-semibold">Meet the Team</h2>
              <p className="leading-relaxed text-muted-foreground">
                Our team consists of experienced sales professionals, data scientists, and engineers who are passionate
                about transforming the sales industry. We're always looking for talented individuals to join our
                mission.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <div className="text-center">
                  <div className="mx-auto mb-2 h-16 w-16 rounded-full bg-muted" />
                  <p className="font-medium">Sarah Chen</p>
                  <p className="text-sm text-muted-foreground">CEO & Founder</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-2 h-16 w-16 rounded-full bg-muted" />
                  <p className="font-medium">Michael Rodriguez</p>
                  <p className="text-sm text-muted-foreground">CTO</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-2 h-16 w-16 rounded-full bg-muted" />
                  <p className="font-medium">Emily Watson</p>
                  <p className="text-sm text-muted-foreground">Head of AI</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-2 h-16 w-16 rounded-full bg-muted" />
                  <p className="font-medium">David Kim</p>
                  <p className="text-sm text-muted-foreground">VP of Sales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
