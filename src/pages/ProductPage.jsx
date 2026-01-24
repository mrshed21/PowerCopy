import React from "react";
import { product, products } from "@/data/product-mock";
import ProductMainSection from "@/components/productpage/ProductMainSection";
import ProductDetailsSection from "@/components/productpage/ProductDetailsSection";
import NewsCards from "@/components/NewsCards";

export default function ProductPage() {
  const relatedProducts = products.filter(
    (p) => p.brandId === product.brandId && p.id !== product.id
  );

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <ProductMainSection product={product} />
      <ProductDetailsSection sections={product.details} />
      <NewsCards />
    </div>
  );
}
