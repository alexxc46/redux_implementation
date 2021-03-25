import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash)
  
  const addCash = () => {
      dispatch({type: 'ADD_CASH', payload: 1})
  }
  const getCash = () => {
    dispatch({type: 'GET_CASH', payload: 1})
  }


  return (
    <div className="App">
      <div id="main-block">
        <p className="cash-sign">{cash}</p>
        <div className="btn-block">
          <button onClick={addCash} className="btn-x">add</button>
          <button onClick={getCash} className="btn-x">remove</button>
        </div>
      </div>
    </div>
  );
}

export default App;
