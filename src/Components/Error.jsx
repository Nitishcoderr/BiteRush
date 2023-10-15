import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate()
  return (
    <div className='errorPage'>
      <div className="error-card">
        <h4>Oops! something went wrong...</h4>
        <button>
            <Link onClick={()=>navigate(-1)} > ← GO back to Previous page..</Link>
        </button>
      </div>
    </div>
  )
}

export default Error
