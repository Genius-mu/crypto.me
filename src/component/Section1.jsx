import React, { useState, useEffect } from "react";
import { TrendingUp, Shield, Zap, ArrowRight, Play } from "lucide-react";

const Section1 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: "Trading Volume", value: "$2.4B", change: "+12.5%" },
    { label: "Active Traders", value: "500K+", change: "+8.3%" },
    { label: "Success Rate", value: "94%", change: "+2.1%" },
  ];

  const features = [
    { icon: TrendingUp, text: "Real-time Analytics" },
    { icon: Shield, text: "Bank-grade Security" },
    { icon: Zap, text: "Instant Execution" },
  ];

  return (
    <section className="relative w-full min-h-screen flex justify-center items-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-pink-600 rounded-full filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] md:bg-[size:50px_50px]"></div>

        {/* Floating particles - reduced on mobile */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse hidden sm:block"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative w-full max-w-7xl flex flex-col gap-8 sm:gap-10 md:gap-12 justify-center items-center z-10">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-500/10 border border-purple-500/30 rounded-full backdrop-blur-xl transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-purple-300 text-xs sm:text-sm font-medium">
            Trusted by 500K+ traders worldwide
          </span>
        </div>

        {/* Main heading */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold text-center max-w-5xl leading-tight px-4 transition-all duration-1000 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          World Class{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">
              Crypto Trading
            </span>
            <div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
          </span>{" "}
          Platform
        </h1>

        {/* Subheading */}
        <p
          className={`text-gray-400 text-base sm:text-lg md:text-xl text-center max-w-2xl leading-relaxed px-4 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Trade with confidence on the most advanced crypto platform. Experience
          lightning-fast execution, institutional-grade security, and real-time
          market insights.
        </p>

        {/* Feature badges */}
        <div
          className={`flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 px-4 transition-all duration-1000 delay-450 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <Icon size={14} className="text-purple-400 sm:w-4 sm:h-4" />
                <span className="text-white text-xs sm:text-sm font-medium whitespace-nowrap">
                  {feature.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md px-4 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-base sm:text-lg font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center gap-2">
            <span className="relative z-10">Start Trading</span>
            <ArrowRight
              size={18}
              className="relative z-10 group-hover:translate-x-1 transition-transform duration-300 sm:w-5 sm:h-5"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button className="group px-6 py-3 sm:px-8 sm:py-4 bg-white/5 backdrop-blur-xl border border-white/10 text-white text-base sm:text-lg font-semibold rounded-xl hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
            <Play
              size={18}
              className="group-hover:scale-110 transition-transform duration-300 sm:w-5 sm:h-5"
            />
            <span>Watch Demo</span>
          </button>
        </div>

        {/* Live stats carousel */}
        <div
          className={`relative w-full max-w-4xl mt-4 sm:mt-6 md:mt-8 px-4 transition-all duration-1000 delay-750 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-16 p-4 sm:p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center gap-1 sm:gap-2 transition-all duration-500 ${
                  currentStat === idx ? "scale-110" : "scale-100 opacity-70"
                }`}
              >
                <div className="flex items-baseline gap-1.5 sm:gap-2">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                  <span className="text-green-400 text-xs sm:text-sm font-semibold">
                    {stat.change}
                  </span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm font-medium text-center">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-2 mt-3 sm:mt-4">
            {stats.map((_, idx) => (
              <div
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentStat === idx
                    ? "bg-purple-500 w-6 sm:w-8"
                    : "bg-white/20 w-2"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <div
          className={`flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-8 mt-4 sm:mt-6 md:mt-8 px-4 transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
            <Shield size={14} className="text-green-400 sm:w-4 sm:h-4" />
            <span>SOC 2 Certified</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/20"></div>
          <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
            <span>Licensed in 50+ Countries</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/20"></div>
          <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
            <span>24/7 Customer Support</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
      `}</style>
    </section>
  );
};

export default Section1;
