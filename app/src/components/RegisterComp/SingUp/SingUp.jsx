import React from 'react'
import "./SingUp.css"

const SingUp = ({ saveUser, user }) => {

  const handleInput = (e) => {
    saveUser({ [e.target.name]: e.target.value })
  }

  return (
    <div className='Sing-up'>
          <label htmlFor="fullname">Nombre completo</label>
          <input type="text" id="fullname" name="fullname"  onChange={handleInput} value={user.fullname ? user.fullname : ''}  />
               
          <label htmlFor="username">Usuario</label>
          <input type="text" id="username" name="username"  onChange={handleInput} value={user.username ? user.username : ''}  />
    </div>
  )
}

export default SingUp