import React from 'react'

export default function EmptyBasket() {
    const findpath = window.location.pathname.split("/")[1]
     
  return (
    <div>
    {findpath==="yemek" ?
    <img
    className="  mt-20 mx-auto "
    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzEiIGhlaWdodD0iODYiIHZpZXdCb3g9IjAgMCA3MSA4NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjUuMDAwMUg3MC4yNzU2Vjg1LjIzNDhIMFYyNS4wMDAxWiIgZmlsbD0iI0U3RTZGRiIvPgo8cGF0aCBkPSJNMjIuNTgzOCAwLjMzMzM3NEg0Ny40ODdMNTIuNDc1NCA1LjM4OTM3VjI1LjQzMkw0Ny4wNzgxIDI1LjQxNzhWNS4zNzg3MUgyMy4wMjQ3VjI1LjQxNzhMMTcuNTI3OCAyNS40MzJWNS4zNzg3MUwyMi41ODM4IDAuMzMzMzc0WiIgZmlsbD0iI0U3RTZGRiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI3LjE0ODcgNDZMMzQuMDgxNSA1Mi44NjlMMzEuMzA4MyA1NS42MTY3TDI3LjE0ODcgNTEuNDk1MkMyNS42MTcxIDQ5Ljk3NzggMjUuNjE3MSA0Ny41MTc1IDI3LjE0ODcgNDZaIiBmaWxsPSIjNUQzRUJDIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDAuNjQ0MyA0Ni44MjI5TDM3LjgzNSA1MC4yMjQ5QzM3LjY1ODcgNTAuNDM4MyAzNy42NzQ0IDUwLjc0OTMgMzcuODcxMiA1MC45NDQzQzM4LjA2OCA1MS4xMzkzIDM4LjM4MTggNTEuMTU0OCAzOC41OTcyIDUwLjk4MDJMNDIuMDMwOSA0OC4xOTY3TDQyLjcyNDEgNDguODgzNkwzOS45MTQ4IDUyLjI4NTdDMzkuNzM4NiA1Mi40OTkxIDM5Ljc1NDIgNTIuODEwMSAzOS45NTEgNTMuMDA1QzQwLjE0NzggNTMuMiA0MC40NjE3IDUzLjIxNTUgNDAuNjc3MSA1My4wNDA5TDQ0LjExMDcgNTAuMjU3NEw0NC44MDQgNTAuOTQ0M0w0MS42ODQyIDU0LjAzNTRDNDAuMzQ0MSA1NS4zNjMyIDM4LjE3MTQgNTUuMzYzMiAzNi44MzEzIDU0LjAzNTRDMzUuNDkxMSA1Mi43MDc2IDM1LjQ5MTEgNTAuNTU0OCAzNi44MzEzIDQ5LjIyNzFMMzkuOTUxIDQ2LjEzNkw0MC42NDQzIDQ2LjgyMjlaIiBmaWxsPSIjNUQzRUJDIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzQuMDk2OSA1Ni41NTQyQzM0LjQ4NTMgNTYuOTM5IDM0LjUwMTEgNTcuNTU4IDM0LjEzMjcgNTcuOTYxOEwyOS4yNTk4IDYzLjMwMzVDMjguNzQyIDYzLjg3MTIgMjcuODU3OCA2My45MTU0IDI3LjI4NDkgNjMuNDAyNEMyNy4yNjc0IDYzLjM4NjcgMjcuMjUwNCA2My4zNzA3IDI3LjIzMzggNjMuMzU0MkMyNi42ODc3IDYyLjgxMzIgMjYuNjg3NyA2MS45MzYgMjcuMjMzOCA2MS4zOTQ5QzI3LjI1MDQgNjEuMzc4NSAyNy4yNjc0IDYxLjM2MjQgMjcuMjg0OSA2MS4zNDY4TDMyLjY3NjIgNTYuNTE4N0MzMy4wODM3IDU2LjE1MzcgMzMuNzA4NSA1Ni4xNjk0IDM0LjA5NjkgNTYuNTU0MloiIGZpbGw9IiM1RDNFQkMiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNi4wNTY0IDU2LjU1NDJDMzYuNDQ0OSA1Ni4xNjk0IDM3LjA2OTYgNTYuMTUzNyAzNy40NzcxIDU2LjUxODdMNDIuODY4NCA2MS4zNDY4QzQyLjg4NTkgNjEuMzYyNCA0Mi45MDI5IDYxLjM3ODUgNDIuOTE5NiA2MS4zOTQ5QzQzLjQ2NTYgNjEuOTM2IDQzLjQ2NTYgNjIuODEzMiA0Mi45MTk2IDYzLjM1NDJDNDIuOTAyOSA2My4zNzA3IDQyLjg4NTkgNjMuMzg2NyA0Mi44Njg0IDYzLjQwMjRDNDIuMjk1NSA2My45MTU0IDQxLjQxMTMgNjMuODcxMiA0MC44OTM1IDYzLjMwMzVMMzYuMDIwNiA1Ny45NjE4QzM1LjY1MjIgNTcuNTU4IDM1LjY2OCA1Ni45MzkgMzYuMDU2NCA1Ni41NTQyWiIgZmlsbD0iIzVEM0VCQyIvPgo8L3N2Zz4K"
    alt="foodorder"
 
  />   :
  <img
    className="  mt-20 mx-auto item pb-12"
    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iODYiIHZpZXdCb3g9IjAgMCA3MiA4NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0wLjUgMjVINzAuNzc1NlY4NS4yMzQ3SDAuNVYyNVoiIGZpbGw9IiNEQkRCRkYiLz4KPHBhdGggZD0iTTIzLjA4MzggMC4zMzMwMDhINDcuOTg3TDUyLjk3NTQgNS4zODlWMjUuNDMxNkw0Ny41NzgxIDI1LjQxNzRWNS4zNzgzNEgyMy41MjQ3VjI1LjQxNzRMMTguMDI3OCAyNS40MzE2VjUuMzc4MzRMMjMuMDgzOCAwLjMzMzAwOFoiIGZpbGw9IiNEQkRCRkYiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSI3MSIgaGVpZ2h0PSI4NiIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
    alt="basket"
  />
}
    <h2 className=" whitespace-nowrap text-center text-md text-primary-brand-color font-semibold">
      Sepetiniz şuan boş
    </h2>
    <h2 className=" text-sm   mt-4 text-center  text-gray-300 font-semibold ">
      Sipariş vermek için sepetinize ürün ekleyin
    </h2>
  </div>
  )
}
