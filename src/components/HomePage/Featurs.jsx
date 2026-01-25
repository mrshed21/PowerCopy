import React from 'react'
import CardProduct from "@/components/CardProduct"
import products from "@/data/products.json"

export default function Featurs() {
  console.log(products.map(product => product.subcategoryId))
  return (
    <div className="py-8 px-4 flex flex-col items-center scroll-x">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-yellow-500 font-bold uppercase tracking-wider text-center">MERRY LOWMAS DEALS</h2>
      <div className="flex w-full max-w-6xl p-2 sm:p-4 gap-3 sm:gap-4 overflow-x-auto scrollbar-hide">

        {products.slice(0, 5).map((product) => (
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
            subcategoryId={product.subcategoryId}
            productslug={product.slug}
            brandId={product.brandId}
            typeId={product.typeId}
          />
        ))}
      </div>
    </div>
  )
}
