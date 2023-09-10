import { useSelector, useDispatch } from "react-redux"
import Pokemons from "../../components/Pokemons/Pokemons"
import { useEffect } from "react"
import { getAllPokemons } from "../../redux/actions"
import styles from './home.module.css'

const Home = () => {

  const allPokemons = useSelector((state)=> state.allPokemons)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPokemons())
  }, []);






  return (
    <div className={styles.container}>
      <div>Home </div>
      <Pokemons allPokemons={allPokemons}/>
    </div>
  )
}

export default Home