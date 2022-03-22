export function addToTitular(item) {
  return {
      type: 'ADD',
      item: item
  };
}
export function removerJugador(item){
  return {
    type: 'REMOVE_JUGADOR',
    item: item
  }
}
