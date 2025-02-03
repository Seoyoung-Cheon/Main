import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import List from "./List";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/list" element={<List />} />
    </Routes>
  );
}

export default App;
