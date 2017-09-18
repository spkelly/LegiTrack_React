import { combineReducers } from 'redux';
import BillsReducer from './reducer_bills';
import ActiveBill from './reducer_active_bill';
import getBillText from './reducer_bill_text';

const rootReducer = combineReducers({
    bills: BillsReducer,
    activeBill: ActiveBill,
    activeBillText: getBillText
});

export default rootReducer;
