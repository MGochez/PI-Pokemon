const { getAllPokemonsDB } = require("../getAllPokemons/getAllPokemonsDB")



const getPokemonDbById = async (idPokemon) => {
    try {
        const dbPokemons = await getAllPokemonsDB();
        console.log('LOG DE BD ID')

        const dbPokemonID = await dbPokemons.find((pokemon) => pokemon.id === idPokemon)

        return dbPokemonID

    } catch (error) {
        return false
    }
}

module.exports = {
    getPokemonDbById
}