const getTypesPokemons = require('../Controllers/getTypesPokemons');
const { Type } = require ('../db');


const typesHandler = async (req, res) => {
    try {
        const dbTypes = await Type.findAll();
        
        if(dbTypes.length) {
            res.status(200).json(dbTypes);
        } else {
            res.status(200).json(await getTypesPokemons());
        }

    } catch (error) {
        res.status(400).send(error.message)        
    }
};

module.exports = {
    typesHandler
};