import { motion } from "motion/react";

interface LogoProps {
  className?: string;
  variant?: "icon-only" | "text-only" | "full";
  size?: "sm" | "md" | "lg" | "xl";
  showSlogan?: boolean;
}

export default function Logo({
  className = "",
  variant = "full",
  size = "md",
  showSlogan = false,
}: LogoProps) {
  // Dimensions based on size
  const iconSizes = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-16 w-16",
    xl: "h-24 w-24",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl md:text-2xl",
    lg: "text-3xl md:text-4xl",
    xl: "text-5xl md:text-6xl",
  };

  const sloganSizes = {
    sm: "text-[9px]",
    md: "text-[11px] md:text-xs",
    lg: "text-xs md:text-sm",
    xl: "text-sm md:text-base",
  };

  // SVG representation of the beautiful teal logo
  const LogoIcon = () => (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${iconSizes[size]} flex-shrink-0`}
    >
      {/* Brand teal circle */}
      <circle cx="50" cy="50" r="48" fill="#1cb2b9" />
      
      {/* Central stylized 'N' white loop, mathematically centered */}
      <path
        d="M 28 74 
           L 28 38 
           A 11 11 0 0 1 50 38 
           L 50 62
           A 11 11 0 0 0 72 62
           L 72 26"
        stroke="white"
        strokeWidth="9.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  if (variant === "icon-only") {
    return <div className={`inline-flex items-center justify-center ${className}`} id="logo-icon-only"><LogoIcon /></div>;
  }

  if (variant === "text-only") {
    return (
      <div className={`flex flex-col ${className}`} id="logo-text-only">
        <span className={`font-sans font-bold tracking-wider text-slate-900 dark:text-white ${textSizes[size]}`}>
          NOVATECH
        </span>
        {showSlogan && (
          <span className={`font-sans font-medium text-slate-500 dark:text-slate-400 tracking-wide mt-1 ${sloganSizes[size]}`}>
            .....where Intelligence Meets Innovation.
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`} id="logo-full-container">
      <LogoIcon />
      <div className="flex flex-col justify-center">
        <span className={`font-sans font-extrabold tracking-wider text-slate-900 dark:text-white ${textSizes[size]}`}>
          NOVATECH
        </span>
        {showSlogan && (
          <span className={`font-sans font-medium text-[#1cb2b9] dark:text-[#22c3cd] tracking-wider mt-0.5 ${sloganSizes[size]}`}>
            .....where Intelligence Meets Innovation.
          </span>
        )}
      </div>
    </div>
  );
}
