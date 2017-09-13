import { combineReducers } from 'redux';
import BillsReducer from './reducer_bills';
import ActiveBill from './reducer_active_bill';

const rootReducer = combineReducers({
    bills: BillsReducer,
    activeBill: ActiveBill
});

export default rootReducer;
