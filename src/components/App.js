import React from 'react';

// import containers connected to components
import {TodoContainer} from '../containers/Todo';
import {CreateListContainer} from '../containers/CreateList'


import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/look.css';

function App() {
  return (
    <div className="container-fluid p-3">
    <div id="app">
      <CreateListContainer />
      <TodoContainer />
    </div>
    </div>
  );
}

export default App;
