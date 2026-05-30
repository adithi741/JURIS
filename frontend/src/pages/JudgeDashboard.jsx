import Sidebar from "../components/Sidebar";
import { Navigate } from "react-router-dom";
import Topbar from "../components/Topbar";

function JudgeDashboard() {
  const role = localStorage.getItem("role");
  if (role !== "Judge") {
    return <Navigate to="/login" />;
  }

  const hearings = [
    {
      case: "LC-2026-011",
      lawyer: "Adv. Sarah Johnson",
      time: "10:00 AM",
      status: "Pending",
    },

    {
      case: "LC-2026-018",
      lawyer: "Adv. Michael Reed",
      time: "12:30 PM",
      status: "Reviewed",
    },

    {
      case: "LC-2026-024",
      lawyer: "Adv. Emma Watson",
      time: "03:00 PM",
      status: "Urgent",
    },
  ];

  return (

    <div className="flex bg-[#020617] text-white min-h-screen">
      <Topbar />
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="flex-1 p-8">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

          <div>

            <h1 className="text-5xl font-bold text-cyan-400 mb-3">
              Judge Dashboard
            </h1>

            <p className="text-gray-400 text-lg">
              Monitor hearings, review cases, and manage courtroom activity.
            </p>

          </div>

          <button className="bg-cyan-500 hover:bg-cyan-600 transition px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg shadow-cyan-500/20 text-black">

            + Schedule Hearing

          </button>

        </div>

        {/* ANALYTICS */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <h2 className="text-5xl font-bold text-cyan-400 mb-3">
              48
            </h2>

            <p className="text-gray-400">
              Hearings Today
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <h2 className="text-5xl font-bold text-blue-400 mb-3">
              126
            </h2>

            <p className="text-gray-400">
              Active Cases
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <h2 className="text-5xl font-bold text-green-400 mb-3">
              92%
            </h2>

            <p className="text-gray-400">
              Approval Rate
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <h2 className="text-5xl font-bold text-red-400 mb-3">
              6
            </h2>

            <p className="text-gray-400">
              Urgent Reviews
            </p>

          </div>

        </div>

        {/* MAIN GRID */}
        <div className="grid xl:grid-cols-3 gap-6">

          {/* LEFT */}
          <div className="xl:col-span-2 space-y-6">

            {/* COURTROOM STATUS */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <div className="flex items-center justify-between mb-8">

                <h2 className="text-3xl font-bold">
                  Courtroom Activity
                </h2>

                <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-xl text-sm font-semibold">
                  Live
                </span>

              </div>

              <div className="space-y-8">

                <div>

                  <div className="flex justify-between mb-3">

                    <span>Evidence Verification</span>

                    <span className="text-cyan-400">
                      Ongoing
                    </span>

                  </div>

                  <div className="w-full bg-white/10 h-4 rounded-full">

                    <div className="bg-cyan-400 h-4 rounded-full w-4/5"></div>

                  </div>

                </div>

                <div>

                  <div className="flex justify-between mb-3">

                    <span>Judgment Review</span>

                    <span className="text-blue-400">
                      In Progress
                    </span>

                  </div>

                  <div className="w-full bg-white/10 h-4 rounded-full">

                    <div className="bg-blue-500 h-4 rounded-full w-3/5"></div>

                  </div>

                </div>

                <div>

                  <div className="flex justify-between mb-3">

                    <span>Case Approvals</span>

                    <span className="text-green-400">
                      Completed
                    </span>

                  </div>

                  <div className="w-full bg-white/10 h-4 rounded-full">

                    <div className="bg-green-500 h-4 rounded-full w-full"></div>

                  </div>

                </div>

              </div>

            </div>

            {/* PENDING VERDICTS */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <h2 className="text-3xl font-bold mb-8">
                Pending Verdicts
              </h2>

              <div className="space-y-5">

                <div className="bg-white/5 border border-white/5 rounded-2xl p-5">

                  <h3 className="text-2xl font-semibold mb-2">
                    LC-2026-041
                  </h3>

                  <p className="text-gray-400">
                    Property dispute awaiting final approval.
                  </p>

                </div>

                <div className="bg-white/5 border border-white/5 rounded-2xl p-5">

                  <h3 className="text-2xl font-semibold mb-2">
                    LC-2026-052
                  </h3>

                  <p className="text-gray-400">
                    Criminal evidence under judicial review.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* TODAY HEARINGS */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <h2 className="text-3xl font-bold mb-8">
                Today's Hearings
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
                      {hearing.lawyer}
                    </p>

                    <p className="text-cyan-400 mt-2">
                      {hearing.time}
                    </p>

                    <span className={`inline-block mt-4 px-4 py-2 rounded-xl text-sm font-semibold
                      
                      ${
                        hearing.status === "Pending"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : hearing.status === "Reviewed"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }
                    
                    `}>

                      {hearing.status}

                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* AI ASSIST */}
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-8">

              <h2 className="text-3xl font-bold mb-6">
                AI Court Insights
              </h2>

              <p className="text-gray-300 leading-relaxed mb-8">

                AI recommends prioritizing urgent evidence review
                for LC-2026-024 due to high-risk legal indicators.

              </p>

              <button className="w-full bg-cyan-500 hover:bg-cyan-600 transition py-4 rounded-2xl text-lg font-semibold text-black">

                View Analysis

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default JudgeDashboard;