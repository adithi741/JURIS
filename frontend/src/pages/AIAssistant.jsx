import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import PageHeader from "../components/PageHeader";
import { useState } from "react";
import axios from "axios";

function AIAssistant() {

  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);

  const sendMessage = async () => {

  if (!message.trim()) return;

  const userMessage = {
    role: "user",
    message: message,
  };

  setChats((prev) => [...prev, userMessage]);

  try {

    const response = await axios.post(
      "http://127.0.0.1:5000/ask-ai",
      {
        question: message,
      }
    );

    const aiMessage = {
      role: "ai",
      message: response.data.reply,
    };

    setChats((prev) => [...prev, aiMessage]);

  } catch (error) {
    console.log(error);
  }

  setMessage("");

};

  return (

    <div className="flex bg-[#020617] text-white min-h-screen">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="flex-1 p-8 flex flex-col">
        <Topbar />

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

          <div>

            <h1 className="text-5xl font-bold text-purple-400 mb-3">
              AI Legal Assistant
            </h1>

            <p className="text-gray-400 text-lg">
              AI-powered legal drafting, guidance,
              and case assistance platform.
            </p>

          </div>

          <button className="bg-purple-500 hover:bg-purple-600 transition px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg shadow-purple-500/20">

            + New Chat

          </button>

        </div>

        {/* AI STATS */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <h2 className="text-4xl font-bold text-purple-400 mb-3">
              248
            </h2>

            <p className="text-gray-400">
              AI Requests
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <h2 className="text-4xl font-bold text-cyan-400 mb-3">
              96%
            </h2>

            <p className="text-gray-400">
              Accuracy Rate
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

            <h2 className="text-4xl font-bold text-green-400 mb-3">
              124
            </h2>

            <p className="text-gray-400">
              Drafts Generated
            </p>

          </div>

        </div>

        {/* CHAT CONTAINER */}
        <div className="flex-1 bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col">

          {/* CHAT AREA */}
          <div className="flex-1 overflow-y-auto space-y-6 mb-6">

            {chats.map((chat, index) => (

              <div
                key={index}
                className={`max-w-3xl px-6 py-5 rounded-3xl ${
                  chat.role === "user"
                    ? "bg-purple-500 ml-auto"
                    : "bg-white/10"
                }`}
              >

                <pre className="whitespace-pre-wrap text-lg leading-relaxed">
                  {chat.message}
                </pre>

              </div>

            ))}

          </div>

          {/* INPUT AREA */}
          <div className="flex gap-4">

            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask AI Legal Assistant..."
              className="flex-1 bg-white/10 border border-white/10 rounded-2xl px-6 py-4 text-lg outline-none focus:border-purple-400"
            />

            <button
              onClick={sendMessage}
              className="bg-purple-500 hover:bg-purple-600 transition px-8 rounded-2xl text-lg font-semibold"
            >
              Send
            </button>

          </div>

        </div>

      </div>

    </div>

  );
}

export default AIAssistant;