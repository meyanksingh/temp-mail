"use client"

import { Loader2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LoadingStateProps {
  className?: string
}

export function LoadingSpinner({ className }: LoadingStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center min-h-[50vh] ${className}`}>
      <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
      <h2 className="text-xl font-medium">Initializing your temporary inbox...</h2>
      <p className="text-muted-foreground mt-2">This will only take a moment</p>
    </div>
  )
}

interface ErrorStateProps {
  message: string
  onRetry?: () => void
  className?: string
}

export function ErrorState({ message, onRetry, className }: ErrorStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center min-h-[50vh] ${className}`}>
      <div className="bg-destructive/10 p-4 rounded-full mb-4">
        <AlertCircle className="h-12 w-12 text-destructive" />
      </div>
      <h2 className="text-xl font-medium">Something went wrong</h2>
      <p className="text-muted-foreground mt-2 mb-6">{message}</p>
      {onRetry ? (
        <Button onClick={onRetry}>Try Again</Button>
      ) : (
        <Button onClick={() => window.location.reload()}>Refresh Page</Button>
      )}
    </div>
  )
}

