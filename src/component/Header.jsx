import {
  LayoutDashboard,
  Menu,
  X,
  ChevronDown,
  LogIn,
  Sparkles,
} from "lucide-react";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/", id: "home" },
    { name: "Features", href: "/features", id: "features" },
    { name: "Earn", href: "/earn", id: "earn", badge: "New" },
    { name: "About", href: "/about", id: "about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-purple-900/20"
          : "bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm"
      }`}
    >
      {/* Animated gradient border top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-60 animate-pulse"></div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo with enhanced effects */}
          <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
            <div className="relative">
              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-xl blur-lg opacity-60 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-md opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>

              {/* Logo container */}
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 rounded-xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-500 group-hover:rotate-6">
                <LayoutDashboard className="text-white w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-500" />
                {/* Shine effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            <div className="flex flex-col">
              <h2 className="text-white text-lg sm:text-xl font-bold bg-gradient-to-r from-white via-purple-100 to-pink-200 bg-clip-text text-transparent group-hover:from-purple-200 group-hover:via-white group-hover:to-purple-200 transition-all duration-500">
                CryptoRise
              </h2>
              <span className="text-purple-400 text-[10px] sm:text-xs font-medium -mt-1 group-hover:text-pink-400 transition-colors duration-300">
                Trade Smarter
              </span>
            </div>
          </div>

          {/* Desktop Navigation with enhanced hover effects */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-1 lg:gap-2">
              {navItems.map((item, idx) => (
                <li key={idx} className="relative group">
                  <a
                    href={item.href}
                    className="relative px-3 lg:px-4 py-2 text-gray-300 text-sm lg:text-base font-medium hover:text-white transition-all duration-300 flex items-center gap-2 rounded-lg group-hover:bg-white/5"
                  >
                    {item.name}

                    {/* New badge */}
                    {item.badge && (
                      <span className="px-1.5 py-0.5 text-[10px] font-bold bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded uppercase tracking-wider shadow-lg shadow-emerald-500/30 animate-pulse">
                        {item.badge}
                      </span>
                    )}

                    {/* Enhanced animated underline */}
                    <span className="absolute left-2 right-2 bottom-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full"></span>

                    {/* Multi-layer glow effect */}
                    <span className="absolute left-2 right-2 bottom-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 blur-md opacity-0 group-hover:opacity-70 transition-all duration-500"></span>
                    <span className="absolute left-0 right-0 bottom-0 h-2 bg-gradient-to-r from-purple-500/0 via-pink-500/50 to-purple-500/0 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right side buttons with enhanced styling */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Login button with hover effect */}
            <button className="hidden lg:flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white text-sm font-medium transition-all duration-300 group relative rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10">
              <LogIn
                size={16}
                className="group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
              />
              <span>Login</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/0 via-pink-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>

            {/* Enhanced CTA button */}
            <button className="hidden md:flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white text-sm lg:text-base font-semibold shadow-xl shadow-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/60 hover:scale-105 transition-all duration-500 group relative overflow-hidden border border-white/10">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>

              <Sparkles
                size={16}
                className="relative z-10 group-hover:rotate-180 transition-transform duration-700"
              />
              <span className="relative z-10">Get Started</span>
              <ChevronDown
                size={16}
                className="relative z-10 group-hover:translate-y-1 group-hover:animate-bounce transition-transform duration-300"
              />
            </button>

            {/* Mobile menu button with enhanced animation */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="text-white w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="text-white w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-4 border-t border-white/10">
            <ul className="flex flex-col gap-2">
              {navItems.map((item, idx) => (
                <li
                  key={idx}
                  className="transform transition-all duration-300"
                  style={{
                    transitionDelay: menuOpen ? `${idx * 50}ms` : "0ms",
                    transform: menuOpen ? "translateX(0)" : "translateX(-20px)",
                    opacity: menuOpen ? 1 : 0,
                  }}
                >
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 rounded-lg transition-all duration-300 group border border-transparent hover:border-purple-500/20"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-base font-medium">{item.name}</span>
                      {item.badge && (
                        <span className="px-1.5 py-0.5 text-[9px] font-bold bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded uppercase tracking-wider shadow-lg shadow-emerald-500/30">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <ChevronDown
                      size={16}
                      className="text-purple-400 opacity-0 group-hover:opacity-100 -rotate-90 group-hover:translate-x-1 transition-all duration-300"
                    />
                  </a>
                </li>
              ))}
            </ul>

            {/* Enhanced Mobile CTA buttons */}
            <div className="flex flex-col gap-2 mt-4 px-4">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg text-base font-medium transition-all duration-300 border border-white/10 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 group">
                <LogIn
                  size={18}
                  className="group-hover:rotate-12 transition-transform duration-300"
                />
                <span>Login</span>
              </button>

              <button className="w-full relative flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white text-base font-semibold shadow-xl shadow-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/60 hover:scale-105 transition-all duration-500 group overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Sparkles
                  size={18}
                  className="relative z-10 group-hover:rotate-180 transition-transform duration-700"
                />
                <span className="relative z-10">Get Started</span>
                <ChevronDown
                  size={18}
                  className="relative z-10 group-hover:translate-y-1 transition-transform duration-300"
                />
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Enhanced bottom gradient line */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-px transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="h-full bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent blur-sm"></div>
      </div>
    </header>
  );
};

export default Header;
