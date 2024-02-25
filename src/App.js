import './App.css';
import React, { useState } from 'react';
import UserForm from './components/userForm';
import ListUsers from './components/listUsers';

function App() {
  const [state, setState] = useState({
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    confirmpassword : ""
  });

  return (
    <div>
      <UserForm inputs={state} setInputs={setState}></UserForm>
      <ListUsers data={state}></ListUsers>
    </div>
  );
}

export default App;
