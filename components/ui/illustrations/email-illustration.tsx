import { cn } from "@/lib/utils"

interface EmailIllustrationProps {
  className?: string
  primaryColor?: string
  secondaryColor?: string
  accentColor?: string
}

export function EmailIllustration({
  className,
  primaryColor = "currentColor",
  secondaryColor = "var(--primary)",
  accentColor = "var(--secondary)",
}: EmailIllustrationProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 600"
      className={cn("w-full h-auto", className)}
      aria-hidden="true"
    >
      <style jsx>{`
        .primary { fill: ${primaryColor}; }
        .secondary { fill: ${secondaryColor}; }
        .accent { fill: ${accentColor}; }
      `}</style>

      {/* Background elements */}
      <circle cx="400" cy="300" r="250" fill="var(--accent)" opacity="0.1" />
      <circle cx="500" cy="150" r="50" fill="var(--primary)" opacity="0.1" />
      <circle cx="200" cy="450" r="70" fill="var(--secondary)" opacity="0.1" />

      {/* Main envelope */}
      <rect x="200" y="200" width="400" height="250" rx="10" className="secondary" opacity="0.9" />
      <path d="M200,200 L400,350 L600,200" stroke="white" strokeWidth="4" fill="none" />
      <path d="M200,450 L350,350 L400,380 L450,350 L600,450" stroke="white" strokeWidth="4" fill="none" />

      {/* Envelope flap */}
      <path d="M200,200 L400,100 L600,200" className="accent" opacity="0.8" />

      {/* Mail icon */}
      <circle cx="400" cy="300" r="50" fill="white" />
      <rect x="375" y="280" width="50" height="30" rx="5" className="primary" />
      <path d="M375,280 L400,300 L425,280" stroke="white" strokeWidth="2" fill="none" />

      {/* Decorative elements */}
      <circle cx="300" cy="150" r="10" className="primary" opacity="0.6" />
      <circle cx="500" cy="400" r="15" className="primary" opacity="0.6" />
      <circle cx="250" cy="350" r="8" className="accent" opacity="0.8" />
      <circle cx="550" cy="250" r="12" className="accent" opacity="0.8" />
    </svg>
  )
}

