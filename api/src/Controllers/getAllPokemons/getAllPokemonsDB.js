const { Pokemon, Type } = require('../../db');

const getAllPokemonsDB = async () => {
    const databasePokemons = await Pokemon.findAll({
        include: Type,
    });

    return databasePokemons;
}

module.exports = {
    getAllPokemonsDB
}