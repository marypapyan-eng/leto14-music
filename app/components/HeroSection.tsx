'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#100418] to-[#0a0a0f]" />

      {/* Centered radial glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[700px] rounded-full bg-purple-900/25 blur-[140px]" />
      </div>
      <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-pink-600/8 blur-[100px]" />

      {/* Grid lines subtle */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(224,64,251,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(224,64,251,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-32 flex flex-col items-center text-center">

        {/* Logo with float animation */}
        <div
          className={`float-animation mb-10 transition-all duration-1000 ${
            visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
          style={{ filter: 'drop-shadow(0 0 40px rgba(224,64,251,0.5))' }}
        >
          <Image
            src="/images/logo.png"
            alt="LETO14 Music"
            width={260}
            height={260}
            className="object-contain"
            priority
          />
        </div>

        {/* Main heading */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none mb-4">
            <span className="text-white">LETO</span>
            <span className="gradient-text text-glow">14</span>
          </h1>
          <p className="text-lg md:text-xl text-white/40 font-medium tracking-[0.4em] uppercase mb-8">
            MUSIC
          </p>

          {/* Slogan */}
          <p className="text-xl md:text-2xl text-white/75 italic mb-12 max-w-xl mx-auto">
            «Музыка, которую хочется переслушивать»
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-5 justify-center mb-14">
            <a
              href="#projects"
              className="px-10 py-4 rounded-full font-bold text-base tracking-wider uppercase transition-all duration-300 text-white
                bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500
                shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-105"
            >
              Наши проекты
            </a>
            <a
              href="#contacts"
              className="px-10 py-4 rounded-full font-bold text-base tracking-wider uppercase transition-all duration-300
                border-2 border-white/25 text-white/85 hover:text-white hover:border-pink-500/60 hover:bg-white/5"
            >
              Написать нам
            </a>
          </div>

          {/* Minimal equalizer — 5 bars only */}
          <div className="flex items-end justify-center gap-2" style={{ height: 36 }}>
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div
                key={i}
                className={`w-2 rounded-full bg-gradient-to-t from-purple-600 to-pink-400 eq-bar-${i + 1}`}
                style={{ height: 36, transformOrigin: 'bottom' }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
