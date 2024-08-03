// import React, { useEffect, useReducer } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import LoginRouter from "./routers/LoginRouter";
// import { AuthContext } from "./context/AuthContext";
// import { AuthReducer } from "./reducers/AuthReducer";

// const init = () => {
//   return JSON.parse(localStorage.getItem("log")) || { log: false };
// };

// const App = () => {
//   const [log, dispatch] = useReducer(AuthReducer, {}, init);

//   useEffect(() => {
//     localStorage.setItem("log", JSON.stringify(log));
//   }, [log]);

//   return (
//     <AuthContext.Provider value={{ log, dispatch }}>
//       <Router>
//         <LoginRouter />
//       </Router>
//     </AuthContext.Provider>
//   );
// };

// export default App;

// import React, { useEffect, useReducer } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from "react-router-dom";
// import LoginRouter from "./routers/LoginRouter";
// import { AuthContext } from "./context/AuthContext";
// import { AuthReducer } from "./reducers/AuthReducer";

// const init = () => {
//   return JSON.parse(localStorage.getItem("log")) || { log: false };
// };

// const App = () => {
//   const [log, dispatch] = useReducer(AuthReducer, {}, init);

//   useEffect(() => {
//     localStorage.setItem("log", JSON.stringify(log));
//   }, [log]);

//   return (
//     <AuthContext.Provider value={{ log, dispatch }}>
//       <Router>
//         <Routes>
//           <Route path="/*" element={<LoginRouter />} />
//           <Route path="/" element={<Navigate to="/login" replace />} />
//         </Routes>
//       </Router>
//     </AuthContext.Provider>
//   );
// };

// export default App;

import React, { useEffect, useReducer } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LoginRouter from "./routers/LoginRouter";
import { AuthContext } from "./context/AuthContext";
import { AuthReducer } from "./reducers/AuthReducer";
import './index.css';

const init = () => {
  return JSON.parse(localStorage.getItem("log")) || { log: false };
};

const App = () => {
  const [log, dispatch] = useReducer(AuthReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("log", JSON.stringify(log));
  }, [log]);

  return (
    <AuthContext.Provider value={{ log, dispatch }}>
      <Router>
        <LoginRouter />
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
