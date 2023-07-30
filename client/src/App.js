import StartPage from "./pages/StartPage";
import SHowupPage from "./pages/ShowupPage";
import VideoBackground from "./pages/try";
import ContactPage from "./pages/ContactPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./style.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/aboutUs" element={<SHowupPage />} />
          <Route path="/v" element={<VideoBackground />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
