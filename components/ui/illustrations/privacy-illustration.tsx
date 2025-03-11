import { cn } from "@/lib/utils"

interface PrivacyIllustrationProps {
  className?: string
  primaryColor?: string
  secondaryColor?: string
  accentColor?: string
}

export function PrivacyIllustration({
  className,
  primaryColor = "currentColor",
  secondaryColor = "var(--primary)",
  accentColor = "var(--secondary)",
}: PrivacyIllustrationProps) {
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

      {/* Shield base */}
      <path
        d="M400,150 L250,200 C250,350 300,450 400,500 C500,450 550,350 550,200 L400,150"
        className="secondary"
        opacity="0.9"
      />

      {/* Shield inner */}
      <path d="M400,180 L290,220 C290,340 330,420 400,460 C470,420 510,340 510,220 L400,180" fill="white" />

      {/* Lock body */}
      <rect x="350" y="280" width="100" height="80" rx="10" className="accent" />

      {/* Lock shackle */}
      <path
        d="M380,280 L380,240 C380,220 420,220 420,240 L420,280"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="20"
        strokeLinecap="round"
      />

      {/* Lock keyhole */}
      <circle cx="400" cy="320" r="15" fill="white" />
      <rect x="395" y="320" width="10" height="20" fill="white" />

      {/* Decorative elements */}
      <circle cx="200" cy="150" r="20" className="primary" opacity="0.6" />
      <circle cx="600" cy="450" r="30" className="primary" opacity="0.6" />
      <circle cx="150" cy="400" r="15" className="accent" opacity="0.8" />
      <circle cx="650" cy="200" r="25" className="accent" opacity="0.8" />
    </svg>
  )
}

