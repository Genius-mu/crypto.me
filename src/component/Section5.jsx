import React, { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";

const Section5 = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Freelance Designer",
      avatar: "SM",
      text: "CryptoPay has completely transformed how I manage international payments. No more waiting days for transfers!",
      rating: 5,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Marcus Chen",
      role: "E-commerce Founder",
      avatar: "MC",
      text: "The speed and security are unmatched. My customers love the seamless checkout experience.",
      rating: 5,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Elena Rodriguez",
      role: "Digital Nomad",
      avatar: "ER",
      text: "Best crypto platform I've used. Low fees, instant transfers, and amazing customer support.",
      rating: 5,
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section className="relative w-full py-24 flex justify-center items-center bg-gradient-to-b from-black via-gray-900/50 to-black overflow-hidden">
      {/* Floating particles effect */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-500 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative w-[85%] max-w-7xl flex flex-col gap-16 z-10">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center">
          <div className="inline-flex items-center justify-center gap-2 mx-auto px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
            <Star className="text-yellow-400" size={16} fill="currentColor" />
            <span className="text-yellow-400 text-sm font-medium">
              Trusted by Thousands
            </span>
          </div>
          <h3 className="text-white text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
            What Our Users Say
          </h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied users who trust CryptoPay for their
            digital transactions
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => {
            const isActive = activeCard === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveCard(idx)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative flex flex-col p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl gap-6 transition-all duration-500 hover:border-purple-500/50 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${idx * 150}ms`,
                }}
              >
                {/* Quote icon background */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <Quote size={64} className="text-purple-500" />
                </div>

                {/* Rating stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-yellow-400 transition-all duration-300"
                      fill="currentColor"
                      style={{
                        transitionDelay: isActive ? `${i * 50}ms` : "0ms",
                        transform: isActive
                          ? "scale(1.2) rotate(15deg)"
                          : "scale(1) rotate(0deg)",
                      }}
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-gray-300 text-base leading-relaxed relative z-10 group-hover:text-white transition-colors duration-300 italic">
                  "{testimonial.text}"
                </p>

                {/* User info */}
                <div className="flex items-center gap-4 mt-auto">
                  {/* Avatar */}
                  <div
                    className={`relative w-14 h-14 rounded-full bg-gradient-to-br ${
                      testimonial.color
                    } flex items-center justify-center font-bold text-white text-lg shadow-lg transition-transform duration-500 ${
                      isActive ? "scale-110 rotate-6" : ""
                    }`}
                  >
                    {testimonial.avatar}
                    {/* Online indicator */}
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900"></div>
                  </div>

                  {/* Name and role */}
                  <div className="flex flex-col">
                    <h4 className="text-white text-lg font-semibold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-300 group-hover:bg-clip-text transition-all duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                ></div>

                {/* Bottom gradient line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8 p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              50K+
            </div>
            <p className="text-gray-400 text-sm">Active Users</p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center border-l border-r border-white/10">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              4.9/5
            </div>
            <p className="text-gray-400 text-sm">Average Rating</p>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              $2M+
            </div>
            <p className="text-gray-400 text-sm">Daily Volume</p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
            Join Our Community
            <Star size={20} fill="currentColor" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section5;
