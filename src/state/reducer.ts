import { DataSourceState, DataSourceActionTypes, LOAD_DATA_SOURCE } from "./types";

const initialState: DataSourceState | {} = {};

export const dataSourceReducer = (state = initialState, action: DataSourceActionTypes): DataSourceState | {} => {

    switch (action.type) {
        case LOAD_DATA_SOURCE:
            return action.payload;
        default:
            return state;
    }
};
