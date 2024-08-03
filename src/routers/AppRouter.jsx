// // import React from "react";
// // import { Redirect, Route, Routes } from "react-router-dom";
// // import SearchScreen from "../pages/SearchScreen";
// // import WomanScreen from "../pages/WomanScreen";
// // import ManScreen from "../pages/ManScreen";
// // import Navbar from "../components/Navbar";
// // import CharacterScreen from "../pages/CharacterScreen";

// // const AppRouter = () => {
// //   return (
// //     <>
// //       <Navbar />

// //       <Routes>
// //         <Route path="/mans" element={<ManScreen />} />

// //         <Route path="/womans" element={<WomanScreen />} />
// //         <Route path="/search" element={<SearchScreen />} />
// //         <Route path="/character/:id" element={<CharacterScreen />} />

// //         <Redirect to="/mans" />
// //       </Routes>
// //     </>
// //   );
// // };

// // export default AppRouter;

// import React from "react";
// import { Route, Routes, Navigate } from "react-router-dom";
// import SearchScreen from "../pages/SearchScreen";
// import WomanScreen from "../pages/WomanScreen";
// import ManScreen from "../pages/ManScreen";
// import Navbar from "../components/Navbar";
// import CharacterScreen from "../pages/CharacterScreen";

// const AppRouter = () => {
//   return (
//     <>
//       <Navbar />

//       <Routes>
//         <Route path="/mans" element={<ManScreen />} />
//         <Route path="/womans" element={<WomanScreen />} />
//         <Route path="/search" element={<SearchScreen />} />
//         <Route path="/character/:id" element={<CharacterScreen />} />
//         {/* <Route path="*" element={<Navigate to="/mans" replace />} /> */}
//       </Routes>
//     </>
//   );
// };

// export default AppRouter;

import React, { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// import SearchScreen from "../pages/SearchScreen";
// import WomanScreen from "../pages/WomanScreen";
// import ManScreen from "../pages/ManScreen";
import Navbar from "../components/Navbar";
import Loanding from "../components/Loanding";
import Footer from "../components/Footer";
// import CharacterScreen from "../pages/CharacterScreen";

// const Navbar = lazy(() => import("../components/Navbar"));

const ManScreen = lazy(() => import("../pages/ManScreen"));
const WomanScreen = lazy(() => import("../pages/WomanScreen"));
const SearchScreen = lazy(() => import("../pages/SearchScreen"));
const CharacterScreen = lazy(() => import("../pages/CharacterScreen"));

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loanding />}>
        <Routes>
          <Route path="/mans" element={<ManScreen />} />
          <Route path="/womans" element={<WomanScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/character/:id" element={<CharacterScreen />} />
          <Route path="*" element={<Navigate to="/mans" replace />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default AppRouter;
