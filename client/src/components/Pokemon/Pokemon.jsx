import { useNavigate } from "react-router-dom";
import styles from './pokemon.module.css'

const Pokemon = ({pokemon}) => {

    console.log(pokemon)
    const {id, name, image, types } = pokemon

    console.log(types)

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
            <img src={image} onClick={navigateHandler} alt={name}/>
            {/* <div>
                {types?.map((type, index) => {
                    return <h2 key={index}>{type.name}</h2>
                })}
            </div> */}
        </div>
    )
}

export default Pokemon;