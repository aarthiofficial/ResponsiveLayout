import React from "react";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import NestedCheckbox from "./components/NestedCheckbox";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Responsive Layout & Nested Checkbox</h1>
        <Layout />
        <NestedCheckbox />
      </div>
    </div>
  );
}
