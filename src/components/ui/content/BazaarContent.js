import LocationForm from 'forms/LocationForm'
import React from 'react'
import { useState } from 'react'

export default function BazaarContent() {
  const [show, setShow] = useState(true)
  return (
    <div><div className="relative mx-auto items-center h-auto overflow-hidden  ">
      
    <div>
      <img className='w-full object-cover h-[500px]' src ='https://getir.com/_next/static/images/locals-1-0571221e6ee86dec18fe32bd2705e178.jpg'/>
    </div>
    
    <div className="relative sm:absolute inset-0  z-[40] flex items-center"> 
    <div className="w-full sm:container flex mx-auto justify-between items-center" >
     
    
    
    <LocationForm show={show}/>
    </div>
    </div>
    
    </div></div>
  )
}
