import { Link } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav
      className="
      sticky top-0 z-50
      relative
      bg-[#020617]/95
      backdrop-blur-xl
      border-b border-white/10
      
      before:absolute
      before:inset-0
      before:pointer-events-none

      before:bg-gradient-to-r
      before:from-blue-500/5
      before:via-transparent
      before:to-cyan-500/5
    "
    >
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 py-4 flex items-center">

        {/* LOGO */}
        <div className="w-[280px]">
          <Link
            to="/"
            className="group inline-block"
          >
            <div className="group-hover:scale-105 transition duration-300">
              <Logo />
            </div>
          </Link>
        </div>

        {/* NAVIGATION */}
        <div className="flex-1 flex justify-center">

          <div className="hidden lg:flex items-center gap-10">

            {[
              ["Home", "#home"],
              ["Services", "#services"],
              ["Lawyers", "#lawyers"],
              ["Contact", "#contact"],
            ].map(([name, link]) => (
              <a
                key={name}
                href={link}
                className="
                relative
                text-gray-300
                font-medium
                hover:text-white
                transition
                duration-300

                after:absolute
                after:left-1/2
                after:-translate-x-1/2
                after:-bottom-2
                after:h-[2px]
                after:w-0
                after:bg-blue-400
                after:transition-all
                after:duration-300

                hover:after:w-full
              "
              >
                {name}
              </a>
            ))}

          </div>

        </div>

        {/* BUTTONS */}
        <div className="w-[280px] flex justify-end items-center gap-4">

          <Link
            to="/login"
            className="
            px-7 py-3
            rounded-2xl

            font-semibold
            text-white

            bg-gradient-to-r
            from-blue-500
            to-cyan-500

            hover:scale-105

            transition
            duration-300

            shadow-[0_0_25px_rgba(59,130,246,0.5)]
          "
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="
            px-7 py-3
            rounded-2xl

            font-semibold
            text-white

            bg-gradient-to-r
            from-blue-500
            to-cyan-500

            hover:scale-105

            transition
            duration-300

            shadow-[0_0_25px_rgba(59,130,246,0.5)]
          "
          >
            Sign Up
          </Link>

        </div>

      </div>

      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent"></div>
    </nav>
  );
}

export default Navbar;