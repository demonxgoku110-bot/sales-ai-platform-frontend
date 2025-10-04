"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, DollarSign, Activity } from "lucide-react"

interface Insight {
  id: string
  title: string
  description: string
  impact: string
  confidence: number
}

interface AnalysisResult {
  summary: string
  recommendations: string[]
  predictedRevenue: number
  riskFactors: string[]
}

export default function DashboardPage() {
  const [insights, setInsights] = useState<Insight[]>([])
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [analyzing, setAnalyzing] = useState(false)
  const [error, setError] = useState<string>("")

  const fetchInsights = async () => {
    setLoading(true)
    setError("")
    setInsights([])

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"
      const response = await fetch(`${apiUrl}/api/insights`)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setInsights(data.insights || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch insights")
    } finally {
      setLoading(false)
    }
  }

  const analyzeSalesData = async () => {
    setAnalyzing(true)
    setError("")
    setAnalysisResult(null)

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"
      const response = await fetch(`${apiUrl}/api/analyze`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          salesData: [
            { month: "Jan", revenue: 45000 },
            { month: "Feb", revenue: 52000 },
            { month: "Mar", revenue: 48000 },
          ],
          period: "Q1 2024",
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setAnalysisResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to analyze data")
    } finally {
      setAnalyzing(false)
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

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {/* AI Insights Card */}
            <Card>
              <CardHeader>
                <CardTitle>AI-Powered Insights</CardTitle>
                <CardDescription>Get intelligent recommendations from your backend API</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button onClick={fetchInsights} disabled={loading} className="w-full">
                  {loading ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      Loading Insights...
                    </>
                  ) : (
                    "Fetch AI Insights"
                  )}
                </Button>

                {insights.length > 0 && (
                  <div className="space-y-3">
                    {insights.map((insight) => (
                      <div key={insight.id} className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm">{insight.title}</h4>
                            <p className="mt-1 text-xs text-muted-foreground">{insight.description}</p>
                            <p className="mt-2 text-xs font-medium text-primary">{insight.impact}</p>
                          </div>
                          <span className="ml-2 rounded-full bg-primary/10 px-2 py-1 text-xs font-medium">
                            {Math.round(insight.confidence * 100)}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Sales Analysis Card */}
            <Card>
              <CardHeader>
                <CardTitle>Sales Data Analysis</CardTitle>
                <CardDescription>Analyze your sales performance with AI</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button onClick={analyzeSalesData} disabled={analyzing} className="w-full">
                  {analyzing ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      Analyzing...
                    </>
                  ) : (
                    "Analyze Sales Data"
                  )}
                </Button>

                {analysisResult && (
                  <div className="space-y-3">
                    <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                      <h4 className="font-semibold text-sm">Summary</h4>
                      <p className="mt-1 text-xs text-muted-foreground">{analysisResult.summary}</p>
                    </div>

                    <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                      <h4 className="font-semibold text-sm">Predicted Revenue</h4>
                      <p className="mt-1 text-2xl font-bold">${analysisResult.predictedRevenue.toLocaleString()}</p>
                    </div>

                    {analysisResult.recommendations.length > 0 && (
                      <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
                        <h4 className="font-semibold text-sm mb-2">Recommendations</h4>
                        <ul className="space-y-1">
                          {analysisResult.recommendations.map((rec, i) => (
                            <li key={i} className="text-xs text-muted-foreground">
                              • {rec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {error && (
            <Card className="mt-6 border-destructive/20">
              <CardContent className="pt-6">
                <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4">
                  <p className="text-sm text-destructive font-semibold">Error: {error}</p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Make sure your backend is running on port 3001 and NEXT_PUBLIC_API_BASE_URL is set correctly
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

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
