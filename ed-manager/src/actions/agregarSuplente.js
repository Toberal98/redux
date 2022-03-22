export function addSuplente(item) {
  return{
    type:'ADD_SUPLENTE',
    item: item
  }
}
export function removerSuplente(item){
  return {
    type: 'REMOVER_SUPLENTE',
    item: item
  }
}
