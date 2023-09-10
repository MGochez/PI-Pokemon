const { getAllPokemonsDB } = require('./getAllPokemonsDB')

const getPokemonIdDB = async (ID) => {
    try {
        const dbPokemons = await getAllPokemonsDB();
        const dbPokemonID = dbPokemons.find((pokemon) => pokemon.id == ID);
        return dbPokemonID
    } catch (error) {
        throw new Error('Error al buscar los Pokémon en la DB')
    }
}

module.exports = {
    getPokemonIdDB
}