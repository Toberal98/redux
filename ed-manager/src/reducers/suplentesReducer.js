import initialState from './initialState';

export default function suplentes(state = initialState.suplentes, action){
  console.log(action)

    switch(action.type){
      case "ADD_SUPLENTE":
        return[...state, action.item]

        case "REMOVER_SUPLENTE":
         state = state.filter(s=>s.id !== action.item.id)
         return state
        default:
            return state;
    }
}
