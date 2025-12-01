import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  Coins,
  Percent,
  Zap,
  Lock,
  Users,
  Gift,
  ArrowRight,
  Sparkles,
  DollarSign,
  PiggyBank,
  Trophy,
  Star,
  CheckCircle,
  BarChart3,
  Clock,
  Shield,
} from "lucide-react";

const EarnPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const earnMethods = [
    {
      icon: Percent,
      title: "Staking",
      description: "Lock your crypto and earn passive rewards",
      apy: "Up to 25% APY",
      gradient: "from-blue-500 to-cyan-500",
      features: ["Flexible terms", "Auto-compound", "No hidden fees"],
    },
    {
      icon: Coins,
      title: "Savings",
      description: "Grow your crypto with high-yield savings",
      apy: "Up to 12% APY",
      gradient: "from-emerald-500 to-teal-500",
      features: ["Daily interest", "Instant withdrawal", "No minimum"],
    },
    {
      icon: Users,
      title: "Referral Program",
      description: "Earn commissions by inviting friends",
      apy: "Up to 40% commission",
      gradient: "from-purple-500 to-pink-500",
      features: ["Lifetime rewards", "Multi-tier bonuses", "Track referrals"],
    },
    {
      icon: Gift,
      title: "Learn & Earn",
      description: "Complete tutorials and earn crypto rewards",
      apy: "Free crypto",
      gradient: "from-yellow-500 to-orange-500",
      features: ["Educational content", "Instant rewards", "Beginner friendly"],
    },
  ];

  const stakingPlans = [
    {
      name: "Flexible",
      duration: "No lock period",
      apy: "5%",
      minimum: "10 USDT",
      recommended: false,
    },
    {
      name: "Standard",
      duration: "30 days",
      apy: "12%",
      minimum: "100 USDT",
      recommended: true,
    },
    {
      name: "Premium",
      duration: "90 days",
      apy: "18%",
      minimum: "500 USDT",
      recommended: false,
    },
    {
      name: "Elite",
      duration: "180 days",
      apy: "25%",
      minimum: "1,000 USDT",
      recommended: false,
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Secure & Insured",
      description:
        "Your staked assets are protected with industry-leading security",
    },
    {
      icon: Zap,
      title: "Instant Deposits",
      description: "Start earning immediately after depositing your crypto",
    },
    {
      icon: Clock,
      title: "Daily Rewards",
      description: "Receive your earnings daily, automatically compounded",
    },
    {
      icon: BarChart3,
      title: "Transparent Rates",
      description: "No hidden fees, clear APY rates on all products",
    },
  ];

  const topCoins = [
    { name: "Bitcoin", symbol: "BTC", apy: "5.5%", icon: "₿" },
    { name: "Ethereum", symbol: "ETH", apy: "8.2%", icon: "Ξ" },
    { name: "USDT", symbol: "USDT", apy: "12.0%", icon: "$" },
    { name: "BNB", symbol: "BNB", apy: "15.5%", icon: "B" },
    { name: "Solana", symbol: "SOL", apy: "18.0%", icon: "S" },
    { name: "Cardano", symbol: "ADA", apy: "10.5%", icon: "A" },
  ];

  return (
    <div className="w-full bg-black">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black py-32 px-4">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600 rounded-full filter blur-3xl opacity-20 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto text-center space-y-8">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full backdrop-blur-xl transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            <TrendingUp className="text-emerald-400" size={16} />
            <span className="text-emerald-400 text-sm font-medium">
              Earn Passive Income on Your Crypto
            </span>
          </div>

          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight transition-all duration-1000 delay-150 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Make Your Crypto{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Work for You
            </span>
          </h1>

          <p
            className={`text-gray-400 text-lg md:text-xl max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Earn up to 25% APY on your cryptocurrency holdings through staking,
            savings, and rewards programs. No trading required.
          </p>

          {/* Quick Stats */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-450 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {[
              { value: "$2.4B+", label: "Total Value Locked" },
              { value: "500K+", label: "Active Earners" },
              { value: "25%", label: "Max APY" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              Start Earning Now
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-emerald-500/50 transition-all duration-300">
              Calculate Earnings
            </button>
          </div>
        </div>
      </section>

      {/* Earn Methods */}
      <section className="relative w-full py-24 px-4 bg-black">
        <div className="w-full max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Multiple Ways to Earn
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose the earning method that fits your goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {earnMethods.map((method, idx) => {
              const Icon = method.icon;
              const isHovered = hoveredCard === idx;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-emerald-500/50 hover:scale-105 transition-all duration-500 cursor-pointer"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                  ></div>

                  <div className="relative space-y-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                        method.gradient
                      } flex items-center justify-center transition-all duration-500 ${
                        isHovered ? "scale-110 rotate-6" : ""
                      }`}
                    >
                      <Icon className="text-white" size={32} />
                    </div>

                    <div className="space-y-3">
                      <div className="space-y-1">
                        <h3 className="text-white text-xl font-bold">
                          {method.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {method.description}
                        </p>
                      </div>

                      <div className="py-2 px-3 bg-emerald-500/20 border border-emerald-500/30 rounded-lg">
                        <span className="text-emerald-400 font-bold text-sm">
                          {method.apy}
                        </span>
                      </div>

                      <ul className="space-y-2">
                        {method.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-gray-400 text-xs"
                          >
                            <CheckCircle
                              size={14}
                              className="text-emerald-400"
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Staking Plans */}
      <section className="relative w-full py-24 px-4 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="w-full max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Staking Plans
            </h2>
            <p className="text-gray-400 text-lg">
              Lock your crypto and earn guaranteed returns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stakingPlans.map((plan, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedPlan(idx)}
                className={`relative p-8 bg-white/5 backdrop-blur-xl border rounded-2xl cursor-pointer transition-all duration-500 ${
                  selectedPlan === idx
                    ? "border-emerald-500 scale-105 shadow-2xl shadow-emerald-500/20"
                    : "border-white/10 hover:border-emerald-500/50"
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full">
                    <span className="text-white text-xs font-bold flex items-center gap-1">
                      <Star size={12} fill="currentColor" />
                      Recommended
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-white text-2xl font-bold">
                      {plan.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{plan.duration}</p>
                  </div>

                  <div className="space-y-1">
                    <div className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                      {plan.apy}
                    </div>
                    <p className="text-gray-400 text-sm">Annual APY</p>
                  </div>

                  <div className="pt-4 border-t border-white/10 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Minimum</span>
                      <span className="text-white font-semibold">
                        {plan.minimum}
                      </span>
                    </div>
                    <button
                      className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                        selectedPlan === idx
                          ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg"
                          : "bg-white/5 text-gray-400 hover:bg-white/10"
                      }`}
                    >
                      {selectedPlan === idx ? "Selected" : "Select Plan"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Earning Coins */}
      <section className="relative w-full py-24 px-4 bg-black">
        <div className="w-full max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Top Earning Assets
            </h2>
            <p className="text-gray-400 text-lg">
              Start earning on popular cryptocurrencies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topCoins.map((coin, idx) => (
              <div
                key={idx}
                className="group p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-emerald-500/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white text-xl font-bold">
                      {coin.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-bold">{coin.name}</h3>
                      <p className="text-gray-400 text-sm">{coin.symbol}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-emerald-400 font-bold text-lg">
                      {coin.apy}
                    </div>
                    <p className="text-gray-400 text-xs">APY</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative w-full py-24 px-4 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="w-full max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Why Earn with CryptoRise?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl hover:border-emerald-500/50 transition-all duration-300 space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                    <Icon className="text-white" size={24} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-white text-lg font-bold">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {benefit.description}
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
          <div className="relative p-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]"></div>

            <div className="relative z-10 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to Start Earning?
              </h2>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                Join thousands of users already earning passive income on their
                crypto holdings
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                  Start Earning Today
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EarnPage;
