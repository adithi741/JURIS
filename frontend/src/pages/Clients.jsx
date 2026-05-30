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

function Clients() {
  const [clients, setClients] = useState([]);
  const [showModal, setShowModal] = useState(false);
const [selectedClient, setSelectedClient] = useState(null);

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [status, setStatus] = useState("");
const [search, setSearch] = useState("");

  useEffect(() => {

  axios
    .get("http://127.0.0.1:5000/clients")
    .then((response) => {
      setClients(response.data.clients);
    })
    .catch((error) => {
      console.log(error);
    });

}, []);

const addClient = async () => {

  try {

    await axios.post(
      "http://127.0.0.1:5000/add-client",
      {
        name,
        email,
        phone,
        status,
      }
    );

    window.location.reload();

  } catch (error) {

    console.log(error);

  }

};

const deleteClient = async (id) => {

  try {

    await axios.delete(
      `http://127.0.0.1:5000/delete-client/${id}`
    );

    window.location.reload();

  } catch (error) {

    console.log(error);

  }

};

const openClient = (client) => {

  setSelectedClient(client);

  setName(client[1]);
  setEmail(client[2]);
  setPhone(client[3]);
  setStatus(client[4]);

  setShowModal(true);

};

const updateClient = async () => {

  try {

    await axios.put(
      `http://127.0.0.1:5000/update-client/${selectedClient[0]}`,
      {
        name,
        email,
        phone,
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
        <Topbar />

        {/* TOP */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

          <div>

            <h1 className="text-5xl font-bold text-emerald-400 mb-3">
              Clients Management
            </h1>

            <p className="text-gray-400 text-lg">
              Manage all legal clients and communication.
            </p>

          </div>

          <button
  onClick={() => {
    setSelectedClient(null);
    setName("");
    setEmail("");
    setPhone("");
    setStatus("");
    setShowModal(true);
  }}
  className="bg-emerald-500 hover:bg-emerald-600 transition px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg shadow-emerald-500/20 flex items-center gap-2"
>
  <FaPlus />
  Add Client
</button>

        </div>

        {/* ANALYTICS */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <h2 className="text-4xl font-bold text-emerald-400 mb-3">
              84
            </h2>

            <p className="text-gray-400">
              Total Clients
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <h2 className="text-4xl font-bold text-green-400 mb-3">
              54
            </h2>

            <p className="text-gray-400">
              Active Clients
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <h2 className="text-4xl font-bold text-emerald-400 mb-3">
              12
            </h2>

            <p className="text-gray-400">
              VIP Clients
            </p>

          </div>

        </div>

        {/* SEARCH */}
        <div className="mb-8">

          <input
  type="text"
  placeholder="Search Clients..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="w-full mb-6 bg-white/10 p-4 rounded-xl"
/>

        </div>

        {/* CLIENT GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {clients
          .filter((item) =>
  item[1].toLowerCase().includes(search.toLowerCase()) ||
  item[2].toLowerCase().includes(search.toLowerCase()) ||
  item[3].toLowerCase().includes(search.toLowerCase())
)
          .map((client) => (

            <div
              key={client[0]}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition"
            >

              {/* PROFILE */}
              <div className="flex items-center gap-4 mb-6">

                <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center text-2xl font-bold">
                    {client[1].charAt(0)}
                </div>

                <div>

                  <h2 className="text-2xl font-bold">
                    {client[1]}
                  </h2>

                  <p className="text-gray-400">
                    {client[2]}
                  </p>

                </div>

              </div>

              {/* DETAILS */}
              <div className="space-y-4">

                <div className="flex justify-between">

                  <p className="text-gray-400">
                    Phone
                  </p>

                  <p>
                    {client[3]}
                  </p>

                </div>

                <div className="flex justify-between">

                  <p className="text-gray-400">
                    Active Cases
                  </p>

                  <p>
                    N/A
                  </p>

                </div>

                <div className="flex justify-between items-center">

                  <p className="text-gray-400">
                    Status
                  </p>

                  <span className={`px-4 py-2 rounded-xl text-sm font-semibold
                    ${
                      client[4] === "VIP"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : client[4] === "Active"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-emerald-500/20 text-emerald-400"
                    }
                  `}>

                    {client[4]}

                  </span>

                </div>

              </div>

              {/* BUTTON */}
              <div className="flex gap-3 mt-8">

  <button
    onClick={() => openClient(client)}
    className="flex items-center gap-2 bg-blue-500 px-3 py-2 rounded-xl"
  >
    <FaEye />
    View
  </button>

  <button
    onClick={() => openClient(client)}
    className="flex items-center gap-2 bg-yellow-500 text-black px-3 py-2 rounded-xl"
  >
    <FaEdit />
    Edit
  </button>

  <button
    onClick={() => deleteClient(client[0])}
    className="flex items-center gap-2 bg-red-500 px-3 py-2 rounded-xl"
  >
    <FaTrash />
    Delete
  </button>

</div>

            </div>

          ))}

          {showModal && (

<div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

  <div className="bg-[#061129] w-[500px] rounded-3xl p-8">

    <h2 className="text-3xl font-bold mb-6">

      {selectedClient ? "Edit Client" : "Add Client"}

    </h2>

    <div className="space-y-4">

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full bg-white/10 p-4 rounded-xl"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full bg-white/10 p-4 rounded-xl"
      />

      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full bg-white/10 p-4 rounded-xl"
      />

      <input
        type="text"
        placeholder="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="w-full bg-white/10 p-4 rounded-xl"
      />

    </div>

    <div className="flex gap-4 mt-6">

      <button
        onClick={
          selectedClient
            ? updateClient
            : addClient
        }
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

      </div>

    </div>
  );
}

export default Clients;