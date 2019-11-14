import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { PrivateRoute } from "./Auth";
import { HeaderWithRouter } from './Header';
import { Home} from './HomeComponents/Home';
import { ProcessApp } from './ProcessComponents/ProcessApp';
import { Records } from './RecordComponents/Records';


function App() {
  return (
    <Router>
      <div>
        <HeaderWithRouter/>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/process" component={ProcessApp} />
        <Route path="/records/:id" component={Records}/>
      </div>
    </Router>
  );
}

export default App;
