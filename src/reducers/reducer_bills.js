export default function(state = null,action){
  switch(action.type){
  case 'BILL_SEARCH_SUCCESS':
    return action.payload
  default:
    return state;
  }
}
