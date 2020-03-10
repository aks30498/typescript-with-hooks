export type Game = { 
    name: string;
    metacritic: number;
    image: string;
}

// Action types
export const Types = {
    FETCH : 'FETCH'
}

interface FetchGamesAction {
    type : typeof Types.FETCH,
    payload : Game[] | null
}

export type GamesActionTypes = FetchGamesAction;

