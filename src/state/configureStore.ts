import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { dataSourceReducer } from "./reducer";
import { AppActions } from "./types";

export const rootReducer = combineReducers({
    dataSource: dataSourceReducer,
});

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>));
