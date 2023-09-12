const initialState = {
    allTypes: [],
  
    allPokemons: [],
    copyAllPokemons: [],
  
    filtersChosen: {
      origin: "Seleccionar origen",
      typeOne: "Seleccionar filtro 1",
      typeTwo: "Seleccionar filtro 2",
    },
  
    orderChosen: "Seleccionar Orden",
  
    pokemonFoundById: {},
  
    loading: false,
    currentPage: 1,
  
    pokemonCreated: {},
    typesPokemonCreated: [],
  };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_POKEMON":
      return {
        ...state,
        allPokemons: action.payload,
        copyAllPokemons: action.payload,
      };
    //-----------------------------------------FILTERS-------------------------------------------------------------------------------------------------------
    case "CHOOSE_FILTERS":
      var filtered = [...state.copyAllPokemons];

      if (action.payload.origin !== "all") {
        if (action.payload.origin === "api") {
          filtered = filtered.filter((pokemon) => {
            if (!isNaN(Number(pokemon.id))) return pokemon;  // 
          });
        }
        if (action.payload.origin === "db") {
          filtered = filtered.filter((pokemon) => {
            if (isNaN(Number(pokemon.id))) return pokemon;
          });
        }
      }

      if (action.payload.typeOne !== "Seleccionar filtro 1") {
        filtered = filtered.filter((pokemon) => {
          console.log(pokemon);
          if (
            pokemon.types.find((type) => type === action.payload.typeOne)
          )
            return pokemon;
        });
        
      }

      if (action.payload.typeTwo !== "Seleccionar filtro 2" && action.payload.typeTwo !== "") {
        filtered = filtered.filter((pokemon) => {
          if (
            pokemon.types.find((type) => type === action.payload.typeTwo)
          )
            return pokemon;
        });
      }

      return {
        ...state,
        filtersChosen: action.payload,
        allPokemons: filtered,
      };

    case "RESET_FILTER":
      return {
        ...state,
        filtersChosen: {
          origin: "Seleccionar origen",
          typeOne: "Seleccionar filtro 1",
          typeTwo: "Seleccionar filtro 2",
          orderChosen: "Seleccionar Orden",
        },
      };
    //-----------------------------------------ORDER---------------------------------------------------------------
      case "CHOOSE_ORDER":
        if (action.payload === "ascending") {
          return {
            ...state,
            orderChosen: action.payload,
            allPokemons: [...state.allPokemons].sort((a, b) =>
              a.name.localeCompare(b.name)
            ),
          };
        } else if (action.payload === "descending") {
          return {
            ...state,
            orderChosen: action.payload,
            allPokemons: [...state.allPokemons].sort((a, b) =>
              b.name.localeCompare(a.name)
            ),
          };
        } else if (action.payload === "attackAscending") {
          return {
            ...state,
            orderChosen: action.payload,
            allPokemons: [...state.allPokemons].sort(
              (a, b) => a.attack - b.attack
            ),
          };
        } else if (action.payload === "attackDescending") {
          return {
            ...state,
            orderChosen: action.payload,
            allPokemons: [...state.allPokemons].sort(
              (a, b) => b.attack - a.attack
            ),
          };
        }
        return {
          ...state,
          orderChosen: action.payload,
          allPokemons: [...state.allPokemons],
        };
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------
        
    case "REFILL_POKEMONS":
      return {
        ...state,
        allPokemons: [...state.copyAllPokemons],
      };

    case "SEARCH_BY_NAME":

     
      return {
        ...state,
        allPokemons: action.payload
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

    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };

    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    case "GET_TYPES":
      return {
        ...state,
        allTypes: action.payload,
      };
    case "SET_POKEMON":
      console.log('reducer', action.payload)
      return {
        ...state,
        pokemonCreated: action.payload,
      };

    case "SET_TYPE_POKEMON_CREATED":
      console.log('reducer set type' + action.payload)
      return {
        ...state,
        typesPokemonCreated: action.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;