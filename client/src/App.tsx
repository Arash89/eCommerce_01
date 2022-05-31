import React from 'react';
import AppPanel from "./components/AppPanel";
import UserListContainer from './components/UserList/UserListContainer';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  return (
    <div className="container">
      <div className="row">
        <AppPanel/>
        <UserListContainer/>
      </div>
    </div>
  );
}

export default App;
