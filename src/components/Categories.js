import React, { useEffect, useState } from 'react'
import categoryData from 'api/categories.json'
import Category from './ui/Category';

export default function Categories() {

  const [categories, setCategories] = useState([])

  useEffect(() => {
      setCategories(categoryData);
  }, [])
  
  return (
    <div className="bg-white py-4">
      <div className="container">
        <h3 className='text-sm font-semibold gap-2 ml-6'>Kategoriler</h3>
        <div className=' grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12 '>
          { categories && categories.map((category,index)=> <Category key={index} category={category}/>)
          }
        </div>
      </div>
    </div>
  )
}
