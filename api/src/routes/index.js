const { Router } = require('express');
const { getAllPokemons } = require('../Controllers/getAllPokemons')
const { getPokemonById } = require('../Controllers/getPokemonById.JS');
const { getPokemonApiByName } = require('../Controllers/getPokemonApiByName')
const { getPokemonByType } = require('../Controllers/getPokemonByType')
const { postPokemon } = require('../Controllers/postPokemon');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/pokemons', getAllPokemons)
router.get('/pokemons/:idPokemon', getPokemonById )
router.get('/pokemons/name?=', getPokemonApiByName)
router.post('/pokemons', postPokemon)
router.get('/types', getPokemonByType)

module.exports = router;
