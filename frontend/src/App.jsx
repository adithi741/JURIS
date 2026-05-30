import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LawyerDashboard from "./pages/LawyerDashboard";
import JudgeDashboard from "./pages/JudgeDashboard";
import ClientDashboard from "./pages/ClientDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Cases from "./pages/Cases";
import Hearings from "./pages/Hearings";
import Clients from "./pages/Clients";
import Documents from "./pages/Documents";
import AIAssistant from "./pages/AIAssistant";
import Settings from "./pages/Settings";
import Services from "./pages/Services";
import LawyerProfile from "./pages/LawyerProfile";
import CaseTracker from "./pages/CaseTracker";
import ForgotPassword from "./pages/ForgotPassword";
import AddCase from "./pages/AddCase";
import AddClient from "./pages/AddClient";
import AddHearing from "./pages/AddHearing";
import AddDocument from "./pages/AddDocument";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Public Homepage */}
        <Route path="/" element={<Home />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Signup Page */}
        <Route path="/signup" element={<Signup />} />

        <Route path="/lawyer-dashboard" element={<LawyerDashboard />} />

        <Route path="/judge-dashboard" element={<JudgeDashboard />} />

        <Route path="/client-dashboard" element={<ClientDashboard />} />

        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        <Route path="/cases" element={<Cases />} />
        <Route path="/add-case" element={<AddCase />} />

        <Route path="/hearings" element={<Hearings />} />
        <Route path="/add-hearing" element={<AddHearing />} />

        <Route path="/clients" element={<Clients />} />
        <Route path="/add-client" element={<AddClient />} />

        <Route path="/documents" element={<Documents />} />
        <Route path="/add-document" element={<AddDocument />} />

        <Route path="/ai-assistant" element={<AIAssistant />} />

        <Route path="/settings" element={<Settings />} />

        <Route path="/services" element={<Services />} />

        <Route path="/lawyer/:id" element={<LawyerProfile />} />

        <Route path="/case/:id" element={<CaseTracker />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;