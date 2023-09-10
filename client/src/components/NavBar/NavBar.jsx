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
                  <button className={styles.tryButton}>Try your own Pokemon !</button>
          </Link>
        </div>
    </div>
  )
}

export default NavBar