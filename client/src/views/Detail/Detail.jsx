import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { cleanDetail, searchById } from "../../redux/actions";
import styles from './detail.module.css'

const Detail = () => {

  const {id} = useParams();
  let navigate = useNavigate()
  let dispatch = useDispatch()

  let pokemonFoundById = useSelector((state) => state.pokemonFoundById)
  let { name, image, types, hp, attack, defense, speed, height, weight, spattack, spdefense} = pokemonFoundById

  useEffect(() => {
    dispatch(searchById(id));
  }, []);

  let navigateHome = function() {
    navigate('/home');
    dispatch(cleanDetail())
  };

  // Correccion de nombre, y datos pasados a metros y kgs
  if (name) {
    name = name.charAt(0).toUpperCase() + name.slice(1);
  }

  height = height * 10

  weight = weight / 10
  
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h1>{name}</h1>
        <img src={image} className={id && !isNaN(id) ? styles.largeImage : ""} alt={name} />
      </div>
      {types && (
        <div className={styles.types}>
          {types.map((type) => (
            <span key={type.name} className={styles.type}>
              {type.name}
            </span>
          ))}
        </div>
      )}
      <div className={styles.spaced}>
        <h2 className={styles.centered}>#ID: {id}</h2>
      </div>
      <div className={`${styles.row} ${styles.spaced}`}>
        <h2 className={`${styles.centered} ${styles.hp}`}>HP: {hp}</h2>
        <h2 className={`${styles.centered} ${styles.attack}`}>Attack: {attack}</h2>
      </div>
      <div className={`${styles.row} ${styles.spaced}`}>
        <h2 className={`${styles.centered} ${styles.spattack}`}>SP Attack: {spattack}</h2>
        <h2 className={`${styles.centered} ${styles.spdefense}`}>SP Defense: {spdefense}</h2>
      </div>
      <div className={`${styles.row} ${styles.spaced}`}>
        <h2 className={`${styles.centered} ${styles.defense}`}>Defense: {defense}</h2>
        {speed !== 0 && (
          <h2 className={`${styles.centered} ${styles.speed}`}>Speed: {speed}</h2>
        )}
      </div>
      <div className={`${styles.row} ${styles.spaced}`}>
        {weight !== 0 && (
          <h2 className={`${styles.centered}`}>Weight: {weight}kg </h2>
        )}
        {height !== 0 && (
          <h2 className={`${styles.centered}`}>Height: {height}cm </h2>
        )}
      </div>
      <button onClick={navigateHome}>Back to Home</button>
    </div>
  )
}

export default Detail