import React, { useState } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';

const App = () => {
  const userData = [
    { id: 1, name: 'Antonio', username: 'asantiagot'},
    { id: 2, name: 'Luis', username: 'luiswhite'},
    { id: 3, name: 'Luffy', username: 'kaizokuoni'},    
  ];

  const initialFormState = { id: null, name: '', username: '' };

  const [users, setUsers] = useState(userData);

  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  }

  const deleteUser = id => {
    setEditing(false);
    setUsers(users.filter(user => user.id !== id));
  }

  const editRow = user => {
    setEditing(true);
    setCurrentUser(user);
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user => {
      return user.id === id ? updatedUser : user;
    }));
  }

  return (
    <div className="container">
      <h1>CRUD App with React Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
        { editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm 
                currentUser={currentUser} 
                updateUser={updateUser}
                editing={editing}
                setEditing={setEditing}/>
            </div>
          ) :
          (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser}/>
            </div>
          )
        }
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
        </div>
      </div>
    </div>
  );
}

export default App;
