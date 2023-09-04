const { Op } = require('sequelize')
const { getAllPokemonsDB } = require('../getAllPokemons/getAllPokemonsDB');

const getPokemonDbByName = async (name) => {
    try {

        const dbPokemonName = await getAllPokemonsDB({
            where: {
              name: { [Op.iLike]: `%${name}%` },
            },
          })
        
        return dbPokemonName.dataValues

    } catch (error) {
        return false
    }
}

module.exports = {
    getPokemonDbByName
}
