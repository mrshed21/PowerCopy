import React from 'react'
import  CardProduct  from "@/components/CardProduct"
import { products } from "@/data/products"

export default function Featurs() {
  return (
    <div className="py-8 flex flex-col items-center ">
        <h2 className="text-4xl font-bold mb-4 text-yellow-500 font-bold uppercase tracking-wider">MERRY LOWMAS DEALS</h2>
        <div className="flex p-4 gap-4 overflow-x-auto scrollbar-hide max-w-6xl">
           
            {products.map((product) => (
              <CardProduct
                key={product.id}
                image={product.image}
                title={product.title}
                rating={product.rating}
                features={product.features}
                oldPrice={product.oldPrice}
                price={product.price}
                discountLabel={product.discountLabel}
                inStock={product.inStock}
                categoryId={product.categoryId}
                brandId={product.brandId}
                typeId={product.typeId}
              />
            ))}
        </div>
    </div>
  )
}
