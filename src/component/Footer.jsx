import React, { useState } from "react";
import {
  LayoutDashboard,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Send,
  ChevronRight,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const handleSubscribe = () => {
    if (email) {
      console.log("Subscribed:", email);
      setEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    Product: [
      { name: "Features", href: "#features" },
      { name: "Trading", href: "#trading" },
      { name: "Wallet", href: "#wallet" },
      { name: "Exchange", href: "#exchange" },
      { name: "Pricing", href: "#pricing" },
    ],
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Press Kit", href: "#press" },
      { name: "Blog", href: "#blog" },
      { name: "Partners", href: "#partners" },
    ],
    Resources: [
      { name: "Help Center", href: "#help" },
      { name: "API Docs", href: "#api" },
      { name: "Tutorials", href: "#tutorials" },
      { name: "Community", href: "#community" },
      { name: "Status", href: "#status" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "Disclaimer", href: "#disclaimer" },
      { name: "Licenses", href: "#licenses" },
    ],
  };

  const socialLinks = [
    {
      icon: Twitter,
      href: "https://x.com/mustaphAdegbite",
      label: "Twitter",
      color: "hover:text-blue-400",
    },
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
      color: "hover:text-blue-600",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/genius_mu01/",
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mustaphaaadegbite/",
      label: "LinkedIn",
      color: "hover:text-blue-500",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@mustapha_adegbite",
      label: "YouTube",
      color: "hover:text-red-500",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "support@cryptorise.com",
      href: "mailto:adegbitemustapha73@gmail.com",
    },
    { icon: Phone, text: "+234 8020666256", href: "tel:+2348020666256" },
    { icon: MapPin, text: "Abule-Egba, Lagos, Nigeria", href: "#" },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-b from-gray-900 via-black to-black overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Brand section - spans 4 columns on large screens */}
            <div className="lg:col-span-4 space-y-6">
              {/* Logo */}
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                    <LayoutDashboard className="text-white w-6 h-6" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-white text-xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                    CryptoRise
                  </h2>
                  <span className="text-purple-400 text-xs font-medium -mt-1">
                    Trade Smarter
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                The world's leading cryptocurrency trading platform. Trade with
                confidence using advanced tools, institutional-grade security,
                and 24/7 support.
              </p>

              {/* Newsletter */}
              <div className="space-y-3">
                <h3 className="text-white text-sm font-semibold">
                  Stay Updated
                </h3>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSubscribe()}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 pr-12 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300"
                  />
                  <button
                    onClick={handleSubscribe}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  >
                    <Send size={16} className="text-white" />
                  </button>
                </div>
              </div>

              {/* Contact info */}
              <div className="space-y-2">
                {contactInfo.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      className="flex items-center gap-2 text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300 group"
                    >
                      <Icon
                        size={16}
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                      <span>{item.text}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Links sections - span 8 columns on large screens */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title} className="space-y-4">
                  <h3 className="text-white text-base font-semibold">
                    {title}
                  </h3>
                  <ul className="space-y-2">
                    {links.map((link, idx) => (
                      <li key={idx}>
                        <a
                          href={link.href}
                          className="flex items-center gap-1 text-gray-400 hover:text-white text-sm transition-all duration-300 group"
                        >
                          <ChevronRight
                            size={14}
                            className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-purple-400"
                          />
                          <span>{link.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                const isHovered = hoveredSocial === idx;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    onMouseEnter={() => setHoveredSocial(idx)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    className={`w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 ${
                      social.color
                    } hover:border-purple-500/50 transition-all duration-300 ${
                      isHovered ? "scale-110" : ""
                    }`}
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} CryptoRise. All rights reserved.
            </p>

            {/* Trust badges */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-400 text-xs">Secure</span>
              </div>
              <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg">
                <span className="text-gray-400 text-xs">SSL Protected</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient line */}
        <div className="h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600"></div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50 hover:scale-110 transition-all duration-300 z-50 group"
        aria-label="Scroll to top"
      >
        <ArrowUp
          size={20}
          className="text-white group-hover:-translate-y-1 transition-transform duration-300"
        />
      </button>
    </footer>
  );
};

export default Footer;
