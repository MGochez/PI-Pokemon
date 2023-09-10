const { getAllPokemonsApi } = require('./getAllPokemonsApi')

const getPokemonIdApi = async (ID) => {
    try {
        const apiPokemons = await getAllPokemonsApi();
        const apiPokemonID = apiPokemons.find((pokemon) => pokemon.id === Number(ID))
        return apiPokemonID
        
    } catch (error) {
        throw new Error('Error al buscar el Pokémon por ID en la API')
    }
}

module.exports = {
    getPokemonIdApi
}