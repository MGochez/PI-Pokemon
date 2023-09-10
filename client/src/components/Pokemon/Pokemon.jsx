import { useNavigate } from "react-router-dom";
import styles from './pokemon.module.css'

const Pokemon = ({pokemon}) => {

    
    const { id, name, image, types, type } = pokemon

    let showingType = type
    if (types) {
        showingType = types
    } 

    let navigate = useNavigate()
    let navigateHandler = function() {
        navigate(`/detail/${id}`)
    }

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      };

    return (
        <div className={styles.card}>
            <div>
                <h1>{capitalizeFirstLetter(name)}</h1>
            </div>
            <img src={image} onClick={navigateHandler} alt={`Imagen de ${name}`}/>
            <div className={styles.types}>
                <h2>{showingType[0]} {showingType[1] && showingType[1]}</h2>
            </div>
        </div>
    )
}

export default Pokemon;