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

function Documents() {
  const [documents, setDocuments] = useState([]);
  const [showModal, setShowModal] = useState(false);
const [selectedDocument, setSelectedDocument] = useState(null);

const [name, setName] = useState("");
const [type, setType] = useState("");
const [size, setSize] = useState("");
const [uploaded, setUploaded] = useState("");
const [status, setStatus] = useState("");
const [isEditing, setIsEditing] = useState(false);
const [file, setFile] = useState(null);
const [search, setSearch] = useState("");
const [showDetails, setShowDetails] = useState(false);
const [selectedDoc, setSelectedDoc] = useState(null);
const [pdfUrl, setPdfUrl] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/documents")
      .then((response) => {
        setDocuments(response.data.documents);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const uploadFile = async () => {

  if (!file) return;

  const formData = new FormData();

  formData.append("file", file);

  await axios.post(
    "http://127.0.0.1:5000/upload-document",
    formData
  );

};

  const deleteDocument = async (id) => {

  try {

    await axios.delete(
      `http://127.0.0.1:5000/delete-document/${id}`
    );

    window.location.reload();

  } catch (error) {

    console.log(error);

  }

};
const openDocument = (doc) => {

  setIsEditing(true);

  setSelectedDocument(doc);

  setName(doc[1]);
  setType(doc[2]);
  setSize(doc[3]);
  setUploaded(doc[4]);
  setStatus(doc[5]);

  setShowModal(true);

};

const updateDocument = async () => {

  try {

    await axios.put(
      `http://127.0.0.1:5000/update-document/${selectedDocument[0]}`,
      {
        name,
        type,
        size,
        uploaded,
        status,
      }
    );

    setShowModal(false);
    window.location.reload();

  } catch (error) {

    console.log(error);

  }

};

const addDocument = async () => {

  try {

        if (file) {
      await uploadFile();
    }

    await axios.post(
      "http://127.0.0.1:5000/add-document",
      {
        name,
        type,
        size,
        uploaded,
        status,
      }
    );

    setShowModal(false);
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

        <PageHeader
  title="Documents"
  subtitle="Upload, manage and verify legal documents securely."
/>

<div className="flex justify-end mb-6">

  <button
    onClick={() => {

      setIsEditing(false);

      setName("");
      setType("");
      setSize("");
      setUploaded("");
      setStatus("");

      setShowModal(true);

    }}
    className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-5 py-3 rounded-xl font-semibold"
  >

    <FaPlus />

    Add Document

  </button>

</div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h2 className="text-4xl font-bold text-green-400 mb-3">
              {documents.length}
            </h2>
            <p className="text-gray-400">
              Total Documents
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h2 className="text-4xl font-bold text-blue-400 mb-3">
              {
                documents.filter(
                  (doc) => doc[5] === "Verified"
                ).length
              }
            </h2>
            <p className="text-gray-400">
              Verified Documents
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h2 className="text-4xl font-bold text-yellow-400 mb-3">
              {
                documents.filter(
                  (doc) => doc[5] === "Pending"
                ).length
              }
            </h2>
            <p className="text-gray-400">
              Pending Reviews
            </p>
          </div>

        </div>
        <input
  type="text"
  placeholder="Search Documents..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="w-full mb-6 bg-white/10 p-4 rounded-xl"
/>

        {/* DOCUMENT TABLE */}
        <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">

          {/* HEADER */}
          <div className="grid grid-cols-6 gap-4 px-6 py-5 border-b border-white/10 text-gray-400 font-semibold">

            <p>Document</p>
            <p>Type</p>
            <p>Size</p>
            <p>Uploaded</p>
            <p>Status</p>
            <p>Action</p>

          </div>

          {/* DOCUMENTS */}
          {documents
          .filter((item) =>
  item[1].toLowerCase().includes(search.toLowerCase()) ||
  item[2].toLowerCase().includes(search.toLowerCase()) ||
  item[3].toLowerCase().includes(search.toLowerCase())
)
          .map((doc) => (

            <div
              key={doc[0]}
              className="grid grid-cols-6 gap-4 px-6 py-5 border-b border-white/5 hover:bg-white/5 transition items-center"
            >

              <p className="font-medium">
                {doc[1]}
              </p>

              <p>
                {doc[2]}
              </p>

              <p>
                {doc[3]}
              </p>

              <p>
                {doc[4]}
              </p>

              <p>

                <span
                  className={`px-4 py-2 rounded-xl text-sm font-semibold
                  ${
                    doc[5] === "Verified"
                      ? "bg-green-500/20 text-green-400"
                      : doc[5] === "Pending"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {doc[5]}
                </span>

              </p>

              <div className="flex flex-wrap gap-2">

<button
  onClick={() => {

    setSelectedDoc(doc);

    setShowDetails(true);

  }}
  className="flex items-center gap-2 bg-blue-500 px-3 py-2 rounded-xl"
>
  <FaEye />
</button>

  <button
  onClick={() => openDocument(doc)}
  className="flex items-center gap-2 bg-yellow-500 text-black px-3 py-2 rounded-xl"
>
  <FaEdit />
</button>

  <button
  onClick={() => deleteDocument(doc[0])}
  className="flex items-center gap-2 bg-red-500 px-3 py-2 rounded-xl"
>
  <FaTrash />
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

      {isEditing ? "Edit Document" : "Add Document"}

    </h2>

    <div className="space-y-4">

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Document Name"
        className="w-full bg-white/10 p-4 rounded-xl"
      />

      <input
        value={type}
        onChange={(e) => setType(e.target.value)}
        placeholder="Type"
        className="w-full bg-white/10 p-4 rounded-xl"
      />

      <input
        value={size}
        onChange={(e) => setSize(e.target.value)}
        placeholder="Size"
        className="w-full bg-white/10 p-4 rounded-xl"
      />

      <input
        value={uploaded}
        onChange={(e) => setUploaded(e.target.value)}
        placeholder="Upload Date"
        className="w-full bg-white/10 p-4 rounded-xl"
      />

      <input
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        placeholder="Status"
        className="w-full bg-white/10 p-4 rounded-xl"
      />

      <div>

  <label
    htmlFor="documentFile"
    className="
      flex items-center justify-center
      w-full
      cursor-pointer
      bg-white/10
      border border-white/10
      rounded-2xl
      py-4
      hover:border-green-400
      transition
    "
  >

    📂 Select Legal Document

  </label>

  <input
    id="documentFile"
    type="file"
    className="hidden"
    onChange={(e) =>
      setFile(e.target.files[0])
    }
  />

  {file && (

    <p className="mt-3 text-green-400 text-sm">

      Selected:
      {" "}
      {file.name}

    </p>

  )}

</div>

    </div>

    <div className="flex gap-3 mt-6">

      <button
        onClick={
          isEditing
            ? updateDocument
            : addDocument
        }
        className="bg-green-500 px-5 py-3 rounded-xl"
      >
        Save
      </button>

      <button
        onClick={() => {
          setShowModal(false);
          setSelectedDocument(null);
        }}
        className="bg-red-500 px-5 py-3 rounded-xl"
      >
        Close
      </button>

    </div>

  </div>

</div>

)}

{showDetails && selectedDoc && (

<div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

  <div className="bg-[#061129] p-8 rounded-3xl w-[500px]">

    <h2 className="text-3xl font-bold mb-6">
      Document Details
    </h2>

    <div className="space-y-4">

      <p><strong>Name:</strong> {selectedDoc[1]}</p>

      <p><strong>Type:</strong> {selectedDoc[2]}</p>

      <p><strong>Size:</strong> {selectedDoc[3]}</p>

      <p><strong>Uploaded:</strong> {selectedDoc[4]}</p>

      <p><strong>Status:</strong> {selectedDoc[5]}</p>

    </div>

    <div className="flex gap-3 mt-6">

      <button
        onClick={() => {

          setPdfUrl(
            `http://127.0.0.1:5000/uploads/${selectedDoc[1]}`
          );

          setShowDetails(false);

        }}
        className="bg-green-500 px-5 py-3 rounded-xl"
      >
        View PDF
      </button>

      <button
        onClick={() => setShowDetails(false)}
        className="bg-red-500 px-5 py-3 rounded-xl"
      >
        Close
      </button>

    </div>

  </div>

</div>

)}

{pdfUrl && (

<div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

  <div className="w-[90%] h-[90%] bg-white rounded-2xl overflow-hidden">

    <div className="flex justify-end p-3">

      <button
        onClick={() => setPdfUrl("")}
        className="bg-red-500 text-white px-4 py-2 rounded-xl"
      >
        Close
      </button>

    </div>

    <iframe
      src={pdfUrl}
      title="PDF Viewer"
      className="w-full h-[95%]"
    />

  </div>

</div>

)}

</div>
);
}

export default Documents;