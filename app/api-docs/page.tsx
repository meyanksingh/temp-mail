import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Copy, ExternalLink, FileJson, Terminal } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/config/site"

// API documentation data
const apiDocs = {
  "GET /tempmail": {
    description: "Generates a temporary email address",
    response: {
      type: "text/plain",
      example: "user123@meyank.me",
    },
  },
  "GET /tempmail/{email}": {
    description: "Fetches received emails for a specific email address",
    response: {
      type: "application/json",
      example: [
        {
          id: "1",
          from: "support@company.com",
          subject: "Welcome to TempMail",
          body: "Your temporary email is now active.",
          received_at: "2024-03-08T10:00:00Z",
        },
      ],
    },
  },
}

export default function ApiDocsPage() {
  return (
    <div className="container px-4 py-24 md:px-6 md:py-32">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-muted">
            Developer Resources
          </div>
          <h1 className="text-4xl font-bold tracking-tight">API Documentation</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Integrate our temporary email service into your applications with our simple and powerful API
          </p>
        </div>

        <div className="space-y-12">
          <Card className="overflow-hidden border-2">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardTitle className="text-2xl">Getting Started</CardTitle>
              <CardDescription className="text-base">
                Base URL:{" "}
                <code className="bg-background/80 px-2 py-0.5 rounded text-foreground">{siteConfig.apiBaseUrl}</code>
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <p>
                  Our API allows you to programmatically generate temporary email addresses and retrieve messages. The
                  API is simple to use and requires no authentication.
                </p>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Usage</h3>
                    <p className="text-muted-foreground mb-4">
                      The API is free to use and requires no API key. Simply make HTTP requests to the endpoints.
                    </p>
                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Example Request:</p>
                      <div className="flex items-center justify-between bg-card p-2 rounded border">
                        <pre className="text-xs overflow-auto">
                          <code>{`GET ${siteConfig.apiBaseUrl}/tempmail`}</code>
                        </pre>
                        <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full">
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Quick Start</h3>
                    <p className="text-muted-foreground mb-4">
                      Follow these steps to get started with the TempMail API:
                    </p>
                    <ol className="space-y-2 list-decimal list-inside text-sm">
                      <li>Generate a temporary email address</li>
                      <li>Use the email address for your needs</li>
                      <li>Check for incoming messages</li>
                      <li>Process message content as needed</li>
                    </ol>
                    <div className="mt-4">
                      <Link href="#code-examples">
                        <Button variant="link" className="p-0 h-auto">
                          View code examples <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6">
            <h2 className="text-2xl font-bold">API Reference</h2>

            {Object.entries(apiDocs).map(([endpoint, data], index) => (
              <Card key={endpoint} className="overflow-hidden border-2 card-hover">
                <CardHeader className="flex flex-row items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="font-mono text-xs">
                        {endpoint.split(" ")[0]}
                      </Badge>
                      <CardTitle className="font-mono text-lg">{endpoint.split(" ")[1]}</CardTitle>
                    </div>
                    <CardDescription className="text-base">{data.description}</CardDescription>
                  </div>
                  <Badge className={index % 2 === 0 ? "bg-primary" : "bg-secondary"}>v1</Badge>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="response" className="w-full">
                    <TabsList className="w-full justify-start">
                      <TabsTrigger value="response">Response</TabsTrigger>
                    </TabsList>
                    <TabsContent value="response">
                      <div className="mt-4 relative">
                        <div className="absolute top-2 right-2 flex gap-2">
                          <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full">
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="bg-muted p-4 rounded-lg">
                          <div className="mb-2 text-sm text-muted-foreground">Content-Type: {data.response.type}</div>
                          <pre className="text-sm overflow-auto">
                            <code>{JSON.stringify(data.response.example, null, 2)}</code>
                          </pre>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card id="code-examples" className="overflow-hidden border-2">
            <CardHeader>
              <div className="flex items-center gap-2 mb-1">
                <FileJson className="h-5 w-5 text-primary" />
                <CardTitle>Code Examples</CardTitle>
              </div>
              <CardDescription>Implementation examples in various languages</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="javascript" className="w-full">
                <TabsList className="w-full justify-start">
                  <TabsTrigger value="javascript" className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    JavaScript
                  </TabsTrigger>
                  <TabsTrigger value="python" className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    Python
                  </TabsTrigger>
                  <TabsTrigger value="curl" className="flex items-center gap-2">
                    <Terminal className="h-3 w-3" />
                    cURL
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="javascript">
                  <div className="mt-4 relative">
                    <div className="absolute top-2 right-2 flex gap-2">
                      <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <pre className="text-sm overflow-auto">
                        <code>{`// Generate a temporary email
const generateEmail = async () => {
  const response = await fetch('${siteConfig.apiBaseUrl}/tempmail');
  
  const email = await response.text();
  console.log('Generated email:', email);
  return email;
};

// Check for new emails
const checkEmails = async (email) => {
  const encodedEmail = encodeURIComponent(email);
  const response = await fetch(
    \`${siteConfig.apiBaseUrl}/tempmail/\${encodedEmail}\`
  );
  
  const emails = await response.json();
  console.log('Received emails:', emails);
  return emails;
};`}</code>
                      </pre>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="python">
                  <div className="mt-4 relative">
                    <div className="absolute top-2 right-2 flex gap-2">
                      <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <pre className="text-sm overflow-auto">
                        <code>{`import requests
import urllib.parse

BASE_URL = "${siteConfig.apiBaseUrl}"

def generate_email():
    response = requests.get(f"{BASE_URL}/tempmail")
    email = response.text
    print(f"Generated email: {email}")
    return email

def check_emails(email):
    encoded_email = urllib.parse.quote(email)
    response = requests.get(f"{BASE_URL}/tempmail/{encoded_email}")
    emails = response.json()
    print(f"Received {len(emails)} emails")
    return emails`}</code>
                      </pre>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="curl">
                  <div className="mt-4 relative">
                    <div className="absolute top-2 right-2 flex gap-2">
                      <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <pre className="text-sm overflow-auto">
                        <code>{`# Generate a temporary email
curl -X GET "${siteConfig.apiBaseUrl}/tempmail"

# Check for new emails (replace with your email)
curl -X GET "${siteConfig.apiBaseUrl}/tempmail/%3Cd57nwKPTMn@meyank.me%3E"`}</code>
                      </pre>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-2 bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Ready to get started?</h3>
                  <p className="text-muted-foreground">
                    Generate your temporary email and start integrating TempMail into your applications
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/inbox">
                    <Button className="rounded-full">Try It Now</Button>
                  </Link>
                  <Button variant="outline" className="rounded-full">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View GitHub
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

