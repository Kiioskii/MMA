import StartPage from "./pages/StartPage";
import StartPageAng from "./pages/StartPageAng";
import SHowupPage from "./pages/ShowupPage";
import ShowupPageAng from "./pages/ShowupPageAng";
import ContactPage from "./pages/ContactPage";
import ContactPageAng from "./pages/ContactPageAng";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./style.css";
import React from "react";

function App() {
  const [getLanguage, setLanguage] = React.useState("PL");

  console.log("getLanguage", getLanguage);

  return (
    <>
      <BrowserRouter>
        <Header getLanguage={getLanguage} setLanguage={setLanguage} />
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/Eng" element={<StartPageAng />} />
          <Route path="/aboutUs" element={<SHowupPage />} />
          <Route path="/aboutUs" element={<SHowupPage />} />
          <Route path="/aboutUsEng" element={<ShowupPageAng />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contactEng" element={<ContactPageAng />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
