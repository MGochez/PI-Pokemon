const { getPokemonApiById } = require('./getPokemonApiById');
const { getPokemonDbById } = require('./getPokemonDbById')


const getPokemonById = async (req, res) => {

    const {idPokemon} = req.params;

    if(Number(idPokemon)){

        const apiPokemonId = getPokemonApiById(idPokemon);
        
        return apiPokemonId
        ? res.status(200).json(apiPokemonId)
        : res.status(505).send('No se pudo encontrar el pokemon por Id por API')
    }

}

module.exports = {
    getPokemonById
}