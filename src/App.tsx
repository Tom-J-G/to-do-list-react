import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import './App.scss';

const App = () => (
        
  <div id="toDoList">
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  </div>

)

export default App