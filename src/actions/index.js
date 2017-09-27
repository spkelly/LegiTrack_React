import axios from 'axios';


export function selectBill(billId){
  return function (dispatch){
    return axios.get(`https://api.legiscan.com/?key=${process.env.REACT_APP_LEGISCAN_KEY}&op=getBill&id=${billId}`)
    .then(response =>{
      dispatch( {
        type:'BILL_SELECTED',
        payload: response.data.bill
      })
    })
  }
}


export function getBillText (docId){
  return function (dispatch){
    return axios.get(`https://api.legiscan.com/?key=${process.env.REACT_APP_LEGISCAN_KEY}&op=getBillText&id=${docId}`)
    .then(response =>{
      dispatch( {
        type:'GET_DOC',
        payload: response
      })
    })
  }
}


export function searchBill(query){
  return function (dispatch){
    axios.get(`https://api.legiscan.com/?key=${process.env.REACT_APP_LEGISCAN_KEY}&op=search&state=CO&query=${query}`)
    .then(response =>{
      console.log("sucess",response.data);
      dispatch( {
        type:'BILL_SEARCH_SUCCESS',
        payload: response.data.searchresult
      })
    })
  }
}
