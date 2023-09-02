const { Router } = require('express');
const { getAllPokemons } = require('../Controllers/getAllPokemons/getAllPokemons')
const { getPokemonById } = require('../Controllers/getPokemonById/getPokemonById.js');
const { getPokemonByName } = require('../Controllers/getPokemonByName/getPokemonByName');
const { getPokemonByType } = require('../Controllers/getPokemonByType')
const { postPokemon } = require('../Controllers/postPokemon');



// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/pokemons', getAllPokemons)                     // <- TODOS
router.get('/pokemons/:idPokemon', getPokemonById)          // <- ID
router.get('/pokemons/name?=', getPokemonByName)            // <- NAME
router.post('/pokemons', postPokemon)                       // <- CREATE
router.get('/types', getPokemonByType)                      // <- TYPE
module.exports = router;
