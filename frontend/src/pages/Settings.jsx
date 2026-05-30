import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import PageHeader from "../components/PageHeader";

function Settings() {

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
                  placeholder="Adv. Sarah Johnson"
                  className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-blue-400"
                />

              </div>

              <div>

                <label className="block mb-3 text-gray-400">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="sarah@juris.ai"
                  className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-blue-400"
                />

              </div>

              <div>

                <label className="block mb-3 text-gray-400">
                  Phone Number
                </label>

                <input
                  type="text"
                  placeholder="+1 234 567 890"
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

                <button className="bg-green-500 px-5 py-2 rounded-xl font-semibold">

                  Enabled

                </button>

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

        {/* SAVE BUTTON */}
        <button className="mt-10 bg-blue-500 hover:bg-blue-600 transition px-10 py-4 rounded-2xl text-lg font-semibold shadow-lg shadow-blue-500/20">

          Save Changes

        </button>

      </div>

    </div>

  );
}

export default Settings;