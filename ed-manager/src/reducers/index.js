import { combineReducers } from 'redux';
import jugadores from './jugadoresReducer'
import titulares from './titularesReducer'
import suplentes from './suplentesReducer'



const rootReducer = combineReducers({
    jugadores,
    titulares,
    suplentes,

});

export default rootReducer;
