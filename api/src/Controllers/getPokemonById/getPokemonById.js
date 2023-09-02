const { getPokemonApiById } = require('./getPokemonApiById');
const { getPokemonDbById } = require('./getPokemonDbById')


const getPokemonById = async (req, res) => {

    const {idPokemon} = req.params;

    if(Number(idPokemon)){

        const dbPokemonId = await getPokemonDbById(idPokemon);

        const apiPokemonId = await getPokemonApiById(idPokemon);
        

        if(dbPokemonId) {
            return res.status(201).json(dbPokemonId) 
        }

        return apiPokemonId
        ? res.status(200).json(apiPokemonId)
        : res.status(505).send('No se pudo encontrar el pokemon por Id por API')
    }

    return 'El id previsto no pudo existe en API o Database'
}

module.exports = {
    getPokemonById
}