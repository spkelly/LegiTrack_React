import axios from 'axios';
export function selectBill(bill){
  axios.get('https://api.legiscan.com/?key=6a2d12a9259d0c661bf3add8d58cd236&op=getBill&id=1021714', (data)=>{
    console.log(data);
  })
  return {
    type:'BILL_SELECTED',
    payload: bill
  }
}
