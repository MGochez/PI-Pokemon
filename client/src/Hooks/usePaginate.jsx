import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentPage } from "../redux/actions"

const usePaginate = () => {
    const dispatch = useDispatch()
    const allPokemons = useSelector((state) => state.allPokemons)
    const currentPage = useSelector((state) => state.currentPage)

    const [displayedPokemons, setDisplayedPokemons] = useState([])

    const pokemonsPerPage = 12

    useEffect(() => {
        setDisplayedPokemons(allPokemons.slice((currentPage -1) * pokemonsPerPage, (currentPage - 1) * pokemonsPerPage + pokemonsPerPage ));
    }, [allPokemons, currentPage])

    const totalPokemons = allPokemons.length;
    const lastPage = Math.ceil(totalPokemons / pokemonsPerPage);
    const totalPages = Math.ceil(totalPokemons / pokemonsPerPage);

    const handleNext = () => {
        if (currentPage < lastPage) {
            dispatch(setCurrentPage(currentPage + 1))
        }
    }

    const handlePrevious = () => {
        if (currentPage > 1) {
            dispatch(setCurrentPage(currentPage -1))
        }
    }

    return {
        handlePrevious,
        handleNext,
        currentPage,
        displayedPokemons,
        totalPages
    }
}

export default usePaginate