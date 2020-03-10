import { Game, Types, GamesActionTypes } from "../Reducers/Types/games"

const fetchGamesList: (list: Game[]) => GamesActionTypes = (payload: Game[]) => {
    return {
        type: Types.FETCH,
        payload
    }
}

export const fetchGames = () => {
    // debugger;
    return (dispatch, getState) => {
        return fetch(`https://api.rawg.io/api/games?page=1`)
            .then((response: any) => {
                return response.json();
            })
            .then((data: any) => {
                let games: Game[] = data.results.map((game: any) => ({
                    name: game.name,
                    metacritic: game.metacritic,
                    image: game.background_image
                }))
                dispatch(fetchGamesList(games))
            });

    }
}