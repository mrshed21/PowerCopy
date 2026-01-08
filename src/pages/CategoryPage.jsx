import { useParams } from "react-router-dom"
import { subCategories } from "../data/subCategories";
import UnderKategorier from "@/components/HomePage/UnderKategorier";
import NewsCards from "@/components/NewsCards";
import FilteredProducts from "@/components/categorypage/FilteredProducts";



export default function CategoryPage() {
  const { category } = useParams();


  const relatedSubCategories = subCategories.filter(
    (sub) => sub.categoryId === category
  )


  return (
    <>
      <div className=" max-w-6xl mx-auto px-4">

        <div className="text-4xl font-bold mb-4 "> {category}</div>
        <UnderKategorier categories={relatedSubCategories} />
        <NewsCards />
      </div>
      <div className="bg-gray-100 w-full ">
        <div className="max-w-6xl mx-auto px-4">
          <FilteredProducts />
        </div>
      </div>
    </>
  )
}




