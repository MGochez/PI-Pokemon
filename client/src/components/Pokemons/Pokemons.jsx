/* eslint-disable react/prop-types */
import Pokemon from "../Pokemon/Pokemon"
import styles from "./pokemons.module.css"

const Pokemons = (props) => {

    const {allPokemons} = props

    return(
        <div className={styles.pokemons}>
            {
                allPokemons?.map((pokemon) => (
                    <Pokemon className={styles.pokemon}
                        key = {pokemon.id}
                        pokemon = {pokemon}
                    />
                ))
            }
        </div>
    )
}

export default Pokemons