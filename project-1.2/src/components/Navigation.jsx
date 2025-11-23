import React from "react";
const Navigation = () => {
  return (
    <nav className="main-nav-section">
      <div className="logo">
        <img src="./images/cover-removebg.png" alt="logo" />
      </div>

      <ul>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#blog">blog</a>
        </li>
        <li>
          <a href="#projects">projects</a>
        </li>
        <li>
          <a href="#resume">resume</a>
        </li>
        <button><i class="fa-solid fa-ellipsis"></i></button>
      </ul>
    </nav>
  );
};

export default Navigation;
