import React, { useEffect, useState } from "react";
import category from "api/categories.json";

import Title from "./ui/Title";

import SideBarItem from "./SideBarItem";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(category);
  }, []);

 
  return (
    <div className="bg-white mt-10  border-x-y rounded-lg">
      <div className="">
       
        <div className=" ">
          {categories &&
            categories.map((category, index) => (
              <SideBarItem key={index} category={category} />
            ))}
       
        </div>
      </div>
    </div>
  );
}
