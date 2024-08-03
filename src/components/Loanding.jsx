import React from "react";

const Loading = () => {
  return (
    <div className="loading-container d-flex flex-column justify-content-center align-items-center">
      <div
        className="spinner-border text-light mb-3"
        role="status"
        style={{ width: "3rem", height: "3rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <h1 className="loading-text">Cargando...</h1>
    </div>
  );
};

export default Loading;
