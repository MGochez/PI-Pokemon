const { Pokemon, Type } = require('../db');

const createPokemon = async (
    name,
    image,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    typeName
) => {
    console.log('CREATE POKEMON')
    const pokemonCreated = await Pokemon.findOne({ where: {name}});

    if(pokemonCreated) {
        throw new Error(`${name} no pudo crearse, ya que fue creado anteriormente.`)
    }

    const pokemon = await Pokemon.create({
        name,
        image,
        hp,
        attack,
        defense,
        speed,
        height,
        weight
    })

    if(typeName && typeName.length > 0) {
        const type = await Type.findAll({
            where: {
                name: typeName
            }
        });
    }

    return 'Pokemon creado con éxito'
}
module.exports = {
    createPokemon
}