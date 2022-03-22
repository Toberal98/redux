import initialState from './initialState';

export default function jugadores(state = initialState.jugadores, action){
  console.log(action)
    switch(action.type){
      case "ADD_JUGADOR":
        return[...state, action.item]

      case 'REMOVE_JUGADOR':
      state =  state.filter( i => i.id !== action.item.id)
      return state
      
        default:
            return state;
    }
}
