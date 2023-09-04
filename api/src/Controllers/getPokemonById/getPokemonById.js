const { getPokemonApiById } = require('./getPokemonApiById');
const { getPokemonDbById } = require('./getPokemonDbById')


const getPokemonById = async (req, res) => {

    const {idPokemon} = req.params;

    if(Number(idPokemon)){

        const apiPokemonId = await getPokemonApiById(idPokemon);
        
        return apiPokemonId
        ? res.status(200).json(apiPokemonId)
        : res.status(505).send('No se pudo encontrar el pokemon por Id por API')
        
    } else {
        const dbPokemonId = await getPokemonDbById(idPokemon);

        if(dbPokemonId) {
            return res.status(201).json(dbPokemonId) 
        }
    }

    return 'El id previsto no pudo existe en API o Database'
}

module.exports = {
    getPokemonById
}