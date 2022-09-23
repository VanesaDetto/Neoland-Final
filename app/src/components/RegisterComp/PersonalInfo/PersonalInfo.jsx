import React from 'react'
import"./PersonalInfo.css"

const PersonalInfo = ({ saveUser, user }) => {

  const handleInput = (e) => {

    saveUser({ [e.target.name]: e.target.value })

  }
  return (
    <div className='PersonalInfo'>
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password"  onChange={handleInput} value={user.password ? user.password : ''} />
                
          <label htmlFor="email">Correo</label>
          <input type="email" id="email" name="email"  onChange={handleInput} value={user.email ? user.email : ''}  />           
    </div>
  )
}

export default PersonalInfo