import React, { useState, useEffect } from "react";
import { Target, Users, Rocket, ArrowUpRight, Sparkles } from "lucide-react";

const Section2 = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Target,
      title: "Your Success is Our Mission",
      description:
        "We provide personalized trading strategies, real-time market insights, and expert guidance to help you make informed decisions and maximize your returns.",
      color: "from-blue-500 to-cyan-500",
      stat: "94%",
      statLabel: "Success Rate",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Users,
      title: "Community-Driven Platform",
      description:
        "Join a thriving community of traders. Share insights, learn from experts, and grow together with access to exclusive trading signals and market analysis.",
      color: "from-purple-500 to-pink-500",
      stat: "500K+",
      statLabel: "Active Traders",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: Rocket,
      title: "Innovation at Every Step",
      description:
        "Leverage cutting-edge AI technology, advanced charting tools, and automated trading bots to stay ahead of the market and execute trades with precision.",
      color: "from-emerald-500 to-teal-500",
      stat: "0.1s",
      statLabel: "Avg Execute Time",
      gradient: "from-emerald-500/20 to-teal-500/20",
    },
  ];

  return (
    <section className="relative flex justify-center items-center w-full py-24 bg-gradient-to-b from-black via-gray-900/50 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-1/4 w-80 h-80 bg-pink-600 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative w-[85%] max-w-7xl flex flex-col justify-center items-center gap-16 z-10">
        {/* Header */}
        <div
          className={`flex flex-col gap-4 text-center transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <div className="inline-flex items-center justify-center gap-2 mx-auto px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full backdrop-blur-xl">
            <Sparkles className="text-purple-400" size={16} />
            <span className="text-purple-400 text-sm font-medium">
              Our Competitive Edge
            </span>
          </div>
          <h3 className="text-white text-5xl font-bold">
            What Makes Us{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Different?
            </span>
          </h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We're not just another trading platform. We're your partner in
            achieving financial success.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const isHovered = hoveredCard === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative flex flex-col h-[480px] border-2 border-purple-600/30 bg-white/5 backdrop-blur-xl p-8 rounded-2xl gap-6 transition-all duration-500 hover:border-purple-500 hover:shadow-[0_0_30px_5px] hover:shadow-purple-500/30 hover:scale-105 cursor-pointer ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${idx * 150}ms`,
                }}
              >
                {/* Animated gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`}
                ></div>

                {/* Floating orb effect */}
                <div
                  className={`absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br ${feature.color} rounded-full filter blur-3xl opacity-0 group-hover:opacity-30 transition-all duration-700`}
                ></div>

                {/* Icon container */}
                <div className="relative w-full h-[45%] flex justify-center items-center">
                  <div
                    className={`relative w-32 h-32 rounded-3xl bg-gradient-to-br ${
                      feature.color
                    } flex items-center justify-center shadow-2xl transition-all duration-500 ${
                      isHovered ? "scale-110 rotate-6" : "scale-100 rotate-0"
                    }`}
                  >
                    <Icon className="text-white" size={56} strokeWidth={1.5} />

                    {/* Glow effect */}
                    <div
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`}
                    ></div>

                    {/* Stat badge */}
                    <div className="absolute -bottom-3 -right-3 px-3 py-1 bg-black border-2 border-purple-500 rounded-full shadow-lg">
                      <span className="text-purple-400 text-xs font-bold">
                        {feature.stat}
                      </span>
                    </div>
                  </div>

                  {/* Orbit rings */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                      isHovered
                        ? "scale-150 opacity-100"
                        : "scale-100 opacity-0"
                    }`}
                  >
                    <div
                      className={`absolute w-40 h-40 border-2 border-dashed border-purple-500/30 rounded-full animate-spin`}
                      style={{ animationDuration: "8s" }}
                    ></div>
                    <div
                      className={`absolute w-48 h-48 border-2 border-dashed border-pink-500/20 rounded-full animate-spin`}
                      style={{
                        animationDuration: "12s",
                        animationDirection: "reverse",
                      }}
                    ></div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative flex flex-col gap-3 text-center z-10">
                  <h3 className="text-white text-2xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-300 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Stat label */}
                  <div className="mt-2 text-purple-400 text-xs font-semibold uppercase tracking-wider">
                    {feature.statLabel}
                  </div>
                </div>

                {/* Learn more button - appears on hover */}
                <div
                  className={`relative mt-auto flex items-center justify-center gap-2 transition-all duration-300 ${
                    isHovered
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <button
                    className={`flex items-center gap-2 px-6 py-2 bg-gradient-to-r ${feature.color} text-white text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                  >
                    <span>Learn More</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>

                {/* Corner accent */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 rounded-bl-full transition-opacity duration-500`}
                ></div>

                {/* Bottom border accent */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${
                    feature.color
                  } rounded-b-2xl transition-all duration-500 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`flex flex-col items-center gap-4 mt-8 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-gray-400 text-center">
            Ready to experience the difference?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
            Get Started Today
            <ArrowUpRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section2;
