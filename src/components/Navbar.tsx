import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Pricing", href: "#pricing" },
    { name: "Our Coaches", href: "#coaches" },
    { name: "Location & Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gym-black/80 backdrop-blur-md border-b border-brand-yellow/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Team Ultimate Logo"
                className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
              <span className="font-display text-xl sm:text-2xl tracking-wider text-white">
                TEAM <span className="text-brand-yellow">ULTIMATE</span>
              </span>
            </a>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold tracking-wider uppercase text-zinc-350 hover:text-brand-yellow transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#pricing"
              className="bg-brand-yellow hover:bg-brand-yellow-hover text-black text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-none shadow-[0_0_15px_rgba(234,179,8,0.2)] hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all duration-300 hover:scale-105"
            >
              Join Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-zinc-400 hover:text-brand-yellow focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-[73px] bg-gym-black/95 backdrop-blur-lg border-b border-brand-yellow/20 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-semibold tracking-wider uppercase text-zinc-300 hover:text-brand-yellow py-2"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-brand-yellow hover:bg-brand-yellow-hover text-black text-sm font-bold tracking-widest uppercase py-3 rounded-none shadow-[0_0_15px_rgba(234,179,8,0.2)]"
          >
            Join Now
          </a>
        </div>
      </div>
    </nav>
  );
}
