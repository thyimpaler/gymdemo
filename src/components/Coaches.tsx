import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, FileImage, X, ExternalLink } from "lucide-react";

interface Coach {
  name: string;
  handle: string;
  role: string;
  specialty: string[];
  bio: string;
  image: string;
}

export default function Coaches() {
  const [showOriginalCoachBoard, setShowOriginalCoachBoard] = useState(false);

  const coaches: Coach[] = [
    {
      name: "Team Ultimate PT",
      handle: "@ultimatept",
      role: "Head Coach & Founder",
      specialty: ["Strength & Conditioning", "Contest Prep", "Athletic Power"],
      bio: "Founder of Ultimate Place. Specializes in building elite athletic power and competitive bodybuilding preparation.",
      image: "/coach_ultimate.jpg",
    },
    {
      name: "AB Thrive & Revive",
      handle: "@ab_thriveandrevive",
      role: "Lifestyle & Transformation Coach",
      specialty: ["Fat Loss", "Mobility & Posture", "Nutritional Coaching"],
      bio: "Focuses on sustainable lifestyle changes, weight management, and helping you thrive inside and outside the gym.",
      image: "/coach_ab.jpg",
    },
    {
      name: "Old But On It",
      handle: "@oldbutonit_pt",
      role: "Longevity & Conditioning Coach",
      specialty: ["Functional Fitness", "Mature Adult Training", "Stamina"],
      bio: "Proof that age is just a number. Specializes in functional strength, longevity, and keeping you on it at any stage of life.",
      image: "/coach_oldbutonit.jpg",
    },
    {
      name: "D-Fine Coaching",
      handle: "@dfinecoaching",
      role: "Body Composition Specialist",
      specialty: ["Hypertrophy", "Muscle Building", "Strength Training"],
      bio: "Helping you refine your physique, build lean muscle mass, and achieve your strength peaks with science-backed coaching.",
      image: "/coach_dfine.jpg",
    },
    {
      name: "Ruby Jones PT",
      handle: "@rubyjonespt",
      role: "Women's Fitness Specialist",
      specialty: ["Glute Development", "Pre & Postnatal Fitness", "Tone & Sculpt"],
      bio: "Empowering women to build confidence, gain strength, and sculpt their bodies in a welcoming and supportive environment.",
      image: "/coach_ruby.jpg",
    },
  ];

  return (
    <section id="coaches" className="py-24 bg-gym-black relative overflow-hidden">
      {/* Background glowing decorations */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border border-brand-yellow/20 bg-brand-yellow/5 px-3 py-1.5 mb-4"
          >
            <ShieldCheck className="h-4 w-4 text-brand-yellow" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-brand-yellow">
              100% Qualified & Insured Team
            </span>
          </motion.div>
          
          <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-wider text-white">
            LOOKING FOR A <span className="text-brand-yellow">COACH?</span>
          </h2>
          <div className="h-1 w-24 bg-brand-yellow mx-auto mt-4 mb-6" />
          <p className="text-zinc-400 text-base sm:text-lg">
            Our qualified personal trainers are here to guide your journey, correct your form, and design tailored plans to accelerate your results.
          </p>
        </div>

        {/* Coach Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {coaches.map((coach, index) => (
            <motion.div
              key={coach.handle}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gym-dark border border-zinc-850 overflow-hidden hover:border-brand-yellow transition-all duration-300 shadow-lg flex flex-col h-full"
            >
              {/* Image container with Instagram overlay on hover */}
              <div className="relative aspect-square w-full overflow-hidden bg-zinc-900 border-b border-zinc-850">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Slide-up Instagram Overlay */}
                <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-4 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  <svg className="h-8 w-8 text-brand-yellow mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span className="text-white font-bold tracking-wider text-sm mb-1">{coach.name}</span>
                  <span className="text-brand-yellow text-xs font-semibold mb-4">{coach.handle}</span>
                  
                  <a
                    href={`https://instagram.com/${coach.handle.substring(1)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-brand-yellow text-black text-[10px] font-black tracking-widest uppercase px-4 py-2 hover:bg-brand-yellow-hover transition-colors duration-200"
                  >
                    View Instagram
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* Coach text details */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-white font-bold text-base tracking-wide group-hover:text-brand-yellow transition-colors duration-300">
                    {coach.name}
                  </h3>
                  <p className="text-brand-yellow/80 text-[11px] font-bold tracking-wider uppercase mt-0.5">
                    {coach.role}
                  </p>
                  
                  <p className="text-zinc-400 text-xs mt-3 line-clamp-3 leading-relaxed">
                    {coach.bio}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-zinc-850/50">
                  <div className="flex flex-wrap gap-1.5">
                    {coach.specialty.map((tag) => (
                      <span
                        key={tag}
                        className="bg-zinc-800 text-zinc-300 text-[9px] font-bold uppercase tracking-wider px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Original Coach Board Link */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setShowOriginalCoachBoard(true)}
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-brand-yellow text-xs tracking-widest uppercase font-bold transition-all duration-300 border border-dashed border-zinc-800 hover:border-brand-yellow/40 px-6 py-3"
          >
            <FileImage className="h-4 w-4" />
            View Original PT Roster Poster
          </button>
        </div>
      </div>

      {/* Coach Poster Modal */}
      <AnimatePresence>
        {showOriginalCoachBoard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowOriginalCoachBoard(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-gym-dark border border-zinc-800 p-3 shadow-2xl cursor-default"
            >
              <button
                onClick={() => setShowOriginalCoachBoard(false)}
                className="absolute -top-12 right-0 text-white hover:text-brand-yellow bg-zinc-900 border border-zinc-800 p-2 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="flex flex-col">
                <div className="flex items-center justify-between border-b border-zinc-850 pb-3 mb-3 px-2">
                  <h3 className="font-display text-lg tracking-wider text-brand-yellow uppercase">
                    Official PT Directory Roster
                  </h3>
                  <span className="text-zinc-500 text-xs font-sans">
                    C.1_coach.png
                  </span>
                </div>
                <div className="overflow-auto max-h-[75vh] flex justify-center bg-black">
                  <img
                    src="/coach.png"
                    alt="Official PT Board Poster"
                    className="max-w-full h-auto object-contain select-none"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
