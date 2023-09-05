const { getAllPokemonsDB } = require('./getAllPokemonsDB')

const getPokemonIdDB = async (ID) => {
    try {
        const dbPokemons = await getAllPokemonsDB();
        const dbPokemonID = dbPokemons.find((pokemon) => pokemon.ID === ID);
        return dbPokemonID
    } catch (error) {
        throw new Error('Error al buscar el Pokémon por ID en la DB')
    }
}

module.exports = {
    getPokemonIdDB
}