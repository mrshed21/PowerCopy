import { useState, useEffect } from "react";
import { useParams , Navigate } from "react-router-dom";

import ProductMainSection from "@/components/productpage/ProductMainSection";
import ProductDetailsSection from "@/components/productpage/ProductDetailsSection";
import PopularaProdukter from "@/components/PopularaProdukter";
import NewsCards from "@/components/NewsCards";

import products from "@/data/products.json";

export default function ProductPage() {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const { subcategoryId, productId } = useParams();

 useEffect(() => {
    const existingProduct = products.find(
      (p) => p.slug.toLowerCase() === productId.toLowerCase()
    );
    setProduct(existingProduct || null);
    setLoading(false);
  }, [productId]);




if (loading) return <p>Laddar produkt...</p>;


 if (!product) {
  
      return <Navigate to="/404" replace />;
    } 



  const relatedProducts = products.filter(
      (p) => p.subcategoryId === subcategoryId
    ); 

  return (
    <>
    {product && (
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
        <ProductMainSection product={product} />
         <ProductDetailsSection product={product} />  
      </div>
    )}
      <NewsCards />
      {relatedProducts.length > 0 && (
        <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">         
          <PopularaProdukter title="Relaterade produkter" products={relatedProducts} />
        </div>
      )}
    </>
  );
}
