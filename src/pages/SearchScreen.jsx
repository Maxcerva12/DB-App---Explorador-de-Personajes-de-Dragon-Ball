import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { Characters } from "../models/Characters";
import Card from "../components/Card";

const SearchScreen = () => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const [inputValue, setInputValue] = useState(q);
  const [character, setCharacter] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${inputValue}`);
  };

  const getCharacters = useCallback(() => {
    if (inputValue.trim() !== "") {
      const value = inputValue.toLowerCase();
      const characters = Characters.filter((character) =>
        character.name.toLowerCase().includes(value)
      );
      setCharacter(characters);
    } else {
      setCharacter([]);
    }
  }, [inputValue]);

  useEffect(() => {
    getCharacters();
  }, [q, getCharacters]);

  return (
    <div className="search-screen">
      <div className="container py-5">
        <h1 className="text-center mb-5">Búsqueda de Personajes</h1>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="search-form-container">
              <h2 className="mb-4">Buscar</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    className="form-control form-control-lg"
                    placeholder="Nombre del personaje"
                    type="text"
                    autoComplete="off"
                    value={inputValue}
                    onChange={handleChange}
                  />
                </div>
                <button className="button_search" type="submit">
                  Buscar
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="mb-4">Resultados: {character.length}</h2>
            {character.length === 0 && (
              <div className="alert alert-info text-center">
                Por favor, busca un personaje
              </div>
            )}
            <div className="character-grid">
              {character.map((character) => (
                <Card key={character.id} {...character} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
