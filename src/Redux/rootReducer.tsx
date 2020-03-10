import {combineReducers} from 'redux';
import { useSelector, TypedUseSelectorHook } from 'react-redux'

import GamesReducer from './Reducers/gamesReducer';

export const rootReducer = combineReducers({
  games: GamesReducer,
})

export type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;