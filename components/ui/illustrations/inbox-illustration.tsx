import { cn } from "@/lib/utils"

interface InboxIllustrationProps {
  className?: string
  primaryColor?: string
  secondaryColor?: string
  accentColor?: string
}

export function InboxIllustration({
  className,
  primaryColor = "currentColor",
  secondaryColor = "var(--primary)",
  accentColor = "var(--secondary)",
}: InboxIllustrationProps) {
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
      <rect x="150" y="150" width="500" height="350" rx="20" className="secondary" opacity="0.1" />

      {/* Inbox container */}
      <rect x="200" y="200" width="400" height="250" rx="10" fill="white" stroke="var(--border)" strokeWidth="2" />

      {/* Inbox header */}
      <rect x="200" y="200" width="400" height="50" rx="10" className="secondary" opacity="0.2" />
      <circle cx="230" cy="225" r="10" className="secondary" />
      <rect x="250" y="220" width="100" height="10" rx="5" fill="var(--muted-foreground)" opacity="0.7" />

      {/* Inbox items */}
      <rect x="220" y="270" width="360" height="40" rx="5" fill="var(--muted)" opacity="0.3" />
      <circle cx="240" cy="290" r="10" className="accent" />
      <rect x="260" y="285" width="150" height="10" rx="5" fill="var(--foreground)" opacity="0.8" />

      <rect x="220" y="330" width="360" height="40" rx="5" fill="var(--muted)" opacity="0.3" />
      <circle cx="240" cy="350" r="10" className="primary" />
      <rect x="260" y="345" width="180" height="10" rx="5" fill="var(--foreground)" opacity="0.8" />

      <rect x="220" y="390" width="360" height="40" rx="5" fill="var(--muted)" opacity="0.3" />
      <circle cx="240" cy="410" r="10" className="secondary" />
      <rect x="260" y="405" width="120" height="10" rx="5" fill="var(--foreground)" opacity="0.8" />

      {/* Decorative elements */}
      <circle cx="650" cy="150" r="30" className="accent" opacity="0.2" />
      <circle cx="150" cy="450" r="40" className="primary" opacity="0.2" />
      <rect x="600" y="500" width="80" height="10" rx="5" className="secondary" opacity="0.3" />
      <rect x="600" y="520" width="60" height="10" rx="5" className="secondary" opacity="0.3" />
    </svg>
  )
}

