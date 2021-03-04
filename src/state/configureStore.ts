import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { dataSourceReducer } from "./reducer";
import { AppActions } from "./types";

// combine reducers and initialize store
export const rootReducer = combineReducers({
    dataSource: dataSourceReducer,
});

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>));
