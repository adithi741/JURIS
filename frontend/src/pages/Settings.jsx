import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useEffect, useState } from "react";
import axios from "axios";

function Settings() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {

    const userEmail =
      localStorage.getItem("email");

    axios
      .get(
        `http://127.0.0.1:5000/profile/${userEmail}`
      )
      .then((response) => {

        setName(response.data.name);
        setEmail(response.data.email);
        setPhone(response.data.phone || "");

      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  const saveProfile = async () => {

    try {

      await axios.put(
        "http://127.0.0.1:5000/update-profile",
        {
          name,
          email,
          phone,
        }
      );

      setMessage(
        "Profile Updated Successfully"
      );

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="flex bg-[#020617] text-white min-h-screen">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="flex-1 p-8">
        <Topbar />

        {/* HEADER */}
        <div className="mb-10">

          <h1 className="text-5xl font-bold text-blue-400 mb-3">
            Settings
          </h1>

          <p className="text-gray-400 text-lg">
            Manage your account preferences and security settings.
          </p>

        </div>

        {/* SETTINGS GRID */}
        <div className="grid xl:grid-cols-2 gap-6">

          {/* PROFILE SETTINGS */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-8">
              Profile Settings
            </h2>

            <div className="space-y-6">

              <div>

                <label className="block mb-3 text-gray-400">
                  Full Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-blue-400"
                />

              </div>

              <div>

                <label className="block mb-3 text-gray-400">
                  Email Address
                </label>

                <input
                  type="email"
                  value={email}
                  disabled
                  className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none"
                />

              </div>

              <div>

                <label className="block mb-3 text-gray-400">
                  Role
                </label>

                <input
                  value={localStorage.getItem("role")}
                  disabled
                  className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4"
                />

              </div>

              <div>

                <label className="block mb-3 text-gray-400">
                  Phone Number
                </label>

                <input
                  type="text"
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value)
                  }
                  className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-blue-400"
                />

              </div>

            </div>

          </div>

          {/* SECURITY SETTINGS */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-8">
              Security Settings
            </h2>

            <div className="space-y-6">

              <div className="flex items-center justify-between bg-white/5 rounded-2xl p-5">

                <div>

                  <h3 className="text-xl font-semibold">
                    Two Factor Authentication
                  </h3>

                  <p className="text-gray-400 text-sm mt-1">
                    Secure your legal account
                  </p>

                </div>

                <span className="bg-green-500 px-5 py-2 rounded-xl font-semibold">
                  Enabled
                </span>

              </div>

              <div className="flex items-center justify-between bg-white/5 rounded-2xl p-5">

                <div>

                  <h3 className="text-xl font-semibold">
                    Email Notifications
                  </h3>

                  <p className="text-gray-400 text-sm mt-1">
                    Receive updates instantly
                  </p>

                </div>

                <button className="bg-blue-500 px-5 py-2 rounded-xl font-semibold">

                  Active

                </button>

              </div>

              <div className="flex items-center justify-between bg-white/5 rounded-2xl p-5">

                <div>

                  <h3 className="text-xl font-semibold">
                    AI Monitoring
                  </h3>

                  <p className="text-gray-400 text-sm mt-1">
                    Smart legal analytics enabled
                  </p>

                </div>

                <button className="bg-purple-500 px-5 py-2 rounded-xl font-semibold">

                  Enabled

                </button>

              </div>

            </div>

          </div>

        </div>

        {message && (
          <div className="mt-6 bg-green-500/20 text-green-400 p-4 rounded-xl">
            {message}
          </div>
        )}

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mt-6">

          <h2 className="text-3xl font-bold mb-8">
            Change Password
          </h2>

          <div className="space-y-4">

            <input
              type="password"
              placeholder="New Password"
              className="w-full bg-white/10 p-4 rounded-xl"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full bg-white/10 p-4 rounded-xl"
            />

          </div>

          <button
            className="mt-6 bg-red-500 px-5 py-3 rounded-xl"
          >
            Update Password
          </button>

        </div>

        {/* SAVE BUTTON */}
        <button
          onClick={saveProfile}
          className="mt-10 bg-blue-500 hover:bg-blue-600 transition px-10 py-4 rounded-2xl text-lg font-semibold shadow-lg shadow-blue-500/20"
        >
          Save Changes
        </button>

      </div>

    </div>

  );
}

export default Settings;