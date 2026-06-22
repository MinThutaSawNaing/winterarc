"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { WinterArcDarkSnowflakeIcon } from "./WinterArcDarkSnowflakeIcon";
import { WinterArcSnowflakeIcon } from "./WinterArcSnowflakeIcon";
import { WinterArcSnowfall } from "./WinterArcSnowfall";

export interface WinterArcLogo3DProps {
  size?: number;
  className?: string;
  /** `dark` matches winterarcicon-dark.svg — ideal on dark panels (e.g. header). */
  iconVariant?: "default" | "dark";
  /** Clip animation inside a square box (e.g. header logo tile). */
  contained?: boolean;
}

/** Organic tumble keyframes — uneven timing mimics a floating ice crystal. */
const TUMBLE = {
  rotateX: [14, -8, 6, -12, 10, -6, 14],
  rotateY: [0, 28, -22, 38, -16, 24, 0],
  rotateZ: [-5, 3, -2, 4, -3, 2, -5],
  y: [0, -4, 1, -3, 2, -2, 0],
  scale: [1, 1.03, 0.98, 1.02, 0.99, 1.01, 1],
};

const SHADOW = {
  scaleX: [1, 0.82, 0.94, 0.78, 0.9, 0.85, 1],
  opacity: [0.32, 0.18, 0.26, 0.14, 0.24, 0.2, 0.32],
};

const GLOW = {
  opacity: [0.35, 0.72, 0.42, 0.68, 0.38, 0.6, 0.35],
  scale: [0.88, 1.08, 0.92, 1.05, 0.9, 1.02, 0.88],
};

const SHIMMER_SWEEP = {
  x: ["-130%", "130%"],
};

const BREEZE_SWAY = {
  x: [0, 5, -4, 6, -3, 4, 0],
};

const TUMBLE_CONTAINED = {
  rotateX: [10, -6, 4, -8, 6, -4, 10],
  rotateY: [0, 18, -14, 24, -10, 16, 0],
  rotateZ: [-3, 2, -1, 3, -2, 1, -3],
  y: [0, -1, 0, -1, 0, -1, 0],
  scale: [1, 1.01, 0.99, 1.01, 1, 1, 1],
};

export function WinterArcLogo3D({
  size = 48,
  className,
  iconVariant = "default",
  contained = false,
}: WinterArcLogo3DProps) {
  const reduceMotion = useReducedMotion();
  const depth = contained
    ? Math.max(6, Math.round(size * 0.22))
    : Math.max(12, Math.round(size * 0.35));
  const frameH = contained ? size : size + Math.round(size * 0.12);
  const SnowIcon =
    iconVariant === "dark" ? WinterArcDarkSnowflakeIcon : WinterArcSnowflakeIcon;

  if (reduceMotion) {
    return (
      <div
        className={cn("relative flex items-center justify-center", className)}
        style={{ width: size, height: size }}
        aria-hidden
      >
        <div className="winter-arc-logo-image flex h-[88%] w-[88%] items-center justify-center">
          <SnowIcon />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "winter-arc-logo-3d relative flex justify-center",
        contained ? "items-center overflow-hidden" : "items-end",
        className
      )}
      style={{
        width: contained ? size : Math.round(size * 1.85),
        height: contained ? size : Math.round(size * 1.55),
      }}
      aria-hidden
    >
      {!contained && <WinterArcSnowfall size={size} />}

      <motion.div
        className="relative z-10"
        style={{ width: size, height: frameH, perspective: size * 5 }}
        animate={contained ? undefined : BREEZE_SWAY}
        transition={
          contained
            ? undefined
            : {
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.18, 0.36, 0.54, 0.72, 0.88, 1],
              }
        }
      >
        {/* Ground shadow — scales with tilt for depth cue */}
        {!contained && (
          <motion.div
            className="pointer-events-none absolute bottom-0 left-1/2 h-[18%] w-[72%] -translate-x-1/2 rounded-[50%] bg-sky-800/40 blur-[6px] dark:bg-sky-300/15"
            animate={SHADOW}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.18, 0.35, 0.52, 0.68, 0.84, 1],
            }}
          />
        )}

        <motion.div
          className={cn(
            "absolute inset-x-0",
            contained ? "inset-y-0 flex items-center justify-center" : "top-0"
          )}
          style={{ height: contained ? undefined : size, transformStyle: "preserve-3d" }}
          animate={contained ? TUMBLE_CONTAINED : TUMBLE}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.16, 0.32, 0.5, 0.66, 0.82, 1],
          }}
        >
          {/* Ambient ice glow behind crystal */}
          <motion.div
            className={cn(
              "absolute rounded-full winter-arc-logo-glow",
              contained ? "inset-[14%]" : "inset-[8%]"
            )}
            style={{
              transform: `translateZ(${-depth}px)`,
              filter: "blur(10px)",
            }}
            animate={GLOW}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.16, 0.32, 0.5, 0.66, 0.82, 1],
            }}
          />

          {/* Back facet — faint mirrored crystal */}
          <div
            className={cn(
              "absolute opacity-[0.22] dark:opacity-[0.18]",
              contained ? "inset-[18%]" : "inset-[6%]"
            )}
            style={{
              transform: `translateZ(${-depth * 0.6}px) rotateY(180deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            <SnowIcon />
          </div>

          {/* Orbital ring — subtle 3D halo */}
          <motion.div
            className={cn(
              "absolute rounded-full border border-sky-700/45 dark:border-sky-200/20",
              contained ? "inset-[12%]" : "inset-[4%]"
            )}
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateX: [72, 88, 68, 82, 72], rotateZ: [0, 120, 240, 360] }}
            transition={{
              rotateX: { duration: 9, repeat: Infinity, ease: "easeInOut" },
              rotateZ: { duration: 18, repeat: Infinity, ease: "linear" },
            }}
          />

          {/* Front crystal face */}
          <motion.div
            className={cn(
              "absolute flex items-center justify-center overflow-hidden rounded-full winter-arc-logo-image",
              contained ? "inset-[10%]" : "inset-0"
            )}
            style={{
              transform: `translateZ(${depth}px)`,
              transformStyle: "preserve-3d",
            }}
            animate={{ rotateZ: [0, -360] }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="relative h-[88%] w-[88%]">
              <SnowIcon />
              {/* Specular sweep — ice catching light */}
              <motion.div
                className="pointer-events-none absolute inset-0 winter-arc-logo-shimmer"
                animate={SHIMMER_SWEEP}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 2.2,
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
