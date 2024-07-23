import React from 'react'
import gifimage from './spneer.gif'
export default function Loading() {
  return (
    <div className='container vh-100 d-flex justify-content-center align-items-center p-5'>
       <img src={gifimage} alt="Example GIF" className='rounded-circle'  />
    </div>
  )
}
