import Orders from 'components/Orders'
import React from 'react'
import { Helmet } from 'react-helmet'
import { FcHome } from 'react-icons/fc'

export default function PastOrdersList() {
  return (
    <div className="  mt-16  ">
    <Helmet>
      <title>Geçmiş Siparişlerim | Getir</title>
    </Helmet>
    Geçmiş Siparişlerim
    <div className=" text-sm container   w-[36rem] mt-2 h-32  font-semibold rounded-lg bg-white">
    <div className=' ml-20'> <Orders  /></div>
    </div>
  </div>
  )
}
