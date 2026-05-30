import { useParams } from "react-router-dom";

function LawyerProfile() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-[#020617] text-white p-10">

      <h1 className="text-5xl font-bold mb-6">
        Lawyer Profile
      </h1>

      <div className="bg-white/5 rounded-3xl p-8">

        <h2 className="text-3xl font-bold mb-4">
          Lawyer ID: {id}
        </h2>

        <p className="text-gray-400">
          Detailed lawyer profile will appear here.
        </p>

      </div>

    </div>
  );
}

export default LawyerProfile;