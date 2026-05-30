import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../components/Logo";

function Signup() {

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Lawyer");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    const response = await fetch(
      "http://127.0.0.1:5000/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          role,
        }),
      }
    );

    const data = await response.json();

    alert(data.message);

    navigate("/login");
  } catch (error) {
    console.log(error);
    alert("Signup Failed");
  }
};

  return (
    <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center px-6 py-6">

      <div className="relative w-full max-w-5xl">

  <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-[40px]"></div>

  <div className="relative bg-white/5 border border-white/10 rounded-[36px] overflow-hidden grid lg:grid-cols-2 backdrop-blur-xl">


        {/* LEFT SIDE */}
        <div className="p-12 flex flex-col justify-center bg-gradient-to-b from-blue-950/20 to-transparent">
        
        <div className="mb-10">
          <Logo />
        </div>
        
          <h1 className="text-4xl font-extrabold leading-tight mb-5">
            Create Your
            <br />
            <span className="text-blue-400">
              Legal Account
            </span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Join the premium legal ecosystem for lawyers,
            judges, and clients with AI-powered case
            management and courtroom analytics.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">

          <div className="bg-white/5 p-5 rounded-xl border border-white/10 text-sm font-medium">
            AI Legal Assistant
          </div>

          <div className="bg-white/5 p-5 rounded-xl border border-white/10 text-sm font-medium">
            Case Tracking
          </div>

          <div className="bg-white/5 p-5 rounded-xl border border-white/10 text-sm font-medium">
            Secure Documents
          </div>

          <div className="bg-white/5 p-5 rounded-xl border border-white/10 text-sm font-medium">
            Court Analytics
          </div>

          <div className="mt-8 w-96 p-5 rounded-2xl bg-blue-500/10 border border-blue-500/20">
            <p className="text-gray-300 text-sm" align = "center">
              Trusted by lawyers, judges, law firms and legal professionals.
            </p>
          </div>

        </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-12 flex items-center">

          <form
            onSubmit={handleSignup}
            className="w-full"
          >

          <h2 className="text-4xl font-bold mb-2">
            Sign Up
          </h2>

          <p className="text-gray-400 mb-8">
            Create your legal workspace account.
          </p>

            {/* FULL NAME */}
            <div className="mb-6">

              <label className="block text-xl mb-3">
                Full Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-lg outline-none focus:border-blue-500"
              />

            </div>

            {/* EMAIL */}
            <div className="mb-6">

              <label className="block text-xl mb-3">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-lg outline-none focus:border-blue-500"
              />

            </div>

            {/* PASSWORD */}
            <div className="mb-6">

              <label className="block text-xl mb-3">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-lg outline-none focus:border-blue-500"
              />

            </div>

            {/* CONFIRM PASSWORD */}
            <div className="mb-6">

              <label className="block text-xl mb-3">
                Confirm Password
              </label>

              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
                className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-lg outline-none focus:border-blue-500"
              />

            </div>

            {/* ROLE */}
            <div className="mb-10">

              <label className="block text-xl mb-3">
                Select Role
              </label>

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-lg outline-none focus:border-blue-500"
              >

                <option className="bg-[#020617]">
                  Lawyer
                </option>

                <option className="bg-[#020617]">
                  Judge
                </option>

                <option className="bg-[#020617]">
                  Client
                </option>

                <option className="bg-[#020617]">
                  Admin
                </option>

              </select>

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="
                w-full
                bg-gradient-to-r
                from-blue-500
                to-cyan-500
                hover:scale-[1.02]
                transition
                duration-300
                py-4
                rounded-2xl
                text-lg
                font-semibold
                shadow-[0_0_25px_rgba(59,130,246,0.45)]
                mb-8
                "
              >
              Create Account
            </button>

            {/* LOGIN LINK */}
            <p className="text-center text-gray-400 text-base">

              Already have an account?

              <Link
                to="/login"
                className="text-blue-400 ml-3 hover:underline"
              >
                Login
              </Link>

            </p>

          </form>

        </div>

      </div>
      <footer className="text-center text-gray-500 py-3">
        © 2026 JURIS Legal Platform. All rights reserved.
      </footer>
      </div>

    </div>
  );
}

export default Signup;