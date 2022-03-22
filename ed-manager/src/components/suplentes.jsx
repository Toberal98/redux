import react from 'react'
import {connect} from 'react-redux'
import {removerSuplente} from '../actions/agregarSuplente'
import { addJugador } from '../actions/AddJugador'

const Suplentes = ({ suplentes,removerSuplente, addJugador}) => (
  <section>
      <h2>
        Suplentes
      </h2>
        <div className="contenedor-suplentes">
            {
              suplentes.map(s=>(
                <div class="card" style={{width: "14rem", display:"inline-block" ,margin: "5px"}}>
                    <img class="card-img-top" src={s.foto} alt={s.nombre} />
                    <div class="card-body">
                      <h5 class="card-title">{s.nombre}</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <button onClick={()=> { removerSuplente(s); addJugador(s)}}>X</button>
                    </div>
                </div>
              ))
            }
        </div>
  </section>
)
function mapStateToProps(state, props){
  return{
    suplentes:state.suplentes
  };
}

function mapDispatchToProps(dispatch){
  return {
    removerSuplente: (item)=>dispatch(removerSuplente(item)),
    addJugador: (item)=>dispatch(addJugador(item))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Suplentes)
