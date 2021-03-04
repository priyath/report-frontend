/**
 * Types for data source module
 */
export interface DataSourceState {
    tracts: {}
}

export const LOAD_DATA_SOURCE = 'LOAD_DATA_SOURCE';

interface LoadDataSourceAction {
    type: typeof LOAD_DATA_SOURCE
    payload: DataSourceState
}

export type DataSourceActionTypes = LoadDataSourceAction;

export type AppActions = DataSourceActionTypes;
