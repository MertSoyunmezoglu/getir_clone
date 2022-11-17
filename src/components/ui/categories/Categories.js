import React, { useEffect, useState } from "react";
import categoryHome from "api/categories.json";

import Title from "../../../helper/Title";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoryHome);
  }, []);

  return (
    <div className="bg-white py-1">
      <div className="container mx-auto">
        <Title>Kategoriler</Title>
        <div className=" grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-9 2xl:grid-cols-10 ">
          {categories &&
            categories.map((category) => (
              <a
                href="#"
                className="  flex flex-col gap-y-4 items-center transition hover:bg-purple-100 text-gray-700   hover:text-primary-brand-color text-center p-4 "
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className=" w-12 h-12  border-x-y border-opacity-30 rounded-lg "
                />
                <span className="  text-sm font-semibold  tracking-normal whitespace-nowrap">
                  {category.title}
                </span>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}
