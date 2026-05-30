import { useNavigate } from "react-router-dom";

function Topbar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const email = localStorage.getItem("email");
  const role = localStorage.getItem("role");

  return (
    <div className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-5 mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

      {/* LEFT */}
      <div>

        <h2 className="text-3xl font-bold text-white mb-2">
          Welcome Back 👋
        </h2>

        <p className="text-gray-400">
          Monitor legal operations and AI insights in real-time.
        </p>

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search..."
          className="
          w-[280px]
          bg-white/10
          border border-white/10
          rounded-2xl
          px-5 py-3
          outline-none
          focus:border-blue-500
          "
        />

        {/* NOTIFICATION */}
        <button
          className="
          w-14 h-14
          rounded-2xl
          bg-white/10
          border border-white/10
          flex items-center justify-center
          text-2xl
          hover:bg-white/20
          transition
        "
        >
          🔔
        </button>

        {/* PROFILE */}
        <div
          className="
          flex items-center gap-4
          bg-white/10
          border border-white/10
          rounded-2xl
          px-4 py-3
        "
        >

          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold">
            {email ? email.charAt(0).toUpperCase() : "U"}
          </div>

          <div>

            <h3 className="font-semibold text-white">
              {email || "User"}
            </h3>

            <p className="text-sm text-gray-400">
              {role || "Guest"}
            </p>

          </div>

          <button
            onClick={handleLogout}
            className="
            bg-red-500
            hover:bg-red-600
            px-4 py-2
            rounded-xl
            text-sm
            font-semibold
            transition
          "
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  );
}

export default Topbar;