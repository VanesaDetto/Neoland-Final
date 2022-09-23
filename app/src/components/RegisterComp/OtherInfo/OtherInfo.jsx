import React from 'react'
import"./OtherInfo.css"

const OtherInfo = ({ saveUser, user }) => {

  const handleInput = (e) => {
    saveUser({ [e.target.name]: e.target.value })
  }

  return (
    <div className='Other-Info' >
      <label htmlFor="avatar">Avatar</label>
      <input  className='file' type="file" id="avatar" name="avatar"  onChange={handleInput} value={user.avatar ? user.avatar : ''}  />
      
      <label htmlFor="description">Descripción</label>
      <input type="text" id="description" name="description"  onChange={handleInput} value={user.description ? user.description : ''}  /> 
    </div>
  )
}

export default OtherInfo