"use client"

import { useState } from "react"
import { useTempEmail } from "@/hooks/use-temp-email"
import { EmailHeader } from "@/components/email/email-header"
import { MessageList } from "@/components/email/message-list"
import { MessageViewer } from "@/components/email/message-viewer"
import { LoadingSpinner, ErrorState } from "@/components/loading-states"
import type { EmailMessage } from "@/lib/types"

export default function InboxPage() {
  const { email, messages, loading, refreshing, lastRefreshed, error, fetchInbox, generateNewEmail } = useTempEmail()

  const [selectedMessage, setSelectedMessage] = useState<EmailMessage | null>(null)

  // Handle message selection
  const handleSelectMessage = (message: EmailMessage) => {
    setSelectedMessage(message)
  }

  // Handle message deletion
  const handleDeleteMessage = (id: string) => {
    if (selectedMessage?.id === id) {
      setSelectedMessage(null)
    }
  }

  if (loading) {
    return (
      <div className="container px-4 py-24 md:px-6 md:py-32">
        <div className="max-w-6xl mx-auto">
          <LoadingSpinner />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container px-4 py-24 md:px-6 md:py-32">
        <div className="max-w-6xl mx-auto">
          <ErrorState message={error} onRetry={() => window.location.reload()} />
        </div>
      </div>
    )
  }

  return (
    <div className="container px-4 py-24 md:px-6 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Your Temporary Inbox</h1>
          <p className="text-muted-foreground">Messages will be automatically deleted after 10 mintues.</p>
        </div>

        <EmailHeader email={email} onGenerateNew={generateNewEmail} className="mb-8" />

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-1">
            <MessageList
              messages={messages}
              lastRefreshed={lastRefreshed}
              refreshing={refreshing}
              onRefresh={fetchInbox}
              onSelectMessage={handleSelectMessage}
              selectedMessageId={selectedMessage?.id}
            />
          </div>

          <div className="md:col-span-2">
            <MessageViewer message={selectedMessage} onDelete={handleDeleteMessage} />
          </div>
        </div>
      </div>
    </div>
  )
}

