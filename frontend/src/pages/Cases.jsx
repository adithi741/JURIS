import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import PageHeader from "../components/PageHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  FaPlus,
  FaEye,
  FaEdit,
  FaTrash
} from "react-icons/fa";

function Cases() {

  const [cases, setCases] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);
  const [editCaseNumber, setEditCaseNumber] = useState("");
  const [editClientName, setEditClientName] = useState("");
  const [editCaseType, setEditCaseType] = useState("");
  const [editStatus, setEditStatus] = useState("");
  const [caseNumber, setCaseNumber] = useState("");
  const [clientName, setClientName] = useState("");
  const [caseType, setCaseType] = useState("");
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {

    axios
      .get("http://127.0.0.1:5000/cases")
      .then((response) => {
        setCases(response.data.cases);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  const addCase = async () => {

  try {

    await axios.post(
      "http://127.0.0.1:5000/add-case",
      {
        case_number: caseNumber,
        client_name: clientName,
        case_type: caseType,
        status: status,
      }
    );

    window.location.reload();

  } catch (error) {

    console.log(error);

  }

};

const deleteCase = async (id) => {

  try {

    await axios.delete(
      `http://127.0.0.1:5000/delete-case/${id}`
    );

    window.location.reload();

  } catch (error) {

    console.log(error);

  }

};

const viewCase = (item) => {

  setSelectedCase(item);

  setEditCaseNumber(item[1]);
  setEditClientName(item[2]);
  setEditCaseType(item[3]);
  setEditStatus(item[4]);

  setShowModal(true);

};

const updateCase = async () => {

  try {

    await axios.put(
      `http://127.0.0.1:5000/update-case/${selectedCase[0]}`,
      {
        case_number: editCaseNumber,
        client_name: editClientName,
        case_type: editCaseType,
        status: editStatus
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

      {/* MAIN CONTENT */}
      <div className="flex-1 p-8">

        {/* TOPBAR */}
        <Topbar />

        {/* PAGE HEADER */}
        <PageHeader
          title="Cases"
          subtitle="Manage all legal cases efficiently."
        />

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-8">

  <h2 className="text-2xl font-bold mb-5">
    Add New Case
  </h2>

  <div className="grid md:grid-cols-2 gap-4">

    <input
  type="text"
  placeholder="Search Cases..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="w-full mb-6 bg-white/10 p-4 rounded-xl"
/>

    <input
      type="text"
      placeholder="Case Number"
      value={caseNumber}
      onChange={(e) => setCaseNumber(e.target.value)}
      className="bg-white/10 p-4 rounded-xl"
    />

    <input
      type="text"
      placeholder="Client Name"
      value={clientName}
      onChange={(e) => setClientName(e.target.value)}
      className="bg-white/10 p-4 rounded-xl"
    />

    <input
      type="text"
      placeholder="Case Type"
      value={caseType}
      onChange={(e) => setCaseType(e.target.value)}
      className="bg-white/10 p-4 rounded-xl"
    />

    <input
      type="text"
      placeholder="Status"
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      className="bg-white/10 p-4 rounded-xl"
    />

  </div>

  <button
  onClick={addCase}
  className="
  mt-5
  flex items-center gap-2
  bg-green-500
  hover:bg-green-600
  px-5 py-3
  rounded-xl
  font-semibold
  transition
  "
>
  <FaPlus />
  Add Case
</button>

</div>

        {/* CASE GRID */}
        <div className="grid lg:grid-cols-2 gap-4">

          {cases
                    
          .filter((item) =>
            item[1].toLowerCase().includes(search.toLowerCase()) ||
            item[2].toLowerCase().includes(search.toLowerCase()) ||
            item[3].toLowerCase().includes(search.toLowerCase())
          )
          
          .map((item) => (

            <div
              key={item[0]}
              className="bg-white/5 border border-white/10 rounded-3xl p-7 hover:border-blue-500/30 transition"
            >

              <div className="flex items-center justify-between mb-5">

                <h2 className="text-2xl font-bold">
                  {item[1]}
                </h2>

                <span
                  className={`px-4 py-2 rounded-xl text-sm font-semibold
                  ${
                    item[4] === "Active"
                      ? "bg-blue-500/20 text-blue-400"
                      : item[4] === "Pending"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-green-500/20 text-green-400"
                  }`}
                >
                  {item[4]}
                </span>

              </div>

              <div className="space-y-3 text-gray-400">

                <p>
                  Client: {item[2]}
                </p>

                <p>
                  Type: {item[3]}
                </p>

                <p>
                  Status: {item[4]}
                </p>

              </div>

              <div className="flex gap-3 mt-6">

                <div className="flex gap-3 mt-6">

<div className="flex gap-3 mt-6 flex-wrap">

  {/* VIEW */}
    <div className="flex gap-3 mt-6">

      <button
        onClick={() => viewCase(item)}
        className="flex items-center gap-2 bg-blue-500 px-3 py-2 rounded-xl"
      >
        <FaEye />
        View
      </button>

      <button
        onClick={() => viewCase(item)}
        className="flex items-center gap-2 bg-yellow-500 text-black px-3 py-2 rounded-xl"
      >
        <FaEdit />
        Edit
      </button>

      <button
        onClick={() => deleteCase(item[0])}
        className="flex items-center gap-2 bg-red-500 px-3 py-2 rounded-xl"
      >
        <FaTrash />
        Delete
      </button>

    </div>

</div>

            </div>

              </div>

            </div>

          ))}

          {showModal && (

<div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

  <div className="bg-[#061129] w-[500px] rounded-3xl p-8">

    <h2 className="text-3xl font-bold mb-6">
      Case Details
    </h2>

    <div className="space-y-4">

      <input
        type="text"
        value={editCaseNumber}
        onChange={(e)=>setEditCaseNumber(e.target.value)}
        className="w-full bg-white/10 p-4 rounded-xl"
      />

      <input
        type="text"
        value={editClientName}
        onChange={(e)=>setEditClientName(e.target.value)}
        className="w-full bg-white/10 p-4 rounded-xl"
      />

      <input
        type="text"
        value={editCaseType}
        onChange={(e)=>setEditCaseType(e.target.value)}
        className="w-full bg-white/10 p-4 rounded-xl"
      />

      <input
        type="text"
        value={editStatus}
        onChange={(e)=>setEditStatus(e.target.value)}
        className="w-full bg-white/10 p-4 rounded-xl"
      />

    </div>

    <div className="flex gap-4 mt-6">

      <button
        onClick={updateCase}
        className="bg-green-500 px-5 py-3 rounded-xl"
      >
        Save Changes
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

      </div>

    </div>
  );
}

export default Cases;