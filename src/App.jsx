import { BrowserRouter, Route, Routes } from "react-router";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/rahimoff-nail-studio-react-app">
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
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
