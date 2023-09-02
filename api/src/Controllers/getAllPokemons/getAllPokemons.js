const { getAllPokemonsApi } = require('./getAllPokemonsApi')
const { getAllPokemonsDB } = require('./getAllPokemonsDB')


const getAllPokemons = async (req, res) => {
    try {
        const dbPokemons = await getAllPokemonsDB();
        const apiPokemons = await getAllPokemonsApi();

        if(!apiPokemons){
            throw new Error('No se pudo obtener pokemons de la API')
        }

        if(dbPokemons.length){
            const allPokemons =  [...dbPokemons, ...apiPokemons]

            return res.status(200).json(allPokemons)
        }

        return res.status(201).json(apiPokemons)


    } catch (error) {
        res.status(500).send(error.message)
    }

}

module.exports = {
    getAllPokemons
}