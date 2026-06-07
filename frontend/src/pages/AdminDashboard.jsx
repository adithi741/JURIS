import Sidebar from "../components/Sidebar";
import { Navigate } from "react-router-dom";
import Topbar from "../components/Topbar";

function AdminDashboard() {
    const role = localStorage.getItem("role");
    if (role !== "Admin") {
      return <Navigate to="/login" />;
    }

  const users = [
    {
      name: "Adv. Sarah Johnson",
      role: "Lawyer",
      status: "Active",
    },

    {
      name: "Justice Robert",
      role: "Judge",
      status: "Online",
    },

    {
      name: "Emma Watson",
      role: "Client",
      status: "Pending",
    },
  ];

  return (

    <div className="flex bg-[#020617] text-white min-h-screen">

  <Sidebar />

  <div className="flex-1 p-8">

    <Topbar />

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

          <div>

            <h1 className="text-5xl font-bold text-purple-400 mb-3">
              Admin Dashboard
            </h1>

            <p className="text-gray-400 text-lg">
              Monitor platform operations, users, and AI legal analytics.
            </p>

          </div>

          <button className="bg-purple-500 hover:bg-purple-600 transition px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg shadow-purple-500/20">

            + Add New User

          </button>

        </div>

        {/* ANALYTICS */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <h2 className="text-5xl font-bold text-purple-400 mb-3">
              2,481
            </h2>

            <p className="text-gray-400">
              Total Users
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <h2 className="text-5xl font-bold text-cyan-400 mb-3">
              184
            </h2>

            <p className="text-gray-400">
              Active Cases
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <h2 className="text-5xl font-bold text-green-400 mb-3">
              98%
            </h2>

            <p className="text-gray-400">
              Server Uptime
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <h2 className="text-5xl font-bold text-red-400 mb-3">
              12
            </h2>

            <p className="text-gray-400">
              Security Alerts
            </p>

          </div>

        </div>

        {/* MAIN GRID */}
        <div className="grid xl:grid-cols-3 gap-6">

          {/* LEFT */}
          <div className="xl:col-span-2 space-y-6">

            {/* PLATFORM STATUS */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <div className="flex items-center justify-between mb-8">

                <h2 className="text-3xl font-bold">
                  Platform Monitoring
                </h2>

                <span className="bg-purple-500/20 text-purple-400 px-4 py-2 rounded-xl text-sm font-semibold">
                  Live
                </span>

              </div>

              <div className="space-y-8">

                <div>

                  <div className="flex justify-between mb-3">

                    <span>AI Processing</span>

                    <span className="text-purple-400">
                      Stable
                    </span>

                  </div>

                  <div className="w-full bg-white/10 h-4 rounded-full">

                    <div className="bg-purple-500 h-4 rounded-full w-[90%]"></div>

                  </div>

                </div>

                <div>

                  <div className="flex justify-between mb-3">

                    <span>Database Health</span>

                    <span className="text-green-400">
                      Excellent
                    </span>

                  </div>

                  <div className="w-full bg-white/10 h-4 rounded-full">

                    <div className="bg-green-500 h-4 rounded-full w-full"></div>

                  </div>

                </div>

                <div>

                  <div className="flex justify-between mb-3">

                    <span>Security Monitoring</span>

                    <span className="text-red-400">
                      Alerts Found
                    </span>

                  </div>

                  <div className="w-full bg-white/10 h-4 rounded-full">

                    <div className="bg-red-500 h-4 rounded-full w-2/3"></div>

                  </div>

                </div>

              </div>

            </div>

            {/* USER MANAGEMENT */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <h2 className="text-3xl font-bold mb-8">
                User Management
              </h2>

              <div className="space-y-5">

                {users.map((user, index) => (

                  <div
                    key={index}
                    className="bg-white/5 border border-white/5 rounded-2xl p-5 flex items-center justify-between"
                  >

                    <div>

                      <h3 className="text-xl font-semibold">
                        {user.name}
                      </h3>

                      <p className="text-gray-400">
                        {user.role}
                      </p>

                    </div>

                    <span className={`px-4 py-2 rounded-xl text-sm font-semibold
                      
                      ${
                        user.status === "Active"
                          ? "bg-green-500/20 text-green-400"
                          : user.status === "Online"
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }
                    
                    `}>

                      {user.status}

                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* AI INSIGHTS */}
            <div className="bg-gradient-to-br from-purple-500/20 to-red-500/10 border border-purple-500/20 rounded-3xl p-8">

              <h2 className="text-3xl font-bold mb-6">
                AI Platform Insights
              </h2>

              <p className="text-gray-300 leading-relaxed mb-8">

                AI detected abnormal case upload spikes
                from 3 regions requiring administrative review.

              </p>

              <button className="w-full bg-purple-500 hover:bg-purple-600 transition py-4 rounded-2xl text-lg font-semibold">

                Open Analytics

              </button>

            </div>

            {/* SYSTEM STATUS */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <h2 className="text-3xl font-bold mb-8">
                System Status
              </h2>

              <div className="space-y-5">

                <div className="flex items-center justify-between">

                  <span className="text-gray-400">
                    Backend API
                  </span>

                  <span className="text-green-400">
                    Operational
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-gray-400">
                    Database
                  </span>

                  <span className="text-green-400">
                    Connected
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-gray-400">
                    AI Engine
                  </span>

                  <span className="text-purple-400">
                    Running
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-gray-400">
                    Security Layer
                  </span>

                  <span className="text-yellow-400">
                    Monitoring
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default AdminDashboard;