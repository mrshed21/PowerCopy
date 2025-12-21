import React from 'react'
import CardProduct from "@/components/CardProduct";

export default function PopularaProdukter() {
  return (
    <div className="py-8 ">
      <h2 className="text-2xl font-bold mb-4 text-center">Populära produkter</h2>
      <div className="flex  justify-center gap-4 py-4 overflow-x-auto">

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