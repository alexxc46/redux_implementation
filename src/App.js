import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const clients = useSelector(state => state.clients.clients)
  
  const addCash = () => {
      dispatch({type: 'ADD_CASH', payload: 1})
  }
  const getCash = () => {
    dispatch({type: 'GET_CASH', payload: 1})
  }
  const addClient = (name) => {
      const client = {
        name, 
        id: Date.now()
      }
      dispatch({type: 'ADD_CLIENT', payload: client})
  }
  const removeClient = (client) => {
    dispatch({type: 'REMOVE_CLIENT', payload: client.id})
  }


  return (
    <div className="App">
      <div id="main-block">
        <h1>{cash}</h1>
        <div className="btn-block">
          <button onClick={addCash} className="btn-x">Пополнить счет</button>
          <button onClick={getCash} className="btn-x">Снять деньги</button>
          <button onClick={() => addClient(prompt())} className="btn-x">Новый клиент</button>
        </div>
        <div>
          {clients.length > 0 ? <div className="clients-block">
            {clients.map(client => <h4 onClick={() => removeClient(client)}>{client.name}</h4>)}
          </div>
          :
          <h3>Клиенты отсутствуют</h3>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
