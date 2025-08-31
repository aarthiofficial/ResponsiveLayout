import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2>My App</h2>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>
      <div className={`nav-links ${open ? "show" : ""}`}>
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#about">About</a>
      </div>
    </nav>
  );
}
