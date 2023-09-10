import React, { FunctionComponent, useState, useEffect } from "react";
import Pokemon from "./models/pokemon";
import { POKEMONS } from "./models/mock-pokemon";
import "./App.css"; // Importez le fichier CSS

const App: FunctionComponent = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [searchText, setSearchText] = useState<string>("");
    const [theme, setTheme] = useState<"light" | "dark">("light"); // État pour suivre le thème

    useEffect(() => {
        setPokemons(POKEMONS);
    }, []);

    const toggleTheme = () => {
        // Bascule entre les thèmes lorsque le bouton est cliqué
        setTheme(theme === "light" ? "dark" : "light");
    };

    const filteredPokemons = pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className={theme === "light" ? "light-body" : "dark-body"}>
            <h1 className={theme === "light" ? "center title-light" : "center title-dark"}>POKÉDEX <button className={theme === "light" ? "poke-button-light" : "poke-button-dark"} onClick={toggleTheme}></button></h1>
            <div className="search-bar-container">
                <input
                    type="text"
                    placeholder="Rechercher un Pokémon..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="search-bar-input"
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
                                        <p className="pokemon-name">{name}</p>
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
