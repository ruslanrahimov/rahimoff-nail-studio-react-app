import { BrowserRouter, Route, Routes } from "react-router";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

import "./App.css";
import SalonRules from "./components/SalonRules.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";

function App() {
  return (
    <BrowserRouter basename="/">
      <header>
        <Navbar />
      </header>
      <div className="main-content ">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/rules" element={<SalonRules />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
