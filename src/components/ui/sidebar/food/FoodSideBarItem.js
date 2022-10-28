import React, { useEffect, useState } from "react";
import { Collapse } from "react-collapse";
import { IoIosArrowDown } from "react-icons/io";
import { ContextProvider } from "context/GlobalContext";

export default function FoodSideBarItem({ title, items, index }) {
  const [isOpen, setIsOpen] = useState(true);

  const {windowWidth} = ContextProvider()
  const toggleCollapse = () => {
    if (windowWidth < 2160) {
      setIsOpen(!isOpen);
    }
  };
  useEffect(() => {
    if (isOpen && windowWidth < 2160) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [windowWidth]);

  return (
    <section>
      <nav className="  grid gap-y-3 items-center scroll-auto">
        <button
          onClick={toggleCollapse}
          className="  text-sm font-semibold justify-between mt-7 mx-4 text-gray-600 flex "
        >
          <span className="">{title}</span>
          <span
            className={`transition-all  flex transform text-gray-400 ${
              isOpen ? " rotate-180 " : ""
            }`}
          >
            <button className="w-5 h-6 gap-x-4 items-center grid   text-primary-brand-color">
              <IoIosArrowDown size={18} />
            </button>
          </span>
        </button>

        <Collapse isOpened={isOpen}>
          <nav>
            <ul className=" grid gap-y-4 mx-4 mb-4">
              {items.map((item, key) => (
                <li key={key} className="text-sm  ">
                  {index / 2 === 0 ? (
                    <input
                      type="radio" name="filter"
                      className=" mr-2 w-6 h-6 border-2 cursor-pointer checked:text-primary-brand-color hover:border-primary-brand-color border-gray-300"
                    ></input>
                  ) : (
                    <input type="checkbox" className="hover:border-primary-brand-color checked:text-primary-brand-color transition-all mr-2 w-6 h-6 rounded-md border-2 border-gray-300"></input>
                  )}
                  <span>{item.title} </span>
                </li>
              ))}
            </ul>
          </nav>
        </Collapse>
        <span className="flex flex-col md:flex-row items-center justify-start xs:justify-center    border-t border-gray-200"></span>
      </nav>
    </section>
  );
}
