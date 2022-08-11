
import React, { useEffect, useState } from 'react'
import {Collapse} from 'react-collapse';

import {IoIosArrowDown,IoIosArrowUp} from 'react-icons/io'

export default function SideBarItem({category:{ title,image,subTitle,items}}) {
    const [isOpen, setIsOpen] = useState(false);

    const  toggleCollapse = ()=>{
          
            setIsOpen(!isOpen);
          
    }
   

   console.log("items",items, "subTitle",subTitle);
  
    return (
        <section>
        <nav className=' block   rounded-lg  '>
     
      
      <button onClick={toggleCollapse} className="  flex gap-x-4 transition w-60 gap-x-2 ml-1 focus:bg-purple-100 hover:bg-purple-100 text-gray-700   hover:text-primary-brand-color text-center p-0.5 m-0.5  ">
      <img src={image} alt={title}  className=" w-8 h-8  border-x-y border-opacity-30 rounded-lg "/>

       <span className=" mt-1.5 inline-block text-sm font-semibold tracking-normal "> 
          {title} 
    
       </span>
       <span className={`transition-all absolute  left-80   mt-2 mx-auto transform text-gray-400 ${isOpen ? ' rotate-180 ' : ''}`}>
       <IoIosArrowDown size={18 }/></span>
         
    
     </button> 
     <Collapse isOpened={isOpen}>

     <nav>
       <ul className=' bg-slate-50  '> 
         {items && items.map((item,key)=>(
             <li key={key} className="text-sm  py-1 px-8 transition-all cursor-pointer hover:bg-white">
             <a href="#">{item.subTitle} </a>
             </li>
         ))}
       </ul>
     </nav>
  
   </Collapse>
 


        </nav>
        
      </section>
    )
  }
