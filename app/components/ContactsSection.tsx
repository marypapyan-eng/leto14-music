'use client';

const socials = [
  {
    name: 'Instagram',
    handle: '@leto14_music',
    url: 'https://www.instagram.com/leto14_music/',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    gradient: 'from-pink-500 via-purple-500 to-indigo-500',
  },
  {
    name: 'ВКонтакте',
    handle: 'leto14music',
    url: 'https://vk.com/leto14music',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.523-2.049-1.712-1.033-1.01-1.49-.9-1.49-.9s-.15.18-.15.52v1.562c0 .4-.13.53-.75.53-1.104 0-2.33-.067-3.598-1.37C8.293 14.27 7.4 12.16 7.4 12.01c0-.09.06-.18.18-.18h1.742c.24 0 .33.1.39.29.36 1.04 1.17 2.16 1.484 2.16.1 0 .18-.04.18-.34V11.4c-.07-1.09-.68-1.19-.68-1.585 0-.18.147-.36.367-.36h2.74c.207 0 .29.1.29.37v3.27c0 .22.097.3.15.3.1 0 .19-.08.39-.29.66-.75 1.13-1.89 1.13-1.89.07-.15.2-.3.4-.3h1.743c.52 0 .64.25.52.52-.22.94-2.16 3.6-2.16 3.6-.09.14-.12.2 0 .37.09.13.39.4.6.64.57.57 1.01 1.05 1.13 1.39.14.33-.03.5-.37.5z" />
      </svg>
    ),
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    name: 'YouTube',
    handle: '@LETO14Music',
    url: 'https://www.youtube.com/@LETO14Music',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    gradient: 'from-red-500 to-red-700',
  },
];

export default function ContactsSection() {
  return (
    <section id="contacts" className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]" />

      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-pink-600/10 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-xs font-medium tracking-widest uppercase">
            Контакты
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Давайте <span className="gradient-text">знакомиться</span>
          </h2>
          <p className="text-white/50 max-w-md mx-auto">
            Если вы хотите сотрудничать или просто любите хорошую музыку — мы открыты.
          </p>
        </div>

        {/* Email card */}
        <div className="mb-6 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center hover:border-pink-500/30 transition-all duration-300">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-white/50 text-sm tracking-widest uppercase">Email</span>
          </div>
          <a
            href="mailto:hello@leto14music.ru"
            className="text-2xl font-semibold text-white hover:text-pink-400 transition-colors"
          >
            hello@leto14music.ru
          </a>
        </div>

        {/* Social links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-6 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm
                hover:border-pink-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${social.gradient} flex items-center justify-center text-white flex-shrink-0 shadow-lg`}
              >
                {social.icon}
              </div>
              <div>
                <p className="text-white font-semibold text-lg">{social.name}</p>
                <p className="text-white/40 text-sm mt-0.5">{social.handle}</p>
              </div>
              <div className="ml-auto text-white/20 group-hover:text-pink-400 transition-colors">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
