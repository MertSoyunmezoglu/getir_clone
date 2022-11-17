import React from 'react'
import { Link } from 'react-router-dom'

export default function Page404({lost }) {


  return (
    <div  className='bg-white'>
    <img className="  items-center flex justify-center h-full w-96" src="https://img.freepik.com/premium-vector/404-error-with-icon-tab-wedsite-error_114341-27.jpg?w=2000" alt="404" />
    <button className=' bg-yellow-100 flex text-center mx-28 text-md mt-2 rounded-lg h-7 w-36 justify-center'><Link to="/">Anasayfaya dön</Link> </button> 
    </div>
  )
}
 