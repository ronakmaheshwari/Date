import { useCallback, useState, useRef, useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Yes from "./components/Yes";
import {BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/yes" element={<Yes/>}/>
      </Routes>
    </BrowserRouter>
    // <Hero />
    // <Yes />
  );
}

export default App;
