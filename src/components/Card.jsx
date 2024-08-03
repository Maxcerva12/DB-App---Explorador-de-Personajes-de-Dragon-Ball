// import React from "react";

// const Card = ({ name, type, id }) => {
//   const imgPath = `../assets/${type}-${id}.png`;

//   return (
//     <div className="card m-3 col-12 col-md-4" style={{ width: 200 }}>
//       <img className="card-img-top" src={imgPath} alt={id} />
//       <div className="card-body">
//         <h3 className="card-title">{name}</h3>
//         <p className="card-text">
//           <a className="card-link" href={`/character/${id}`}>
//             Ver más...
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Card;

import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, type, id }) => {
  const imgPath = `../assets/${type}-${id}.png`;

  return (
    <div className="character-card">
      <img
        loading="lazy"
        src={imgPath}
        alt={name}
        className="character-image"
      />
      <div className="character-info">
        <h3 className="character-name">{name}</h3>
        <Link to={`/character/${id}`} className="character-link">
          Detalles
        </Link>
      </div>
    </div>
  );
};

export default Card;
