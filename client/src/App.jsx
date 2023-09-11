import './App.css'
import { Route , Routes, useLocation} from 'react-router-dom'
import Landing from './views/Landing/Landing'
import Home from './views/Home/Home'
import Detail from './views/Detail/Detail'
import Form from './views/Form/Form'
import NavBar from './components/NavBar/NavBar'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllPokemons, getAllTypes } from './redux/actions'



function App() {
  const location = useLocation()

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPokemons());
    dispatch(getAllTypes());
  },[])
  
  return (
    <div>
      {location.pathname === '/' ? null : <NavBar />}
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="/create" element={<Form/>} />
      </Routes>
    </div>
  )
}

export default App
