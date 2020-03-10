import { Game, GamesActionTypes, Types } from "./Types/games";

interface GamesState {
    games: Game[] | null;
}

const initialState: GamesState = {
    games: null
}

export default function GamesReducer(state: GamesState = initialState, action: GamesActionTypes): GamesState {
    switch (action.type) {
        case Types.FETCH:
            return {
                games: action.payload
            };
        default:
            return state;
    }
}