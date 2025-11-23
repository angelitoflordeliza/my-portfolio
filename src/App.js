// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
