import Logo from "./Logo";

interface FooterProps {
  scrollToSection: (id: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Blog", id: "blog" },
  ];

  const resources = [
    { label: "Documentation", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "System Status", href: "#" },
  ];

  const legal = [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ];

  return (
    <footer className="py-16 border-t border-slate-200/50 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-950/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 mb-12">
          {/* Logo Brand Info */}
          <div className="lg:col-span-4">
            <div className="cursor-pointer mb-5" onClick={() => scrollToSection("home")}>
              <Logo size="md" showSlogan={true} />
            </div>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-sans font-light leading-relaxed max-w-xs mt-4">
              Continuous technological design, secure threat-mitigation pipelines, and elite interface craft for scaling organizations.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 md:col-span-1">
            <span className="block text-xs font-sans font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Quick Links
            </span>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-xs md:text-sm text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="lg:col-span-3 md:col-span-1">
            <span className="block text-xs font-sans font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Resources
            </span>
            <ul className="space-y-2.5">
              {resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs md:text-sm text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="lg:col-span-3 md:col-span-1">
            <span className="block text-xs font-sans font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Legal
            </span>
            <ul className="space-y-2.5">
              {legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs md:text-sm text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200/50 dark:border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <span className="text-[11px] text-slate-400 dark:text-slate-500 font-sans font-medium">
            &copy; {new Date().getFullYear()} NovaTech. All Rights Reserved.
          </span>
          <span className="text-[11px] text-slate-400 dark:text-slate-500 font-sans font-light">
            Engineered with extreme precision and modern React architectures.
          </span>
        </div>
      </div>
    </footer>
  );
}
