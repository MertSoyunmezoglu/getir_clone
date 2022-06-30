import React from 'react'

export default function Menu({title, items}) {
  return (
      
    <section>
    <nav className='grid gap-y-4'>

    <h6 className=' text-md text-secondary-brand-color'>{title} </h6>
        <nav>
        <ul className=' grid gap-y-2'>
        {items.map((item,key)=>(
            <li key={key} className="text-sm ">
            <a href="#">{item.title} </a>
            </li>
        ))}
        </ul>
        
        </nav>
    </nav>
  </section>
  )
}
