import "./App.css";
import React from "react";
import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  let taskData = [
    { id: 1, title: "Reading", description: "Reading Book", status: "To Do" },
  ];
  return (
    <BrowserRouter>
      <div className="main">
        <h2 className="main-header">Task Management</h2>
        <Routes>
          <Route path="create" element={<Create taskData={taskData} />} />
          <Route path="read" element={<Read taskData={taskData} />} />
          <Route path="update" element={<Update />} />
        </Routes>
        {/* <Create taskData={taskData} /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
