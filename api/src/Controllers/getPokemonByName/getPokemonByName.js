const { getPokemonApiByName } = require("./getPokemonApiByName");
const { getPokemonDbByName } = require("./getPokemonDbByName");



const getPokemonByName = async (req, res) => {
    try {
        const { pokemonName } = req.params;

        const pokemonNameLowerCase = pokemonName.toLowerCase();

        const apiPokemonName = await getPokemonApiByName(pokemonNameLowerCase);
        const dbPokemonName = await getPokemonDbByName(pokemonNameLowerCase);

        if(dbName) {
            return res.status(201).json(dbPokemonName)
        }

        return apiPokemonName
        ? res.status(200).json(apiPokemonName)
        : res.status(505).send('No se pudo encontrar el pokemon por name por API')

    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getPokemonByName
}
