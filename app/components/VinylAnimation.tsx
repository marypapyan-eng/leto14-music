'use client';

import { useRef } from 'react';

export default function VinylAnimation() {
  const vinylRef = useRef<SVGGElement>(null);

  return (
    <div className="relative w-80 h-80 float-animation">
      {/* Glow backdrop */}
      <div className="absolute inset-0 rounded-full bg-pink-500/10 blur-3xl scale-150" />

      <svg
        viewBox="0 0 320 320"
        className="w-full h-full drop-shadow-2xl"
        style={{ filter: 'drop-shadow(0 0 30px rgba(224,64,251,0.4))' }}
      >
        {/* Vinyl record - spinning */}
        <g ref={vinylRef} className="vinyl-spin" style={{ transformOrigin: '160px 160px' }}>
          {/* Outer ring */}
          <circle cx="160" cy="160" r="150" fill="#0d0d0d" />
          {/* Grooves */}
          {[130, 110, 90, 70, 50].map((r, i) => (
            <circle key={i} cx="160" cy="160" r={r} fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
          ))}
          {/* Shine highlights */}
          <ellipse cx="130" cy="120" rx="40" ry="12" fill="white" opacity="0.04" transform="rotate(-30 160 160)" />
          <ellipse cx="185" cy="195" rx="30" ry="8" fill="white" opacity="0.03" transform="rotate(20 160 160)" />
          {/* Label */}
          <circle cx="160" cy="160" r="44" fill="#1a0a2e" />
          <circle cx="160" cy="160" r="38" fill="#0d0018" />
          {/* Label text */}
          <text x="160" y="152" textAnchor="middle" fill="#e040fb" fontSize="11" fontWeight="bold" fontFamily="Arial, sans-serif" letterSpacing="1">LETO14</text>
          <text x="160" y="168" textAnchor="middle" fill="#ffffff" fontSize="8" fontFamily="Arial, sans-serif" letterSpacing="2" opacity="0.8">MUSIC</text>
          {/* Center hole */}
          <circle cx="160" cy="160" r="6" fill="#0a0a0f" />
          <circle cx="160" cy="160" r="3" fill="#333" />
        </g>

        {/* Equalizer bars — fixed at bottom of vinyl, scale from bottom up */}
        <g>
          {/* Left cluster */}
          <rect className="eq-bar-1" x="8"  y="190" width="10" height="40" rx="2" fill="#e040fb" opacity="0.9" />
          <rect className="eq-bar-2" x="22" y="190" width="10" height="40" rx="2" fill="#e040fb" opacity="0.7" />
          <rect className="eq-bar-3" x="36" y="190" width="10" height="40" rx="2" fill="#9333ea" opacity="0.85" />
          <rect className="eq-bar-4" x="50" y="190" width="10" height="40" rx="2" fill="#c026d3" opacity="0.75" />
          {/* Right cluster */}
          <rect className="eq-bar-3" x="260" y="190" width="10" height="40" rx="2" fill="#e040fb" opacity="0.9" />
          <rect className="eq-bar-1" x="274" y="190" width="10" height="40" rx="2" fill="#9333ea" opacity="0.75" />
          <rect className="eq-bar-5" x="288" y="190" width="10" height="40" rx="2" fill="#e040fb" opacity="0.85" />
          <rect className="eq-bar-2" x="302" y="190" width="10" height="40" rx="2" fill="#c026d3" opacity="0.75" />
        </g>

        {/* Tonearm */}
        <g opacity="0.7">
          <rect x="270" y="20" width="4" height="70" rx="2" fill="#888" transform="rotate(15 272 55)" />
          <circle cx="272" cy="20" r="8" fill="#555" />
          <circle cx="272" cy="20" r="4" fill="#e040fb" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
}
