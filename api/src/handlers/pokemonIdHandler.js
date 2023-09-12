const { getPokemonIdApi } = require("../controllers/getPokemonIdApi");
const { getPokemonIdDB } = require("../controllers/getPokemonIdDB");



const pokemonIdHandler = async (req, res) => {
    try {
        const { idPokemon } = req.params;
        
        const isValidUUID = (str) => {
            const uuidRegex = /^(?:[a-f\d]{8}-[a-f\d]{4}-[1-5][a-f\d]{3}-[89ab][a-f\d]{3}-[a-f\d]{12}|[a-f\d]{32})$/i;
            return uuidRegex.test(str);
          };
        
        if(isValidUUID(idPokemon)) {

            const idPokemonDB = await getPokemonIdDB(idPokemon);
            
            if(!idPokemonDB) {
                throw new Error('No se ha podido encontrar ningún Pokémon con este ID en la DB')
            } else {
                res.status(200).json(idPokemonDB);
            }
            
        } else if(!idPokemon){
            res.status(200).json(await pokemonsHandler(req,res));
        } else {
            const idPokemonApi = await getPokemonIdApi(Number(idPokemon));
            
            if(!idPokemonApi) {
                throw new Error('No se ha podido encontrar ningún Pokémon con este ID en la API')
            } else {
                res.status(200).json(idPokemonApi);
            }
        }
    } catch (error) {
        res.status(501).send(error.message)
    }
};

module.exports = {
    pokemonIdHandler
};