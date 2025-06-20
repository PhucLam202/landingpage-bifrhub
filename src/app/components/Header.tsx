import React from "react";

const Header: React.FC = () => {
  return (
    <header className="" style={{ padding: "1rem", background: "#f5f5f5", borderBottom: "1px solid #ddd" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>My Portfolio</div>
        <ul style={{ display: "flex", gap: "1.5rem", listStyle: "none", margin: 0, padding: 0 }}>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;