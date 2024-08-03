// import React from "react";
// import { Route } from "react-router-dom";

// const PublicRouter = ({ auth, component: Component, ...rest }) => {
//   return <Route {...rest} component={() => <Component />} />;
// };

// export default PublicRouter;


import React from "react";
import { Navigate } from "react-router-dom";

const PublicRouter = ({ auth, children }) => {
  if (auth) {
    // Si el usuario está autenticado, redirige a la página principal
    return <Navigate to="/mans" replace />;
  }
  // Si el usuario no está autenticado, muestra el componente hijo
  return children;
};

export default PublicRouter;