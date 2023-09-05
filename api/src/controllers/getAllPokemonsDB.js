const { Pokemon, Type } = require('../db');

const getAllPokemonsDB = async (db) => {
    const dbPokemons = await Pokemon.findAll({
        ...db,
        include: Type
    });
    

   /*  dbPokemons.map( (pokemon) => {

        console.log(pokemon.types.dataValues[0].name)
        const typesArr = pokemon.Type.map((type) => type.name)
        return {
        ...pokemon.dataValues,
        types: typesArr
    }})*/
    
    return dbPokemons;
};

module.exports = {
    getAllPokemonsDB
};