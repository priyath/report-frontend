import { DataSourceState, LOAD_DATA_SOURCE, DataSourceActionTypes} from "./types";
// import {Dispatch} from "redux";
// import {AppState} from "./configureStore";
import jsonData from '../data/data.json';

export const loadDataSource = (): DataSourceActionTypes => {
  return {
      type: LOAD_DATA_SOURCE,
      payload: jsonData
  }
};

// export const loadDataSourceAsync = () => {
//     return (dispatch: Dispatch<DataSourceActionTypes>, getState: () => AppState) => {
//
//     }
// };

