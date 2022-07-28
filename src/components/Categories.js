import React, { useEffect, useState } from 'react'
import categoryHome from 'api/categories.json'
import HomeCategory from './ui/categories/HomeCategory';
import Title from './ui/Title';
import BazaarCategory from './ui/categories/BazaarCategory';
import categoryBazaar from 'api/categoriesbazaar.json'

export default function Categories({homeCategory,bazaarCategory}) {

  const [categories, setCategories] = useState([])
  const [categoriesBazaar, setCategoriesBazaar] = useState([])

  useEffect(() => {
      setCategories(categoryHome);
  }, [])
  
  useEffect(() => {
    setCategoriesBazaar(categoryBazaar);
}, [])

  return (
    <div className="bg-white py-1">
      <div className="container mx-auto">
      <Title>Kategoriler</Title>
        <div className=' grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-9 2xl:grid-cols-10 '>
          { categories && homeCategory===true && categories.map((category,index)=> <HomeCategory key={index} category={category}/>)
          }
          { 
            categoriesBazaar && bazaarCategory===true && categoriesBazaar.map((category,index)=> <BazaarCategory key={index} category={category}/>)
          }
        </div>
      </div>
    </div>
  )
}
