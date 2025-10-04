"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, DollarSign, Activity } from "lucide-react"

export default function DashboardPage() {
  const [greeting, setGreeting] = useState<string>("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>("")

  const fetchGreeting = async () => {
    setLoading(true)
    setError("")
    setGreeting("")

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://your-render-backend-url"
      const response = await fetch(`${apiUrl}/api/greet`)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setGreeting(data.message || JSON.stringify(data))
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch greeting")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h1 className="font-sans text-4xl font-bold text-balance">Dashboard</h1>
            <p className="mt-2 text-muted-foreground">Monitor your sales performance and AI insights</p>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Leads</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2,350</div>
                <p className="text-xs text-muted-foreground">+180 new this week</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12.5%</div>
                <p className="text-xs text-muted-foreground">+2.5% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Deals</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">573</div>
                <p className="text-xs text-muted-foreground">+201 since last week</p>
              </CardContent>
            </Card>
          </div>

          {/* API Test Section */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Backend API Connection</CardTitle>
              <CardDescription>Test the connection to your Render backend API</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button onClick={fetchGreeting} disabled={loading}>
                {loading ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Loading...
                  </>
                ) : (
                  "Fetch Greeting from API"
                )}
              </Button>

              {greeting && (
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                  <p className="font-mono text-sm text-foreground">{greeting}</p>
                </div>
              )}

              {error && (
                <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4">
                  <p className="text-sm text-destructive">Error: {error}</p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Make sure to set NEXT_PUBLIC_API_BASE_URL in your environment variables
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Recent Sales Activity</CardTitle>
              <CardDescription>Your latest deals and interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Acme Corp", amount: "$12,500", status: "Closed Won" },
                  { name: "TechStart Inc", amount: "$8,200", status: "Negotiation" },
                  { name: "Global Solutions", amount: "$15,000", status: "Proposal Sent" },
                  { name: "Innovation Labs", amount: "$6,800", status: "Discovery" },
                ].map((deal, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0"
                  >
                    <div>
                      <p className="font-medium">{deal.name}</p>
                      <p className="text-sm text-muted-foreground">{deal.status}</p>
                    </div>
                    <p className="font-semibold">{deal.amount}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
