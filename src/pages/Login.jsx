// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
// import { AuthTypes } from "../types/AuthTypes";
// const Login = () => {
//   const { log, dispatch } = useContext(AuthContext);

//   const navigate = useNavigate();

//   const handleLogin = () => {
//     dispatch({ type: AuthTypes.login });
//     navigate("/mans");
//   };

//   return (
//     <div className="container mt-5 text-center">
//       <img src="../assets/animate.gif" alt="anime" />
//       <h1 className="my-3">Login Screen</h1>
//       <button onClick={handleLogin} className="btn btn-primary">
//         Login
//       </button>
//     </div>
//   );
// };

// export default Login;

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { AuthTypes } from "../types/AuthTypes";

const Login = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch({ type: AuthTypes.login });
    navigate("/mans");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img
          src="../assets/animate.gif"
          alt="DB App Logo"
          className="login-logo"
        />
        <h1 className="login-title">DB App</h1>
        <p className="login-subtitle">Explora el universo de Dragon Ball</p>
        <button onClick={handleLogin} className="login-button">
          Iniciar Aventura
        </button>
      </div>
    </div>
  );
};

export default Login;
