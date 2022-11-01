import { ContextProvider } from "context/GlobalContext";
import React from "react";
import { FcCheckmark } from "react-icons/fc";
import { BsPencilSquare } from "react-icons/bs";

import { Helmet } from "react-helmet";
export default function Account() {
  const { email, name, number } = ContextProvider();
 
  return (
    <>
    <Helmet>
    <title>Hesabım | Getir</title>
  </Helmet>
        <div className="  mt-16 w-[36rem] mb-12   h-52   rounded-lg bg-white">
          <button className=" ml-[32rem]   -mb-2 bg-white shadow-md    w-8 h-8  flex items-center justify-center border border-gray-200 rounded-md">
            <BsPencilSquare className=" text-primary-brand-color" size={18} />
          </button>

          <div className=" text-md font-bold   ml-8 mt-6 grid grid-cols-2 ">
            {name}
          </div>
          <span className=" mx-8 mt-4 flex flex-col md:flex-row items-center justify-start xs:justify-center    border-t border-gray-200"></span>
          <div className=" text-sm opacity-70 ml-8 my-4 grid grid-cols-4 ">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMyAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjMyOCA1LjQyNTQ4TDguOTg2NzIgNi44NzgzM0w3LjEwMiA4LjA0Njg0QzYuNTMyMiA4LjQwMDcgNS42MDExMSA4LjQwMDcgNS4wMzEzOCA4LjA0Njg0TDIuOTM0ODggNi43NDY4NEwwLjgwNTIwOSA1LjQyNTQ3QzAuMzYyMzE1IDUuMTUwMTggMCA1LjM1NzU4IDAgNS44ODM1N1YxMS4wODQxQzAgMTEuODM3MyAwLjYwNjY2NyAxMi40NTI1IDEuMzQ4MTUgMTIuNDUyNUgxMC43ODU3QzExLjUyNjcgMTIuNDUyNSAxMi4xMzMzIDExLjgzNzMgMTIuMTMzMyAxMS4wODQ3VjUuODgzNTZDMTIuMTMzMyA1LjM1NzU2IDExLjc3MSA1LjE1MDE3IDExLjMyODEgNS40MjU0NUwxMS4zMjggNS40MjU0OFoiIGZpbGw9IiNGRkQzMDAiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjA2NjY3IDcuNzY1MkM2LjM1NjMgNy43NjUyIDYuNjMxNzMgNy42OTY3OCA2LjgyMTMyIDcuNTc5NzFMMTAuNzg1NyA1LjExOTdWMS41MDQ2MUMxMC43ODU3IDAuNzUxOTc1IDEwLjE3OCAwLjEzNjcxOSA5LjQzNyAwLjEzNjcxOUgyLjY5NjI2QzEuOTU0NzcgMC4xMzY3MTkgMS4zNDg2MyAwLjc1MTk3NSAxLjM0ODYzIDEuNTA0NjFWNS4xMTk3TDUuMzEyNDYgNy41Nzk3MUM1LjUwMDk4IDcuNjk2NzggNS43NzY0MSA3Ljc2NTIgNi4wNjY1OSA3Ljc2NTJINi4wNjY2N1pNNC4wNDQ0NCAyLjE4ODM1SDguMDg4ODlDOC4yNzUzMSAyLjE4ODM1IDguNDI1OTMgMi4zNDE3NyA4LjQyNTkzIDIuNTMwOTlDOC40MjU5MyAyLjcyMDc1IDguMjc0NzggMi44NzM2MyA4LjA4ODg5IDIuODczNjNMNC4wNDQ0NCAyLjg3NDE3QzMuODU4NTUgMi44NzQxNyAzLjcwNzQxIDIuNzIwNzUgMy43MDc0MSAyLjUzMTUzQzMuNzA3NDEgMi4zNDE3NyAzLjg1ODU1IDIuMTg4MzYgNC4wNDQ0NCAyLjE4ODM1Wk00LjA0NDQ0IDQuMjQyMDdDMy44NTg1NSA0LjI0MjA3IDMuNzA3NDEgNC4zOTU0OCAzLjcwNzQxIDQuNTgzNjRDMy43MDc0MSA0Ljc3MzQgMy44NTg1NSA0LjkyNjgxIDQuMDQ0NDQgNC45MjY4MUw4LjA4ODg5IDQuOTI2MjhDOC4yNzQ3OCA0LjkyNjI4IDguNDI1OTMgNC43NzI4NiA4LjQyNTkzIDQuNTgzNjRDOC40MjU5MyA0LjM5NTQ4IDguMjc1MzEgNC4yNDIwNyA4LjA4ODg5IDQuMjQyMDdINC4wNDQ0NFoiIGZpbGw9IiM1RDM4QzAiLz4KPC9zdmc+Cg=="
              alt="checkmark"
            />
            <span className=" -ml-24">{email}</span>
            <FcCheckmark className=" ml-56" size={22} />
          </div>
          <span className=" mx-8 mt-4 flex flex-col md:flex-row items-center justify-start xs:justify-center    border-t border-gray-200"></span>
          <div className=" text-sm opacity-70 ml-8 my-4 grid grid-cols-4 ">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxMCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDAuNzEyMTY0QzAgMC4zMTk1NiAwLjMxNTQ5IDAgMC43MDI3ODggMEg5LjA2ODg5QzkuNDU5MjQgMCA5Ljc3Nzc4IDAuMzE5NTYgOS43Nzc3OCAwLjcxMjE2NFYyLjM5ODI0SDBWMC43MTIxNjRaTTMuNTI2MTcgMC43MzA0MjlDMy41MTE2NiAwLjcyOTY2OCAzLjQ5NzkxIDAuNzI5NjY4IDMuNDgzMzkgMC43MzA0MjlMMy40ODMzOCAwLjczMDQzN0MzLjI2NzIxIDAuNzQxODUxIDMuMTAyMjEgMC45MjU5NzkgMy4xMTM2NyAxLjE0MTMxQzMuMTI1ODkgMS4zNTU4NyAzLjMwOTk4IDEuNTIwOTggMy41MjYxNyAxLjUwOTU3SDYuMjUxODJDNi4zNTY0OCAxLjUxMTA5IDYuNDU3MzEgMS40NzA3NiA2LjUzMjE3IDEuMzk2OTZDNi42MDYyNyAxLjMyMzkyIDYuNjQ4MjggMS4yMjQyNCA2LjY0ODI4IDEuMTJDNi42NDgyOCAxLjAxNTc1IDYuNjA2MjcgMC45MTUzMjEgNi41MzIxNyAwLjg0MjI3N0M2LjQ1NzMxIDAuNzY5MjM0IDYuMzU2NDggMC43Mjg5MDcgNi4yNTE4MiAwLjczMDQyOUgzLjUyNjE3WiIgZmlsbD0iI0ZGRDMwMCIvPgo8cGF0aCBkPSJNMCAzLjE3NTE3SDkuNzc3NzhWMTIuNDA5SDBWMy4xNzUxN1oiIGZpbGw9IiM1RDM4QzAiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDE0Ljg3NjVWMTMuMTkwNEg5Ljc3Nzc0VjE0Ljg3NjVDOS43Nzc3NCAxNS4yNjkxIDkuNDU5MiAxNS41ODI2IDkuMDY4ODUgMTUuNTgyNkgwLjcwMjc4OEMwLjMxNTQ5IDE1LjU4MjYgMCAxNS4yNjkxIDAgMTQuODc2NVpNNS41MTgzNCAxNC4zODk2QzUuNTE4MzQgMTQuMDQ2NCA1LjIzNDkyIDEzLjc2MjYgNC44ODg4OSAxMy43NjI2QzQuNTQyODMgMTMuNzYyNiA0LjI1OTQzIDE0LjA0NDkgNC4yNTk0MyAxNC4zODk2QzQuMjU5NDMgMTQuNzM0MiA0LjU0NDM4IDE1LjAxNjUgNC44ODg4OSAxNS4wMTY1QzUuMjM0MTggMTUuMDE2NSA1LjUxODM0IDE0LjczMzUgNS41MTgzNCAxNC4zODk2WiIgZmlsbD0iI0ZGRDMwMCIvPgo8L3N2Zz4K"
              alt="checkmark"
            />
            <span className=" -ml-24">+90{number}</span>
            <FcCheckmark className=" ml-56" size={22} />
          </div>
        </div>
      
    </>
  );
}
