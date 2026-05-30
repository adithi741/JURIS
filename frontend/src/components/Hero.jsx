function Hero() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center text-center pt-28 pb-24 px-6">

      <div className="bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[40px] p-16 max-w-6xl shadow-2xl">

        <h1 className="text-7xl font-extrabold leading-tight">

          Smart Legal <br />

          <span className="text-blue-400">
            Management Platform
          </span>

        </h1>

        <p className="text-gray-300 text-xl mt-8 max-w-3xl mx-auto leading-relaxed">

          AI-powered legal ecosystem for lawyers,
          judges, and clients with real-time case
          tracking, courtroom analytics, and
          intelligent legal automation.

        </p>

        <div className="mt-12 flex gap-6 justify-center flex-wrap">

          <button className="bg-blue-500 hover:bg-blue-600 transition-all px-10 py-4 rounded-2xl text-lg font-semibold shadow-lg shadow-blue-500/40">

            Get Legal Help

          </button>

          <button className="border border-white/20 hover:bg-white/10 transition-all px-10 py-4 rounded-2xl text-lg font-semibold">

            Portal Login

          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;