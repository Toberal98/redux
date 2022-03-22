import initialState from './initialState';

export default function titulares(state = initialState.titulares, action){
  console.log(action)

    switch(action.type){
      case "ADD":
        return[...state, action.item]

      case "REMOVER_TITULAR":
      state =  state.filter( i => i.id !== action.item.id)
      return state
        default:
            return state;
    }
}
