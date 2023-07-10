import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Join from "./components/Join";
import Chat from "./components/Chat";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Join />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
};

export default App;
