import React from 'react'
import  CardProduct  from "@/components/CardProduct"

export default function Featurs() {
  return (
    <div className="py-8 flex flex-col items-center ">
        <h2 className="text-4xl font-bold mb-4 text-orange-500 font-bold uppercase tracking-wider">MERRY LOWMAS DEALS</h2>
        <div className="flex p-4 gap-4 overflow-x-auto scrollbar-hide max-w-6xl">
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
        </div>
    </div>
  )
}
