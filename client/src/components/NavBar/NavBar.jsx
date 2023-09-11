import SearchBar from "../SearchBar/SearchBar"
import { Link } from "react-router-dom"
import styles from "./navBar.module.css"

const NavBar = () => {
  return (
    <div className={styles.navbar}>
        <div>
            <Link to="/home">
              {location.pathname === '/home' ? null : <button>Home</button>}
            </Link>
        </div>
        <div className={styles.searchBar}>
          <SearchBar/>
        </div>
        <div>
          <Link to='/create'>
              {location.pathname === '/create' ? null : <button className={styles.tryButton}>Crear Pokémon</button>}
          </Link>
        </div>
    </div>
  )
}

export default NavBar