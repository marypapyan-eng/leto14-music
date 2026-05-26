'use client';

import Image from 'next/image';

const projects = [
  {
    name: 'Дарина Набока',
    description: 'Яркий голос и живые эмоции — музыка, которую чувствуешь кожей.',
    genre: 'Поп',
    image: '/images/darina_project.jpg',
  },
  {
    name: 'Турбозавры',
    description: 'Энергия и драйв — детская музыка, от которой невозможно устоять.',
    genre: 'Детская',
    image: '/images/turbozaurs_project.jpg',
  },
  {
    name: 'Хранители Вкусов',
    description: 'Атмосферное звучание с авторским почерком и глубиной.',
    genre: 'Детская',
    image: '/images/guardians_project.jpg',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]" />

      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-sm font-bold tracking-widest uppercase">
            Проекты
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="project-card group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5"
            >
              {/* Image or placeholder */}
              <div className="relative overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={1085}
                    height={1450}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#1a0a2e] to-[#0d0118] flex flex-col items-center justify-center gap-4">
                    {/* Vinyl placeholder */}
                    <div className="relative w-28 h-28">
                      <svg viewBox="0 0 100 100" className="w-full h-full opacity-60 vinyl-spin" style={{ transformOrigin: '50px 50px' }}>
                        <circle cx="50" cy="50" r="48" fill="#0d0d0d" />
                        {[38, 28, 18].map((r, i) => (
                          <circle key={i} cx="50" cy="50" r={r} fill="none" stroke="#1a1a1a" strokeWidth="1" />
                        ))}
                        <circle cx="50" cy="50" r="13" fill="#1a0a2e" />
                        <circle cx="50" cy="50" r="3" fill="#333" />
                      </svg>
                    </div>
                    <p className="text-white/20 text-sm">Скоро</p>
                  </div>
                )}


                {/* Genre badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-300 text-xs font-medium tracking-wider">
                  {project.genre}
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{project.description}</p>

                {/* Bottom eq bars */}
                <div className="mt-5 flex items-end gap-1.5" style={{ height: 28 }}>
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 rounded-full bg-gradient-to-t from-purple-600/70 to-pink-400/70 eq-bar-${i + 1}`}
                      style={{ height: 28, transformOrigin: 'bottom' }}
                    />
                  ))}
                </div>
              </div>

              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-2xl border border-pink-500/0 group-hover:border-pink-500/30 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
