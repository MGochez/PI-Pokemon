const { getAllPokemonsApi } = require("../controllers/getAllPokemonsApi");
const { getAllPokemonsDB } = require("../controllers/getAllPokemonsDB");
const { Op } = require('sequelize')



const pokemonsHandler = async (req, res) => {
    try {
        const { name } = req.query

        if(name === '') {
            throw new Error('No se pudo encontrar Pokémons con este nombre');
        }

        if(name) {
            const namePokemonDB = await getAllPokemonsDB({
                where: {
                    name: { [Op.iLike]: `%${name}%`}
                },
            });
            const apiPokemons = await getAllPokemonsApi();
            
            const namePokemonApi = apiPokemons.filter((pokemon) => {
                return pokemon.name.toLowerCase().includes(name.toLowerCase());
            });
            
            if(namePokemonApi.length && namePokemonDB.length){
                throw new Error('No se pudo encontrar Pokémons con este nombre');
            }
            const result = [...namePokemonApi, ...namePokemonDB];
            res.status(200).json(result);

        } else {
            const pokemonsApi = await getAllPokemonsApi();
            const pokemonsDB = await getAllPokemonsDB();

            if(!pokemonsDB) {
                res.status(200).json(pokemonsApi);
            }
            res.status(200).json([...pokemonsDB, ...pokemonsApi]);
        };

    } catch (error) {
        res.status(500).send(error.message)
    }
};

module.exports = {
    pokemonsHandler
};