import { Route, Routes } from "react-router-dom";
import "./App.css";
import CryptoPlatform from "./pages/CrptoPage";
import FeaturesPage from "./pages/Features";
import EarnPage from "./pages/Earn";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CryptoPlatform />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/earn" element={<EarnPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
