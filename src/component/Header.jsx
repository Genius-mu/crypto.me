import { LayoutDashboard, Menu, X, ChevronDown, LogIn } from "lucide-react";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Earn", href: "#earn" },
    { name: "About", href: "#about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-purple-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <LayoutDashboard className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-white text-lg sm:text-xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                CryptoRise
              </h2>
              <span className="text-purple-400 text-[10px] sm:text-xs font-medium -mt-1">
                Trade Smarter
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-1 lg:gap-2">
              {navItems.map((item, idx) => (
                <li key={idx} className="relative group">
                  <a
                    href={item.href}
                    className="px-3 lg:px-4 py-2 text-gray-300 text-sm lg:text-base font-medium hover:text-white transition-colors duration-300 flex items-center gap-1 relative"
                  >
                    {item.name}
                    {/* Animated underline */}
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    {/* Glow effect */}
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Login button - hidden on mobile */}
            <button className="hidden lg:flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white text-sm font-medium transition-colors duration-300 group">
              <LogIn
                size={16}
                className="group-hover:scale-110 transition-transform duration-300"
              />
              <span>Login</span>
            </button>

            {/* CTA button */}
            <button className="hidden md:flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm lg:text-base font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 group relative overflow-hidden">
              <span className="relative z-10">Get Started</span>
              <ChevronDown
                size={16}
                className="relative z-10 group-hover:translate-y-0.5 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="text-white w-5 h-5" />
              ) : (
                <Menu className="text-white w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-4 border-t border-white/10">
            <ul className="flex flex-col gap-2">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 group"
                  >
                    <span className="text-base font-medium">{item.name}</span>
                    <ChevronDown
                      size={16}
                      className="text-purple-400 opacity-0 group-hover:opacity-100 -rotate-90 transition-all duration-300"
                    />
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile CTA buttons */}
            <div className="flex flex-col gap-2 mt-4 px-4">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg text-base font-medium transition-all duration-300">
                <LogIn size={18} />
                <span>Login</span>
              </button>
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white text-base font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300">
                <span>Get Started</span>
                <ChevronDown size={18} />
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent transition-opacity duration-300 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </header>
  );
};

export default Header;
