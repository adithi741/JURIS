import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Navigate } from "react-router-dom";
import AnalyticsChart from "../components/AnalyticsChart";
import { useEffect, useState } from "react";
import axios from "axios";

import {
  FaBalanceScale,
  FaUsers,
  FaGavel,
  FaRobot,
} from "react-icons/fa";

function LawyerDashboard() {
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  if (!token || role !== "Lawyer") {
  return <Navigate to="/login" />;
}

  const [stats, setStats] = useState({
  cases: 0,
  clients: 0,
  hearings: 0,
  documents: 0,
});

    useEffect(() => {

      axios
        .get("http://127.0.0.1:5000/dashboard-stats")
        .then((response) => {
          setStats(response.data);
        })
        .catch((error) => {
          console.log(error);
        });

    }, []);

  const activities = [
    "New evidence uploaded for LC-2026-001",
    "Court hearing scheduled for tomorrow",
    "Client Emma Watson submitted documents",
    "AI generated NDA draft successfully",
  ];

  const hearings = [
    {
      case: "LC-2026-001",
      time: "10:30 AM",
      court: "Courtroom A",
    },

    {
      case: "LC-2026-004",
      time: "01:00 PM",
      court: "Courtroom C",
    },

    {
      case: "LC-2026-009",
      time: "03:45 PM",
      court: "Courtroom B",
    },
  ];

  return (
    <div className="flex bg-[#020617] text-white min-h-screen">
      <Sidebar />
    <div className="flex-1 p-8">
    <Topbar />
        {/* KPI CARDS */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

        {/* CARD 1 */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-blue-500/40 transition group">

            <div className="flex items-center justify-between mb-6">

            <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center text-3xl text-blue-400">

                <FaBalanceScale />

            </div>

            <span className="text-green-400 text-sm">
                +12%
            </span>

            </div>

            <h2 className="text-5xl font-bold text-blue-400 mb-2">
            {stats.cases}
            </h2>

            <p className="text-gray-400">
            Cases
            </p>

        </div>

        {/* CARD 2 */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-cyan-500/40 transition">

            <div className="flex items-center justify-between mb-6">

            <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-3xl text-cyan-400">

                <FaUsers />

            </div>

            <span className="text-green-400 text-sm">
                +8%
            </span>

            </div>

            <h2 className="text-5xl font-bold text-cyan-400 mb-2">
            {stats.clients}
            </h2>

            <p className="text-gray-400">
            Clients
            </p>

        </div>

        {/* CARD 3 */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-green-500/40 transition">

            <div className="flex items-center justify-between mb-6">

            <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center text-3xl text-green-400">

                <FaGavel />

            </div>

            <span className="text-green-400 text-sm">
                +21%
            </span>

            </div>

            <h2 className="text-5xl font-bold text-green-400 mb-2">
            {stats.hearings}
            </h2>

            <p className="text-gray-400">
            Hearings
            </p>

        </div>

        {/* CARD 4 */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-purple-500/40 transition">

            <div className="flex items-center justify-between mb-6">

            <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center text-3xl text-purple-400">

                <FaRobot />

            </div>

            <span className="text-green-400 text-sm">
                +99%
            </span>

            </div>

            <h2 className="text-5xl font-bold text-purple-400 mb-2">
            {stats.documents}
            </h2>

            <p className="text-gray-400">
            Documents
            </p>

        </div>

        </div>

        {/* MAIN GRID */}
        <div className="grid xl:grid-cols-3 gap-6">

          {/* LEFT */}
          <div className="xl:col-span-2 space-y-6">

            {/* CASE PROGRESS */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <div className="flex items-center justify-between mb-8">

                <h2 className="text-3xl font-bold">
                  Case Progress
                </h2>

                <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-xl text-sm font-semibold">
                  Live
                </span>

              </div>

              <div className="space-y-8">

                <div>

                  <div className="flex justify-between mb-3">

                    <span>Case Filing</span>

                    <span className="text-blue-400">
                      Completed
                    </span>

                  </div>

                  <div className="w-full bg-white/10 h-4 rounded-full">

                    <div className="bg-blue-500 h-4 rounded-full w-full"></div>

                  </div>

                </div>

                <div>

                  <div className="flex justify-between mb-3">

                    <span>Evidence Review</span>

                    <span className="text-cyan-400">
                      In Progress
                    </span>

                  </div>

                  <div className="w-full bg-white/10 h-4 rounded-full">

                    <div className="bg-cyan-400 h-4 rounded-full w-3/4"></div>

                  </div>

                </div>

                <div>

                  <div className="flex justify-between mb-3">

                    <span>Final Judgment</span>

                    <span className="text-yellow-400">
                      Pending
                    </span>

                  </div>

                  <div className="w-full bg-white/10 h-4 rounded-full">

                    <div className="bg-yellow-400 h-4 rounded-full w-1/4"></div>

                  </div>

                </div>

              </div>

            </div>

            <AnalyticsChart />
            {/* RECENT ACTIVITY */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <h2 className="text-3xl font-bold mb-8">
                Recent Activity
              </h2>

              <div className="space-y-5">

                {activities.map((activity, index) => (

                  <div
                    key={index}
                    className="bg-white/5 border border-white/5 rounded-2xl px-5 py-4"
                  >

                    {activity}

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* UPCOMING HEARINGS */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <h2 className="text-3xl font-bold mb-8">
                Upcoming Hearings
              </h2>

              <div className="space-y-5">

                {hearings.map((hearing, index) => (

                  <div
                    key={index}
                    className="bg-white/5 border border-white/5 rounded-2xl p-5"
                  >

                    <h3 className="text-xl font-semibold mb-2">
                      {hearing.case}
                    </h3>

                    <p className="text-gray-400">
                      {hearing.time}
                    </p>

                    <p className="text-cyan-400 mt-2">
                      {hearing.court}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* AI INSIGHTS */}
            <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/10 border border-purple-500/20 rounded-3xl p-8">

              <h2 className="text-3xl font-bold mb-6">
                AI Legal Insights
              </h2>

              <p className="text-gray-300 leading-relaxed mb-8">

                AI predicts a high probability of successful
                settlement for LC-2026-004 based on historical
                courtroom analytics.

              </p>

              <button className="w-full bg-purple-500 hover:bg-purple-600 transition py-4 rounded-2xl text-lg font-semibold">

                View AI Analysis

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default LawyerDashboard;