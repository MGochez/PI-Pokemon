/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector, useDispatch } from "react-redux"
import Pokemons from "../../components/Pokemons/Pokemons"
import { useEffect } from "react"
import { getAllPokemons } from "../../redux/actions"
import styles from './home.module.css'
import Paginated from '../../components/Paginated/Paginated'

const Home = () => {

  const allPokemons = useSelector((state)=> state.allPokemons)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPokemons())
  }, []);


  return (
    <div>
      <div className={styles.container}>
        <Paginated/>
        <Pokemons allPokemons={allPokemons}/>
        <Paginated/>
      </div>
    </div>
  )
}

export default Home