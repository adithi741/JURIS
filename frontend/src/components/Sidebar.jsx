import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaBalanceScale,
  FaGavel,
  FaUsers,
  FaFolderOpen,
  FaRobot,
  FaCog,
} from "react-icons/fa";

function Sidebar() {
  
    const menuItems = [
    {
        title: "Dashboard",
        icon: <FaHome />,
        path: "/lawyer-dashboard",
    },

    {
        title: "Cases",
        icon: <FaBalanceScale />,
        path: "/cases",
    },

    {
        title: "Add Case",
        icon: <FaBalanceScale />,
        path: "/add-case",
    },

    {
        title: "Hearings",
        icon: <FaGavel />,
        path: "/hearings",
    },
    {
        title: "Add Hearing",
        icon: <FaGavel />,
        path: "/add-hearing",
    },

    {
        title: "Clients",
        icon: <FaUsers />,
        path: "/clients",
    },
    {
        title: "Add Client",
        icon: <FaUsers />,
        path: "/add-client",
    },

    {
        title: "Documents",
        icon: <FaFolderOpen />,
        path: "/documents",
    },
    {
        title: "Add Document",
        icon: <FaFolderOpen />,
        path: "/add-document",
    },

    {
        title: "AI Assistant",
        icon: <FaRobot />,
        path: "/ai-assistant",
    },

    {
        title: "Settings",
        icon: <FaCog />,
        path: "/settings",
    },
    ];

  return (

    <div className="w-[320px] bg-[#061129] border-r border-white/10 flex flex-col justify-between p-6">

    {/* TOP */}
    <div>
{/* LOGO */}
<div className="px-6 py-7 border-b border-white/10">

  <div className="flex items-center gap-4">

    {/* ICON */}
    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-blue-500/20 flex items-center justify-center backdrop-blur-md">

      <span className="text-3xl text-blue-400">
        ⚖
      </span>

    </div>

    {/* TEXT */}
    <div>

      <h1 className="text-4xl font-bold tracking-wide text-white">
        JURIS
      </h1>

      <p className="text-gray-400 text-sm mt-1">
        AI Legal Platform
      </p>

    </div>

  </div>

</div>

    {/* SMALL LINE */}
    <div className="w-full h-[1px] bg-gradient-to-r from-blue-500/40 to-transparent mb-6"></div>

    {/* MENU */}
    <div className="space-y-4 mb-8">

        {menuItems.map((item, index) => (

        <NavLink
        key={index}
        to={item.path}
        className={({ isActive }) =>
            `w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition text-lg
            
            ${isActive
            ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
            : "hover:bg-white/5 text-gray-300"}`
        }
        >

        <span className="text-xl">
            {item.icon}
        </span>

        {item.title}

        </NavLink>

        ))}

    </div>

    </div>

    </div>
  );
}

export default Sidebar;