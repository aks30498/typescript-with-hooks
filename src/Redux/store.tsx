import * as redux from "redux";
import {rootReducer, RootState} from "./rootReducer";

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

type AppStore = redux.Store<RootState>;

export let store : AppStore = createStore(
    rootReducer,
    applyMiddleware(thunk)
)



