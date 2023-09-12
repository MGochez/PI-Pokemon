/* eslint-disable react/prop-types */
import Pokemon from "../Pokemon/Pokemon"

const Pokemons = (props) => {

    const {allPokemons} = props

    return(
        <div>
            {
                allPokemons?.map((pokemon) => (
                    <Pokemon
                        key = {pokemon.id}
                        pokemon = {pokemon}
                    />
                ))
            }
        </div>
    )
}

export default Pokemons