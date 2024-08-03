// import React from "react";
// import { Characters } from "../models/Characters";
// import Card from "../components/Card";

// const ManScreen = () => {
//   const mans = Characters.filter((Character) => Character.type === "h");

//   return (
//     <div className=" container mt-5">
//       <h1>Man Screen</h1>
//       <hr />

//       <div className="root">
//         {mans.map((man) => (
//           // <h1>{man.id}</h1>
//           <Card key={man.id} {...man} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ManScreen;

import React from "react";
import { Characters } from "../models/Characters";
import Card from "../components/Card";

const ManScreen = () => {
  const mans = Characters.filter((character) => character.type === "h");

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Man Screen</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {mans.map((man) => (
          <div key={man.id} className="col">
            <Card {...man} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManScreen;
