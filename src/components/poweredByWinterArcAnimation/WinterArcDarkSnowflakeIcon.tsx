"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

interface WinterArcDarkSnowflakeIconProps {
  className?: string;
}

/** Inline dark-theme snowflake — matches public/winterarcicon-dark.svg for 3D layers. */
export function WinterArcDarkSnowflakeIcon({ className }: WinterArcDarkSnowflakeIconProps) {
  const uid = useId().replace(/:/g, "");
  const iceId = `winter-arc-ice-dark-${uid}`;
  const shineId = `winter-arc-shine-dark-${uid}`;
  const glowId = `winter-arc-glow-dark-${uid}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="none"
      aria-hidden="true"
      className={cn("h-full w-full", className)}
    >
      <defs>
        <linearGradient id={iceId} x1="128" y1="64" x2="384" y2="448" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#e8f8ff" />
          <stop offset="100%" stopColor="#7dd3fc" />
        </linearGradient>
        <linearGradient id={shineId} x1="256" y1="96" x2="256" y2="416" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.55" />
        </linearGradient>
        <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#38bdf8" floodOpacity="0.45" />
          <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#ffffff" floodOpacity="0.5" />
        </filter>
      </defs>
      <g
        filter={`url(#${glowId})`}
        fill={`url(#${iceId})`}
        stroke={`url(#${shineId})`}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g transform="translate(256 256)">
          <g id={`arm-${uid}`}>
            <path d="M0 -8 L0 -168" />
            <path d="M0 -48 L-28 -68" />
            <path d="M0 -48 L28 -68" />
            <path d="M0 -96 L-22 -112" />
            <path d="M0 -96 L22 -112" />
            <path d="M0 -136 L-16 -148" />
            <path d="M0 -136 L16 -148" />
            <circle cx="0" cy="-168" r="10" />
          </g>
          <use href={`#arm-${uid}`} transform="rotate(60)" />
          <use href={`#arm-${uid}`} transform="rotate(120)" />
          <use href={`#arm-${uid}`} transform="rotate(180)" />
          <use href={`#arm-${uid}`} transform="rotate(240)" />
          <use href={`#arm-${uid}`} transform="rotate(300)" />
          <circle cx="0" cy="0" r="14" />
        </g>
      </g>
    </svg>
  );
}
