import React, { useEffect, useState } from 'react'
import '../style/About.css';

const UserCard = ({name,location}) => {

  const [userData, setUserData] = useState({
    name:"",
    avatar_url:"",
    location:"",
    bio:""
  })

  async function fetchData(){
    try {
      const response = await fetch('https://api.github.com/users/Nitishcoderr')
      const data = await response.json()
      console.log(data);
      setUserData(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  


  return (
    <div className='user-card'>
      <img src={userData.avatar_url} alt="avatar" />
      <h1>Name - {userData.name}</h1>
      <h3>Location - {userData.location}</h3>
      <h4>Bio - {userData.bio}</h4>
    </div>
  )
}

export default UserCard
