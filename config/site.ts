import type { AppConfig } from "@/lib/types"

export const siteConfig: AppConfig = {
  apiBaseUrl: "https://mail.meyank.me",
  emailExpiryMinutes: 30,
  refreshInterval: 30000, 
  appName: "TempMail",
  appDescription: "Secure temporary email service for your privacy needs",
}

export const siteMetadata = {
  title: "TempMail - Temporary Email Service",
  description: "Protect your privacy with our temporary email service. No sign-up required, instant access.",
  keywords: ["temporary email", "disposable email", "email privacy", "spam protection"],
  authors: [
    {
      name: "TempMail Team",
      url: "https://tempmail.com",
    },
  ],
  creator: "TempMail",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tempmail.com",
    title: "TempMail - Temporary Email Service",
    description: "Protect your privacy with our temporary email service. No sign-up required, instant access.",
    siteName: "TempMail",
  },
  twitter: {
    card: "summary_large_image",
    title: "TempMail - Temporary Email Service",
    description: "Protect your privacy with our temporary email service. No sign-up required, instant access.",
    creator: "@tempmail",
  },
}

