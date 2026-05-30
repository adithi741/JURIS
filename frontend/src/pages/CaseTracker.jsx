import { useParams } from "react-router-dom";

function CaseTracker() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-[#020617] text-white p-10">

      <h1 className="text-5xl font-bold mb-6">
        Case Tracker
      </h1>

      <div className="bg-white/5 rounded-3xl p-8">

        <h2 className="text-3xl font-bold mb-4">
          Case ID: {id}
        </h2>

        <p className="text-green-400 mb-4">
          Status: Active
        </p>

        <p>
          Next Hearing: 20 June 2026
        </p>

      </div>

    </div>
  );
}

export default CaseTracker;