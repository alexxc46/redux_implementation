const defaultState = {
    cash: 0
  }
  
//   Выносим название экшенов для предотвращения опечаток - хорошая практика
const ADD_CASH = 'ADD_CASH'
const GET_CASH = 'GET_CASH'

export const cashReducer = (state = defaultState, action) => {
    switch(action.type) {
      case ADD_CASH: return {...state, cash: state.cash + action.payload}
      case GET_CASH: return {...state, cash: state.cash - action.payload}
  
      default: return state
    }
  
  }

// Создаем экшен криейтер для уменьшения количества кода в параметре диспатчера (в App.js) - хорошая практика
export const addCashAction = (payload) => ({type: ADD_CASH, payload})  
export const removeCashAction = (payload) => ({type: GET_CASH, payload})    