const axios = require('axios');
const URL_API = `https://pokeapi.co/api/v2/pokemon/`


const getPokemonApiByName = async (req, res) => {
    try {
        const {namePokemon} = req.params;

        const pokemonName = await axios.get(`${URL_API}${namePokemon}`)

        pokemonName.data
        ? res.status(200).json(pokemonName.data)
        : res.status(404).send('Name not Found')
    
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getPokemonApiByName
}