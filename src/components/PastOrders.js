import { ContextProvider } from "context/GlobalContext";
import React from "react";
import Title from "./ui/Title";
import { FcHome } from "react-icons/fc";
export default function PastOrders() {
  const { order } = ContextProvider();

  const showDate = new Date();
  const dateTime =
    showDate.getHours() +
    ":" +
    showDate.getMinutes() +
    " " +
    showDate.toLocaleDateString();
  return (
    <>
      <Title>Geçmiş Siparilerim</Title>

      <div className=" mx-4      container h-[350px] bg-white border-2    rounded-lg ">
        {order && <div className="grid grid-cols-1  md:text-xs w-60 -ml-10 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4  gap-y-0.5 pt-6 rounded-lg overflow-hidden ">
        <span className="border-t rounded-full border-gra-500 w-10 h-10">
          <FcHome className="    m-1" size={24} />
        </span>
        <span className="  text-xs text-gray-400  text-nowrap">
          {dateTime}{" "}
        </span>
         
        <img className="w-8" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMzQiIHZpZXdCb3g9IjAgMCAzNCAzNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMy44MDY4IDEyLjcwMDFDMjMuNjY2OCAxMi41NTU1IDIzLjQ2OTMgMTIuNDczOSAyMy4yNjIzIDEyLjQ3MzlIMjMuMjYwOEwxMC43MzYzIDEyLjQ5ODlDMTAuNTI4NSAxMi40OTk2IDEwLjMzMTEgMTIuNTgyIDEwLjE5MTggMTIuNzI3M0MxMC4wNTE4IDEyLjg3MTkgOS45ODQwMyAxMy4wNjU4IDEwLjAwMzIgMTMuMjYxMkwxMC45NDA0IDIyLjQ1NTZDMTAuOTYyNSAyMy42NjQ1IDEyLjA3NTEgMjUuMDAwMiAxMy41NTgzIDI1LjAwMDJIMjAuNDUyQzIxLjg1NzkgMjUuMDAwMiAyMy4wNDc4IDIzLjkyNDQgMjMuMDY5OSAyMi42NDMxTDIzLjk5NjkgMTMuMjMzM0MyNC4wMTYgMTMuMDM3OSAyMy45NDY4IDEyLjg0NDcgMjMuODA2OCAxMi43MDAxWiIgZmlsbD0iIzVEM0VCQyIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE5LjEgMTQuNDk5MVYxMS41MjcxQzE5LjEgMTAuMjg4IDE4LjE3ODEgOS4zMTgwNiAxNyA5LjMxODA2QzE1LjgyMTkgOS4zMTgwNiAxNC45IDEwLjI4OCAxNC45IDExLjUyNzFWMTQuNDk5MUMxNC45IDE0Ljg2MjkgMTQuNTg3MSAxNS4xNTgxIDE0LjIgMTUuMTU4MUMxMy44MTI5IDE1LjE1ODEgMTMuNSAxNC44NjI5IDEzLjUgMTQuNDk5MVYxMS41MjcxQzEzLjUgOS41NDk1OCAxNS4wMzU4IDguMDAwMTggMTcgOC4wMDAxOEMxOC45NjQyIDguMDAwMTggMjAuNSA5LjU0OTU4IDIwLjUgMTEuNTI3MVYxNC40OTkxQzIwLjUgMTQuODYyOSAyMC4xODcxIDE1LjE1ODEgMTkuOCAxNS4xNTgxQzE5LjQxMjkgMTUuMTU4MSAxOS4xIDE0Ljg2MjkgMTkuMSAxNC40OTkxWiIgZmlsbD0iI0ZGRDMwMCIvPgo8L3N2Zz4K" alt="" />
       
        <span className="  text-sm  bg-purple-200 font-semibold p-1  mb-3 rounded-r-lg  text-primary-brand-color">
        ₺  {order}
        </span>
      </div>}
      </div>
    </>
  );
}
