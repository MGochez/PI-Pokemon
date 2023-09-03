const { getAllPokemonsDB } = require("../getAllPokemons/getAllPokemonsDB")


const getPokemonDbById = async (idPokemon) => {
    try {

        console.log(typeof idPokemon)
        const dbPokemons = await getAllPokemonsDB();

        console.log(dbPokemons);

        const dbPokemonID = dbPokemons.find((pokemon) => pokemon.dataValues?.id == idPokemon)
        
        return dbPokemonID.data

    } catch (error) {
        return false
    }
}

module.exports = {
    getPokemonDbById
}