'use client';

import Image from 'next/image';

const partners = [
  {
    name: 'Карамель и Ко',
    logo: '/images/karamel.png',
    description: 'Анимационная студия',
    dark: false,
  },
  {
    name: 'Маурис Филм',
    logo: '/images/mauris.png',
    description: 'Кинопроизводство',
    dark: true,
  },
  {
    name: 'Солнечный круг',
    logo: null,
    description: 'Партнёр',
    dark: false,
  },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0118] to-[#0a0a0f]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-xs font-medium tracking-widest uppercase">
            Партнёры
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Вместе мы <span className="gradient-text">создаём</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex flex-col items-center justify-center p-12 rounded-2xl
                border border-white/10 bg-white/5 backdrop-blur-sm
                hover:border-pink-500/30 hover:bg-white/[0.08] transition-all duration-300 hover:-translate-y-2"
            >
              {partner.logo ? (
                <div className="relative w-full max-w-[200px] h-20">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                    style={partner.dark ? { filter: 'brightness(0) invert(1)', opacity: 0.85 } : undefined}
                  />
                </div>
              ) : (
                <div className="w-full max-w-[200px] h-20 flex items-center justify-center">
                  <div className="text-center">
                    {/* Sun circle icon */}
                    <div className="w-16 h-16 mx-auto mb-2 rounded-full border-2 border-pink-500/40 flex items-center justify-center">
                      <svg viewBox="0 0 40 40" className="w-8 h-8">
                        <circle cx="20" cy="20" r="8" fill="#e040fb" opacity="0.8" />
                        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                          <line
                            key={angle}
                            x1="20"
                            y1="20"
                            x2={20 + 14 * Math.cos((angle * Math.PI) / 180)}
                            y2={20 + 14 * Math.sin((angle * Math.PI) / 180)}
                            stroke="#9333ea"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        ))}
                      </svg>
                    </div>
                  </div>
                </div>
              )}
              <p className="mt-6 text-white font-semibold text-lg text-center">{partner.name}</p>
              <p className="text-white/40 text-sm tracking-wider mt-1">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
