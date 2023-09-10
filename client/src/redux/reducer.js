const initialState = {
    allTypes: [],
  
    allPokemons: [],
    copyAllPokemons: [],
  
    filtersChosen: {
      origin: "Select Origin",
      typeOne: "Select filter One",
      typeTwo: "Select filter two",
    },
  
    orderChosen: "Select Order",
  
    pokemonFoundById: {},
  
    loading: false,
    currentPage: 1,
  
    pokemonCreated: {},
    typesPokemonCreated: [],
  };

const rootReducer = (state = initialState, action) =>{
    switch (action.type) {
        case "ALL_POKEMON": 
            return {
               ...state,
               allPokemons: action.payload,
               copyAllPokemons: action.payload 
            }

        case "GET_TYPES":
            return {
                ...state,
                allTypes: action.payload
            }

        case "SET_LOADING":
            return {
              ...state,
              loading: action.payload,
            };
        
        case "REFILL_POKEMONS":
            return {
              ...state,
              allPokemons: [...state.copyAllPokemons],
            };
        
        case "SEARCH_BY_NAME":
            return {
              ...state,
              allPokemons: [
                state.copyAllPokemons.find(
                  (pokemon) => action.payload.name === pokemon.name
                ),
              ],
            };
        case "SEARCH_BY_ID":
            return {
              ...state,
              pokemonFoundById: action.payload,
            };
        case "CLEAN_DETAIL":
            return {
              ...state,
              pokemonFoundById: {},
            };
        case "CREATE_POKEMON":
            return {
              ...state,
              copyAllPokemons: [action.payload, ...state.copyAllPokemons],
              allPokemons: [action.payload, ...state.allPokemons],
            };
        
        
        default:
            return { ...state }
    }
}


export default rootReducer