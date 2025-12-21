import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"



import { FaRegHeart } from "react-icons/fa";
import { LuBookCopy } from "react-icons/lu";


import { FaStar } from "react-icons/fa";

export default function CardProduct({
  image = "https://placehold.co/200x200",
  title = "Product Title",
  rating = 3,
  features = ["Feature 1", "Feature 2", "Feature 3"],
  oldPrice = 100,
  price = 50,
  discountLabel = "20% OFF",
  inStock = true,
}) {
  return (
    <Card className="relative w-[250px]  rounded-2xl shadow-md hover:shadow-lg transition flex-shrink-0">

      {/* Discount Badge */}
      {discountLabel && (
        <Badge className="absolute top-3 left-3 bg-yellow-400 text-black font-bold">
          {discountLabel}
        </Badge>
      )}

      {/* Actions */}
      <div className="absolute top-3 right-3 flex gap-2">
        <button className="p-2 rounded-full bg-white shadow hover:bg-gray-100">
          <LuBookCopy size={16} />
        </button>
        <button className="p-2 rounded-full bg-white shadow hover:bg-gray-100">
          <FaRegHeart size={16} />
        </button>
      </div>

      <CardContent className="pt-10">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="mx-auto h-40 object-contain"
        />

        {/* Title */}
        <h3 className="mt-4 text-sm font-semibold leading-tight">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2 text-orange-400">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              size={14}
              className={i < rating ? "fill-orange-400" : "fill-gray-300"}
            />
          ))}
        </div>

        {/* Features */}
        <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
          {features.map((feature, index) => (
            <li key={index}>• {feature}</li>
          ))}
        </ul>

        {/* Price */}
        <div className="mt-4">
          {oldPrice && (
            <span className="text-sm text-red-500 line-through mr-2">
              {oldPrice} kr
            </span>
          )}
          <span className="text-xl font-bold text-red-600">
            {price} kr
          </span>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        <span
          className={`text-xs font-medium ${
            inStock ? "text-green-600" : "text-red-600"
          }`}
        >
          {inStock ? "Finns i lager" : "Slut i lager"}
        </span>

        <Button size="sm">Köp</Button>
      </CardFooter>
    </Card>
  )
}
