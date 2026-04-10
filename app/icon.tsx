import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#080a14',
        borderRadius: '4px',
      }}
    >
      <span
        style={{
          color: '#c8102e',
          fontSize: '15px',
          fontWeight: '900',
          fontFamily: 'serif',
          fontStyle: 'italic',
          letterSpacing: '-0.5px',
          lineHeight: 1,
        }}
      >
        TLC
      </span>
    </div>,
    { ...size }
  )
}
