"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Copy, Mail, Clock, RefreshCw } from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import { useToast } from "@/components/ui/use-toast"
import { siteConfig } from "@/config/site"

interface EmailHeaderProps {
  email: string
  onGenerateNew: () => void
  className?: string
}

export function EmailHeader({ email, onGenerateNew, className }: EmailHeaderProps) {
  const { toast } = useToast()

  // Calculate expiry time
  const expiryTime = new Date()
  expiryTime.setMinutes(expiryTime.getMinutes() + siteConfig.emailExpiryMinutes)
  const timeUntilExpiry = formatDistanceToNow(expiryTime)

  const handleCopyEmail = () => {
    if (!email) return

    navigator.clipboard.writeText(email)
    toast({
      title: "Email copied to clipboard",
      description: email,
      duration: 3000,
    })
  }

  return (
    <Card className={`overflow-hidden border-2 border-primary/20 shadow-sm ${className}`}>
      <CardContent className="p-0">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-gradient-to-r from-primary/5 via-primary/10 to-secondary/5">
          <div className="flex items-center gap-3">
            <div className="bg-primary rounded-full p-2 shadow-sm">
              <Mail className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <div className="text-lg font-medium break-all">{email}</div>
              <div className="text-xs text-muted-foreground flex items-center mt-1">
                <Clock className="mr-1 h-3 w-3" />
                Expires in {timeUntilExpiry}
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button onClick={handleCopyEmail} className="rounded-full shadow-sm">
              <Copy className="mr-2 h-4 w-4" />
              Copy Email
            </Button>
            <Button onClick={onGenerateNew} variant="outline" className="rounded-full shadow-sm">
              <RefreshCw className="mr-2 h-4 w-4" />
              Generate New
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

