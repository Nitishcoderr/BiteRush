import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1 className='font-bold text-3xl p-4 m-4'>Contact Us Page</h1>
      <form className='flex flex-col justify-center items-center'>
        <input type="text" className='m-2 p-2 border border-black ' placeholder='Name' />
        <input type="text" className='m-2 p-2 border border-black' placeholder='Message' />
        <button className='m-2 p-2 border border-black'>Submit</button>
      </form>
    </div>
  )
}

export default Contact