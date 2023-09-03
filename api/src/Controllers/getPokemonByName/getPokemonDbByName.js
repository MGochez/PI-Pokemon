const { Pokemon, Type } = require('../../db');
const { getAllPokemonsDB } = require('../getAllPokemons/getAllPokemonsDB');


const getPokemonDbByName = async (pokemonName) => {
    try {
        const dbPokemons = await getAllPokemonsDB();

        const dbPokemonName = dbPokemons.find((pokemon) => pokemon.name === pokemonName)

        return dbPokemonName.data

    } catch (error) {
        return false
    }
}

module.exports = {
    getPokemonDbByName
}
