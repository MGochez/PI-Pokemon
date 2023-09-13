const { createNewPokemon } = require('../controllers/createNewPokemon');
const { getAllPokemonsApi } = require('../controllers/getAllPokemonsApi');
const { getAllPokemonsDB } = require('../controllers/getAllPokemonsDB')

const pokemonCreateHandler = async (req, res) => {
    try {
        const{
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
        } = req.body;

        const apiPokemons = await getAllPokemonsApi();
        const dbPokemons = await getAllPokemonsDB();

        const pokemonExistsApi = apiPokemons.find(
            (pokemon) => pokemon.name.toLowerCase() === name.toLowerCase()
        );

        const pokemonExistsDB = dbPokemons.find(
            (pokemon) => pokemon.name.toLowerCase() === name.toLowerCase()
        );

        if (pokemonExistsApi || pokemonExistsDB){
            throw new Error('Éste Pokémon ya existe');
        }

        if (!name || !image || !hp || !attack || !defense || !spattack || !spdefense || !speed || !height || !weight || !type) {
            throw new Error('Faltan datos del Pokémon')
        }

        if (type.length >2) {
            throw new Error('Solo pueden haber un máximo de 2 tipos por Pokémon')
        } else {
            const newPokemon = await createNewPokemon(
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
            );
            res.status(200).json(newPokemon)
        }
    } catch (error) {
        
        res.status(400).send(error.message)
    }
};

module.exports = {
    pokemonCreateHandler
};