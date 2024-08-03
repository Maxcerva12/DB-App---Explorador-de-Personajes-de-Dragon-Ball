import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { AuthTypes } from "../types/AuthTypes";

const Navbar = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    dispatch({ type: AuthTypes.logout });
    navigate("/login", { replace: true });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          DB App
        </NavLink>
        <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <NavLink
            to="/mans"
            className="navbar-item"
            onClick={() => setIsOpen(false)}
          >
            Hombres
          </NavLink>
          <NavLink
            to="/womans"
            className="navbar-item"
            onClick={() => setIsOpen(false)}
          >
            Mujeres
          </NavLink>
          <NavLink
            to="/search"
            className="navbar-item"
            onClick={() => setIsOpen(false)}
          >
            Buscar
          </NavLink>
          <button className="navbar-button" onClick={handleLogout}>
            Salir
          </button>
        </div>
        <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
