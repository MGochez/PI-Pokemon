import { Link } from "react-router-dom"
import styles from "./landing.module.css"



const Landing = () => {

  return (
    <div className={styles.body}>
      
      <div className={styles.card}>
        <div>
          <h1>¡Bienvenidos!</h1>
        </div>
        <div>
          <h2> ¡Hola! Mi nombre es Matías y este es mi proyecto de Pokèpage. Aquí podrás buscar Pokèmons como si fuese tu propia pokèdex e incluso dejar llevar tu imaginación y crear tus propios Pokèmons.</h2>
        </div>
        <img className={styles.image} src="https://imgtr.ee/images/2023/09/13/e7c66d22fa55f445ce8c61b14f44c059.png" alt="Img footer de pokemons"/>
        <div>
        <Link to='/home'>
          <button>Usuario, ¡Yo te elijo!</button>
        </Link>
        </div>
        <div>
          <p>&ldquo;Las circunstancias en las que uno nace no tienen importancia, es lo que uno hace con el don de la vida lo que nos dice quiénes somos...&ldquo; - Mewtwo</p>
        </div>
      </div>
    </div>
  )
}

export default Landing