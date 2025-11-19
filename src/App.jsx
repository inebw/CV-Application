import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Form from "./components/form";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Form />
    </div>
  );
}

export default App;
