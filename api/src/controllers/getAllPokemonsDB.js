const { Pokemon, Type } = require('../db');

const getAllPokemonsDB = async (db) => {
    const dbPokemons = await Pokemon.findAll({
        ...db,
        include: Type
    });

    // Mapeo los nombres de los tipos de cada Pokémon
    const pokemonsWithTypes = dbPokemons.map((pokemon) => {
        const typeNames = pokemon.types.map((type) => type.name);
        return {
            ...pokemon.toJSON(), // Convierte el objeto Pokemon a JSON
            types: typeNames
        };
    });

    return pokemonsWithTypes;
}

module.exports = {
    getAllPokemonsDB
};