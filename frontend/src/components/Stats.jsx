function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">

      <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl">

        <h2 className="text-5xl font-bold text-blue-400">
          25K+
        </h2>

        <p className="text-gray-300 mt-4">
          Cases Managed
        </p>

      </div>

      <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl">

        <h2 className="text-5xl font-bold text-cyan-400">
          5K+
        </h2>

        <p className="text-gray-300 mt-4">
          Registered Lawyers
        </p>

      </div>

      <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl">

        <h2 className="text-5xl font-bold text-yellow-400">
          99%
        </h2>

        <p className="text-gray-300 mt-4">
          Court Efficiency
        </p>

      </div>

    </div>
  );
}

export default Stats;