import React, { useEffect, useState } from "react";
import Restaurants from "api/restaurants.json";
import RestaurantItems from "./campaigns/RestaurantItems";
import { AiOutlineHeart, AiTwotoneStar } from "react-icons/ai";
export default function RestaurantList({}) {
  const [restaurants, setRestaurants] = useState("");
  useEffect(() => {
    setRestaurants(Restaurants);
  }, []);

  return (
    <>
      {restaurants.length &&
        restaurants.map((restaurant) => (
          <ul>
            <li key={restaurant.title}>
              <div className="w-full h-40 rounded-lg bg-white flex relative items-center overflow-hidden my-4 px-4">
                <button className="gap-y-10 flex-col hidden sm:flex">
                  <img
                    src={restaurant.restaurantimg}
                    alt="Kampanyalar"
                    className="rounded-lg w-60 h-28"
                  />
                  <span className="relative sm:absolute  left-48 top-6 z-[40] flex items-center">
                    <AiOutlineHeart
                      className=" text-white  opacity-80 m-4 hover:text-primary-brand-color transition-all "
                      size={28}
                    />
                  </span>

                  <div className="relative w-10 gap-x-1 text-xs rounded-sm h-4    sm:absolute left-6 bottom-10 z-[40] flex items-center">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9InBhdGgtMS1vdXRzaWRlLTEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjMiIHk9IjUiIHdpZHRoPSIyMyIgaGVpZ2h0PSIyMSIgZmlsbD0iYmxhY2siPgo8cmVjdCBmaWxsPSJ3aGl0ZSIgeD0iMyIgeT0iNSIgd2lkdGg9IjIzIiBoZWlnaHQ9IjIxIi8+CjxwYXRoIGQ9Ik0yMS4xNTM4IDkuMzczNjNIMTkuNDIzMUwxOC44NDYxIDguMTg2OEMxOC41MDYzIDcuNDk2MDcgMTguMzI5OCA3IDE3LjY5MjMgN0gxMC43NjkyQzEwLjEzMTcgNyA5LjkyMTE0IDcuNTY2MTEgOS42MTUzNSA4LjE4NjhMOS4wMzg0MiA5LjM3MzYzSDcuMzA3NjlDNi4wMzMyNiA5LjM3MzYzIDUgMTAuNDM2NCA1IDExLjc0NzNWMjEuMjQxOEM1IDIyLjU1MjYgNi4wMzMyNiAyMy42MTU0IDcuMzA3NjkgMjMuNjE1NEgyMS4xNTM5QzIyLjQyODMgMjMuNjE1NCAyMy40NjE1IDIyLjU1MjYgMjMuNDYxNSAyMS4yNDE4VjExLjc0NzNDMjMuNDYxNSAxMC40MzY0IDIyLjQyODIgOS4zNzM2MyAyMS4xNTM4IDkuMzczNjNaIi8+CjwvbWFzaz4KPHBhdGggZD0iTTIxLjE1MzggOS4zNzM2M0gxOS40MjMxTDE4Ljg0NjEgOC4xODY4QzE4LjUwNjMgNy40OTYwNyAxOC4zMjk4IDcgMTcuNjkyMyA3SDEwLjc2OTJDMTAuMTMxNyA3IDkuOTIxMTQgNy41NjYxMSA5LjYxNTM1IDguMTg2OEw5LjAzODQyIDkuMzczNjNINy4zMDc2OUM2LjAzMzI2IDkuMzczNjMgNSAxMC40MzY0IDUgMTEuNzQ3M1YyMS4yNDE4QzUgMjIuNTUyNiA2LjAzMzI2IDIzLjYxNTQgNy4zMDc2OSAyMy42MTU0SDIxLjE1MzlDMjIuNDI4MyAyMy42MTU0IDIzLjQ2MTUgMjIuNTUyNiAyMy40NjE1IDIxLjI0MThWMTEuNzQ3M0MyMy40NjE1IDEwLjQzNjQgMjIuNDI4MiA5LjM3MzYzIDIxLjE1MzggOS4zNzM2M1oiIGZpbGw9IiM1RDNFQkMiLz4KPHBhdGggZD0iTTE5LjQyMzEgOS4zNzM2M0wxNy44Mjg3IDEwLjE0ODZMMTguMzEzNyAxMS4xNDY0SDE5LjQyMzFWOS4zNzM2M1pNMTguODQ2MSA4LjE4NjhMMjAuNDQwNSA3LjQxMTc3TDIwLjQzNjggNy40MDQyTDE4Ljg0NjEgOC4xODY4Wk05LjYxNTM1IDguMTg2OEw4LjAyNTEyIDcuNDAzMzNMOC4wMjEwMSA3LjQxMTc4TDkuNjE1MzUgOC4xODY4Wk05LjAzODQyIDkuMzczNjNWMTEuMTQ2NEgxMC4xNDc4TDEwLjYzMjggMTAuMTQ4Nkw5LjAzODQyIDkuMzczNjNaTTIzLjQ2MTUgMTEuNzQ3M0gyNS4yMzQzVjExLjc0NzJMMjMuNDYxNSAxMS43NDczWk0yMS4xNTM4IDcuNjAwOUgxOS40MjMxVjExLjE0NjRIMjEuMTUzOFY3LjYwMDlaTTIxLjAxNzQgOC41OTg2TDIwLjQ0MDUgNy40MTE3N0wxNy4yNTE4IDguOTYxODJMMTcuODI4NyAxMC4xNDg2TDIxLjAxNzQgOC41OTg2Wk0yMC40MzY4IDcuNDA0MkMyMC4zMzc3IDcuMjAyODIgMjAuMDkwNyA2LjYzODgzIDE5Ljc3MTUgNi4yMzUwNEMxOS41NzQxIDUuOTg1MzEgMTkuMjk1MiA1LjcxMjYxIDE4LjkwNCA1LjUxMTU5QzE4LjUwNjkgNS4zMDc1MiAxOC4wOTE0IDUuMjI3MjcgMTcuNjkyMyA1LjIyNzI3VjguNzcyNzNDMTcuNjEyIDguNzcyNzMgMTcuNDU3NiA4Ljc1NDQ5IDE3LjI4MzUgOC42NjUwMkMxNy4xMTUzIDguNTc4NiAxNy4wMjEzIDguNDczMDkgMTYuOTkwMSA4LjQzMzcxQzE2Ljk2ODYgOC40MDY0MSAxNi45ODEzIDguNDE1NjYgMTcuMDM3NiA4LjUyNDRDMTcuMDYzNSA4LjU3NDUgMTcuMDkyNCA4LjYzMzE2IDE3LjEyOTggOC43MTAzNkMxNy4xNjQyIDguNzgxMzkgMTcuMjA5OSA4Ljg3NjY2IDE3LjI1NTUgOC45Njk0TDIwLjQzNjggNy40MDQyWk0xNy42OTIzIDUuMjI3MjdIMTAuNzY5MlY4Ljc3MjczSDE3LjY5MjNWNS4yMjcyN1pNMTAuNzY5MiA1LjIyNzI3QzkuNzgzNTcgNS4yMjcyNyA5LjA5NDA0IDUuNzI1NyA4LjY2ODk5IDYuMjcxNzdDOC4zNTMwMSA2LjY3NzcxIDguMTExMzggNy4yMjgyOSA4LjAyNTE0IDcuNDAzMzVMMTEuMjA1NiA4Ljk3MDI1QzExLjI0NzIgOC44ODU2NCAxMS4yOTA0IDguNzk1NTkgMTEuMzIyIDguNzMwMzRDMTEuMzU2OCA4LjY1ODUxIDExLjM4NDEgOC42MDMwNCAxMS40MDkxIDguNTU0ODhDMTEuNDYyNiA4LjQ1MTY0IDExLjQ3OTQgOC40MzMzMiAxMS40NjY4IDguNDQ5NTJDMTEuNDQ4NiA4LjQ3MjkzIDExLjM2OTcgOC41Njc2NCAxMS4yMTcxIDguNjUxNTZDMTEuMDUxOCA4Ljc0MjQ1IDEwLjg4NzUgOC43NzI3MyAxMC43NjkyIDguNzcyNzNWNS4yMjcyN1pNOC4wMjEwMSA3LjQxMTc4TDcuNDQ0MDggOC41OTg2TDEwLjYzMjggMTAuMTQ4NkwxMS4yMDk3IDguOTYxODJMOC4wMjEwMSA3LjQxMTc4Wk05LjAzODQyIDcuNjAwOUg3LjMwNzY5VjExLjE0NjRIOS4wMzg0MlY3LjYwMDlaTTcuMzA3NjkgNy42MDA5QzUuMDA3NDYgNy42MDA5IDMuMjI3MjcgOS41MDQ3NyAzLjIyNzI3IDExLjc0NzNINi43NzI3M0M2Ljc3MjczIDExLjM2OCA3LjA1OTA1IDExLjE0NjQgNy4zMDc2OSAxMS4xNDY0VjcuNjAwOVpNMy4yMjcyNyAxMS43NDczVjIxLjI0MThINi43NzI3M1YxMS43NDczSDMuMjI3MjdaTTMuMjI3MjcgMjEuMjQxOEMzLjIyNzI3IDIzLjQ4NDIgNS4wMDc0NSAyNS4zODgxIDcuMzA3NjkgMjUuMzg4MVYyMS44NDI3QzcuMDU5MDcgMjEuODQyNyA2Ljc3MjczIDIxLjYyMDkgNi43NzI3MyAyMS4yNDE4SDMuMjI3MjdaTTcuMzA3NjkgMjUuMzg4MUgyMS4xNTM5VjIxLjg0MjdINy4zMDc2OVYyNS4zODgxWk0yMS4xNTM5IDI1LjM4ODFDMjMuNDU0IDI1LjM4ODEgMjUuMjM0MyAyMy40ODQzIDI1LjIzNDMgMjEuMjQxOEgyMS42ODg4QzIxLjY4ODggMjEuNjIwOSAyMS40MDI1IDIxLjg0MjcgMjEuMTUzOSAyMS44NDI3VjI1LjM4ODFaTTI1LjIzNDMgMjEuMjQxOFYxMS43NDczSDIxLjY4ODhWMjEuMjQxOEgyNS4yMzQzWk0yNS4yMzQzIDExLjc0NzJDMjUuMjM0MiA5LjUwNDgzIDIzLjQ1NDEgNy42MDA5IDIxLjE1MzggNy42MDA5VjExLjE0NjRDMjEuNDAyNCAxMS4xNDY0IDIxLjY4ODggMTEuMzY4IDIxLjY4ODggMTEuNzQ3M0wyNS4yMzQzIDExLjc0NzJaIiBmaWxsPSJ3aGl0ZSIgbWFzaz0idXJsKCNwYXRoLTEtb3V0c2lkZS0xKSIvPgo8cGF0aCBkPSJNMTQuNSAxMUMxMi4wMTQ1IDExIDEwIDEzLjAxNDUgMTAgMTUuNUMxMCAxNy45ODU1IDEyLjAxNDUgMjAgMTQuNSAyMEMxNi45ODU1IDIwIDE5IDE3Ljk4NTUgMTkgMTUuNUMxOSAxMy4wMTQ1IDE2Ljk4NTUgMTEgMTQuNSAxMVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xNC41IDEyQzEyLjU2NjggMTIgMTEgMTMuNTY2OCAxMSAxNS41QzExIDE3LjQzMzIgMTIuNTY2OCAxOSAxNC41IDE5QzE2LjQzMzIgMTkgMTggMTcuNDMzMiAxOCAxNS41QzE4IDEzLjU2NjggMTYuNDMzMiAxMiAxNC41IDEyWiIgZmlsbD0iIzVEM0VCQyIvPgo8cGF0aCBkPSJNMjMuNSAxNkMyMC40NjIyIDE2IDE4IDE4LjQ2MjIgMTggMjEuNUMxOCAyNC41Mzc5IDIwLjQ2MjIgMjcgMjMuNSAyN0MyNi41Mzc4IDI3IDI5IDI0LjUzNzkgMjkgMjEuNUMyOSAxOC40NjIxIDI2LjUzNzggMTYgMjMuNSAxNloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMy41IDE3QzIxLjAxNDUgMTcgMTkgMTkuMDE0NSAxOSAyMS41QzE5IDIzLjk4NTUgMjEuMDE0NSAyNiAyMy41IDI2QzI1Ljk4NTUgMjYgMjggMjMuOTg1NSAyOCAyMS41QzI4IDE5LjAxNDUgMjUuOTg1NSAxNyAyMy41IDE3WiIgZmlsbD0iIzU0QkE0RiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI2LjU3MDggMTkuMjMxMUMyNi44MTM3IDE5LjQ1NDIgMjYuODM0OCAxOS44Mzc2IDI2LjYxNzggMjAuMDg3NEwyMy40MDU0IDIzLjkzOTFDMjMuMjkzNSAyNC4wNjc5IDIzLjEzMzUgMjQuMTQxNiAyMi45NjU2IDI0LjE0MTZDMjIuNzk3NiAyNC4xNDE2IDIyLjYzNzcgMjQuMDY3OSAyMi41MjU4IDIzLjkzOTFMMjAuODQyMiAyMkMyMC42MjUzIDIxLjc1MDEgMjAuNjQ2MyAyMS4zNjY4IDIwLjg4OTIgMjEuMTQzN0MyMS4xMzIxIDIwLjkyMDYgMjEuNTA0OCAyMC45NDIyIDIxLjcyMTcgMjEuMTkyTDIyLjk2NTYgMjIuNjI0N0wyNS43MzgzIDE5LjI3OTVDMjUuOTU1MiAxOS4wMjk2IDI2LjMyNzkgMTkuMDA4IDI2LjU3MDggMTkuMjMxMVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="
                      alt=""
                    />
                  </div>
                </button>
                <div className=" justify-between  ">
                  <div className="relative top-8 border w-20 gap-x-1 rounded-sm shadow-md text-primary-brand-color text-xs   h-5 bg-white font-bold sm:absolute right-4 bottom-2  z-[40] flex items-center">
                    <AiTwotoneStar className="  ml-1 " size={12} />{" "}
                    {restaurant.rate}
                    <div className=" text-gray-500">
                      ({Math.round((Math.random() / 2) * 1000)}+)
                    </div>
                  </div>
                  <button className="  relative w-72 mx-2 text-left -top-10 text-base font-semibold text-primary-brand-color truncate">
                    {restaurant.title}
                  </button>
                </div>
                <div className="relative right-72 top-14">
                  <span>
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjgiIGZpbGw9IiMxRDc4MUQiLz4KPHBhdGggZD0iTTUuMzMzNSA0Ljk1MzEySDguNjAyODdDOS4yOTE0OCA0Ljk1MzEyIDkuODA5NDMgNS4xMjE5NCAxMC4xNTY3IDUuNDU5NThDMTAuNTA0IDUuNzkxMjkgMTAuNjc3NyA2LjI1OTI1IDEwLjY3NzcgNi44NjM0NEMxMC42Nzc3IDcuNzE2NDIgMTAuMzE4NCA4LjI4NTA3IDkuNTk5ODUgOC41Njk0TDEwLjg1NzMgMTEuMDQ4NEg5LjQ0NzE2TDguMzYwMzYgOC43NzM3Nkg2LjYzNTg2VjExLjA0ODRINS4zMzM1VjQuOTUzMTJaTTguNDg2MTEgNy42OTg2NUM4Ljc2NzU0IDcuNjk4NjUgOC45ODMxIDcuNjI0NiA5LjEzMjggNy40NzY1MkM5LjI4MjUgNy4zMjg0MyA5LjM1NzM0IDcuMTI0MDcgOS4zNTczNCA2Ljg2MzQ0QzkuMzU3MzQgNi42MDI4MSA5LjI4MjUgNi40MDE0MSA5LjEzMjggNi4yNTkyNUM4Ljk4MzEgNi4xMTcwOCA4Ljc2NzU0IDYuMDQ2IDguNDg2MTEgNi4wNDZINi42MzU4NlY3LjY5ODY1SDguNDg2MTFaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"
                      alt=""
                    />

                    <div className=" relative left-6 text-xxs font-semibold text text-gray-500 bottom-5">
                      <div>{restaurant.time}</div>
                      <div> Min. ₺{restaurant.minValue}</div>
                    </div>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        ))}
    </>
  );
}
