
export function addJugador(item){
  return{
    type:"ADD_JUGADOR",
    item:item
  }
}

export function removerTitular(item){
  return {
    type: 'REMOVER_TITULAR',
    item: item
  }
}
