import React from "react";
import CardProduct from "@/components/CardProduct";
import  products  from "@/data/products.json";

export default function PopularaProdukter({title = "Populära produkter", products: productsProp}) {
  return (
    <div className="py-8 px-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">
        {title}
      </h2>
      <div className="flex justify-start sm:justify-center gap-3 sm:gap-4 py-4 overflow-x-auto">
        {(productsProp || products).slice(0, 5).map((product) => (
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
  );
}
