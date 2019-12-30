import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
const logo = require("../assets/logo.svg");
const camera = require("../assets/camera.svg");

export default function Header() {
  return (
    <header id="main-header">
      <div className="header-content">
        <Link to="/">
          <img src={logo} alt="InstaRocket" />
        </Link>
        <Link to="/new">
          <img src={camera} alt="Enviar publicacao" />
        </Link>
      </div>
    </header>
  );
}
