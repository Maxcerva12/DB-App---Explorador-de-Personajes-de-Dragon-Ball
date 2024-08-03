// import React from "react";
// import { Route, Routes } from "react-router-dom";

// const PrivateRouter = ({ component: Component }) => {
//   return (
//     <Routes>
//       <Route element={<Component />} />;
//     </Routes>
//   );
// };

// export default PrivateRouter;

import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ auth, children }) => {
  if (!auth) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default PrivateRouter;
