import { useState } from "react";
import axios from "axios";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function AddHearing() {

  const [form, setForm] = useState({
    courtroom: "",
    case_number: "",
    judge_name: "",
    hearing_time: "",
    status: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post(
        "http://127.0.0.1:5000/add-hearing",
        form
      );

      alert(response.data.message);

      setForm({
        courtroom: "",
        case_number: "",
        judge_name: "",
        hearing_time: "",
        status: "",
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
          Add Hearing
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 max-w-2xl"
        >

          <input
            type="text"
            name="courtroom"
            placeholder="Courtroom"
            value={form.courtroom}
            onChange={handleChange}
            className="w-full p-4 mb-4 rounded-xl bg-white/10"
          />

          <input
            type="text"
            name="case_number"
            placeholder="Case Number"
            value={form.case_number}
            onChange={handleChange}
            className="w-full p-4 mb-4 rounded-xl bg-white/10"
          />

          <input
            type="text"
            name="judge_name"
            placeholder="Judge Name"
            value={form.judge_name}
            onChange={handleChange}
            className="w-full p-4 mb-4 rounded-xl bg-white/10"
          />

          <input
            type="text"
            name="hearing_time"
            placeholder="10:30 AM"
            value={form.hearing_time}
            onChange={handleChange}
            className="w-full p-4 mb-4 rounded-xl bg-white/10"
          />

          <input
            type="text"
            name="status"
            placeholder="Upcoming / Completed"
            value={form.status}
            onChange={handleChange}
            className="w-full p-4 mb-6 rounded-xl bg-white/10"
          />

          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-xl font-semibold"
          >
            Add Hearing
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddHearing;