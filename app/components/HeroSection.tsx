import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
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

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-20 pb-10 flex flex-col items-center text-center">

        {/* Logo with float animation */}
        <div
          className="float-animation mb-5"
          style={{ filter: 'drop-shadow(0 0 40px rgba(224,64,251,0.5))' }}
        >
          <Image
            src="/images/logo.png"
            alt="LETO14 Music"
            width={190}
            height={190}
            className="object-contain"
            priority
          />
        </div>

        {/* Main heading */}
        <div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-2">
            <span className="text-white">LETO</span>
            <span className="gradient-text text-glow">14</span>
          </h1>
          <p className="text-base md:text-lg text-white/40 font-medium tracking-[0.4em] uppercase mb-5">
            MUSIC
          </p>

          {/* Slogan */}
          <p className="text-lg md:text-xl text-white/75 italic mb-7 max-w-xl mx-auto">
            «Музыка, которую хочется переслушивать»
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-7">
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase transition-all duration-300 text-white
                bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500
                shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-105"
            >
              Наши проекты
            </a>
            <a
              href="#contacts"
              className="px-8 py-3.5 rounded-full font-bold text-sm tracking-wider uppercase transition-all duration-300
                border-2 border-white/25 text-white/85 hover:text-white hover:border-pink-500/60 hover:bg-white/5"
            >
              Написать нам
            </a>
          </div>

          {/* Minimal equalizer — 5 bars only */}
          <div className="flex items-end justify-center gap-2" style={{ height: 28 }}>
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div
                key={i}
                className={`w-2 rounded-full bg-gradient-to-t from-purple-600 to-pink-400 eq-bar-${i + 1}`}
                style={{ height: 28, transformOrigin: 'bottom' }}
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
