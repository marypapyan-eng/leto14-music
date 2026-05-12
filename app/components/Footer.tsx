import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="LETO14 Music" width={40} height={40} className="object-contain" />
          <span className="text-white/40 text-sm">LETO14 Music</span>
        </div>
        <p className="text-white/25 text-sm text-center">
          © {new Date().getFullYear()} LETO14 Music. Музыка, которую хочется переслушивать.
        </p>
        <div className="flex gap-4">
          <a href="https://www.instagram.com/leto14_music/" target="_blank" rel="noopener noreferrer"
            className="text-white/30 hover:text-pink-400 transition-colors text-sm">Instagram</a>
          <a href="https://vk.com/leto14_music" target="_blank" rel="noopener noreferrer"
            className="text-white/30 hover:text-pink-400 transition-colors text-sm">ВКонтакте</a>
        </div>
      </div>
    </footer>
  );
}
