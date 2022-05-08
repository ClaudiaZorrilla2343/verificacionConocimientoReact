import React, { useState } from 'react';
import Usertable from './components/UserTable';

import { v4 as uuidv4 } from 'uuid';

function App() {
  const usersData = [
    { id: uuidv4(), name: 'Claudia', username: 'claudiaa2343' },
    { id: uuidv4(), name: 'Valentina', username: 'vale8080' },
    { id: uuidv4(), name: 'Pedro', username: 'antonio1012' },
  ];
  //state
  const [users, setUsers] = useState(usersData);

  <div className='container'>
    <h1>CRUD App with Hooks</h1>
    <div className='flex-row'>
      <div className='flex-large'>
        <h2>Add user</h2>
      </div>
      <div className='flex-large'>
        <h2>View users</h2>
        <Usertable users={users} />
      </div>
    </div>
  </div>;
}

export default App;
