import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBalanceScale, FaSignInAlt } from "react-icons/fa";
import Logo from "../components/Logo";

function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("Lawyer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
  e.preventDefault();

  if (!email || !password) {
    alert("Please enter email and password");
    return;
  }

  try {
    const response = await fetch(
      "http://127.0.0.1:5000/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {

      localStorage.setItem("role", data.role);
      localStorage.setItem("token", data.token);
      localStorage.setItem("email", email);

      alert(data.message);

      const routes = {
        Lawyer: "/lawyer-dashboard",
        Judge: "/judge-dashboard",
        Client: "/client-dashboard",
        Admin: "/admin-dashboard",
      };

      navigate(routes[data.role]);

    } 
    else {
      alert(data.message);
    }

  } catch (error) {
    console.error(error);
    alert("Server Error");
  }
};

  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col">

      <div className="flex-1 flex items-center justify-center px-6 py-10">

        <div className="relative w-full max-w-5xl">

          <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-[40px]" />

          <div className="relative rounded-[32px] overflow-hidden border border-white/10 bg-gradient-to-br from-[#0f172a] to-[#020617] shadow-2xl grid grid-cols-1 lg:grid-cols-2">

            {/* LEFT */}
            <div className="p-6 lg:p-8 flex flex-col justify-center border-r border-white/10">

              <div className="flex items-center gap-4 mb-10">

                <div>
                  <div className="mb-10">
                    <Logo />
                  </div>

                </div>

              </div>

              <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-3">
                Welcome Back to
                <span className="block text-blue-400">
                  JURIS
                </span>
              </h1>

              <p className="text-blue-300 text-lg mb-6">
                The Future of Legal Intelligence
              </p>

              <p className="text-gray-400 text-xl leading-relaxed mb-10">
                Securely manage legal cases, hearings, documents,
                courtroom analytics, and AI legal assistance from
                one premium platform.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-6">

              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                AI Legal Assistant
              </div>

              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                Smart Case Tracking
              </div>

              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                Secure Documents
              </div>

              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                Court Analytics
              </div>

            </div>

              <div className="mt-8 p-5 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                <p className="text-gray-300 text-sm">
                  Trusted by lawyers, judges, law firms and legal professionals.
                </p>
              </div>

            </div>

            {/* RIGHT */}
            <div className="p-6 lg:p-8 flex flex-col justify-center">

              <h2 className="text-4xl font-bold mb-3">
                Portal Login
              </h2>

              <p className="text-gray-400 mb-6 text-lg">
                Sign in to access your legal workspace.
              </p>

              <form onSubmit={handleLogin}>

                <div className="mb-6">

                  <label className="block mb-3 text-lg">
                    Email Address
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-white/10 border border-white/10 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none focus:border-blue-500"
                  />

                </div>

                <div className="mb-6">

                  <label className="block mb-3 text-lg">
                    Password
                  </label>

                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full bg-white/10 border border-white/10 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none focus:border-blue-500"
                  />

                </div>

                <div className="mb-8">

                  <label className="block mb-3 text-lg">
                    Select Role
                  </label>

                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full bg-white/10 border border-white/10 rounded-2xl px-4 py-3 text-lg outline-none focus:border-blue-500"
                  >
                    <option className="bg-black">Lawyer</option>
                    <option className="bg-black">Judge</option>
                    <option className="bg-black">Client</option>
                    <option className="bg-black">Admin</option>
                  </select>

                </div>

                <div className="flex items-center justify-between mb-8">

                  <label className="flex items-center gap-3 text-gray-400">
                    <input type="checkbox" />
                    Remember Me
                  </label>

                  <button
                    type="button"
                    className="text-blue-400 hover:text-blue-300"
                  onClick={() => navigate("/forgot-password")}
                  >
                    Forgot Password?
                  </button>

                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500
hover:scale-[1.02]
duration-300 transition rounded-2xl py-4 text-lg font-semibold shadow-[0_0_25px_rgba(59,130,246,0.5)]"
                >
                  <div className="flex items-center justify-center gap-3">
                    <FaSignInAlt />
                    Login to Dashboard
                  </div>
                </button>

              </form>

              <p className="text-center text-gray-400 mt-8 text-lg">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-blue-400 hover:underline"
                >
                  Create Account
                </Link>
              </p>

            </div>

          </div>

        </div>

      </div>

      <footer className="text-center text-gray-500 py-3">
        © 2026 JURIS Legal Platform. All rights reserved.
      </footer>

    </div>
  );
}

export default Login;