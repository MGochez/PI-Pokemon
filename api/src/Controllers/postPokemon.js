const {createPokemon} = require('./createPokemon')

const postPokemon = async (req, res) => {
    try {
        const {
            name,
            image,
            hp,
            attack,
            defense,
            speed,
            height,
            weight
        } = req.body;

        const newPokemon = await createPokemon(
            name,
            image,
            hp,
            attack,
            defense,
            speed,
            height,
            weight
        );
        
        res.status(200).json(newPokemon)

    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    postPokemon
}