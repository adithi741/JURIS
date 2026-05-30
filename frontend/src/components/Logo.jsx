// components/Logo.jsx

import { FaBalanceScale } from "react-icons/fa";

function Logo() {
  return (
    <div className="flex items-center gap-4">
      <div className="w-16 h-16 rounded-3xl border border-blue-500/30 bg-[#0b1225] flex items-center justify-center shadow-lg">
        <FaBalanceScale className="text-amber-400 text-3xl" />
      </div>

      <div>
        <h1 className="text-5xl font-black text-white tracking-wide">
          JURIS
        </h1>

        <p className="text-gray-300 text-xl">
          AI Legal Platform
        </p>
      </div>
    </div>
  );
}

export default Logo;