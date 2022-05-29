import React from 'react';
import AppPanel from "./components/AppPanel";
import UserListContainer from './components/UserList/UserListContainer';

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
