import React, { FunctionComponent, useState, useEffect } from "react";
import Pokemon from "./models/pokemon";
import { POKEMONS } from "./models/mock-pokemon";
import "./App.css"; // Importez le fichier CSS

const App: FunctionComponent = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [searchText, setSearchText] = useState<string>("");

    useEffect(() => {
        setPokemons(POKEMONS);
    }, []);

    const filteredPokemons = pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="light-body">
            <h1 className="center">Pokédex</h1>
            <div className="search-bar-container">
                <input
                    type="text"
                    placeholder="Rechercher un Pokémon..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="search-bar-input" // Appliquer une classe CSS pour le style
                />
            </div>
            <div className="container">
                <div className="row">
                    {filteredPokemons.map(({ id, name, picture, created }) => (
                        <div className="col s6 m4" key={id}>
                            <div className="card horizontal">
                                <div className="card-image">
                                    <img src={picture} alt={name} />
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content">
                                        <p>{name}</p>
                                        <p><small>{created.toDateString()}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
