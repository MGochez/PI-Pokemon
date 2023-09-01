const axios = require('axios');
const URL_TYPE = `https://pokeapi.co/api/v2/type`
const { Type } = require('../db')

const getPokemonByType = async (req, res) => {
    try {
        const apiUrl = await axios.get(URL_TYPE);
        const types = apiUrl.data.results.map((type) => type.name)

        await Promise.all(types.map(async (type) => await Type.findOrCreate({ where: {name: type}} )));

        const allTypes = await Type.findAll();
       
        return res.status(200).json(allTypes);

    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getPokemonByType
}

