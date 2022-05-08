import React, { useState } from 'react';
import Usertable from './components/UserTable';
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';
import { set } from 'react-hook-form';

function App() {
  const usersData = [
    { id: uuidv4(), name: 'Claudia', username: 'claudiaa2343' },
    { id: uuidv4(), name: 'Valentina', username: 'vale8080' },
    { id: uuidv4(), name: 'Pedro', username: 'antonio1012' },
  ];
  //state
  const [users, setUsers] = useState(usersData);

  //Add users
  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...users, user]);
  };

  //Delete users
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  //Edit users
  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: '',
    username: '',
  });

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
    });
  };

  return (
    <div className='container'>
      <h1>CRUD App with Hooks</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          {editing ? (
            <div>
              <h2>Editar usuario</h2>
              <EditUserForm currentUser={currentUser} />
            </div>
          ) : (
            <div>
              <h2>Agregar usuarios</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className='flex-large'>
          <h2>View users</h2>
          <Usertable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
}

export default App;
