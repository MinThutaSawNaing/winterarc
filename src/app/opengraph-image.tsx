import { ImageResponse } from 'next/og'

export const alt = 'Winter Arc Myanmar — web and software development in Yangon'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', height: '100%', padding: '64px 72px', background: '#0f172a', color: '#ffffff', fontFamily: 'sans-serif' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px', fontSize: 30 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 56, height: 56, borderRadius: 12, background: '#2563eb', fontWeight: 700 }}>W</div>
          Winter Arc Myanmar
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: '-3px', lineHeight: 1.1 }}>Software that makes business simpler.</div>
          <div style={{ fontSize: 27, color: '#cbd5e1' }}>Web development · Mobile apps · Custom software</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #334155', paddingTop: 24, fontSize: 23, color: '#93c5fd' }}>
          <span>Yangon, Myanmar</span><span>winterarc.asia</span>
        </div>
      </div>
    ),
    size
  )
}