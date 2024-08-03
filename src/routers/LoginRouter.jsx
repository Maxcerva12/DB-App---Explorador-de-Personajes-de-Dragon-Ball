// import React, { useContext } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "../pages/Login";
// import AppRouter from "./AppRouter";
// import { AuthContext } from "../context/AuthContext";
// import PublicRouter from "./PublicRouter";

// const LoginRouter = () => {
//   const { log } = useContext(AuthContext);
//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/login"
//           element={
//             <PublicRouter auth={log}>
//               <Login />
//             </PublicRouter>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default LoginRouter;

// import React, { useContext } from "react";
// import { Routes, Route } from "react-router-dom";
// import PublicRouter from "./PublicRouter";
// import PrivateRouter from "./PrivateRouter";
// import Login from "../pages/Login";
// import AppRouter from "./AppRouter";
// import { AuthContext } from "../context/AuthContext";

// const LoginRouter = () => {
//   const { log } = useContext(AuthContext);

//   return (
//     <Routes>
//       <Route
//         path="/login"
//         element={
//           <PublicRouter auth={log}>
//             <Login />
//           </PublicRouter>
//         }
//       />
//       <Route
//         path="/"
//         element={
//           <PrivateRouter auth={log}>
//             <AppRouter />
//           </PrivateRouter>
//         }
//       />
//     </Routes>
//   );
// };

// export default LoginRouter;

import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import Login from "../pages/Login";
import AppRouter from "./AppRouter";
import { AuthContext } from "../context/AuthContext";

const LoginRouter = () => {
  const { log } = useContext(AuthContext);
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRouter auth={log.log}>
            <Login />
          </PublicRouter>
        }
      />
      <Route
        path="/*"
        element={
          <PrivateRouter auth={log.log}>
            <AppRouter />
          </PrivateRouter>
        }
      />
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default LoginRouter;
