const { Type } = require('../db');
const axios = require('axios');
const URL_TYPES = 'https://pokeapi.co/api/v2/type'

const getTypesPokemons = async () => {
    const apiUrl = await axios.get(URL_TYPES);
    const types = apiUrl.data.results.map((type) => type.name);
    
    await Promise.all(types.map((type) => Type.findOrCreate( {where: {name:type},})));
    
    const allTypes = await Type.findAll();
    return allTypes;
};

module.exports = getTypesPokemons;