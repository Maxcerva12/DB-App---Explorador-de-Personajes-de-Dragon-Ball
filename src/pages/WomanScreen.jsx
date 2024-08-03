import React from "react";
import { Characters } from "../models/Characters";
import Card from "../components/Card";

const WomanScreen = () => {
  const Womans = Characters.filter((Character) => Character.type === "m");

  return (
    <div className=" container mt-5">
      <h1 className="mb-4">Woman Screen</h1>
      <hr />

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {Womans.map((woman) => (
          <div key={woman.id} className="col">
            <Card {...woman} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomanScreen;
