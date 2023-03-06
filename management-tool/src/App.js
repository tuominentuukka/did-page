import "./App.css";
import Main from "./pages/Main";
import Imprint from "./pages/Imprint";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RegistrationPage from "./pages/RegistrationPage";
import FaqPage from "./pages/FaqPage";
import PreviousDidPage from "./pages/PreviousDidPage";
import NextDidPage from "./pages/NextDidPage";
import LoginPage from "./pages/LoginPage";
import MeetingPage from "./pages/MeetingPage";
import CertificatePage from "./pages/CertificatePage";
import ProfilePage from "./pages/ProfilePage";
import ResetPasswordPage from "./pages/ForgotPasswordPage";

//https://main.d26fuh9dycag36.amplifyapp.com

function App() {
  document.title = "Digital Impact Day";
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Navigate replace to="/The BRIDGE project" />}
        />
        <Route path="/The BRIDGE project" element={<Main />} />
        <Route path="/Registration" element={<RegistrationPage />} />
        <Route path="/Previous DIDs" element={<PreviousDidPage />} />
        <Route path="/Next Digital Impact Day" element={<NextDidPage />} />
        <Route path="/FAQ" element={<FaqPage />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Profile" element={<LoginPage />} />
        <Route path="/UserInfo" element={<ProfilePage />} />
        <Route path="/Diploma" element={<CertificatePage />} />
        <Route path="/Meeting" element={<MeetingPage />} />
        <Route path="/ResetPassword" element={<ResetPasswordPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
