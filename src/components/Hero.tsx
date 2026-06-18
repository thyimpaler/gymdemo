import { motion } from "framer-motion";
import { ArrowRight, Trophy, Shield, Dumbbell } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  } as const;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Zoom Animation */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/gym photo.jpg')" }}
        initial={{ scale: 1.02 }}
        animate={{ scale: 1.08 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />

      {/* Premium Dark Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-gym-black via-gym-black/40 to-black/85" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-12 flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Subtle gold badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 border border-brand-yellow/30 bg-brand-yellow/10 px-4 py-2 rounded-full mb-6"
          >
            <Trophy className="h-4 w-4 text-brand-yellow" />
            <span className="text-xs uppercase font-bold tracking-widest text-brand-yellow">
              Hucknall's Premier Gym & Fitness Center
            </span>
          </motion.div>

          {/* Staggered Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl sm:text-7xl md:text-8xl tracking-tight uppercase leading-none text-white select-none"
          >
            ULTIMATE <span className="text-brand-yellow drop-shadow-[0_0_15px_rgba(234,179,8,0.25)]">PLACE</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg sm:text-xl md:text-2xl font-light text-zinc-300 max-w-3xl leading-relaxed font-sans"
          >
            Unleash your strength. Achieve your fitness goals at Ultimate Place, Nottingham’s premium athletic community.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
          >
            <a
              href="#pricing"
              className="group flex items-center gap-3 bg-brand-yellow hover:bg-brand-yellow-hover text-black text-sm font-bold tracking-widest uppercase px-8 py-4 rounded-none shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
            >
              View Memberships
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#coaches"
              className="flex items-center justify-center border border-white/20 hover:border-brand-yellow hover:text-brand-yellow text-white text-sm font-bold tracking-widest uppercase px-8 py-4 rounded-none transition-all duration-300 hover:scale-105 bg-black/40 backdrop-blur-sm w-full sm:w-auto"
            >
              Meet Our Coaches
            </a>
          </motion.div>

          {/* Highlights grid */}
          <motion.div
            variants={itemVariants}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl"
          >
            <div className="flex items-center gap-4 bg-gym-dark/50 backdrop-blur-sm border border-zinc-800 p-5 rounded-none hover:border-brand-yellow/30 transition-all duration-300">
              <div className="bg-brand-yellow/10 p-3 rounded-none">
                <Dumbbell className="h-6 w-6 text-brand-yellow" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-white uppercase text-sm tracking-wider">Premium Equipment</h3>
                <p className="text-zinc-455 text-xs">State of the art resistance & cardio kit</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-gym-dark/50 backdrop-blur-sm border border-zinc-800 p-5 rounded-none hover:border-brand-yellow/30 transition-all duration-300">
              <div className="bg-brand-yellow/10 p-3 rounded-none">
                <Shield className="h-6 w-6 text-brand-yellow" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-white uppercase text-sm tracking-wider">Qualified PT Team</h3>
                <p className="text-zinc-455 text-xs">Insured & professional coaching staff</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-gym-dark/50 backdrop-blur-sm border border-zinc-800 p-5 rounded-none hover:border-brand-yellow/30 transition-all duration-300">
              <div className="bg-brand-yellow/10 p-3 rounded-none">
                <Trophy className="h-6 w-6 text-brand-yellow" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-white uppercase text-sm tracking-wider">Ultimate Community</h3>
                <p className="text-zinc-455 text-xs">Welcoming athletic space for all levels</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Down arrow pointer */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden sm:block">
        <a href="#pricing" className="text-zinc-500 hover:text-brand-yellow transition-colors duration-300">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </a>
      </div>
    </section>
  );
}
