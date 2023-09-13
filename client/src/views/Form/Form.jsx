import { useSelector } from "react-redux"
import useForm from '../../Hooks/useForm'
import styles from './form.module.css'

const Form = () => {

  const allTypes = useSelector((state) => state.allTypes)

  

  const {
    handleSubmit,
    handleInput,
    handleTypeInput,
    isTypeSelected,
    errorsPokemon,
    errorsTypes,
    pokemonCreated,
    typesPokemonCreated,
  } = useForm();


  return (
    <div className={styles.formContainer}>
        <form className={styles.form}>
          <div className={styles.inputs}>
            <div className={styles.formSection}>
              <p>* REQUERIDO</p>
              <label>Nombre* </label>
              <input value={pokemonCreated.name} name="name" onChange={handleInput} />
              <p className={styles.error}>{errorsPokemon?.name}</p>
            </div>
            <div>
              <label>Imagen (URL)* </label>
              <input value={pokemonCreated.image} type='text' name="image" onChange={handleInput} placeholder="IMG default si está vacío"/>
              <p className={styles.error}>{errorsPokemon?.image}</p>
            </div>
            <div>
              <label>HP* </label>
              <input value={pokemonCreated.hp} type="text" name="hp" onChange={handleInput} />
              <p className={styles.error}>{errorsPokemon?.hp}</p>
            </div>
            <div>
              <label>Attack* </label>
              <input value={pokemonCreated.attack} type="text" name="attack" onChange={handleInput} />
              <p className={styles.error}>{errorsPokemon?.attack}</p>
            </div>
            <div>
              <label>Defense* </label>
              <input value={pokemonCreated.defense} type="text" name="defense" onChange={handleInput} />
              <p className={styles.error}>{errorsPokemon?.defense}</p>
            </div>
            <div>
              <label>Special Attack* </label>
              <input value={pokemonCreated.spattack} type="text" name="spattack" onChange={handleInput} />
              <p className={styles.error}>{errorsPokemon?.spattack}</p>
            </div>
            <div>
              <label>Special Defense* </label>
              <input value={pokemonCreated.spdefense} type="text" name="spdefense" onChange={handleInput} />
              <p className={styles.error}>{errorsPokemon?.spdefense}</p>
            </div>
            <div>
              <label>Speed *</label>
              <input value={pokemonCreated.speed} type="text" name="speed" onChange={handleInput} />
              <p className={styles.error}>{errorsPokemon?.speed}</p>
            </div>
            <div>
              <label>Height </label>
              <input value={pokemonCreated.height} type="text" name="height" onChange={handleInput} />
              <p className={styles.error}>{errorsPokemon?.height}</p>
            </div>
            <div>
              <label>Weight </label>
              <input value={pokemonCreated.weight} type="text" name="weight" onChange={handleInput} />
              <p className={styles.error}>{errorsPokemon?.weight}</p>
            </div>
          </div>
            <div className={styles.formSection}>
              <label>Types: </label>
              <div className={styles.typeContainer}>
                {allTypes.map((type) => (
                  <div key={type.name} className={styles.typeItem}>
                    <input
                      type="checkbox"
                      name={type.name}
                      onChange={handleTypeInput}
                      value={type.name}
                      // Verifica si el tipo está seleccionado en el estado typesPokemonCreated
                      checked={isTypeSelected(type.name)}
                    />
                    <label>{type.name}</label>
                  </div>
                ))}
              </div>
                <p className={styles.error}>{errorsTypes &&errorsTypes.types}</p>
            </div>
            {(pokemonCreated.name && pokemonCreated.hp && pokemonCreated.attack && pokemonCreated.defense && typesPokemonCreated.length>0 && typesPokemonCreated.length<3 && !Object.keys(errorsPokemon).length && !Object.keys(errorsTypes).length) && (<button onClick={handleSubmit}>Create your Pokemon</button>)} 
        </form>
      
    </div>
  );
}

export default Form