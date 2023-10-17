import React from 'react'
import UserCard from './UserCard'
import '../style/About.css';


const About = () => {
  return (
    <div>
      <h1>ABOUT</h1>
      <UserCard name={"Nitish"} location={"Delhi"} />
    </div>
  )
}

export default About
