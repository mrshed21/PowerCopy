import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FiHeart } from "react-icons/fi"
import { Link } from "react-router-dom"

export default function ProductCard({ product }) {
  console.log(product)
  return (
    <Link to={`/${product.categoryId}/${product.subcategoryId}/${product.slug}`} className="block py-2 sm:py-4">
      <Card className="relative p-4 rounded-xl hover:shadow-lg transition">

        {/* Discount */}
        {product.discountLabel && (
          <Badge className="absolute top-2 left-2 bg-yellow-400 text-black">
            {product.discountLabel}
          </Badge>
        )}

        {/* MAIN ROW */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">

          {/* LEFT – Image */}
          <div className="w-full sm:w-[214px] h-48 sm:h-[214px] shrink-0 max-w-[214px] mx-auto sm:mx-0">
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* CENTER – Info */}
          <div className="flex-1 pl-0 sm:pl-4">
            <h3 className="font-semibold text-sm mb-2">
              {product.title}
            </h3>

            <ul className="text-xs text-muted-foreground space-y-1">
              {product.features.slice(0, 5).map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>

            <div className="mt-3 text-xs text-green-600">
              ✓ {product.inStock ? "I lager" : "Slut i lager"}
            </div>
          </div>

          {/* RIGHT – Price */}
          <div className="w-full sm:w-24 text-left sm:text-right mt-4 sm:mt-0">
            <FiHeart className="sm:ml-auto mb-4 text-muted-foreground" />

            {product.oldPrice && (
              <div className="text-sm line-through text-muted-foreground">
                {product.oldPrice} kr
              </div>
            )}
            <div className="text-xl font-bold text-red-600">
              {product.price} kr
            </div>
          </div>

        </div>
      </Card>
    </Link>
  )
}
