import React from 'react';
import { Provider } from 'react-redux'
import { store } from './Redux/store'
import GamesList from './Container/GamesList'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <GamesList />
      </div>
    </Provider>
  );
}

export default App;
