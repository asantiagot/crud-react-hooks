import React, { useState } from 'react';
import UserTable from './tables/UserTable';

const App = () => {
  const userData = [
    { id: 1, name: 'Antonio', username: 'asantiagot'},
    { id: 2, name: 'Luis', username: 'luiswhite'},
    { id: 3, name: 'Luffy', username: 'kaizokuoni'},    
  ];

  const [users, setUsers] = useState(userData);

  return (
    <div className="container">
      <h1>CRUD App with React Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users}/>
        </div>
      </div>
    </div>
  );
}

export default App;
