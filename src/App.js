import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Home from './routes/Home'
import Registery from './routes/Registery'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/registery">
            <Registery />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
