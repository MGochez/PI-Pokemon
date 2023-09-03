const { Pokemon, Type } = require('../../db');

const getAllPokemonsDB = async () => {
    const databasePokemons = await Pokemon.findAll();

    //console.log(typeof databasePokemons[0].dataValues.id)  POR QUE ESTO ANDA ASI????? PREGUNTARLE A LOS PIBARDOS

    return databasePokemons;
}

module.exports = {
    getAllPokemonsDB
}