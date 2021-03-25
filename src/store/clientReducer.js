const defaultState = {
    clients: []
  }
  
//   Выносим название экшенов для предотвращения опечаток - хорошая практика
const ADD_CLIENT = 'ADD_CLIENT'
const REMOVE_CLIENT = 'REMOVE_CLIENT'

export const clientReducer = (state = defaultState, action) => {
    switch(action.type) {
      case ADD_CLIENT: return {...state, clients: [...state.clients, action.payload]}
      case REMOVE_CLIENT: return {...state, clients: state.clients.filter(client => client.id != action.payload)}
  
      default: return state
    }
  
  }

// Создаем экшен криейтер для уменьшения количества кода в параметре диспатчера (в App.js) - хорошая практика
export const addClientAction = (payload) => ({type: ADD_CLIENT, payload})  
export const removeClientAction = (payload) => ({type: REMOVE_CLIENT, payload})  