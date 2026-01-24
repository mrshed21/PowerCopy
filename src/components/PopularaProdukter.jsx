import React from "react";
import CardProduct from "@/components/CardProduct";
import { products } from "@/data/products";

export default function PopularaProdukter({title = "Populära produkter"}) {
  return (
    <div className="py-8 ">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {title}
      </h2>
      <div className="flex  justify-center gap-4 py-4 overflow-x-auto">
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
  );
}
