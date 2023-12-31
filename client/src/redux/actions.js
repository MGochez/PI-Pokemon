import axios from "axios";

import { 
        ALL_POKEMON, 
        CHOOSE_FILTERS,
        CHOOSE_ORDER,
        CLEAN_DETAIL,
        CREATE_POKEMON,
        GET_TYPES,
        REFILL_POKEMONS,
        SEARCH_BY_ID,
        SEARCH_BY_NAME,
        SET_CURRENT_PAGE,
        SET_LOADING,
        SET_POKEMON,
        SET_TYPE_POKEMON_CREATED 
    } from "./types";

export const getAllTypes = () => {
    return async (dispatch) => {
        try {
            let response = await axios.get('http://localhost:3001/types/')
            let data = response.data
            return dispatch ({
                type: GET_TYPES,
                payload: data
            });
        } catch (error) {
            alert('No se puieron traer los tipos')
        }
    };
};

export const getAllPokemons = () => {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true))
            let response = await axios.get('http://localhost:3001/pokemons');
            let data = response.data
            return dispatch({
                type: ALL_POKEMON,
                payload: data,
            });
        } catch (error) {
            alert('No se pudieron traer los Pokémons')
        } finally {
            dispatch(setLoading(false));
        }
    };
};



export const refillPokemons = () => {
    return {
        type: REFILL_POKEMONS
    };
};

export const searchByName = (name) => {
    return async (dispatch) => {
        try {
            let response = await axios.get(`http://localhost:3001/pokemons/?name=${name}`);
            let data = response.data;
            return dispatch({
                type: SEARCH_BY_NAME,
                payload: data
            });
        } catch (error) {
            alert('Nombre incorrecto')
        }
    };
};

export const searchById = (id) => {
    return async (dispatch) => {
        try {
            if (id === 'reset' ) {return dispatch({     // con este dispatch establezco
                type: SEARCH_BY_ID,                     // que el /detail/:id se reinicie y no me muestre
                payload: []                             // la data del pokemon anterior 
            })}
            dispatch(setLoading(true))
            let response = await axios.get(`http://localhost:3001/pokemons/${id}`);
            let data = response.data;
            return dispatch({
                type: SEARCH_BY_ID,
                payload: data
            });
        } catch (error) {
            alert('ID incorrecto')
        } finally {
            dispatch(setLoading(false))
        }
    };
};

export function createPokemon(pokemon) {
    return async (dispatch) => {
        try {
            let response = await axios.post('http://localhost:3001/pokemons', pokemon)
            let data = response.data;
            await dispatch({
                type: CREATE_POKEMON,
                payload: data
            });
            await dispatch(chooseFilters({
                origin:'Seleccionar origen',
                typeOne:'Seleccionar filtro 1',
                typeTwo:'Seleccionar filtro 2',
            }))
            await dispatch(chooseOrder('Seleccionar Orden'))
        
            await dispatch(setPokemonGlobal({
                name: '',
                image: '',
                hp: '',
                attack: '',
                defense: '',
                spattack: '',
                spdefense: '',
                speed: '',
                height: '',
                weight: '',
            }));
            await dispatch(setTypesGlobal([]));
            await dispatch(getAllPokemons());
            return dispatch(setCurrentPage(1));
        } catch (error) {
            alert(error.response.data)
        }
    }
}

export function chooseOrder(selection) {
    return {
        type: CHOOSE_ORDER,
        payload: selection
    }
}

export function chooseFilters(selection) {
    return{
        type: CHOOSE_FILTERS,
        payload: selection
    }
}

export function cleanDetail() {
    return {
        type: CLEAN_DETAIL
    }
}

export function setLoading(bool) {
    return {
        type: SET_LOADING,
        payload: bool
    }
}

export function setCurrentPage(pageNumber) {
    return {
        type: SET_CURRENT_PAGE,
        payload: pageNumber
    }
}

export function setPokemonGlobal(change) {
    return {
        type: SET_POKEMON,
        payload: change
    }
}

export function setTypesGlobal(change) {
    return {
        type: SET_TYPE_POKEMON_CREATED,
        payload: change
    }
}