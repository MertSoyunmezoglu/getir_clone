import React, { useEffect, useState } from "react";
import category from "api/categories.json";

import SideBarItem from "./SideBarItem";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(category);
  }, []);

  return (
    <div className="bg-white   pr-10  w-full md:h-screen  overflow-y-scroll box-content overflow-x-hidden  rounded-lg">
      <div >
        <div  >
          {categories &&
            categories.map((category, index) => (
              <SideBarItem key={index} category={category} />
            ))}
        </div>
      </div>
    </div>
  );
}
