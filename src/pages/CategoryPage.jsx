import { useParams , Navigate } from "react-router-dom"


import NewsCards from "@/components/NewsCards";
import UnderKategorier from "@/components/HomePage/UnderKategorier";
import FilteredProducts from "@/components/categorypage/FilteredProducts";
import PopularaProdukter from "@/components/PopularaProdukter";
import CategoryContent from "@/components/categorypage/CategoryContent";

import { categoryContents } from "@/data/categoryContent";
import { categories } from "@/data/categories";
import { subcategories } from "@/data/subCategories";
import products  from "@/data/products.json";



export default function CategoryPage() {
  const { category } = useParams();

 const categoryData = categories.find(
    (c) => c.slug === category
  );

  if (!categoryData) {
    return <Navigate to="/404" replace />;
  }

  const relatedSubCategories = subcategories.filter(
    (sub) => sub.categoryId === category
  );

  const categoryContent = categoryContents[category];
  
  const categoryProducts = products.filter((product) => product.categoryId === category);


  return (
    <>
      <div className=" max-w-6xl mx-auto px-4">
        <div className="text-4xl font-bold mb-4 "> {category}</div>
        <UnderKategorier categories={relatedSubCategories} />
      </div>
      <NewsCards />

      {/*  Products */}
      <div className="bg-gray-100 w-full ">
        <div className="max-w-6xl mx-auto px-4">
          <FilteredProducts products={categoryProducts} />
        </div>
      </div>



      <div className="max-w-6xl mx-auto px-4">
        <PopularaProdukter title={"Rekommenderat för dig"} />
        <CategoryContent content={categoryContent} />
      </div>
    </>
  )
}




