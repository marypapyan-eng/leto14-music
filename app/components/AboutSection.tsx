'use client';

const values = [
  { icon: '♪', label: 'Сильные мелодии' },
  { icon: '◎', label: 'Живые голоса' },
  { icon: '≋', label: 'Разные жанры' },
];

const stats = [
  { value: '3+', label: 'Артиста' },
  { value: '∞', label: 'Эмоций' },
  { value: '♫', label: 'Жанров' },
];

export default function AboutSection() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0118] to-[#0a0a0f]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-800/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-xs font-medium tracking-widest uppercase">
            О нас
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — decorative quote + heading */}
          <div className="text-center lg:text-left">
            <div
              className="text-8xl font-serif leading-none gradient-text select-none mb-4"
              aria-hidden="true"
            >
              ❝
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Музыка<br />
              <span className="gradient-text">с характером</span>
            </h2>
            <div className="mt-6 w-16 h-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 mx-auto lg:mx-0" />
          </div>

          {/* Right — text + value pills */}
          <div className="flex flex-col gap-6">
            <p className="text-lg text-white/70 leading-relaxed">
              Нам нравятся сильные мелодии, живые тексты и красивые голоса.
              Мы работаем с артистами разных жанров — от поп-музыки до атмосферного
              авторского звучания и детских песен.
            </p>

            <div className="flex flex-wrap gap-3">
              {values.map((v) => (
                <div
                  key={v.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/80 text-sm font-medium"
                >
                  <span className="text-pink-400">{v.icon}</span>
                  {v.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 divide-x divide-white/10 border border-white/10 rounded-2xl overflow-hidden">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-8 px-4 bg-white/5"
            >
              <div className="text-3xl font-black gradient-text mb-1">{stat.value}</div>
              <div className="text-xs text-white/40 tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
