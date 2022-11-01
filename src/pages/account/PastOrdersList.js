import Orders from 'components/ui/order/Orders'
import React from 'react'
import { Helmet } from 'react-helmet'
import { FcHome } from 'react-icons/fc'

export default function PastOrdersList() {
  return (
    <div className=" md:mt-16 mb-12   ">
    <Helmet>
      <title>Geçmiş Siparişlerim | Getir</title>
    </Helmet>
    Geçmiş Siparişlerim
    <div className=" text-sm container sm:w-[24rem] w-full lg:w-[44rem] mt-2 h-[22rem]   font-semibold rounded-lg bg-white">
    <div className=' ml-20'> <Orders  /></div>
    </div>
  </div>
  )
}
