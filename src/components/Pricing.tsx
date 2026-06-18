import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, FileText, X } from "lucide-react";

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  badge?: string;
  type: "pass" | "monthly" | "annual";
}

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<"all" | "pass" | "monthly" | "annual">("all");
  const [showOriginalPricing, setShowOriginalPricing] = useState(false);

  const plans: PricingPlan[] = [
    {
      name: "Day Pass",
      price: "£3.50",
      period: "day",
      description: "Perfect for a single, high-intensity workout session.",
      features: ["Full gym floor access", "No joining fee or contract", "Use of changing rooms & showers", "Valid for 24 hours from purchase"],
      type: "pass",
    },
    {
      name: "Week Pass",
      price: "£10.00",
      period: "week",
      description: "Ideal for short-term visitors or trials.",
      features: ["7 consecutive days of full gym access", "No contract or strings attached", "Full cardio, strength, & resistance area", "Ideal for testing our training space"],
      type: "pass",
    },
    {
      name: "Month Pass",
      price: "£25.00",
      period: "month",
      description: "Our standard monthly membership. Cancel anytime.",
      features: ["Unrestricted full gym access", "No contract, cancel anytime", "Full induction included", "Access to all resistance & free weights zones"],
      popular: true,
      badge: "Best Value",
      type: "monthly",
    },
    {
      name: "Student Pass",
      price: "£20.00",
      period: "month",
      description: "Budget-friendly option for active students.",
      features: ["Full gym floor access", "No contract, cancel anytime", "Requires valid Student ID check", "Same perks as standard Month Pass"],
      badge: "Student Discount",
      type: "monthly",
    },
    {
      name: "Blue Light",
      price: "£20.00",
      period: "month",
      description: "Special rate for emergency services & NHS staff.",
      features: ["Full gym floor access", "No contract, cancel anytime", "Requires valid Blue Light / NHS ID", "Honoring our community heroes"],
      badge: "Blue Light Discount",
      type: "monthly",
    },
    {
      name: "Couples Pass",
      price: "£40.00",
      period: "month",
      description: "Joint membership for partners or gym buddies.",
      features: ["Dual access for two members", "Billed as single monthly payment", "Cancel anytime, no contract", "Saves £10 per month compared to two singles"],
      type: "monthly",
    },
    {
      name: "Yearly Pass",
      price: "£240.00",
      period: "year",
      description: "Get a full year of training and lock in the best rate.",
      features: ["12 months of unlimited gym access", "Equivalent to just £20/month", "Save £60 compared to monthly rolling", "Free Team Ultimate welcome pack"],
      badge: "Maximum Savings",
      type: "annual",
    },
  ];

  const filteredPlans = activeTab === "all" ? plans : plans.filter((plan) => plan.type === activeTab);

  return (
    <section id="pricing" className="py-24 bg-gym-dark/30 border-y border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-wider text-white">
            MEMBERSHIP <span className="text-brand-yellow">PRICING</span>
          </h2>
          <div className="h-1 w-24 bg-brand-yellow mx-auto mt-4 mb-6" />
          <p className="text-zinc-400 text-base sm:text-lg">
            Choose the membership tier that fits your training schedule. No hidden fees, clear pricing, and no long-term contracts on rolling plans.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gym-black p-1 border border-zinc-800">
            {(["all", "pass", "monthly", "annual"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 sm:px-6 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-brand-yellow text-black"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {tab === "all" ? "All Tiers" : tab === "pass" ? "Passes" : tab === "monthly" ? "Monthly" : "Annual"}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
        >
          <AnimatePresence mode="popLayout">
            {filteredPlans.map((plan) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={plan.name}
                className={`relative flex flex-col justify-between border ${
                  plan.popular
                    ? "border-brand-yellow bg-gym-black shadow-[0_0_25px_rgba(234,179,8,0.15)] animate-pulse-glow"
                    : "border-zinc-850 bg-gym-black/60 hover:border-brand-yellow/50 hover:shadow-[0_0_20px_rgba(234,179,8,0.08)]"
                } p-8 transition-all duration-350 transform hover:-translate-y-2`}
              >
                {plan.badge && (
                  <span className={`absolute top-0 right-0 -translate-y-1/2 translate-x-0 px-3 py-1 text-[10px] font-black tracking-widest uppercase rounded-none ${
                    plan.popular ? "bg-brand-yellow text-black" : "bg-zinc-800 text-brand-yellow border border-brand-yellow/30"
                  }`}>
                    {plan.badge}
                  </span>
                )}

                <div>
                  <h3 className="font-display text-2xl uppercase tracking-wider text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-zinc-500 mb-6 min-h-[32px]">{plan.description}</p>

                  <div className="flex items-baseline mb-8">
                    <span className="font-display text-4xl sm:text-5xl text-white">
                      {plan.price.split(".")[0]}
                      <span className="text-2xl font-sans font-semibold">
                        .{plan.price.split(".")[1] || "00"}
                      </span>
                    </span>
                    <span className="text-zinc-500 text-sm ml-2">/ {plan.period}</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-zinc-300">
                        <Check className="h-4 w-4 text-brand-yellow shrink-0 mt-0.5 mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  className={`w-full py-4 text-xs font-bold tracking-widest uppercase rounded-none transition-all duration-300 border ${
                    plan.popular
                      ? "bg-brand-yellow hover:bg-brand-yellow-hover text-black border-brand-yellow"
                      : "bg-transparent hover:bg-brand-yellow text-white hover:text-black border-zinc-800 hover:border-brand-yellow"
                  }`}
                >
                  Choose {plan.name}
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View Original Sheet Link */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setShowOriginalPricing(true)}
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-brand-yellow text-xs tracking-widest uppercase font-bold transition-all duration-300 border border-dashed border-zinc-800 hover:border-brand-yellow/40 px-6 py-3"
          >
            <FileText className="h-4 w-4" />
            View Official Membership Board
          </button>
        </div>
      </div>

      {/* Pricing Sheet Modal */}
      <AnimatePresence>
        {showOriginalPricing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowOriginalPricing(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-gym-dark border border-zinc-800 p-3 shadow-2xl cursor-default"
            >
              <button
                onClick={() => setShowOriginalPricing(false)}
                className="absolute -top-12 right-0 text-white hover:text-brand-yellow bg-zinc-900 border border-zinc-800 p-2 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="flex flex-col">
                <div className="flex items-center justify-between border-b border-zinc-850 pb-3 mb-3 px-2">
                  <h3 className="font-display text-lg tracking-wider text-brand-yellow uppercase">
                    Official Membership Board
                  </h3>
                  <span className="text-zinc-500 text-xs font-sans">
                    C.1_membership pricing.png
                  </span>
                </div>
                <div className="overflow-auto max-h-[75vh] flex justify-center bg-black">
                  <img
                    src="/membership pricing.png"
                    alt="Official Membership Pricing Board"
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
