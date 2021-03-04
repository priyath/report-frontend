import { dataSourceReducer } from './reducer';
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    dataSource: dataSourceReducer,
});
