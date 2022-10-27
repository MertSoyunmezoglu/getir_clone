import React from 'react'
import { useMemo } from 'react'
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api'
import { BsSearch } from 'react-icons/bs';
import { BiCrosshair } from 'react-icons/bi';
import {modalClose} from 'helper/helper';
export default function Maps() {
    const {isLoaded} = useLoadScript({googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,});
    if(!isLoaded) return <div>'Loading...'</div>;
  return (
    <Map/>
  )
}

function Map(){

return <div> 


<label  className='  relative block group mt-4 '>
<input required type="text" className=' peer mb-2 mx-2 rounded-md  border-gray-100 h-12 w-96  ' />
<span className=' absolute -top-1 left-0 h-full px-4 ml-2 text-xs text-gray-500 peer peer-valid:text-transparent flex items-center text-md transition-all gap-2 '><BsSearch  size={12}/> Örn. Etiler Mah.</span>
 <a href='#'  className=' absolute -top-1 right-0 h-8 mr-6 text-xs font-semibold   text-primary-brand-color px-2 rounded-lg  bg-secondary-brand-color bg-opacity-10 gap-x-1  flex items-center text-md transition-all mt-3'><BiCrosshair color='#5c3cbb' size={18}/>Konumumu Bul</a>
</label> <GoogleMap zoom={10} center={{lat:41, lng:29}} mapContainerClassName="map-container">  </GoogleMap>
</div>
}