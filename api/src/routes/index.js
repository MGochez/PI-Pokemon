const { Router } = require('express');
const { getAllPokemonsApi } = require('../Controllers/getAllPokemonsApi')
const { getPokemonApiById } = require('../Controllers/getPokemonApiById')
const { getPokemonApiByName } = require('../Controllers/getPokemonApiByName')
const { getPokemonByType } = require('../Controllers/getPokemonByType')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/pokemons', getAllPokemonsApi)
router.get('/pokemons/:idPokemon', getPokemonApiById )
router.get('/pokemons/name?=', getPokemonApiByName)
// router.post('/pokemons',)
router.get('/types', getPokemonByType)

module.exports = router;
