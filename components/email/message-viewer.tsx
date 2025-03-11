"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Copy, Trash2, Mail } from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import type { EmailMessage } from "@/lib/types"
import { useToast } from "@/components/ui/use-toast"
import DOMPurify from "dompurify"

interface MessageViewerProps {
  message: EmailMessage | null
  onDelete?: (id: string) => void
  className?: string
}

export function MessageViewer({ message, onDelete, className }: MessageViewerProps) {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("preview")

  const handleCopyContent = () => {
    if (!message) return

    // Create a temporary div to get text content from HTML
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = message.body
    const textContent = tempDiv.textContent || tempDiv.innerText || ''

    navigator.clipboard.writeText(textContent)
    toast({
      title: "Message copied",
      description: "Message content copied to clipboard",
      duration: 3000,
    })
  }

  const handleDelete = () => {
    if (!message || !onDelete) return
    onDelete(message.id)
  }

  // Sanitize HTML content
  const getSanitizedHtml = (html: string) => {
    return {
      __html: DOMPurify.sanitize(html, {
        ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'ol', 'ul', 'li', 'a', 'span', 'div'],
        ALLOWED_ATTR: ['href', 'target', 'rel', 'style', 'class', 'dir'],
      })
    }
  }

  return (
    <Card className={`h-full border shadow-sm ${className}`}>
      <CardHeader>
        <CardTitle className="text-xl">Message Content</CardTitle>
        <CardDescription>
          {message
            ? `Received ${formatDistanceToNow(new Date(message.received_at))} ago`
            : "Select a message to view its content"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {message ? (
          <div className="animate-fade-in">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="mb-4 w-full justify-start">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="raw">Raw</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="space-y-6">
                <div className="bg-muted/50 rounded-lg p-4 border">
                  <div className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-3">
                    <div className="font-medium text-muted-foreground">From:</div>
                    <div className="font-medium">{message.from}</div>

                    <div className="font-medium text-muted-foreground">Subject:</div>
                    <div className="font-medium">{message.subject}</div>

                    <div className="font-medium text-muted-foreground">Date:</div>
                    <div>{new Date(message.received_at).toLocaleString()}</div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="prose dark:prose-invert max-w-none">
                    <div 
                      className="email-content"
                      dangerouslySetInnerHTML={getSanitizedHtml(message.body)}
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <Button variant="outline" size="sm" className="rounded-full focus-ring" onClick={handleCopyContent}>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Content
                  </Button>
                  <Button variant="destructive" size="sm" className="rounded-full focus-ring" onClick={handleDelete}>
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="raw">
                <div className="bg-muted rounded-lg p-4 overflow-auto max-h-[500px] border">
                  <pre className="text-xs">
                    <code>{JSON.stringify(message, null, 2)}</code>
                  </pre>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-[400px] text-center">
            <div className="bg-muted rounded-full p-4 mb-4 animate-pulse-slow">
              <Mail className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium mb-2">No message selected</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Select a message from your inbox to view its content here
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

