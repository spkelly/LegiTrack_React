import { combineReducers } from 'redux';
import GifsReducer from './bills';

const rootReducer = combineReducers({
  bills: BillsReducer
});

export default rootReducer;
