import { useState, useEffect } from "react";
import InteractiveBackground from "./components/InteractiveBackground";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Essence from "./components/Essence";
import BentoGrid from "./components/BentoGrid";
import CEOStatement from "./components/CEOStatement";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import NewsletterModal from "./components/NewsletterModal";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Sync document class for Tailwind dark modifiers
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const sections = ["home", "about", "services", "portfolio", "blog", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250; // offset for early highlighting

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div
      id="root-viewport"
      className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-500 relative"
    >
      {/* Premium WebGL-like organic nodes particle background */}
      <InteractiveBackground isDarkMode={isDarkMode} />

      {/* Header / Navbar */}
      <Header
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* Main Single Page Sections */}
      <main className="relative">
        {/* Home / Hero Screen */}
        <Hero scrollToSection={scrollToSection} />

        {/* About Block (Our Essence, Mission, Vision, Values, Bento Grid) */}
        <div id="about" className="scroll-mt-20">
          <Essence />
          <BentoGrid />
          <CEOStatement />
        </div>

        {/* Services / Pricing Block */}
        <div id="services" className="scroll-mt-20">
          <Services />
        </div>

        {/* Portfolio Block */}
        <div id="portfolio" className="scroll-mt-20">
          <Portfolio />
        </div>

        {/* Blog / Pulse Block */}
        <div id="blog" className="scroll-mt-20">
          <Blog />
        </div>

        {/* Contact Form, FAQS, and Info Block */}
        <div id="contact" className="scroll-mt-20">
          <FAQ />
          <Contact />
        </div>
      </main>

      {/* Footer Block */}
      <Footer scrollToSection={scrollToSection} />

      {/* Interactive Global Elements */}
      <CookieBanner />
      <NewsletterModal />
    </div>
  );
}
