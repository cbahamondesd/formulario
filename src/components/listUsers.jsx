import React from 'react'

const listUsers = (props) => {
    const { firstName, lastName, email, password, confirmpassword} = props.data;
  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <h5>Nombre : {firstName}</h5>
      <h5>Apellido : {lastName}</h5>
      <h5>Email : {email}</h5>
      <h5>Contraseña : {password}</h5>
      <h5>Confirma Contraseña : {confirmpassword}</h5>
    </div>
  )
}

export default listUsers
