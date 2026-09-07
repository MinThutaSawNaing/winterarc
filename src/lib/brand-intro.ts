/**
 * Brand-intro scheduling.
 *
 * The intro cinematic is shown on the first visit of every rolling 2-hour
 * window instead of only once per browser. We persist a timestamp of the last
 * time the intro was shown under INTRO_KEY; a fresh value inside the window
 * suppresses it, anything older (or absent) lets it play again.
 *
 * This module is imported by BOTH the server-side bootstrap script in
 * layout.tsx (which adds `wia-intro-seen` pre-paint to avoid a black flash)
 * and the client BrandIntro component — keep the rule logic here so the two
 * can never drift apart.
 */

export const INTRO_KEY = 'winter-arc-intro-seen'

/** Rolling window length: 2 hours. */
export const INTRO_INTERVAL_MS = 2 * 60 * 60 * 1000

/**
 * Read the stored "last shown" timestamp.
 * Values written by older versions ("1") decode to a very old date, so they
 * are treated as due — a one-time replay after this change ships.
 */
export function readLastIntroSeen(): number | null {
  try {
    const raw = window.localStorage.getItem(INTRO_KEY)
    if (!raw) return null
    const value = Number(raw)
    return Number.isFinite(value) ? value : null
  } catch {
    // localStorage unavailable (private mode, blocked storage, …)
    return null
  }
}

/** True when the intro should play right now. */
export function isIntroDue(lastSeen: number | null, now = Date.now()): boolean {
  if (lastSeen === null) return true
  return now - lastSeen >= INTRO_INTERVAL_MS
}

/** Record that the intro is being shown now, starting a fresh window. */
export function markIntroSeen(now = Date.now()): void {
  try {
    window.localStorage.setItem(INTRO_KEY, String(now))
  } catch {
    // ignore storage errors
  }
}
