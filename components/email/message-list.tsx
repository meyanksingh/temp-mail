"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, AlertCircle, Trash2, RefreshCw } from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import { cn } from "@/lib/utils"
import type { EmailMessage } from "@/lib/types"
import { useToast } from "@/components/ui/use-toast"

const extractPlainTextContent = (body: string): string => {
  // Look for the text/plain part
  const plainTextMatch = body.match(/Content-Type: text\/plain;[\s\S]*?\r\n\r\n([\s\S]*?)\r\n--/);
  if (plainTextMatch && plainTextMatch[1]) {
    return plainTextMatch[1].trim();
  }
  // Fallback: Remove all HTML tags and MIME boundaries
  return body.replace(/--.*?(?:\r\n|\n)/g, '')
            .replace(/<[^>]*>/g, '')
            .replace(/Content-Type:.*?\r\n/g, '')
            .replace(/\r\n\r\n/g, '\n')
            .trim();
}

interface MessageListProps {
  messages: EmailMessage[]
  lastRefreshed: Date
  refreshing: boolean
  onRefresh: () => void
  onSelectMessage: (message: EmailMessage) => void
  selectedMessageId?: string
  className?: string
}

export function MessageList({
  messages,
  lastRefreshed,
  refreshing,
  onRefresh,
  onSelectMessage,
  selectedMessageId,
  className,
}: MessageListProps) {
  const { toast } = useToast()
  const [deletedIds, setDeletedIds] = useState<Set<string>>(new Set())

  const handleDeleteMessage = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setDeletedIds((prev) => new Set([...prev, id]))
    toast({
      title: "Message deleted",
      description: "The message has been removed from your inbox",
      duration: 3000,
    })
  }

  // Filter out deleted messages
  const filteredMessages = messages.filter((msg) => !deletedIds.has(msg.id))

  return (
    <Card className={cn("h-full border shadow-sm", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <div>
          <CardTitle className="text-xl">Inbox</CardTitle>
          <CardDescription>
            {filteredMessages.length} {filteredMessages.length === 1 ? "message" : "messages"}
          </CardDescription>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onRefresh}
          disabled={refreshing}
          className="rounded-full focus-ring"
          aria-label="Refresh inbox"
        >
          <RefreshCw className={cn("h-5 w-5", refreshing && "animate-spin")} />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="text-xs text-muted-foreground flex items-center mb-4">
          <Clock className="mr-1 h-3 w-3" />
          Last refreshed {formatDistanceToNow(lastRefreshed)} ago
        </div>

        <div className="space-y-3">
          {filteredMessages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "cursor-pointer rounded-lg border p-3 transition-all hover:border-primary/30 hover:shadow-sm focus-ring",
                selectedMessageId === message.id ? "bg-primary/5 border-primary/30 shadow-sm" : "bg-card",
              )}
              onClick={() => onSelectMessage(message)}
              tabIndex={0}
              role="button"
              aria-selected={selectedMessageId === message.id}
            >
              <div className="flex justify-between items-start mb-1">
                <div className="font-medium truncate">{message.from}</div>
                <Badge variant="outline" className="ml-2 shrink-0">
                  {new Date(message.received_at).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Badge>
              </div>
              <div className="text-sm font-medium truncate">{message.subject}</div>
              <div className="text-xs text-muted-foreground truncate">
                {message.body ? extractPlainTextContent(message.body).substring(0, 100) + '...' : 'No content'}
              </div>
              <div className="flex justify-end mt-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 rounded-full hover:bg-destructive/10 hover:text-destructive focus-ring"
                  onClick={(e) => handleDeleteMessage(message.id, e)}
                  aria-label="Delete message"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
          {filteredMessages.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="bg-muted rounded-full p-3 mb-4">
                <AlertCircle className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="font-medium mb-1">No messages yet</h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                Messages will appear here as soon as they are received
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

