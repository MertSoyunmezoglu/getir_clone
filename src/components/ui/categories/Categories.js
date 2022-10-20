import React, { useEffect, useState } from "react";
import categoryHome from "api/categories.json";
import HomeCategory from "./HomeCategory";
import Title from "../Title";

export default function Categories({ homeCategory  }) {
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
            homeCategory === true &&
            categories.map((category, index) => (
              <HomeCategory key={index} category={category} />
            ))}
        </div>
      </div>
    </div>
  );
}
