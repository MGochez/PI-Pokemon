const { Pokemon, Type } = require('../db')

const createNewPokemon = async (
    name,
    image,
    hp,
    attack,
    defense,
    spattack,
    spdefense,
    speed,
    height,
    weight,
    type
) => {
    try {
        const newPokemon = await Pokemon.create({
            name,
            image,
            hp,
            attack,
            defense,
            spattack,
            spdefense,
            speed,
            height,
            weight,
        });

        const types = type.map(async (tipo) => {
            const existingType = await Type.findOne({
                where: {name: tipo}
            });
            
            if (existingType) {
                await newPokemon.addType(existingType);
            }
        });

        await Promise.all(types)

        return {message: 'Su nuevo Pokémon ha sido creado.'}

    } catch (error) {
        console.log(error);
        throw new Error('No se pudo crear el Pokémon')
    }
}

module.exports = {
    createNewPokemon
}