import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import PageHeader from "../components/PageHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  FaPlus,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

function Hearings() {

  const [hearings, setHearings] = useState([]);
  const [showModal, setShowModal] = useState(false);
const [selectedHearing, setSelectedHearing] = useState(null);

const [courtroom, setCourtroom] = useState("");
const [caseNumber, setCaseNumber] = useState("");
const [judgeName, setJudgeName] = useState("");
const [hearingTime, setHearingTime] = useState("");
const [status, setStatus] = useState("");
const [search, setSearch] = useState("");

  useEffect(() => {

    axios
      .get("http://127.0.0.1:5000/hearings")
      .then((response) => {
        setHearings(response.data.hearings);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  const deleteHearing = async (id) => {

  try {

    await axios.delete(
      `http://127.0.0.1:5000/delete-hearing/${id}`
    );

    window.location.reload();

  } catch (error) {

    console.log(error);

  }

};

const openHearing = (hearing) => {

  setSelectedHearing(hearing);

  setCourtroom(hearing[1]);
  setCaseNumber(hearing[2]);
  setJudgeName(hearing[3]);
  setHearingTime(hearing[4]);
  setStatus(hearing[5]);

  setShowModal(true);

};

const updateHearing = async () => {

  try {

    await axios.put(
      `http://127.0.0.1:5000/update-hearing/${selectedHearing[0]}`,
      {
        courtroom,
        case_number: caseNumber,
        judge_name: judgeName,
        hearing_time: hearingTime,
        status,
      }
    );

    window.location.reload();

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

        {/* TOPBAR */}
        <Topbar />

        {/* HEADER */}
        <PageHeader
          title="Hearings"
          subtitle="Track courtroom schedules and hearing timelines."
        />

        {/* HEARINGS GRID */}
        <div className="grid lg:grid-cols-2 gap-6">

          {hearings
          .filter((item) =>
  item[1].toLowerCase().includes(search.toLowerCase()) ||
  item[2].toLowerCase().includes(search.toLowerCase()) ||
  item[3].toLowerCase().includes(search.toLowerCase())
)
          .map((hearing) => (

            <div
              key={hearing[0]}
              className="bg-white/5 border border-white/10 rounded-3xl p-7 hover:border-cyan-500/30 transition"
            >

              <div className="flex items-center justify-between mb-6">

                <h2 className="text-2xl font-bold">
                  {hearing[1]}
                </h2>

                <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-xl text-sm">
                  {hearing[5]}
                </span>

              </div>

              <div className="space-y-4 text-gray-400">

                <p>
                  Case: {hearing[2]}
                </p>

                <p>
                  Judge: {hearing[3]}
                </p>

                <p>
                  Time: {hearing[4]}
                </p>

              </div>
<div className="flex gap-2 mt-6">

  <button
    onClick={() => openHearing(hearing)}
    className="bg-blue-500 px-3 py-2 rounded-xl flex items-center gap-2"
  >
    <FaEye />
    View
  </button>

  <button
    onClick={() => openHearing(hearing)}
    className="bg-yellow-500 text-black px-3 py-2 rounded-xl flex items-center gap-2"
  >
    <FaEdit />
    Edit
  </button>

  <button
    onClick={() => deleteHearing(hearing[0])}
    className="bg-red-500 px-3 py-2 rounded-xl flex items-center gap-2"
  >
    <FaTrash />
    Delete
  </button>

</div>

            </div>

          ))}

        </div>

      </div>
      {showModal && (

<div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

  <div className="bg-[#061129] p-8 rounded-3xl w-[500px]">

    <h2 className="text-3xl font-bold mb-6">
      Edit Hearing
    </h2>

    <div className="space-y-4">

      <input
  type="text"
  placeholder="Search Hearings..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="w-full mb-6 bg-white/10 p-4 rounded-xl"
/>

      <input
        value={courtroom}
        onChange={(e) => setCourtroom(e.target.value)}
        className="w-full bg-white/10 p-4 rounded-xl"
      />

      <input
        value={caseNumber}
        onChange={(e) => setCaseNumber(e.target.value)}
        className="w-full bg-white/10 p-4 rounded-xl"
      />

      <input
        value={judgeName}
        onChange={(e) => setJudgeName(e.target.value)}
        className="w-full bg-white/10 p-4 rounded-xl"
      />

      <input
        value={hearingTime}
        onChange={(e) => setHearingTime(e.target.value)}
        className="w-full bg-white/10 p-4 rounded-xl"
      />

      <input
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="w-full bg-white/10 p-4 rounded-xl"
      />

    </div>

    <div className="flex gap-3 mt-6">

      <button
        onClick={updateHearing}
        className="bg-green-500 px-5 py-3 rounded-xl"
      >
        Save
      </button>

      <button
        onClick={() => setShowModal(false)}
        className="bg-red-500 px-5 py-3 rounded-xl"
      >
        Close
      </button>

    </div>

  </div>

</div>

)}

    </div>

  );
}

export default Hearings;