import { BrowserRouter, Route, Routes } from "react-router";
import Services from "./components/pages/Services.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/pages/HomePage.jsx";
import ErrorPage from "./components/pages/ErrorPage.jsx";
import MastersPage from "./components/pages/MastersPage.jsx";
import MasterPage from "./components/pages/MasterPage.jsx";

import "./App.css";
import SalonRules from "./components/pages/SalonRules.jsx";
import PrivacyPolicy from "./components/pages/PrivacyPolicy.jsx";

function App() {
        return (
                <BrowserRouter basename="/">
                        <header>
                                <Navbar />
                        </header>
                        <div className="main-content ">
                                <Routes>
                                        <Route index path="/" element={<Home />} />
                                        <Route path="services" element={<Services />} />
                                        <Route path="contacts" element={<Contacts />} />
                                        <Route path="*" element={<ErrorPage />} />
                                        <Route path="rules" element={<SalonRules />} />
                                        <Route path="privacy" element={<PrivacyPolicy />} />
                                        <Route path="masters" element={<MastersPage />} />
                                        <Route path="/masters/:id" element={<MasterPage />} />
                                </Routes>
                        </div>
                        <Footer />
                </BrowserRouter>
        );
}

export default App;
