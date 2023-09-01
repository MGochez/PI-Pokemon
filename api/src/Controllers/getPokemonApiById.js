const axios = require('axios');
const URL_API = `https://pokeapi.co/api/v2/pokemon/`

const getPokemonApiById = async (req, res) => {
    try {
        const {idPokemon} = req.params; // :idPokemon -> 1

        const pokemonID = await axios.get(`${URL_API}${idPokemon}`)

        return pokemonID.data
        ? res.status(200).json(pokemonID.data)
        : res.status(404).send('ID not found')

    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getPokemonApiById
}