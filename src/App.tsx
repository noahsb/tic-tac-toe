import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Game from './Components/Game/Game/Game';
import Home from './Components/Home';
import { ROUTES } from './Constants/Routes';

let jsonBoard = localStorage.getItem('board');
let jsonX = localStorage.getItem('xNext');
let board = jsonBoard !== null ? JSON.parse(jsonBoard) : null;
let xNext = jsonX !== null ? JSON.parse(jsonX) : null;

function App() {
  return (
    <Router>
      <Switch>
        <Route 
          path={ROUTES.SOLO}
          component={() =>
            <Game currentBoard={board} xNext={xNext} />
          } 
        />
        <Route path={ROUTES.ROOT} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;