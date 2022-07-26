import React, { useEffect, useState } from 'react'
import {Collapse} from 'react-collapse';
import {useWindowWidth} from '@react-hook/window-size';
import {IoIosArrowDown,IoIosArrowUp} from 'react-icons/io'



export default function Menu({title, items}) {
  const [isOpen, setIsOpen] = useState(true);

  const windowWidth=useWindowWidth()
  const  toggleCollapse = ()=>{
        if(windowWidth < 640 ) {
          setIsOpen(!isOpen);
        } 
  }
  useEffect(() => {
   
    if(isOpen && windowWidth<768){
      setIsOpen(false);
    }
    else{
      setIsOpen(true);
    }
    }, [windowWidth])

  return (
      
  <section>
    <nav className='-px-4  grid gap-y-4  '>

        <h6 onClick={toggleCollapse} className=' text-lg -pr-2 text-secondary-brand-color flex justify-between  items-center'>{title}
        <span className={`transition-all transform ${isOpen ? ' rotate-180 ' : ''}`}>
           <button className='w-5 h-6 gap-x-4 items-center grid md:hidden  hover:bg-primary-brand-color hover:opacity-20 hover:text-white rounded-lg  text-primary-brand-color'><IoIosArrowDown size={18 }/></button>
        </span> 
        </h6>       
       <Collapse isOpened={isOpen}>

          <nav>
            <ul className=' grid gap-y-4 '> 
              {items.map((item,key)=>(
                  <li key={key} className="text-sm ">
                  <a href="#">{item.title} </a>
                  </li>
              ))}
            </ul>
          </nav>
       
        </Collapse>
        
    </nav>
    
  </section>
  
  )
}
