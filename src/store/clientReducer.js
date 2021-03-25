const defaultState = {
    clients: []
  }
  

export const clientReducer = (state = defaultState, action) => {
    switch(action.type) {
      case 'ADD_CLIENT': return {...state, clients: [...state.clients, action.payload]}
      case 'REMOVE_CLIENT': return {...state, clients: state.clients.filter(client => client.id != action.payload)}
  
      default: return state
    }
  
  }