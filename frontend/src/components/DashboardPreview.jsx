function DashboardPreview() {
  return (
    <section className="relative z-10 px-10 pb-24 mt-10">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-8">

          <div className="flex justify-between items-center mb-8">

            <h2 className="text-2xl font-bold">
              Court Case Timeline
            </h2>

            <button className="bg-white/10 px-4 py-2 rounded-xl text-sm">
              Active
            </button>

          </div>

          <div className="space-y-8">

            <div>

              <div className="flex justify-between mb-2">

                <span>Case Filing</span>

                <span className="text-blue-400">
                  Completed
                </span>

              </div>

              <div className="w-full bg-white/10 h-3 rounded-full">

                <div className="bg-blue-500 h-3 rounded-full w-[100%]"></div>

              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">

                <span>Evidence Review</span>

                <span className="text-cyan-400">
                  In Progress
                </span>

              </div>

              <div className="w-full bg-white/10 h-3 rounded-full">

                <div className="bg-cyan-400 h-3 rounded-full w-[70%]"></div>

              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">

                <span>Final Judgment</span>

                <span className="text-yellow-400">
                  Pending
                </span>

              </div>

              <div className="w-full bg-white/10 h-3 rounded-full">

                <div className="bg-yellow-400 h-3 rounded-full w-[20%]"></div>

              </div>

            </div>

          </div>

        </div>

        <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-8">

          <h2 className="text-2xl font-bold mb-8">
            Recent Activity
          </h2>

          <div className="space-y-6">

            <div className="border-b border-white/10 pb-4">

              <p className="font-semibold">
                Case #204 Updated
              </p>

              <p className="text-gray-400 text-sm mt-1">
                Evidence submitted successfully
              </p>

            </div>

            <div className="border-b border-white/10 pb-4">

              <p className="font-semibold">
                Hearing Scheduled
              </p>

              <p className="text-gray-400 text-sm mt-1">
                Tomorrow at 10:30 AM
              </p>

            </div>

            <div>

              <p className="font-semibold">
                Lawyer Assigned
              </p>

              <p className="text-gray-400 text-sm mt-1">
                Corporate Legal Specialist
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default DashboardPreview;