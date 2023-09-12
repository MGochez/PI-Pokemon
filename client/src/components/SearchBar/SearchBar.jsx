import styles from './searchBar.module.css'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName, setCurrentPage } from "../../redux/actions";
import { FaSearch } from 'react-icons/fa'


const SearchBar = () => {
    let dispatch = useDispatch();

    let [searchName, setSearchName] = useState("")
  
    let handleChange = function (event) {
      console.log(event.target.value)
      setSearchName(event.target.value);
    }
  
    let handleSearchBar = function (name) {
      dispatch(searchByName(name));
      dispatch(setCurrentPage(1))
    }

    return (
        <div className={styles.searchcontainer}>
            <div>
              <input
                type="search"
                className={styles.input}
                value={searchName}
                onChange={handleChange}
                placeholder="Buscar Pokémon..."
              />
              <div className={`${styles.iconContainer} sm:items-center sm:justify-center`}>
                {searchName && (
                  <FaSearch className={styles.icon} onClick={() => handleSearchBar(searchName.toLowerCase())}>
                    Search
                  </FaSearch>
                )}
              </div>
            </div>
        </div>
    )
}

export default SearchBar