import React, { useEffect, useState } from "react";
import category from "api/categories.json";

import SideBarItem from "./SideBarItem";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(category);
  }, []);


  
  return (
    <div className="bg-white   pr-8  w-full h-screen  overflow-y-scroll box-content overflow-x-hidden border-x-y rounded-lg">
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
