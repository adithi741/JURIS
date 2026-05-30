import { useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function AddClient() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
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
        "http://127.0.0.1:5000/add-client",
        form
      );

      alert(response.data.message);

      setForm({
        name: "",
        email: "",
        phone: "",
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
          Add Client
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white/5 p-8 rounded-3xl border border-white/10 max-w-2xl"
        >

          <input
            type="text"
            name="name"
            placeholder="Client Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-4 mb-4 rounded-xl bg-white/10"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-4 mb-4 rounded-xl bg-white/10"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-4 mb-4 rounded-xl bg-white/10"
          />

          <input
            type="text"
            name="status"
            placeholder="Active / Pending / VIP"
            value={form.status}
            onChange={handleChange}
            className="w-full p-4 mb-6 rounded-xl bg-white/10"
          />

          <button
            type="submit"
            className="bg-green-500 px-8 py-3 rounded-xl font-semibold"
          >
            Add Client
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddClient;