import { useState } from "react";
import axios from "axios";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function AddDocument() {

  const [form, setForm] = useState({
    name: "",
    type: "",
    size: "",
    uploaded: "",
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
        "http://127.0.0.1:5000/add-document",
        form
      );

      alert(response.data.message);

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
          Add Document
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 max-w-2xl"
        >

          <input
            type="text"
            name="name"
            placeholder="Document Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-4 mb-4 rounded-xl bg-white/10"
          />

          <input
            type="text"
            name="type"
            placeholder="PDF / DOCX"
            value={form.type}
            onChange={handleChange}
            className="w-full p-4 mb-4 rounded-xl bg-white/10"
          />

          <input
            type="text"
            name="size"
            placeholder="2 MB"
            value={form.size}
            onChange={handleChange}
            className="w-full p-4 mb-4 rounded-xl bg-white/10"
          />

          <input
            type="text"
            name="uploaded"
            placeholder="29 May 2026"
            value={form.uploaded}
            onChange={handleChange}
            className="w-full p-4 mb-4 rounded-xl bg-white/10"
          />

          <input
            type="text"
            name="status"
            placeholder="Verified / Pending"
            value={form.status}
            onChange={handleChange}
            className="w-full p-4 mb-6 rounded-xl bg-white/10"
          />

          <button
            type="submit"
            className="bg-green-500 px-8 py-3 rounded-xl font-semibold"
          >
            Add Document
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddDocument;