import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Book, Terminal } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h1 className="font-sans text-4xl font-bold text-balance">API Documentation</h1>
            <p className="mt-2 text-muted-foreground">Complete reference for the Sales AI Platform API</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="h-5 w-5" />
                    Getting Started
                  </CardTitle>
                  <CardDescription>Quick start guide for the API</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Base URL</h3>
                    <code className="block rounded-lg bg-muted p-3 font-mono text-sm">
                      https://your-render-backend-url/api
                    </code>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Authentication</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      All API requests require authentication using an API key. Include your API key in the
                      Authorization header:
                    </p>
                    <code className="mt-2 block rounded-lg bg-muted p-3 font-mono text-sm">
                      Authorization: Bearer YOUR_API_KEY
                    </code>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    API Endpoints
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="rounded bg-primary/10 px-2 py-1 font-mono text-xs font-semibold text-primary">
                        GET
                      </span>
                      <code className="font-mono text-sm">/api/greet</code>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Returns a greeting message from the backend server.
                    </p>
                    <div className="mt-3">
                      <p className="text-sm font-medium mb-2">Example Response:</p>
                      <pre className="rounded-lg bg-muted p-3 font-mono text-xs overflow-x-auto">
                        {`{
  "message": "Hello from Sales AI Platform!",
  "timestamp": "2024-01-15T10:30:00Z"
}`}
                      </pre>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="rounded bg-primary/10 px-2 py-1 font-mono text-xs font-semibold text-primary">
                        GET
                      </span>
                      <code className="font-mono text-sm">/api/leads</code>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Retrieve a list of all sales leads with AI-powered scoring.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="rounded bg-primary/10 px-2 py-1 font-mono text-xs font-semibold text-primary">
                        POST
                      </span>
                      <code className="font-mono text-sm">/api/leads</code>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Create a new sales lead with automatic AI analysis.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="rounded bg-primary/10 px-2 py-1 font-mono text-xs font-semibold text-primary">
                        GET
                      </span>
                      <code className="font-mono text-sm">/api/analytics</code>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Get comprehensive analytics and insights for your sales pipeline.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Book className="h-5 w-5" />
                    Resources
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a href="#" className="block text-sm text-primary hover:underline">
                    OpenAPI Specification
                  </a>
                  <a href="#" className="block text-sm text-primary hover:underline">
                    Postman Collection
                  </a>
                  <a href="#" className="block text-sm text-primary hover:underline">
                    Code Examples
                  </a>
                  <a href="#" className="block text-sm text-primary hover:underline">
                    Rate Limits
                  </a>
                  <a href="#" className="block text-sm text-primary hover:underline">
                    Changelog
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p className="leading-relaxed">
                    Check out our comprehensive guides and tutorials to get the most out of the Sales AI Platform API.
                  </p>
                  <a href="#" className="block text-primary hover:underline">
                    Contact Support →
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
