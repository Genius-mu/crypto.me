import React, { useState, useEffect } from "react";
import {
  Shield,
  Zap,
  TrendingUp,
  Lock,
  BarChart3,
  Users,
  Wallet,
  Globe,
  Smartphone,
  Clock,
  Award,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Code,
  Headphones,
} from "lucide-react";

const FeaturesPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const mainFeatures = [
    {
      icon: Shield,
      title: "Military-Grade Security",
      description:
        "Multi-layer encryption, cold storage, and 2FA to keep your assets safe 24/7.",
      gradient: "from-blue-500 to-cyan-500",
      stats: "99.99% Secure",
    },
    {
      icon: Zap,
      title: "Lightning Fast Execution",
      description:
        "Execute trades in milliseconds with our high-performance matching engine.",
      gradient: "from-yellow-500 to-orange-500",
      stats: "0.1s Avg",
    },
    {
      icon: TrendingUp,
      title: "Advanced Analytics",
      description:
        "Real-time charts, technical indicators, and AI-powered market insights.",
      gradient: "from-purple-500 to-pink-500",
      stats: "50+ Tools",
    },
    {
      icon: Wallet,
      title: "Multi-Asset Support",
      description:
        "Trade 500+ cryptocurrencies including Bitcoin, Ethereum, and altcoins.",
      gradient: "from-emerald-500 to-teal-500",
      stats: "500+ Coins",
    },
  ];

  const tradingFeatures = [
    {
      icon: BarChart3,
      title: "Professional Trading Tools",
      description:
        "Advanced charting with 100+ indicators, drawing tools, and custom layouts.",
    },
    {
      icon: Code,
      title: "API Integration",
      description:
        "Connect your trading bots and algorithms with our robust REST & WebSocket API.",
    },
    {
      icon: Clock,
      title: "24/7 Trading",
      description:
        "Markets never sleep, and neither do we. Trade anytime, anywhere.",
    },
    {
      icon: Users,
      title: "Copy Trading",
      description:
        "Follow and copy trades from top performers in our community.",
    },
  ];

  const securityFeatures = [
    {
      icon: Lock,
      title: "Cold Storage",
      description: "95% of funds stored offline in secure vaults.",
    },
    {
      icon: Shield,
      title: "Insurance Protection",
      description: "Your assets protected by industry-leading insurance.",
    },
    {
      icon: CheckCircle,
      title: "Regulatory Compliance",
      description: "Fully licensed and compliant in 50+ countries.",
    },
    {
      icon: Award,
      title: "SOC 2 Certified",
      description: "Independently audited security standards.",
    },
  ];

  const supportFeatures = [
    {
      icon: Headphones,
      title: "24/7 Live Support",
      description: "Expert support team available around the clock.",
    },
    {
      icon: Globe,
      title: "Multi-Language",
      description: "Platform available in 30+ languages.",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Full-featured iOS and Android apps.",
    },
    {
      icon: Award,
      title: "Education Center",
      description: "Free courses, tutorials, and market analysis.",
    },
  ];

  const tabs = ["Trading", "Security", "Support"];

  const getTabFeatures = (index) => {
    switch (index) {
      case 0:
        return tradingFeatures;
      case 1:
        return securityFeatures;
      case 2:
        return supportFeatures;
      default:
        return tradingFeatures;
    }
  };

  return (
    <div className="w-full bg-black">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black py-32 px-4">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600 rounded-full filter blur-3xl opacity-20 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto text-center space-y-8">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full backdrop-blur-xl transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            <Sparkles className="text-purple-400" size={16} />
            <span className="text-purple-400 text-sm font-medium">
              Everything You Need to Succeed
            </span>
          </div>

          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight transition-all duration-1000 delay-150 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Modern Traders
            </span>
          </h1>

          <p
            className={`text-gray-400 text-lg md:text-xl max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Experience the most advanced cryptocurrency trading platform with
            institutional-grade tools, bank-level security, and lightning-fast
            execution.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-450 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              Start Trading Now
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300">
              View Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="relative w-full py-24 px-4 bg-black">
        <div className="w-full max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Core Features
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Built for traders who demand the best
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              const isHovered = hoveredFeature === idx;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredFeature(idx)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  className="group relative p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-purple-500/50 hover:scale-105 transition-all duration-500 cursor-pointer"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                  ></div>

                  <div className="relative space-y-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                        feature.gradient
                      } flex items-center justify-center transition-all duration-500 ${
                        isHovered ? "scale-110 rotate-6" : ""
                      }`}
                    >
                      <Icon className="text-white" size={32} />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-white text-xl font-bold">
                          {feature.title}
                        </h3>
                        <span className="text-purple-400 text-xs font-bold px-2 py-1 bg-purple-500/20 rounded-full">
                          {feature.stats}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tabbed Features Section */}
      <section className="relative w-full py-24 px-4 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="w-full max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Explore More Features
            </h2>
            <p className="text-gray-400 text-lg">
              Dive deeper into what makes CryptoRise special
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center">
            <div className="inline-flex flex-wrap justify-center p-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl gap-2">
              {tabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === idx
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {getTabFeatures(activeTab).map((feature, idx) => {
              const Icon = feature.icon;

              return (
                <div
                  key={idx}
                  className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <Icon className="text-white" size={24} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-white text-lg font-bold">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-24 px-4 bg-black">
        <div className="w-full max-w-5xl mx-auto">
          <div className="relative p-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]"></div>

            <div className="relative z-10 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to Start Trading?
              </h2>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                Join over 500,000 traders worldwide and experience the future of
                cryptocurrency trading
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                  Create Free Account
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
