import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom"

import NewsCards from "@/components/NewsCards";
import FilteredProducts from "@/components/categorypage/FilteredProducts";
import PopularaProdukter from "@/components/PopularaProdukter";
import CategoryContent from "@/components/categorypage/CategoryContent";


import { categoryContents } from "@/data/categoryContent";
import { subcategories } from "../data/subCategories";
import products from "@/data/products.json";


export default function SubCategoryPage() {
  const { category , subcategoryId } = useParams();

  // TODO: Add validation for category 
    const subCategoryData = subcategories.find(
    (s) =>
      s.slug === subcategoryId 
  );

if (!subCategoryData) {
  return <Navigate to="/404" replace />;
}


  const categoryContent = categoryContents[category];

  
   
     const categoryProducts = products.filter((product) => product.subcategoryId === subcategoryId);

    


  return (
    <>
      <div className=" max-w-6xl mx-auto px-4">

        <div className="text-4xl font-bold mb-4 "> {subcategoryId}</div>
      </div>
      <NewsCards />
      <div className="bg-gray-100 w-full ">
        <div className="max-w-6xl mx-auto px-4">
          <FilteredProducts products={categoryProducts} />
        </div>
      </div>
      <div>
        <PopularaProdukter title={"Rekommenderat för dig"} />
        <CategoryContent content={categoryContent} />
      </div>
    </>
  )
}




