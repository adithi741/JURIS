import Sidebar from "../components/Sidebar";
import { Navigate } from "react-router-dom";
import Topbar from "../components/Topbar";

function ClientDashboard() {
  const role = localStorage.getItem("role");
  if (role !== "Client") {
    return <Navigate to="/login" />;
  }

  const updates = [
    {
      case: "LC-2026-001",
      update: "Hearing scheduled for tomorrow",
      status: "Upcoming",
    },

    {
      case: "LC-2026-004",
      update: "Evidence verified successfully",
      status: "Completed",
    },

    {
      case: "LC-2026-009",
      update: "Lawyer requested additional documents",
      status: "Pending",
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

            <h1 className="text-5xl font-bold text-emerald-400 mb-3">
              Client Dashboard
            </h1>

            <p className="text-gray-400 text-lg">
              Track your cases, hearings, documents, and legal updates.
            </p>

          </div>

          <button className="bg-emerald-500 hover:bg-emerald-600 transition px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg shadow-emerald-500/20 text-black">

            Contact Lawyer

          </button>

        </div>

        {/* ANALYTICS */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <h2 className="text-5xl font-bold text-emerald-400 mb-3">
              4
            </h2>

            <p className="text-gray-400">
              Active Cases
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <h2 className="text-5xl font-bold text-blue-400 mb-3">
              12 Jun
            </h2>

            <p className="text-gray-400">
              Next Hearing
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <h2 className="text-5xl font-bold text-green-400 mb-3">
              18
            </h2>

            <p className="text-gray-400">
              Documents Uploaded
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <h2 className="text-5xl font-bold text-yellow-400 mb-3">
              2
            </h2>

            <p className="text-gray-400">
              Pending Actions
            </p>

          </div>

        </div>

        {/* MAIN GRID */}
        <div className="grid xl:grid-cols-3 gap-6">

          {/* LEFT */}
          <div className="xl:col-span-2 space-y-6">

            {/* CASE TIMELINE */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <div className="flex items-center justify-between mb-8">

                <h2 className="text-3xl font-bold">
                  Case Timeline
                </h2>

                <span className="bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-xl text-sm font-semibold">
                  Live
                </span>

              </div>

              <div className="space-y-8">

                <div>

                  <div className="flex justify-between mb-3">

                    <span>Case Filing</span>

                    <span className="text-green-400">
                      Completed
                    </span>

                  </div>

                  <div className="w-full bg-white/10 h-4 rounded-full">

                    <div className="bg-green-500 h-4 rounded-full w-full"></div>

                  </div>

                </div>

                <div>

                  <div className="flex justify-between mb-3">

                    <span>Evidence Review</span>

                    <span className="text-blue-400">
                      In Progress
                    </span>

                  </div>

                  <div className="w-full bg-white/10 h-4 rounded-full">

                    <div className="bg-blue-500 h-4 rounded-full w-4/5"></div>

                  </div>

                </div>

                <div>

                  <div className="flex justify-between mb-3">

                    <span>Final Verdict</span>

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

            {/* RECENT UPDATES */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <h2 className="text-3xl font-bold mb-8">
                Recent Updates
              </h2>

              <div className="space-y-5">

                {updates.map((item, index) => (

                  <div
                    key={index}
                    className="bg-white/5 border border-white/5 rounded-2xl p-5"
                  >

                    <div className="flex items-center justify-between mb-3">

                      <h3 className="text-xl font-semibold">
                        {item.case}
                      </h3>

                      <span className={`px-4 py-2 rounded-xl text-sm font-semibold
                        
                        ${
                          item.status === "Upcoming"
                            ? "bg-blue-500/20 text-blue-400"
                            : item.status === "Completed"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }
                      
                      `}>

                        {item.status}

                      </span>

                    </div>

                    <p className="text-gray-400">
                      {item.update}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* LAWYER INFO */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <h2 className="text-3xl font-bold mb-8">
                Assigned Lawyer
              </h2>

              <div className="flex items-center gap-5 mb-6">

                <div className="w-20 h-20 rounded-full bg-emerald-500"></div>

                <div>

                  <h3 className="text-2xl font-semibold">
                    Adv. Sarah Johnson
                  </h3>

                  <p className="text-gray-400">
                    Corporate Lawyer
                  </p>

                </div>

              </div>

              <div className="space-y-4 text-gray-400">

                <p>
                  Email: sarah@juris.ai
                </p>

                <p>
                  Phone: +1 234 567 890
                </p>

                <p>
                  Experience: 12 Years
                </p>

              </div>

              <button className="mt-8 w-full bg-emerald-500 hover:bg-emerald-600 transition py-4 rounded-2xl text-lg font-semibold text-black">

                Message Lawyer

              </button>

            </div>

            {/* BILLING */}
            <div className="bg-gradient-to-br from-emerald-500/20 to-blue-500/10 border border-emerald-500/20 rounded-3xl p-8">

              <h2 className="text-3xl font-bold mb-6">
                Billing Summary
              </h2>

              <p className="text-gray-300 leading-relaxed mb-8">

                Your next legal consultation payment
                is scheduled for 18 Jun 2026.

              </p>

              <button className="w-full bg-emerald-500 hover:bg-emerald-600 transition py-4 rounded-2xl text-lg font-semibold text-black">

                View Payments

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default ClientDashboard;