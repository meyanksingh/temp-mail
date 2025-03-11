import { Metadata } from "next"
import { Shield, FileText, Users, AlertTriangle, Lock, FileCode, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service - TempMail",
  description: "Terms of Service for TempMail temporary email service",
}

export default function TermsPage() {
  return (
    <div className="container max-w-3xl py-12 px-4 md:px-6">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-primary/10 p-2 rounded-lg">
          <FileText className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-3xl font-bold">Terms of Service</h1>
      </div>
      
      <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
        <div className="p-6 rounded-lg border bg-card">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold m-0">1. Acceptance of Terms</h2>
          </div>
          <p className="text-muted-foreground">By accessing and using TempMail ("the Service"), you agree to be bound by these Terms of Service.</p>
        </div>

        <div className="p-6 rounded-lg border bg-card">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold m-0">2. Service Description</h2>
          </div>
          <p className="text-muted-foreground">TempMail provides temporary email addresses for users. These addresses are temporary and will expire after a certain period.</p>
        </div>

        <div className="p-6 rounded-lg border bg-card">
          <div className="flex items-center gap-3 mb-4">
            <Users className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold m-0">3. User Conduct</h2>
          </div>
          <p className="text-muted-foreground">You agree not to use the Service for:</p>
          <ul className="space-y-2 mt-4">
            <li className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              Any illegal activities
            </li>
            <li className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              Spamming or harassment
            </li>
            <li className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              Distribution of malware
            </li>
            <li className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              Any activity that could harm the Service or other users
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-lg border bg-card">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold m-0">4. Limitations of Liability</h2>
          </div>
          <p className="text-muted-foreground">The Service is provided "as is" without any warranties. We are not responsible for any lost or intercepted messages.</p>
        </div>

        <div className="p-6 rounded-lg border bg-card">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold m-0">5. Privacy</h2>
          </div>
          <p className="text-muted-foreground">Your use of the Service is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices.</p>
        </div>

        <div className="p-6 rounded-lg border bg-card">
          <div className="flex items-center gap-3 mb-4">
            <FileCode className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold m-0">6. Modifications</h2>
          </div>
          <p className="text-muted-foreground">We reserve the right to modify these terms at any time. Continued use of the Service constitutes acceptance of modified terms.</p>
        </div>

        <div className="p-6 rounded-lg border bg-card">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold m-0">7. Contact</h2>
          </div>
          <p className="text-muted-foreground">If you have any questions about these Terms, please contact us.</p>
        </div>
      </div>
    </div>
  )
}