// src/App.js
import React from "react";
import TaskList from "./components/TaskList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskList />
    </div>
  );
};

export default App;
