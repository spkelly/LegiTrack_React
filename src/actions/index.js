import axios from 'axios';
export function selectBill(bill){
  console.log(bill);
  return function (dispatch){
    axios.get(`https://api.legiscan.com/?key=${process.env.REACT_APP_LEGISCAN_KEY}&op=getBill&id=${bill.bill_id}`)
      .then(response =>{
        console.log(response.data);
        dispatch( {
          type:'BILL_SELECTED',
          payload: response.data.bill
        })
      })

  }
}
export function searchBill(query){
  return function (dispatch){
    axios.get(`https://api.legiscan.com/?key=${process.env.REACT_APP_LEGISCAN_KEY}&op=search&state=CO&query=animal`)
    .then(response =>{
      console.log("sucess",response.data);
      dispatch( {
        type:'BILL_SEARCH_SUCCESS',
        payload: response.data.searchresult
      })
    })
  }
}
