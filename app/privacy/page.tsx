import { Metadata } from "next"
import { Shield, Mail, Lock, Cookie, RefreshCw, Users, Bell, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy - TempMail",
  description: "Privacy Policy for TempMail temporary email service", 
}

export default function PrivacyPage() {
  return (
    <div className="container max-w-4xl py-16 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-lg text-muted-foreground">How we handle and protect your information</p>
      </div>
      
      <div className="space-y-12">
        <section className="bg-card rounded-lg p-6 shadow-sm border">
          <div className="flex items-start gap-4">
            <Shield className="h-6 w-6 text-primary shrink-0" />
            <div>
              <h2 className="text-xl font-semibold mb-4">Information Collection</h2>
              <p className="text-muted-foreground mb-4">We collect minimal information necessary to provide our temporary email service. This includes:</p>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>Temporary email addresses generated</li>
                <li>Messages received during the active session</li>
                <li>Basic usage analytics</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm border">
          <div className="flex items-start gap-4">
            <Mail className="h-6 w-6 text-primary shrink-0" />
            <div>
              <h2 className="text-xl font-semibold mb-4">How We Use Information</h2>
              <p className="text-muted-foreground mb-4">The information we collect is used solely to:</p>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>Provide the temporary email service</li>
                <li>Improve our service quality</li>
                <li>Prevent abuse of our service</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm border">
          <div className="flex items-start gap-4">
            <RefreshCw className="h-6 w-6 text-primary shrink-0" />
            <div>
              <h2 className="text-xl font-semibold mb-4">Data Retention</h2>
              <p className="text-muted-foreground">All temporary email addresses and associated messages are automatically deleted after their expiration period. We do not permanently store any email content.</p>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm border">
          <div className="flex items-start gap-4">
            <Users className="h-6 w-6 text-primary shrink-0" />
            <div>
              <h2 className="text-xl font-semibold mb-4">Information Sharing</h2>
              <p className="text-muted-foreground">We do not sell, trade, or otherwise transfer your information to third parties. Your temporary email communications remain private.</p>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm border">
          <div className="flex items-start gap-4">
            <Lock className="h-6 w-6 text-primary shrink-0" />
            <div>
              <h2 className="text-xl font-semibold mb-4">Security</h2>
              <p className="text-muted-foreground">We implement appropriate security measures to protect against unauthorized access or disclosure of information.</p>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm border">
          <div className="flex items-start gap-4">
            <Cookie className="h-6 w-6 text-primary shrink-0" />
            <div>
              <h2 className="text-xl font-semibold mb-4">Cookies</h2>
              <p className="text-muted-foreground">We use essential cookies to maintain basic functionality. No tracking or marketing cookies are used.</p>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm border">
          <div className="flex items-start gap-4">
            <Bell className="h-6 w-6 text-primary shrink-0" />
            <div>
              <h2 className="text-xl font-semibold mb-4">Changes to Privacy Policy</h2>
              <p className="text-muted-foreground">We may update this privacy policy from time to time. Any changes will be posted on this page.</p>
            </div>
          </div>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-sm border">
          <div className="flex items-start gap-4">
            <MessageSquare className="h-6 w-6 text-primary shrink-0" />
            <div>
              <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground">If you have questions about our privacy practices, please contact us.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}