import { Link } from "react-router-dom"
import styles from "./landing.module.css"



const Landing = () => {

  return (
    <div className={styles.body}>
      <div>
      <p>LANDIN PEISH 😎</p>
      <Link to='/home'>
        <button>al jom 🏡</button>
      </Link>
      </div>
    </div>
  )
}

export default Landing