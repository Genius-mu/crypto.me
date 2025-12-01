import React, { useState, useEffect } from "react";
import {
  Building2,
  Target,
  Users,
  Shield,
  Globe,
  Award,
  TrendingUp,
  Heart,
  ArrowRight,
  CheckCircle,
  Star,
  Sparkles,
  Zap,
  Lock,
  Coins,
  Rocket,
  Trophy,
} from "lucide-react";

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { value: "500K+", label: "Active Users", icon: Users },
    { value: "50+", label: "Countries", icon: Globe },
    { value: "$2.4B+", label: "Assets Secured", icon: Shield },
    { value: "24/7", label: "Support", icon: Heart },
  ];

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description:
        "Your assets are protected with military-grade encryption and multi-layer security protocols.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Target,
      title: "Transparency",
      description:
        "No hidden fees, clear rates, and open communication about our processes.",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: Users,
      title: "Community Driven",
      description:
        "Built for and with our community. Your success is our success.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description:
        "Constantly evolving to bring you the most advanced earning opportunities.",
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  const team = [
    {
      name: "Mustapha Adegbite",
      role: "CEO & Founder",
      bio: "10+ years in blockchain technology and fintech innovation.",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      name: "Idris Abubakar",
      role: "CTO",
      bio: "Former lead engineer at major crypto exchange, security expert.",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      name: "Ronaldo Mozkoh",
      role: "Head of Finance",
      bio: "Wall Street veteran with deep expertise in digital assets.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Jamie Gandoki",
      role: "Community Lead",
      bio: "Building communities in crypto since 2016.",
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  const milestones = [
    {
      year: "2018",
      event: "CryptoRise Founded",
      description: "Started with a vision to make crypto earning accessible",
    },
    {
      year: "2019",
      event: "First Staking Product",
      description: "Launched our first staking platform with 3 assets",
    },
    {
      year: "2020",
      event: "Reached 100K Users",
      description: "Community growth exceeded expectations",
    },
    {
      year: "2021",
      event: "$1B TVL Milestone",
      description: "Total value locked crossed $1 billion",
    },
    {
      year: "2022",
      event: "Global Expansion",
      description: "Expanded services to 50+ countries",
    },
    {
      year: "2023",
      event: "Advanced Security",
      description: "Implemented institutional-grade security measures",
    },
  ];

  return (
    <div className="w-full bg-black">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black py-32 px-4">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto text-center space-y-8">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full backdrop-blur-xl transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            <Building2 className="text-blue-400" size={16} />
            <span className="text-blue-400 text-sm font-medium">
              Trusted Since 2018
            </span>
          </div>

          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight transition-all duration-1000 delay-150 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Building the Future of{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Crypto Wealth
            </span>
          </h1>

          <p
            className={`text-gray-400 text-lg md:text-xl max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            CryptoRise is revolutionizing how people earn passive income from
            their cryptocurrency holdings. We combine cutting-edge technology
            with user-friendly design to make crypto earning accessible to
            everyone.
          </p>

          {/* Stats */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-450 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl"
                >
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <Icon className="text-blue-400" size={20} />
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              );
            })}
          </div>

          <div
            className={`transition-all duration-1000 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 mx-auto">
              Join Our Community
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative w-full py-24 px-4 bg-black">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                <Target className="text-emerald-400" size={16} />
                <span className="text-emerald-400 text-sm font-medium">
                  Our Mission
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Democratizing{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Crypto Wealth
                </span>
              </h2>
              <p className="text-gray-400 text-lg">
                We believe that everyone should have access to the
                wealth-building potential of cryptocurrency. Our mission is to
                remove barriers and make earning passive income from crypto
                simple, secure, and accessible to people around the world.
              </p>
              <div className="space-y-4">
                {[
                  "No minimum investment requirements",
                  "User-friendly interface for beginners",
                  "Educational resources for all skill levels",
                  "24/7 customer support",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="text-emerald-400" size={20} />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <Globe className="text-white" size={32} />
                    </div>
                    <div>
                      <h3 className="text-white text-2xl font-bold">
                        Our Vision
                      </h3>
                      <p className="text-blue-400">
                        Creating a more inclusive financial future
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-400">
                    We envision a world where geographical and financial
                    barriers no longer limit people's ability to build wealth.
                    Through cryptocurrency and decentralized finance, we're
                    building tools that empower individuals to take control of
                    their financial future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="relative w-full py-24 px-4 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="w-full max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full">
              <Award className="text-purple-400" size={16} />
              <span className="text-purple-400 text-sm font-medium">
                Our Core Values
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              What We Stand For
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              These principles guide everything we do at CryptoRise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              const isHovered = hoveredCard === idx;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all duration-500 cursor-pointer"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                  ></div>

                  <div className="relative space-y-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                        value.gradient
                      } flex items-center justify-center transition-all duration-500 ${
                        isHovered ? "scale-110 rotate-6" : ""
                      }`}
                    >
                      <Icon className="text-white" size={32} />
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-white text-xl font-bold">
                        {value.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative w-full py-24 px-4 bg-black">
        <div className="w-full max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Our Journey
            </h2>
            <p className="text-gray-400 text-lg">
              From humble beginnings to industry leader
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500"></div>

            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <div
                  key={idx}
                  className={`relative flex items-center ${
                    idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className={`w-1/2 ${idx % 2 === 0 ? "pr-12" : "pl-12"}`}>
                    <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all duration-300">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full mb-4">
                        <span className="text-blue-400 text-sm font-bold">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="text-white text-xl font-bold mb-2">
                        {milestone.event}
                      </h3>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-black"></div>

                  {/* Year indicator on opposite side */}
                  <div className={`w-1/2 ${idx % 2 === 0 ? "pl-12" : "pr-12"}`}>
                    <div className="text-center">
                      <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {milestone.year}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative w-full py-24 px-4 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="w-full max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full">
              <Users className="text-pink-400" size={16} />
              <span className="text-pink-400 text-sm font-medium">
                Meet The Team
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              The Minds Behind CryptoRise
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A diverse team of experts passionate about revolutionizing finance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="group relative p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-pink-500/50 transition-all duration-300"
              >
                <div className="space-y-6">
                  <div className="relative">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.gradient} mb-4`}
                    ></div>
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Trophy className="text-white" size={20} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-white text-xl font-bold">
                      {member.name}
                    </h3>
                    <p className="text-pink-400 font-medium">{member.role}</p>
                    <p className="text-gray-400 text-sm">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-24 px-4 bg-black">
        <div className="w-full max-w-5xl mx-auto">
          <div className="relative p-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]"></div>

            <div className="relative z-10 text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-xl rounded-full">
                <Sparkles className="text-white" size={16} />
                <span className="text-white text-sm font-medium">
                  Join Our Mission
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to Be Part of the Revolution?
              </h2>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                Join half a million users who trust CryptoRise with their crypto
                earnings. Start your journey to financial freedom today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                  Start Earning Today
                  <ArrowRight size={20} />
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
