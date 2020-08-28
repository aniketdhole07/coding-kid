import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect,BrowserRouter } from 'react-router-dom';
import Ide from './ide/Ide.js';
import C6 from './class6/C6.js';
import C7 from './class7/C7.js';
import C8 from './class8/C8.js';
import C9 from './class9/C9.js';
import C10 from './class10/C10.js';
function App() {
  return (
    <BrowserRouter>
      <Switch>
      
      <Route path="/class6"  component={C6} />
      
      <Route path="/class7"  component={C7} />
      <Route path="/class8"  component={C8} />
      <Route path="/class9"  component={C9} />
      <Route path="/class10" component={C10} />
      
        <Route path="/" excat component={Ide} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>    
  );
}

export default App;
