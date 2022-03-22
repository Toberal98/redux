import react from 'react'
import {connect} from 'react-redux'
import { addToTitular, removerJugador } from '../actions/agregarTitular'
import { addSuplente } from '../actions/agregarSuplente'

const Jugadores = ({ jugadores, addToTitular, removerJugador, addSuplente}) =>(

  <section>
      <h2>
        Jugadores de futbol club real madrid
      </h2>


        <div className="contenedor-jugadores">
          {
          jugadores.map(j =>(
              <div class="card" style={{width: "14rem", display:"inline-block" ,margin: "5px"}}>
                  <img class="card-img-top" src={j.foto} alt={j.nombre} />
                  <div class="card-body">
                    <h5 class="card-title">{j.nombre}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <button onClick= {() => {addToTitular(j); removerJugador(j)}}>titular</button>
                      <button onClick={() => { addSuplente(j); removerJugador(j)}}>suplente</button>
                  </div>
              </div>
              ))
            }
        </div>
  </section>
)

function mapStateToProps(state, props){
  return{
    jugadores:state.jugadores
  }
}

function mapDispatchToProps(dispatch){
  return {
    addToTitular: (item)=>dispatch(addToTitular(item)),
    removerJugador: (item) => dispatch(removerJugador(item)),
    addSuplente: (item) => dispatch(addSuplente(item)),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Jugadores);
