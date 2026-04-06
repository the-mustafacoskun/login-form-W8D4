
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Layout.css';

import Login from './components/Login';
import { BrowserRouter } from 'react-router-dom';
import Success from './components/Success';
import { Route,Switch } from 'react-router-dom';
function App() {

  return (
    
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/Success">
          <Success />
        </Route>
      </Switch>
    </BrowserRouter>
    
  )
}

export default App
