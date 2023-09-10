import { Link } from "react-router-dom"




const SearchBar = () => {
    

    return (
        <div>
            <input
                type="search"
                placeholder="Buscar Pokemon"
            />
            <Link to='/create'>
                <button >¡Crea tu pokemon!</button>
            </Link>
        </div>
    )
}

export default SearchBar