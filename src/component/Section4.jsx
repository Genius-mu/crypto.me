import React, { useState } from "react";
import { Zap, DollarSign, Shield, ArrowRight } from "lucide-react";

const Section4 = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      icon: Zap,
      title: "Instant Transfers",
      desc: "Send and receive crypto instantly across the globe with real-time settlement.",
      color: "from-blue-500 to-cyan-500",
      stats: "< 3 seconds",
    },
    {
      icon: DollarSign,
      title: "Low Fees",
      desc: "Save more with minimal transaction costs and transparent pricing.",
      color: "from-purple-500 to-pink-500",
      stats: "0.1% avg fee",
    },
    {
      icon: Shield,
      title: "Advanced Security",
      desc: "Your funds are protected with multi-layer encryption and cold storage.",
      color: "from-emerald-500 to-teal-500",
      stats: "Bank-level",
    },
  ];

  return (
    <section className="relative w-full py-24 flex justify-center items-center bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative w-[85%] max-w-7xl flex flex-col gap-16 z-10">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center">
          <div className="inline-flex items-center justify-center gap-2 mx-auto px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full">
            <span className="text-purple-400 text-sm font-medium">
              Why Choose Us
            </span>
          </div>
          <h3 className="text-white text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
            Fast & Secure Payments
          </h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience the future of digital payments with lightning-fast
            transactions and enterprise-grade security
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const isHovered = hoveredCard === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative flex flex-col p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl gap-6 transition-all duration-500 hover:bg-white/10 hover:border-purple-500/50 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                ></div>

                {/* Icon */}
                <div className="relative">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${
                      feature.color
                    } flex items-center justify-center transition-transform duration-500 ${
                      isHovered ? "scale-110 rotate-6" : ""
                    }`}
                  >
                    <Icon className="text-white" size={32} />
                  </div>
                  {/* Stats badge */}
                  <div className="absolute -top-2 -right-2 px-3 py-1 bg-black border border-purple-500/50 rounded-full">
                    <span className="text-purple-400 text-xs font-semibold">
                      {feature.stats}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 flex-1">
                  <h4 className="text-white text-2xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-300 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.desc}
                  </p>
                </div>

                {/* Learn more link */}
                <div
                  className={`flex items-center gap-2 text-purple-400 text-sm font-medium transition-all duration-300 ${
                    isHovered ? "translate-x-2 opacity-100" : "opacity-0"
                  }`}
                >
                  <span>Learn more</span>
                  <ArrowRight size={16} />
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
            Get Started Now
          </button>
          <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300">
            View Pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section4;
