import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './redux/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
 </Provider> 
) 



// UNA VEZ TERMINADOS LOS COMPONENTS, TRABAJAR EN EL STORE ACTIONS Y REDUCER. Sino te tira error, maquina 🤠👍🏼