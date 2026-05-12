import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import PartnersSection from './components/PartnersSection';
import ContactsSection from './components/ContactsSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <div className="noise-overlay" />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <PartnersSection />
      <ContactsSection />
      <Footer />
    </main>
  );
}
