import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Add from "./pages/Add";
import { List } from "./pages/List";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/expenses" element={<List />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
