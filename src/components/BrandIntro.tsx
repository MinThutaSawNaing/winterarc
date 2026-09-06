'use client'

import { useEffect, useState } from 'react'

/** localStorage key — a visitor sees the intro only once (their very first visit). */
const INTRO_KEY = 'winter-arc-intro-seen'

/** The SVG reveal plays out to ~5.1s; hold briefly, then glitch-fade out over ~6s. */
const PLAY_MS = 5600
const FADE_MS = 6000

/**
 * Inline animation styles from the authored SVG (WinterArc_6s_Logo_Reveal.svg).
 * Selectors are scoped under #brand-intro so they never leak into the rest of the page.
 */
const INTRO_CSS = `
#brand-intro .hud-line {
  stroke:#fff; stroke-width:2; fill:none; opacity:0;
  stroke-dasharray:14 12;
  animation:hudIn .9s ease-out .15s forwards, hudPulse 2.8s ease-in-out 2s infinite;
}
#brand-intro .hud-thin {
  stroke:#fff; stroke-width:1.5; fill:none; opacity:0;
  stroke-dasharray:600; stroke-dashoffset:600;
  animation:draw 1.3s ease-out .25s forwards, fadeToSoft .5s ease-out 1.4s forwards;
}
#brand-intro .ring {
  stroke:#fff; fill:none; opacity:0;
  stroke-dasharray:1500; stroke-dashoffset:1500;
  animation:draw 1.6s ease-out .4s forwards, ringFade .7s ease-out 1.6s forwards;
  transform-origin:420px 495px;
}
#brand-intro .ring.r2 { animation-delay:.55s,1.8s; }
#brand-intro .ring.r3 { animation-delay:.7s,1.95s; }
#brand-intro .flake-stroke {
  stroke:#fff; stroke-width:18; stroke-linecap:square; stroke-linejoin:miter; fill:none;
  stroke-dasharray:1800; stroke-dashoffset:1800; filter:url(#softGlow);
  animation:draw 1.5s cubic-bezier(.22,.8,.2,1) .75s forwards;
}
#brand-intro .flake-core {
  opacity:0; transform-origin:420px 495px; transform:scale(.82);
  animation:pop .45s cubic-bezier(.15,.9,.25,1.3) 1.95s forwards; filter:url(#glow);
}
#brand-intro .mainword {
  opacity:0; transform:translateX(-34px);
  animation:wordIn .7s cubic-bezier(.2,.85,.25,1) 2.15s forwards;
}
#brand-intro .subword { opacity:0; letter-spacing:22px; animation:subIn .8s ease-out 2.9s forwards; }
#brand-intro .tagline { opacity:0; animation:fadeUp .75s ease-out 3.55s forwards; }
#brand-intro .micro { opacity:0; animation:fadeIn .7s ease-out 1.5s forwards; }
#brand-intro .sweep {
  transform:translateX(-1200px); mix-blend-mode:screen;
  animation:sweepMove .9s ease-in-out 2.55s forwards;
}
#brand-intro .impact { opacity:0; animation:impact .45s ease-out 3.05s forwards; }
#brand-intro .endhold { opacity:0; animation:endHold 1.1s ease-out 4.0s forwards; }

@keyframes draw { to { stroke-dashoffset:0; opacity:1; } }
@keyframes fadeToSoft { to { opacity:.25; } }
@keyframes ringFade { to { opacity:.32; } }
@keyframes pop {
  0% { opacity:0; transform:scale(.82); }
  70% { opacity:1; transform:scale(1.04); }
  100% { opacity:1; transform:scale(1); }
}
@keyframes wordIn {
  from { opacity:0; transform:translateX(-34px); filter:blur(6px); }
  to { opacity:1; transform:translateX(0); filter:blur(0); }
}
@keyframes subIn { from { opacity:0; letter-spacing:34px; } to { opacity:1; letter-spacing:18px; } }
@keyframes fadeUp { from { opacity:0; transform:translateY(10px); } to { opacity:.9; transform:translateY(0); } }
@keyframes fadeIn { to { opacity:.68; } }
@keyframes hudIn { to { opacity:.22; } }
@keyframes hudPulse { 0%,100% { opacity:.16; } 50% { opacity:.34; } }
@keyframes sweepMove {
  0% { transform:translateX(-1200px); opacity:0; }
  10% { opacity:1; }
  100% { transform:translateX(1650px); opacity:0; }
}
@keyframes impact { 0% { opacity:0; r:0; } 35% { opacity:.9; } 100% { opacity:0; r:160; } }
@keyframes endHold { to { opacity:1; } }
`

export default function BrandIntro() {
  const [visible, setVisible] = useState(true)
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    const prefersReducedMotion =
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false

    let seen = false
    try {
      seen = window.localStorage.getItem(INTRO_KEY) === '1'
    } catch {
      seen = false
    }

    // Returning visitors and reduced-motion users get the site immediately.
    if (prefersReducedMotion || seen) {
      setVisible(false)
      return
    }

    // First visit — remember it so we never play the intro again.
    try {
      window.localStorage.setItem(INTRO_KEY, '1')
    } catch {
      // ignore storage errors (e.g. private mode)
    }

    // Lock body scroll while the cinematic plays.
    const root = document.documentElement
    const prevOverflow = root.style.overflow
    root.style.overflow = 'hidden'

    const fadeTimer = window.setTimeout(() => setClosing(true), PLAY_MS)
    const removeTimer = window.setTimeout(() => setVisible(false), PLAY_MS + FADE_MS)

    return () => {
      window.clearTimeout(fadeTimer)
      window.clearTimeout(removeTimer)
      root.style.overflow = prevOverflow
    }
  }, [])

  const handleSkip = () => {
    try {
      window.localStorage.setItem(INTRO_KEY, '1')
    } catch {
      // ignore storage errors
    }
    // Skip dismisses instantly — the glitch fade is only for the automatic playout.
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      id="brand-intro"
      className={`brand-intro ${closing ? 'brand-intro--closing' : ''}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
        className="brand-intro__svg"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="sweep" x1="0" x2="1">
            <stop offset="0" stopColor="#fff" stopOpacity="0" />
            <stop offset=".45" stopColor="#fff" stopOpacity="0" />
            <stop offset=".5" stopColor="#fff" stopOpacity=".95" />
            <stop offset=".55" stopColor="#fff" stopOpacity="0" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>

          <clipPath id="wordClip">
            <rect x="570" y="390" width="1080" height="165" rx="8" />
          </clipPath>

          <style>{INTRO_CSS}</style>
        </defs>

        {/* Background */}
        <rect width="1920" height="1080" fill="#000" />

        {/* Subtle technical frame */}
        <g>
          <path className="hud-thin" d="M58 84 H350 L390 124 H540" />
          <path className="hud-thin" d="M1862 84 H1570 L1530 124 H1380" />
          <path className="hud-thin" d="M58 996 H350 L390 956 H540" />
          <path className="hud-thin" d="M1862 996 H1570 L1530 956 H1380" />

          <path className="hud-line" d="M80 540 H260" />
          <path className="hud-line" d="M1660 540 H1840" />
          <path className="hud-line" d="M960 50 V180" />
          <path className="hud-line" d="M960 900 V1030" />
        </g>

        {/* HUD rings */}
        <g transform="translate(0 0)">
          <circle className="ring r1" cx="420" cy="495" r="190" strokeWidth="2.5" />
          <circle
            className="ring r2"
            cx="420"
            cy="495"
            r="225"
            strokeWidth="1.8"
            strokeDasharray="12 10"
          />
          <circle
            className="ring r3"
            cx="420"
            cy="495"
            r="255"
            strokeWidth="1.2"
            strokeDasharray="3 12"
          />
          <path className="hud-thin" d="M420 205 V785" />
          <path className="hud-thin" d="M130 495 H710" />
        </g>
        {/* Snowflake drawn as vector branches */}
        <g className="flake-stroke">
          {/* vertical */}
          <path d="M420 315 V675" />
          <path d="M420 365 L370 415" />
          <path d="M420 365 L470 415" />
          <path d="M420 625 L370 575" />
          <path d="M420 625 L470 575" />

          {/* horizontal */}
          <path d="M240 495 H600" />
          <path d="M290 495 L340 445" />
          <path d="M290 495 L340 545" />
          <path d="M550 495 L500 445" />
          <path d="M550 495 L500 545" />

          {/* diag 1 */}
          <path d="M292 367 L548 623" />
          <path d="M327 402 L327 472" />
          <path d="M327 402 L397 402" />
          <path d="M513 588 L513 518" />
          <path d="M513 588 L443 588" />

          {/* diag 2 */}
          <path d="M548 367 L292 623" />
          <path d="M513 402 L443 402" />
          <path d="M513 402 L513 472" />
          <path d="M327 588 L397 588" />
          <path d="M327 588 L327 518" />
        </g>

        {/* Snowflake center impact */}
        <g className="flake-core">
          <circle cx="420" cy="495" r="18" fill="#fff" />
          <circle
            cx="420"
            cy="495"
            r="70"
            fill="none"
            stroke="#fff"
            strokeOpacity=".18"
            strokeWidth="3"
          />
        </g>
        {/* Main wordmark */}
        <g className="mainword" fontFamily="Arial, Helvetica, sans-serif" fill="#fff">
          <text x="575" y="485" fontSize="138" fontWeight="800" letterSpacing="6">
            WINTER ARC
          </text>
        </g>

        {/* Moving light sweep */}
        <g clipPath="url(#wordClip)">
          <rect
            className="sweep"
            x="520"
            y="340"
            width="480"
            height="270"
            fill="url(#sweep)"
            opacity=".9"
          />
        </g>

        {/* Subtitle */}
        <text
          className="subword"
          x="582"
          y="595"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="54"
          fontWeight="400"
          fill="#fff"
        >
          SOFTWARE SOLUTIONS
        </text>
        {/* Tagline */}
        <text
          className="tagline"
          x="585"
          y="675"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="30"
          fontWeight="300"
          letterSpacing="6"
          fill="#fff"
        >
          Software engineered for the future.
        </text>

        {/* Micro HUD copy */}
        <g className="micro" fill="#fff" fontFamily="Arial, Helvetica, sans-serif">
          <text x="118" y="166" fontSize="17" letterSpacing="5">
            PEOPLE
          </text>
          <text x="118" y="194" fontSize="17" letterSpacing="5">
            TECHNOLOGY
          </text>
          <text x="118" y="222" fontSize="17" letterSpacing="5">
            A SAFER
          </text>
          <text x="118" y="250" fontSize="17" letterSpacing="5">
            TOMORROW
          </text>

          <text x="1535" y="166" fontSize="17" letterSpacing="5">
            IDEAS
          </text>
          <text x="1535" y="194" fontSize="17" letterSpacing="5">
            SYSTEMS
          </text>
          <text x="1535" y="222" fontSize="17" letterSpacing="5">
            SOLUTIONS
          </text>
          <text x="1535" y="250" fontSize="17" letterSpacing="5">
            BEYOND
          </text>

          <text x="118" y="860" fontSize="16" letterSpacing="4">
            DISCOVER / BUILD / DEPLOY
          </text>
          <text x="1470" y="860" fontSize="16" letterSpacing="4">
            BUILT FOR WHAT COMES NEXT
          </text>
        </g>
        {/* Tiny particles */}
        <g fill="#fff" opacity=".6">
          <circle cx="980" cy="215" r="2" />
          <circle cx="1160" cy="305" r="1.8" />
          <circle cx="1325" cy="705" r="2.4" />
          <circle cx="1480" cy="625" r="1.4" />
          <circle cx="735" cy="790" r="1.6" />
          <circle cx="840" cy="280" r="1.3" />
          <circle cx="1030" cy="765" r="1.5" />
          <circle cx="1595" cy="410" r="1.8" />
        </g>

        {/* Impact flash */}
        <circle className="impact" cx="420" cy="495" r="0" fill="none" stroke="#fff" strokeWidth="4" />

        {/* Final settle line */}
        <g className="endhold">
          <line x1="585" y1="720" x2="1460" y2="720" stroke="#fff" strokeOpacity=".2" />
          <rect x="1455" y="716" width="10" height="10" fill="#fff" opacity=".7" />
        </g>
      </svg>

      <button type="button" className="brand-intro__skip" onClick={handleSkip} aria-label="Skip intro">
        Skip
      </button>
    </div>
  )
}
