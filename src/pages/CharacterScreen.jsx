// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Characters } from "../models/Characters";

// const CharacterScreen = () => {
//   const { id } = useParams();

//   const navigate = useNavigate();

//   const { type, description, name } = Characters.find(
//     (character) => character.id === id
//   );

//   const imgPath = `../assets/${type}-${id}.png`;

//   const handleBack = () => {
//     navigate(-1); // Usa -1 para volver atrás en la historia
//   };

//   return (
//     <div className="container row mt-5">
//       <div className="col-8">
//         <img
//           className="img-thumbnail "
//           style={{
//             width: "70%",
//             height: "400px",
//             objectFit: "contain",
//           }}
//           src={imgPath}
//           alt={id}
//         />
//       </div>
//       <div className="col-4">
//         <h2>Nombre: {name}</h2>
//         <p>Descripción: {description}</p>

//         <button onClick={handleBack} className="btn btn-outline-warning">
//           Go Back
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CharacterScreen;

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Characters } from "../models/Characters";

const CharacterScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { type, description, name } = Characters.find(
    (character) => character.id === id
  );
  const imgPath = `../assets/${type}-${id}.png`;

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="character-screen">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <img className="character-image1" src={imgPath} alt={name} />
          </div>
          <div className="col-md-6">
            <div className="character-info">
              <h2 className="character-name">{name}</h2>
              <p className="character-description">{description}</p>
              <button onClick={handleBack} className="btn btn-outline-primary">
                Volver
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterScreen;
