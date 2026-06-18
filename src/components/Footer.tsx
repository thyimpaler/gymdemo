import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gym-black border-t border-zinc-900 py-16 relative">
      {/* Decorative Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-yellow/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
          
          {/* Col 1: Brand details */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Team Ultimate Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="font-display text-2xl uppercase tracking-wider text-white">
                TEAM <span className="text-brand-yellow">ULTIMATE</span>
              </span>
            </div>
            <p className="text-zinc-455 text-sm max-w-sm leading-relaxed font-medium">
              Ultimate Gym & Fitness (Ultimate Place) is Hucknall's premier training facility. Dedicated to offering high-quality strength, cardio equipment, and expert coaching to elevate your physical fitness.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/ultimatept"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-900 hover:bg-brand-yellow text-zinc-400 hover:text-black border border-zinc-800 p-2.5 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="#"
                className="bg-zinc-900 hover:bg-brand-yellow text-zinc-400 hover:text-black border border-zinc-800 p-2.5 transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm font-semibold">
              <li>
                <a href="#home" className="text-zinc-455 hover:text-brand-yellow transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-zinc-455 hover:text-brand-yellow transition-colors">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="#coaches" className="text-zinc-455 hover:text-brand-yellow transition-colors">
                  Our Coaches
                </a>
              </li>
              <li>
                <a href="#contact" className="text-zinc-455 hover:text-brand-yellow transition-colors">
                  Location & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Summary */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-6">
              Ultimate Place
            </h3>
            <div className="space-y-3 text-xs sm:text-sm font-medium text-zinc-455">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-brand-yellow shrink-0 mt-0.5" />
                <span>NG15 7SZ, Hucknall, Nottingham</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-yellow shrink-0" />
                <span>0115 9635710</span>
              </div>
              <div className="flex items-center gap-2 truncate">
                <Mail className="h-4 w-4 text-brand-yellow shrink-0" />
                <a href="mailto:theultimateplacehucknall@gmail.com" className="hover:text-brand-yellow transition-colors">
                  theultimateplacehucknall@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className="border-t border-zinc-900/60 my-12" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-zinc-500 text-xs font-semibold">
          <div>
            &copy; {new Date().getFullYear()} Team Ultimate. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-brand-yellow transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-yellow transition-colors">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="bg-zinc-900 border border-zinc-800 hover:border-brand-yellow hover:bg-brand-yellow text-zinc-450 hover:text-black p-2.5 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
