const { getAllPokemonsDB } = require("../getAllPokemons/getAllPokemonsDB")


const getPokemonDbById = async (idPokemon) => {
    try {

        const dbPokemons = await getAllPokemonsDB();

        const dbPokemonID = dbPokemons.find((pokemon) => pokemon.dataValues?.id == idPokemon)
        
        return dbPokemonID.dataValues

    } catch (error) {
        return false
    }
}

module.exports = {
    getPokemonDbById
}