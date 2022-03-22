import react from 'react'
import {connect} from 'react-redux'
import { addJugador, removerTitular } from '../actions/AddJugador'

const Titulares = ({ titulares, removerTitular,addJugador }) => (
  <section>
      <h2>
        11 iniciales
      </h2>
        <div className="contenedor-titulares">
            {
              titulares.map(t=>(
                <div class="card" style={{width: "14rem", display:"inline-block" ,margin: "5px"}}>
                    <img class="card-img-top" src={t.foto} alt={t.nombre} />
                    <div class="card-body">
                      <h5 class="card-title">{t.nombre}</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <button onClick={()=>{removerTitular(t); addJugador(t)}}>X</button>
                    </div>
                </div>
              ))
            }
        </div>
  </section>
)
function mapStateToProps(state, props){
  return{
    titulares:state.titulares
  };
}

function mapDispatchToProps(dispatch){
  return{
    removerTitular: (item)=>dispatch(removerTitular(item)),
    addJugador: (item)=>dispatch(addJugador(item))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Titulares)
