const { getPokemonIdApi } = require("../controllers/getPokemonIdApi");
const { getPokemonIdDB } = require("../controllers/getPokemonIdDB");



const pokemonIdHandler = async (req, res) => {
    try {
        const { idPokemon } = req.params;

        if(!idPokemon){
            res.status(200).json(await pokemonsHandler(req,res));
        } else {
            const idPokemonApi = await getPokemonIdApi(Number(idPokemon));
            const idPokemonDB = await getPokemonIdDB(idPokemon);

            if(!idPokemonApi && !idPokemonDB) {
                throw new Error('No se ha podido encontrar ningún Pokémon con este ID')
            } else {
                res.status(200).json({idPokemonApi, idPokemonDB});
            }
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
};

module.exports = {
    pokemonIdHandler
};