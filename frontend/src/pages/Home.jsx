import { useState } from "react";

import {
  FaBalanceScale,
  FaRobot,
  FaFileAlt,
  FaChartLine,
  FaStar,
  FaSearch,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {

  const navigate = useNavigate();
  const [caseId, setCaseId] = useState("");
  const services = [
    {
      title: "Find Lawyers",
      description:
        "Search top lawyers by specialization, ratings, and experience.",
      icon: <FaBalanceScale />,
    },

    {
      title: "Legal Documents",
      description:
        "Access NDA templates, agreements, affidavits, and contracts.",
      icon: <FaFileAlt />,
    },

    {
      title: "AI Legal Help",
      description:
        "AI assistant for legal guidance, formatting, and support.",
      icon: <FaRobot />,
    },

    {
      title: "Court Analytics",
      description:
        "Real-time courtroom analytics and legal insights.",
      icon: <FaChartLine />,
    },
  ];

  const lawyers = [
    {
      id: 101,
      name: "Adv. Michael Reed",
      specialization: "Criminal Law",
      experience:
        "15+ years experience handling high-profile criminal cases.",
      initials: "MR",
      rating: "5.0",
      color: "bg-blue-500",
    },

    {
      id: 102,
      name: "Adv. Emma Wilson",
      specialization: "Corporate Law",
      experience:
        "Corporate mergers, agreements, and business legal advisory.",
      initials: "EW",
      rating: "4.9",
      color: "bg-cyan-500",
    },

    {
      id : 103,
      name: "Adv. Daniel Ross",
      specialization: "Family Law",
      experience:
        "Specialized in family disputes, settlements, and mediation.",
      initials: "DR",
      rating: "4.8",
      color: "bg-yellow-500",
    },
  ];

  const testimonials = [
    {
      name: "Olivia Carter",
      review:
        "JURIS transformed our legal operations completely. The AI assistant saves hours every week.",
    },

    {
      name: "Robert James",
      review:
        "The platform is modern, secure, and extremely easy to use for case tracking.",
    },

    {
      name: "Sophia Miller",
      review:
        "Best legal management platform we’ve used so far. Highly recommended.",
    },
  ];

  const features = [
    "AI Legal Assistant",
    "Secure Document Storage",
    "Real-Time Hearings",
    "Role-Based Dashboards",
  ];

  return (
    <div className="bg-[#020617] text-white overflow-hidden">

      {/* FLOATING BACKGROUND */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">

        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      </div>

      {/* NAVBAR */}

      <Navbar />

      {/* HERO SECTION */}
      <section
  id="home"
  className="max-w-[1350px] mx-auto px-8 py-20 grid lg:grid-cols-2 gap-10 items-center"
>

        {/* LEFT */}
        <div className="max-w-2xl">

          <p className="text-blue-400 text-lg mb-6 font-medium tracking-wide">
            AI Powered Legal Ecosystem
          </p>

          <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-8">

            Smart Legal

            <span className="block text-blue-400">
              Management
            </span>

            Platform

          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Premium legal technology platform for lawyers, judges,
            and clients with real-time case tracking, AI legal
            assistance, courtroom analytics, and secure legal
            document management.
          </p>

          <div className="flex flex-wrap gap-5 mb-14">
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-500 hover:bg-blue-600 hover:scale-105 transition duration-300 px-8 py-3 rounded-2xl text-lg font-semibold shadow-xl shadow-blue-500/20"
          >
            Get Legal Help
          </button>

          <button className="border border-white/10 hover:border-blue-500 hover:bg-white/5 transition duration-300 px-8 py-3 rounded-2xl text-lg font-semibold"
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Services
          </button>

          </div>

          {/* STATS */}
          <div className="flex flex-wrap gap-6">

            {[
              {
                number: "25K+",
                label: "Cases Managed",
                icon: "⚖",
                color: "text-blue-400",
              },

              {
                number: "5K+",
                label: "Lawyers",
                icon: "👨‍⚖️",
                color: "text-cyan-400",
              },

              {
                number: "99%",
                label: "Success Rate",
                icon: "📈",
                color: "text-yellow-400",
              },
            ].map((stat, index) => (

              <div
                key={index}
                className="bg-white/5 border border-white/10 hover:border-blue-500/40 hover:-translate-y-2 transition duration-300 rounded-3xl p-6 w-44 shadow-lg shadow-black/20"
              >

                <div className="text-2xl mb-3">
                  {stat.icon}
                </div>

                <h2 className={`text-4xl font-black mb-2 ${stat.color}`}>
                  {stat.number}
                </h2>

                <p className="text-gray-400 text-lg leading-snug">
                  {stat.label}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* RIGHT TRACKER */}
        <div className="max-w-[620px] ml-auto bg-white/5 border border-white/10 backdrop-blur-xl rounded-[35px] p-8 shadow-2xl shadow-black/30 hover:scale-[1.01] transition duration-500">

          <div className="flex items-center justify-between mb-6">

            <h2 className="text-3xl font-black">
              Public Case Tracker
            </h2>

            <div className="flex gap-2">

              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>

              <div className="w-3 h-3 rounded-full bg-red-400"></div>

            </div>

          </div>

          <p className="text-gray-400 text-lg mb-8">
            Instantly check upcoming hearings and case status
          </p>

          {/* SEARCH */}
          <div className="flex gap-4 mb-10">

            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 flex-1">

              <FaSearch className="text-gray-400 text-lg" />

              <input
                type="text"
                value={caseId}
                onChange={(e) => setCaseId(e.target.value)}
                placeholder="Enter Case ID"
                className="bg-transparent py-4 w-full outline-none text-lg"
              />

            </div>

            <button
            className="bg-blue-500 hover:bg-blue-600 px-8 rounded-2xl text-lg font-semibold"
            onClick={() => {
              if (!caseId.trim()) {
                alert("Please enter Case ID");
                return;
              }

              alert(`Tracking Case ${caseId}`);

              navigate(`/case/${caseId}`)
            }}
          >
            Track
          </button>

          </div>

          {/* TRACK RESULT */}
          <div className="bg-[#0f172a] border border-white/10 rounded-3xl p-6 mb-8">

            <div className="flex items-center justify-between mb-5">

              <div>

                <p className="text-gray-400 text-sm mb-1">
                  Case ID
                </p>

                <h3 className="text-2xl font-bold">
                  #4566131
                </h3>

              </div>

              <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl text-sm font-semibold">
                Active
              </span>

            </div>

            <div className="grid md:grid-cols-2 gap-5 text-lg">

              <div>
                <p className="text-gray-400 mb-1">Court</p>
                <h4>Supreme Court</h4>
              </div>

              <div>
                <p className="text-gray-400 mb-1">Next Hearing</p>
                <h4>20 June 2026</h4>
              </div>

            </div>

          </div>

          {/* PROGRESS */}
          <div className="space-y-8">

            {[
              {
                title: "Case Filing",
                status: "Completed",
                width: "100%",
                color: "bg-blue-500",
                text: "text-blue-400",
              },

              {
                title: "Evidence Review",
                status: "In Progress",
                width: "75%",
                color: "bg-cyan-400",
                text: "text-cyan-400",
              },

              {
                title: "Final Judgment",
                status: "Pending",
                width: "25%",
                color: "bg-yellow-400",
                text: "text-yellow-400",
              },
            ].map((item, index) => (

              <div key={index}>

                <div className="flex justify-between mb-3 text-lg">

                  <p>{item.title}</p>

                  <p className={item.text}>
                    {item.status}
                  </p>

                </div>

                <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">

                  <div
                    className={`${item.color} h-full rounded-full transition-all duration-1000`}
                    style={{ width: item.width }}
                  ></div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="max-w-[1350px] mx-auto px-8 py-20 text-center">

        <div className="w-full h-[1px] bg-white/5 mb-20"></div>

        <p className="text-blue-400 text-lg mb-5">
          PLATFORM FEATURES
        </p>

        <h2 className="text-4xl lg:text-5xl font-black mb-16">
          Why Choose JURIS?
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 hover:border-blue-500/40 hover:-translate-y-2 transition duration-300 rounded-3xl p-8"
            >

              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-3xl mb-6 mx-auto">
                ⚡
              </div>

              <h3 className="text-2xl font-bold">
                {feature}
              </h3>

            </div>

          ))}

        </div>

      </section>

      {/* SERVICES */}
      <section
  id="services"
  className="max-w-[1350px] mx-auto px-8 py-20"
>

        <div className="w-full h-[1px] bg-white/5 mb-20"></div>

        <div className="text-center mb-14">

          <p className="text-blue-400 text-lg mb-5">
            SERVICES
          </p>

          <h2 className="text-4xl lg:text-5xl font-black">
            Complete Legal Solutions
          </h2>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {services.map((service, index) => (

            <div
              key={index}
              className="group bg-white/5 border border-white/10 hover:border-blue-500/40 rounded-[35px] p-8 hover:-translate-y-3 transition duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
            >

              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-3xl mb-8 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition duration-300">

                {service.icon}

              </div>

              <h3 className="text-2xl font-black mb-6 leading-tight">
                {service.title}
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                {service.description}
              </p>

            <button className="text-blue-400 flex items-center gap-3 text-lg font-semibold"
              onClick={() => navigate("/services")}
            >
              Learn More
            </button>

            </div>

          ))}

        </div>

      </section>

      {/* LAWYERS */}
      <section
        id="lawyers"
        className="max-w-[1350px] mx-auto px-8 py-20"
      >

        <div className="w-full h-[1px] bg-white/5 mb-20"></div>

        <div className="text-center mb-14">

          <p className="text-blue-400 text-lg mb-5">
            TOP LAWYERS
          </p>

          <h2 className="text-4xl lg:text-5xl font-black">
            Trusted Legal Experts
          </h2>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {lawyers.map((lawyer, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 hover:border-blue-500/40 rounded-[35px] p-8 hover:scale-[1.03] transition duration-500"
            >

              <div className={`w-20 h-20 rounded-full ${lawyer.color} flex items-center justify-center text-2xl font-black mb-8`}>

                {lawyer.initials}

              </div>

              <div className="flex items-center justify-between mb-4">

                <h3 className="text-2xl font-black leading-tight">
                  {lawyer.name}
                </h3>

                <div className="flex items-center gap-2 text-yellow-400 text-lg">

                  <FaStar />

                  {lawyer.rating}

                </div>
              </div>

              <span className="bg-blue-500/20 text-cyan-400 px-4 py-2 rounded-xl text-sm inline-block mb-6">
                {lawyer.specialization}
              </span>

              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                {lawyer.experience}
              </p>

              <button className="w-full bg-white/5 hover:bg-blue-500 transition duration-300 py-4 rounded-2xl text-lg font-semibold"
                onClick={() => navigate(`/lawyer/${lawyer.id}`)}
              >
                View Profile
              </button>

            </div>

          ))}

        </div>

      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-[1350px] mx-auto px-8 py-20">

        <div className="w-full h-[1px] bg-white/5 mb-20"></div>

        <div className="text-center mb-14">

          <p className="text-blue-400 text-lg mb-5">
            TESTIMONIALS
          </p>

          <h2 className="text-4xl lg:text-5xl font-black mb-5">
            Trusted by 25,000+ Clients
          </h2>

          <p className="text-gray-400 text-lg">
            Hear what professionals say about JURIS.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-blue-500/40 hover:-translate-y-2 transition duration-300"
            >

              <div className="flex gap-2 text-yellow-400 text-lg mb-6">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                “{item.review}”
              </p>

              <h4 className="text-lg font-bold text-blue-400">
                {item.name}
              </h4>

            </div>

          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-[1350px] mx-auto px-8 py-20">

        <div className="w-full h-[1px] bg-white/5 mb-20"></div>

        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/10 border border-blue-500/20 rounded-[40px] p-14 text-center backdrop-blur-xl">

          <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">

            Ready to Modernize

            <span className="block text-blue-400">
              Legal Management?
            </span>

          </h2>

          <p className="text-gray-400 text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of lawyers, judges, and legal teams already using JURIS.
          </p>

          <button className="bg-blue-500 hover:bg-blue-600 hover:scale-105 transition duration-300 px-10 py-4 rounded-3xl text-lg font-bold shadow-2xl shadow-blue-500/20"
            onClick={() => navigate("/signup")}
          >
            Start Now
          </button>

        </div>

      </section>

      {/* FOOTER */}
      <footer
  id="contact"
  className="border-t border-white/10 mt-20"
>

        <div className="max-w-[1350px] mx-auto px-8 py-10 grid md:grid-cols-3 gap-8 items-center">

          {/* LEFT */}
          <div>

            <h2 className="text-2xl font-black mb-3">
              JURIS
            </h2>

            <p className="text-gray-400 text-lg">
              Premium AI Legal Platform
            </p>

          </div>

          {/* LINKS */}
          <div className="flex flex-wrap justify-center gap-8 text-lg text-gray-400">

            <a href="#home" className="hover:text-blue-400 transition">
              Home
            </a>

            <a href="#services" className="hover:text-blue-400 transition">
              Services
            </a>

            <a href="#lawyers" className="hover:text-blue-400 transition">
              Lawyers
            </a>

            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>

          </div>

          {/* RIGHT */}
          <div className="text-right">

            <div className="flex justify-end gap-5 text-lg mb-4">

              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>

              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>

            </div>

            <p className="text-gray-400 text-base mb-1">
              support@juris.ai
            </p>

            <p className="text-gray-500 text-sm">
              © 2026 Juris. All rights reserved.
            </p>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default Home;