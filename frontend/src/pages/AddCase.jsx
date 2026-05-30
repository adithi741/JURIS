import { useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function AddCase() {

  const [form, setForm] = useState({
    case_number: "",
    client_name: "",
    case_type: "",
    status: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {

    try {

      await axios.post(
        "http://127.0.0.1:5000/add-case",
        form
      );

      alert("Case Added Successfully");

      setForm({
        case_number: "",
        client_name: "",
        case_type: "",
        status: ""
      });

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex bg-[#020617] text-white min-h-screen">

      <Sidebar />

      <div className="flex-1 p-8">

        <Topbar />

        <h1 className="text-4xl font-bold mb-8">
          Add New Case
        </h1>

        <div className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-5">

          <input
            name="case_number"
            placeholder="Case Number"
            value={form.case_number}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white/10"
          />

          <input
            name="client_name"
            placeholder="Client Name"
            value={form.client_name}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white/10"
          />

          <input
            name="case_type"
            placeholder="Case Type"
            value={form.case_type}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white/10"
          />

          <input
            name="status"
            placeholder="Status"
            value={form.status}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white/10"
          />

          <button
            onClick={handleSubmit}
            className="bg-blue-500 px-8 py-4 rounded-xl"
          >
            Add Case
          </button>

        </div>

      </div>

    </div>
  );
}

export default AddCase;