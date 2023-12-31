const axios = require('axios');
const URL_API ='https://pokeapi.co/api/v2/pokemon?limit=151'

const getAllPokemonsApi = async () => {
    try {
        const apiUrl = await axios.get(URL_API);
        const apiData = apiUrl.data.results.map( async info => { // mapeo 
            const pokemon = await axios.get(info.url)
            return {                                             //pusheo el pokemon con sus datos
                id: pokemon.data.id,
                name: pokemon.data.name,
                image: pokemon.data.sprites.front_default,
                hp: pokemon.data.stats[0].base_stat,
                attack: pokemon.data.stats[1].base_stat,
                defense: pokemon.data.stats[2].base_stat,
                spattack:pokemon.data.stats[3].base_stat,
                spdefense:pokemon.data.stats[4].base_stat,
                speed: pokemon.data.stats[5].base_stat,
                height: pokemon.data.height,
                weight: pokemon.data.weight,
                types: pokemon.data.types.map((type) => type.type.name)
            }
        })
        const finished = await Promise.all(apiData)

        return finished

    } catch (error) {
        throw new Error('No se pudo obtener los Pokémon desde la API')
    }
};

module.exports = {
    getAllPokemonsApi
};