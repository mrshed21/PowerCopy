import { useParams } from "react-router-dom"
import { subCategories } from "../data/subCategories";
import NewsCards from "@/components/NewsCards";
import FilteredProducts from "@/components/categorypage/FilteredProducts";
import PopularaProdukter from "@/components/PopularaProdukter";

import CategoryContent from "@/components/categorypage/CategoryContent";
import { mobileCategoryContent } from "@/data/categoryContent";



export default function SubCategoryPage() {
  const { category , subCategory } = useParams();


  const relatedSubCategories = subCategories.filter(
    (sub) => sub.categoryId === category
  )


  return (
    <>
      <div className=" max-w-6xl mx-auto px-4">

        <div className="text-4xl font-bold mb-4 "> {subCategory}</div>
        <NewsCards />
      </div>
      <div className="bg-gray-100 w-full ">
        <div className="max-w-6xl mx-auto px-4">
          <FilteredProducts />
        </div>
      </div>
      <div>
        <PopularaProdukter title={"Rekommenderat för dig"} />
        <CategoryContent content={mobileCategoryContent} />
      </div>
    </>
  )
}




