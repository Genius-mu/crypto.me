import React, { useState, useEffect } from "react";
import { Sparkles, TrendingUp, Shield, Award } from "lucide-react";

const Section3 = () => {
  const [hoveredPartner, setHoveredPartner] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const partners = [
    {
      name: "BINANCE",
      type: "Exchange Partner",
      logo: "B",
      gradient: "from-yellow-500 to-orange-500",
      icon: TrendingUp,
    },
    {
      name: "CoinMarketCap",
      type: "Data Provider",
      logo: "CMC",
      gradient: "from-blue-500 to-cyan-500",
      icon: Shield,
    },
    {
      name: "DELPHI",
      type: "Research Partner",
      logo: "D",
      gradient: "from-purple-500 to-pink-500",
      icon: Award,
    },
    {
      name: "coinbase",
      type: "Technology Partner",
      logo: "C",
      gradient: "from-emerald-500 to-teal-500",
      icon: Sparkles,
    },
  ];

  const stats = [
    { value: "$2.4B+", label: "Combined Volume" },
    { value: "150+", label: "Countries" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section className="relative flex justify-center items-center w-full py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-600 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Particle effects */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

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
            <Award className="text-purple-400" size={16} />
            <span className="text-purple-400 text-sm font-medium">
              Trusted Partnerships
            </span>
          </div>
          <h2 className="text-white text-5xl font-bold">
            Investors &{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Partners
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Backed by industry leaders and integrated with the world's top
            crypto platforms
          </p>
        </div>

        {/* Partners Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, idx) => {
            const Icon = partner.icon;
            const isHovered = hoveredPartner === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredPartner(idx)}
                onMouseLeave={() => setHoveredPartner(null)}
                className={`group relative flex flex-col items-center justify-center p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl gap-6 transition-all duration-500 hover:bg-white/10 hover:border-purple-500/50 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${idx * 100}ms`,
                }}
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${partner.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                ></div>

                {/* Logo container */}
                <div
                  className={`relative w-24 h-24 rounded-2xl bg-gradient-to-br ${
                    partner.gradient
                  } flex items-center justify-center shadow-2xl transition-all duration-500 ${
                    isHovered ? "scale-110 rotate-6" : "scale-100 rotate-0"
                  }`}
                >
                  <span className="text-white text-3xl font-bold">
                    {partner.logo}
                  </span>

                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${partner.gradient} blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`}
                  ></div>

                  {/* Icon badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-black border-2 border-purple-500 rounded-full flex items-center justify-center">
                    <Icon size={14} className="text-purple-400" />
                  </div>
                </div>

                {/* Partner name */}
                <div className="relative flex flex-col items-center gap-2 text-center z-10">
                  <h3 className="text-white text-2xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-300 group-hover:bg-clip-text transition-all duration-300">
                    {partner.name}
                  </h3>
                  <p className="text-gray-400 text-sm font-medium">
                    {partner.type}
                  </p>
                </div>

                {/* Verified badge - appears on hover */}
                <div
                  className={`absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r ${
                    partner.gradient
                  } rounded-full text-white text-xs font-semibold transition-all duration-300 ${
                    isHovered
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  Verified Partner
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Stats bar */}
        <div
          className={`w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-8 p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center gap-2 text-center ${
                idx !== stats.length - 1 ? "sm:border-r border-white/10" : ""
              }`}
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div
          className={`flex flex-wrap justify-center items-center gap-6 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl">
            <Shield size={16} className="text-green-400" />
            <span className="text-gray-400 text-sm">Regulated</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl">
            <Award size={16} className="text-yellow-400" />
            <span className="text-gray-400 text-sm">ISO Certified</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl">
            <TrendingUp size={16} className="text-blue-400" />
            <span className="text-gray-400 text-sm">Industry Leading</span>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`flex flex-col items-center gap-4 transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-gray-400 text-center">Want to become a partner?</p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section3;
