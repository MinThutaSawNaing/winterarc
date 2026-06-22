"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { WinterArcLogo3D } from "./WinterArcLogo3D";
import "./poweredByWinterArcAnimation.css";

const WINTER_ARC_URL = "https://winterarc.asia/";

export interface PoweredByWinterArcProps {
  variant?: "footer" | "compact" | "auth";
  className?: string;
}

const VARIANT_CONFIG = {
  footer: {
    logoSize: 44,
    logoSizeMobile: 34,
    textClass: "text-[0.68rem] leading-snug sm:text-xs md:text-sm",
    gap: "gap-2 sm:gap-2.5",
    shellClass: "w-full max-w-[18rem] px-2 sm:max-w-[20rem] sm:px-0 md:max-w-none",
  },
  compact: {
    logoSize: 28,
    logoSizeMobile: 24,
    textClass: "text-[10px] leading-tight",
    gap: "gap-1.5",
    shellClass: "max-w-full px-1",
  },
  auth: {
    logoSize: 44,
    logoSizeMobile: 36,
    textClass: "text-xs",
    gap: "gap-2",
    shellClass: "max-w-full px-2",
  },
} as const;

function useResponsiveLogoSize(desktop: number, mobile: number) {
  const [size, setSize] = useState(desktop);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 639px)");

    const updateSize = () => {
      setSize(media.matches ? mobile : desktop);
    };

    updateSize();
    media.addEventListener("change", updateSize);

    return () => media.removeEventListener("change", updateSize);
  }, [desktop, mobile]);

  return size;
}

export function PoweredByWinterArc({
  variant = "footer",
  className,
}: PoweredByWinterArcProps) {
  const config = VARIANT_CONFIG[variant];
  const logoSize = useResponsiveLogoSize(config.logoSize, config.logoSizeMobile);

  return (
    <a
      href={WINTER_ARC_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex w-full flex-col items-center justify-center select-none rounded-xl transition-opacity hover:opacity-90 active:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-panel-dark)]",
        config.gap,
        config.shellClass,
        className
      )}
      aria-label="Powered by Winter Arc Myanmar — visit winterarc.asia"
    >
      <div className="flex max-w-full items-end justify-center overflow-visible">
        <WinterArcLogo3D size={logoSize} />
      </div>
      <span
        className={cn(
          "powered-by-winter-arc-text block max-w-full text-center font-medium tracking-wide text-gray-700 group-hover:text-gray-900 dark:text-slate-300 dark:group-hover:text-white",
          config.textClass
        )}
      >
        <span className="powered-by-winter-arc-prefix">Powered by </span>
        <span className="powered-by-winter-arc-brand">Winter Arc Myanmar</span>
      </span>
    </a>
  );
}
