import { combineReducers } from 'redux';
import BillsReducer from './reducer_bills';

const rootReducer = combineReducers({
    bills: BillsReducer
});

export default rootReducer;
