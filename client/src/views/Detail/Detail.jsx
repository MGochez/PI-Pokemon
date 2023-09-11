/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useEffect } from "react";
import { searchById } from "../../redux/actions";
import styles from './detail.module.css'

const Detail = () => {

  const { id } = useParams();
  let dispatch = useDispatch()

  let pokemonFoundById = useSelector((state) => state.pokemonFoundById)
  let { name, image, types, hp, attack, defense, speed, height, weight, spattack, spdefense} = pokemonFoundById

  const normalizeTypes = (types) => {
    if (Array.isArray(types)) {
      return types;
    } else if (typeof types === 'object') {
      // Convierte el objeto en un array de sus valores
      return Object.values(types);
    }
    // Si no es un objeto ni un array, devuelve un array vacío
    return [];
  };

  const typesArray = normalizeTypes(types)

  useEffect(() => {
    dispatch(searchById(id));
    const reset = () => {  // "engaño" al reset que la funcion no es asincrona pero en realidad si, si lo coloco "raw" en el return no me deja
      dispatch(searchById('reset'))
    };
    return reset();
  },[]);



  // Correccion de nombre, y datos pasados a metros y kgs ========
  if (name) {
    name = name.charAt(0).toUpperCase() + name.slice(1);
  }

  height = height / 10

  weight = weight / 10

  const type0 = typesArray[0]
  const type1 = typesArray[1]

  // =============================================================


  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h1>{name}</h1>
        <img src={image} className={id && !isNaN(id) ? styles.largeImage : ""} alt={name} />
      </div>
    
      <div className={styles.spaced}>
        <h2 className={styles.centered}>#ID: {id}</h2>
      </div>

      <div className={styles.types}>
      <h2 className={styles[type0]}>{type0}</h2> <h2 className={styles[type1]}>{type1 && type1}</h2>
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
          <h2 className={`${styles.centered}`}>Height: {height}m </h2>
        )}
      </div>

    </div>
  )
}

export default Detail