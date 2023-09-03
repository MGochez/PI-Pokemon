const axios = require('axios');
const URL_API = `https://pokeapi.co/api/v2/pokemon/`

const getPokemonApiById = async (idPokemon) => {
    try {
        const pokemonID = await axios.get(`${URL_API}${idPokemon}`)

        return pokemonID.data

    } catch (error) {
        return false
    }
}

module.exports = {
    getPokemonApiById
}