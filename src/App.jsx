import { React } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { InicioPage } from "./pages/inicio";
import { FunFactsPage } from "./pages/funfacts.jsx";
import { InfoPage } from "./pages/info.jsx";
import { AboutPage } from "./pages/about.jsx";
import { ToolsPage } from "./pages/tools.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="/funfacts" element={<FunFactsPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tools" element={<ToolsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
