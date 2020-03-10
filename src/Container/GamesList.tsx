import React, { FC, useEffect } from 'react';
import { useTypedSelector } from '../Redux/rootReducer'
import { useDispatch } from 'react-redux';
import { fetchGames } from "../Redux/Actions/gamesActions"
import GameCard from '../Components/GameCard'

interface iOwnProps { }

/**
* @author
* @function @GamesList
**/

const GamesList: FC<iOwnProps> = (props) => {
    const gamesList = useTypedSelector(state => state.games.games);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGames())
    }, [dispatch])
    return (
        gamesList ?
            <div style={{display: 'flex', flexWrap: 'wrap'}}>{gamesList.map((game) => <GameCard key={game.name} {...game} />)}</div> :
            <div>Loading...</div>

    )
}

export default GamesList