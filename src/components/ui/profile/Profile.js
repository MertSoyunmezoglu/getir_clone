import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { ContextProvider } from "context/GlobalContext";
import { useUserAuth } from "context/UserAuthContext";
import { FaUser } from "react-icons/fa";
import Options from 'components/ui/profile/Options';
export default function Profile({click}) {

    const navigate = useNavigate();
    const { number, name } = ContextProvider();
    const { logOut } = useUserAuth();
    const handleLogout = () => {
        try {
          logOut();
          navigate("/");
        } catch (error) {
          console.log(error.message);
        }
      };

  return (
    <>
    {click && (
        <div className="opacity-0  invisible  dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
          <div
            className="absolute right-0 w-72  origin-top-right bg-white border border-gray-200 divide-y divide-gray-100  shadow-lg outline-none"
            aria-labelledby="headlessui-menu-button-1"
            id="headlessui-menu-items-117"
            role="menu"
          >
            <NavLink to='/hesap'>
            <div className="px-4  py-4 bg-purple-50 ">
              <button className=" flex justify-between gap-6">
                <div className=" w-10 h-10  bg-white">
                  <FaUser
                    className="  text-primary-brand-color opacity-20 m-1 text-center items-center"
                    size={28}
                  />
                </div>
                <div className="text-sm leading-5 pt-3  text-gray-600 font-medium truncate">
                  {name && <div>{name}</div>}
                  <div>{number}</div>
                </div>
              </button>
            </div>
            </NavLink>

            <div className="  py-3 text-gray-600  font-normal ">
             <Options click={click}/>
            </div>
            <div className="py-1">
              <button
                onClick={handleLogout}
                className=" flex justify-between w-full text-gray-600  px-4 py-3 text-sm leading-5 hover:bg-purple-100 text-left hover:text-secondary-brand-color"
                role="menuitem"
              >
                Çıkış Yap
              </button>
            </div>
          </div>
        </div>
      )}
      </>
  )
}
