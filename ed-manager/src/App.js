import react from 'react'
import EquipoSeleccionado from './components/equipoSeleccionado'
import Jugadores from './components/jugadores'
const App = () => (
    <main>
      <h1>Lista de Jugadores </h1>
      <Jugadores />
      <EquipoSeleccionado />
    </main>
)

export default App;
