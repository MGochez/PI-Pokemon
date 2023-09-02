const axios = require('axios');
const URL_API = `https://pokeapi.co/api/v2/pokemon/`


const getPokemonApiByName = async (pokemonName) => {
    try {
        const apiPokemonName = await axios.get(`${URL_API}${pokemonName}`)

        return apiPokemonName.data
        
    
    } catch (error) {
        return false
    }
}

module.exports = {
    getPokemonApiByName
}