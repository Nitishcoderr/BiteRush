import React, { useEffect, useState } from 'react'

const UserCard = () => {

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
      setUserData(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  


  return (
    <div className='user-card m-4 p-4 bg-gray-50 rounded-lg'>
      <img src={userData.avatar_url} alt="avatar" />
      <h1>Name - {userData.name}</h1>
      <h3>Location - {userData.location}</h3>
      <h4>Bio - {userData.bio}</h4>
    </div>
  )
}

export default UserCard
