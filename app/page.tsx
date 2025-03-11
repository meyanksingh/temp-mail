"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Shield, Clock, Code, Check, ExternalLink, Zap, Lock } from "lucide-react"
import { EmailIllustration } from "@/components/ui/illustrations/email-illustration"
import { PrivacyIllustration } from "@/components/ui/illustrations/privacy-illustration"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden relative">
        <div className="absolute inset-0 pattern-grid opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl"></div>

        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center space-y-8 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-accent shadow-sm">
              <span className="animate-pulse mr-1.5">✨</span> Protect your inbox from spam
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight">
              Disposable Email <span className="gradient-text">in Seconds</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-[700px] text-balance leading-relaxed">
              Generate temporary email addresses instantly. No sign-up required, just click and protect your privacy
              from spam and data harvesting.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <Link href="/inbox" className="w-full sm:w-auto">
                <Button size="lg" className="w-full rounded-full group shadow-md hover:shadow-lg transition-all">
                  Generate Email
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/api-docs" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full rounded-full border-2 hover:bg-accent/50">
                  API Documentation
                </Button>
              </Link>
            </div>

            <div className="pt-8 flex items-center justify-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Free</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>No Sign-up</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>Instant</span>
              </div>
            </div>
          </div>

          <div className="mt-16 md:mt-24 relative mx-auto max-w-4xl animate-float">
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-xl blur-xl"></div>
            <div className="bg-card border rounded-xl shadow-lg overflow-hidden animate-fade-in p-8">
              <EmailIllustration className="max-h-[400px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 md:py-32 bg-muted/30 relative">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Why Choose <span className="gradient-text">TempMail</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our temporary email service offers powerful features to protect your privacy
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-card border rounded-xl p-8 card-hover shadow-sm">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 shadow-sm">
                <Zap className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Email</h3>
              <p className="text-muted-foreground leading-relaxed">
                Get a temporary email address instantly with no registration required. Just one click and you're ready
                to go.
              </p>
            </div>

            <div className="bg-card border rounded-xl p-8 card-hover shadow-sm">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 shadow-sm">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Privacy Protection</h3>
              <p className="text-muted-foreground leading-relaxed">
                Keep your real email private and avoid spam in your primary inbox. Your personal information stays
                secure.
              </p>
            </div>

            <div className="bg-card border rounded-xl p-8 card-hover shadow-sm">
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 shadow-sm">
                <Clock className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Auto-Refresh</h3>
              <p className="text-muted-foreground leading-relaxed">
                Inbox automatically refreshes to show new messages as they arrive. Never miss an important verification
                email.
              </p>
            </div>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center p-6 bg-card/50 rounded-xl border shadow-sm">
              <div className="text-4xl font-bold mb-2 gradient-text">10M+</div>
              <p className="text-muted-foreground">Emails Generated</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-card/50 rounded-xl border shadow-sm">
              <div className="text-4xl font-bold mb-2 gradient-text">50M+</div>
              <p className="text-muted-foreground">Messages Received</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-card/50 rounded-xl border shadow-sm">
              <div className="text-4xl font-bold mb-2 gradient-text">99.9%</div>
              <p className="text-muted-foreground">Uptime</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-card/50 rounded-xl border shadow-sm">
              <div className="text-4xl font-bold mb-2 gradient-text">500K+</div>
              <p className="text-muted-foreground">Happy Users</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="w-full py-20 md:py-32 relative">
        <div className="absolute inset-0 pattern-dots opacity-30"></div>

        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-muted mb-4">
                Use Cases
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Perfect for Various <span className="gradient-text">Scenarios</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our temporary email service is designed to help you in multiple situations where you need to protect
                your privacy or test email functionality.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Sign Up for Services</h3>
                    <p className="text-muted-foreground">
                      Use a temporary email to sign up for websites without risking your primary email.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Testing Applications</h3>
                    <p className="text-muted-foreground">
                      Perfect for developers testing email functionality in their applications.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Avoiding Marketing Emails</h3>
                    <p className="text-muted-foreground">
                      Download resources or access content without getting marketing emails.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/inbox">
                  <Button className="rounded-full">
                    Try It Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-xl blur-xl"></div>
                <div className="bg-card border rounded-xl shadow-lg overflow-hidden p-8">
                  <PrivacyIllustration className="max-h-[400px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Section */}
      <section className="w-full py-20 md:py-32 bg-muted/50 relative">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-accent mb-4">
                For Developers
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Developer-Friendly <span className="gradient-text">API</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Integrate our temporary email service into your applications with our simple and powerful API. Perfect
                for testing, automation, and enhancing user privacy.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span>RESTful API endpoints</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Comprehensive documentation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Code examples in multiple languages</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Webhook notifications</span>
                </div>
              </div>

              <Link href="/api-docs">
                <Button className="rounded-full">
                  View Documentation <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="bg-card border rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-muted-foreground">example.js</div>
              </div>
              <pre className="text-sm overflow-auto bg-muted p-4 rounded-lg">
                <code className="text-foreground">
                  {`// Generate a temporary email
const generateEmail = async () => {
  const response = await fetch('https://mail.meyank.me/tempmail');
  
  const email = await response.text();
  console.log('Generated email:', email);
  return email;
};

// Check for new emails
const checkEmails = async (email) => {
  const encodedEmail = encodeURIComponent(email);
  const response = await fetch(
    \`https://mail.meyank.me/tempmail/\${encodedEmail}\`
  );
  
  const emails = await response.json();
  console.log('Received emails:', emails);
  return emails;
};`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
        <div className="absolute inset-0 pattern-dots opacity-30"></div>

        <div className="container px-4 md:px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Protect Your <span className="gradient-text">Privacy</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Generate your temporary email address now and start protecting your privacy. No sign-up required, it's
              completely free.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/inbox">
                <Button size="lg" className="rounded-full">
                  Generate Email <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/api-docs">
                <Button variant="outline" size="lg" className="rounded-full">
                  Explore API
                </Button>
              </Link>
            </div>

            <div className="mt-12 pt-12 border-t">
              <div className="flex flex-wrap justify-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">Privacy First</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">Lightning Fast</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">Secure & Reliable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

