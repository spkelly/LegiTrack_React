export default function (state = null, action){
  switch(action.type){
  case 'BILL_SELECTED':
    return action.payload;
  default:
    return state;
  }


}
