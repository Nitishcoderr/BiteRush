import React from 'react'
import '../style/About.css';

const UserCard = ({name,location}) => {
  return (
    <div className='user-card'>
      <h1>Name - {name}</h1>
      <h3>Location - {location}</h3>
      <h4>Contact - @gmail.com</h4>
    </div>
  )
}

export default UserCard
