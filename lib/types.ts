

export interface EmailMessage {
  id: string
  from: string
  subject: string
  body: string
  Body: string
  received_at: string
}

export interface ApiError {
  message: string
  code?: string
  status?: number
}

export interface ApiResponse<T> {
  data?: T
  error?: ApiError
}

export interface AppConfig {
  apiBaseUrl: string
  emailExpiryMinutes: number
  refreshInterval: number
  appName: string
  appDescription: string
}

