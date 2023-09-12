/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector, useDispatch } from "react-redux"
import Pokemon from "../../components/Pokemon/Pokemon"
import { useEffect, useState } from "react"
import { chooseFilters, chooseOrder, setCurrentPage } from "../../redux/actions"
import Paginated from '../../components/Paginated/Paginated'
import usePaginate from "../../Hooks/usePaginate"
import styles from './home.module.css'
import Loading from '../../components/Loading/Loading'

const Home = () => {

  const dispatch = useDispatch();

  const { displayedPokemons } = usePaginate()

  const loading = useSelector((state)=> state.loading)
  const allTypes = useSelector((state) => state.allTypes)
  const filtersChosen = useSelector((state)=> state.filtersChosen)
  const orderChosen = useSelector((state)=> state.orderChosen)


  const [filtersChosenLocal, setFiltersChosenLocal]= useState({
    origin:'Seleccionar origen',
    typeOne:'Seleccionar filtro 1',
    typeTwo:'Seleccionar filtro 2',
  })
  const [orderChosenLocal, setOrderChosenLocal] = useState('Seleccionar Orden')

  useEffect(()=>{ //Los manteiene sincronizados con los estados globales
    setFiltersChosenLocal(filtersChosen)
    setOrderChosenLocal(orderChosen)
  },[filtersChosen, orderChosen])

  useEffect(()=>{
    dispatch(chooseOrder(orderChosen))
  },[filtersChosen])

  let handleTypes = function (event) {
    console.log(event.target.value)
    setFiltersChosenLocal({
      ...filtersChosenLocal,
      typeOne: event.target.value,
    })
    
    dispatch(chooseFilters({
      ...filtersChosen,
      typeOne: event.target.value,
    }))
    dispatch(setCurrentPage(1))
  }
  let handleSecondTypes = function (event) {
    setFiltersChosenLocal({
      ...filtersChosenLocal,
      typeTwo: event.target.value,
    })
    
    dispatch(chooseFilters({
      ...filtersChosen,
      typeTwo: event.target.value,
    }))
    dispatch(setCurrentPage(1))
  }

  let handleOrder = function(event){
    setOrderChosenLocal(event.target.value)
    dispatch(chooseOrder(event.target.value))
  }

  let handleOrigin = function(event){
    setFiltersChosenLocal({
      ...filtersChosenLocal,
     origin: event.target.value,
    })
    dispatch(chooseFilters({
      ...filtersChosen,
     origin: event.target.value,
    }))
  }
  
  let reset = function () {
    dispatch(chooseOrder('Seleccionar Orden'))
    dispatch(setCurrentPage(1))
  
    dispatch(chooseFilters({
      origin:'Seleccionar origen',
      typeOne:'Seleccionar filtro 1',
      typeTwo:'Seleccionar filtro 2',
    }))
  }

  if(loading) return <Loading/>

  return (
    <div>

      <div className={styles.filterRow}>
        <div>
    {/*------------------------------------------------- ORIGEN ----------------------------------------------------------------------------*/}
          <select value={filtersChosenLocal.origin === 'Seleccionar origen' ? 'Todos' : filtersChosenLocal.origin} onChange={handleOrigin}>
            <option value="all">Todos</option>
            <option value="api">API</option>
            <option value="db">DataBase</option>
          </select>
        </div>

    {/*------------------------------------------------- FILTRO 1 ----------------------------------------------------------------------------*/}

        <select value={filtersChosenLocal.typeOne === 'Seleccionar filtro 1' ? '' : filtersChosenLocal.typeOne} onChange={handleTypes}>
          <option disabled value="">Seleccionar tipo</option>
          {allTypes.map((type) => {
            return <option key={type.id} value={type.name}>{type.name}</option>;
          })}
        </select>

    {/*------------------------------------------------- FILTRO 2 ----------------------------------------------------------------------------*/}

        {filtersChosenLocal.typeOne !=='Seleccionar filtro 1' ? (
            <select value={filtersChosenLocal.typeTwo === 'Seleccionar filtro 2' ? '' : filtersChosenLocal.typeTwo} onChange={handleSecondTypes}>
              <option disabled value="">Select second type</option>
              <option value="">All</option>
              {allTypes.map((type) => {
                return <option key={type.id} value={type.name}>{type.name}</option>;
              })}
            </select>
          ): null}
    {/*------------------------------------------------- ORDEN ----------------------------------------------------------------------------*/}
        <div>
          <select value={orderChosenLocal === 'Seleccionar Orden' ? '' : orderChosenLocal } onChange={handleOrder}>
            <option disabled value=''>Selecionar orden</option>
            <option value="ascending">A ➝ Z</option>
            <option value="descending">Z ➝ A</option>
            <option value="attackAscending">Attack - ➝ +</option>
            <option value="attackDescending">Attack + ➝ -</option>
          </select>
          
        </div>
          <button onClick={reset}>Reiniciar Filtros</button>
        </div>
      
      <Paginated/>

      {(!displayedPokemons.length) 
        ? <h2>No se encontraron Pokémons. Intenta reiniciar los filtros</h2>
        : <div className={styles.pokemons}>
          {displayedPokemons.map((pokemon) => (
            <div className={styles.pokemon} key={pokemon.id}>
              <Pokemon pokemon={pokemon}/>
            </div>
          ))}
        </div>
      }

      <Paginated/>

    </div>
  )
}

export default Home