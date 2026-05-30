function Services() {
  return (
    <div className="min-h-screen bg-[#020617] text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        Legal Services
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-white/5 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-4">
            Find Lawyers
          </h2>
          <p>
            Search lawyers by specialization, ratings and experience.
          </p>
        </div>

        <div className="bg-white/5 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-4">
            Legal Documents
          </h2>
          <p>
            Generate NDAs, Agreements and Contracts.
          </p>
        </div>

        <div className="bg-white/5 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-4">
            AI Legal Help
          </h2>
          <p>
            Get instant AI legal guidance.
          </p>
        </div>

        <div className="bg-white/5 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-4">
            Court Analytics
          </h2>
          <p>
            View courtroom insights and trends.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Services;