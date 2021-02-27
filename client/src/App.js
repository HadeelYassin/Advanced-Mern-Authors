import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router,Link } from '@reach/router';
import Main from './components/Main'
import Edit from './views/Edit'
import Create from './views/Create'
function App() {
  
  
  return (
    <div className="App">
    <Router>
        <Main path="/"/>
        <Create path="/new"/>
        <Edit path="/edit/:id"/>
    </Router>
</div>
  );
}

export default App;