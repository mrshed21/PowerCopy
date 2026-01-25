import { useState } from "react";

export default function ProductMainSection({ product }) {
  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
      <div className="w-full md:w-auto">
        <img src={mainImage} alt={product.title} className="w-full md:w-96 h-auto max-h-96 object-cover rounded" />
        <div className="flex gap-2 mt-2 overflow-x-auto">
          {product.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={idx}
              className="w-16 h-16 sm:w-20 sm:h-20 object-cover cursor-pointer border rounded hover:border-blue-500 flex-shrink-0"
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
      </div>

      <div className="flex-1">
        <h1 className="text-xl sm:text-2xl font-bold">{product.title}</h1>
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={i < product.rating ? "text-yellow-400" : "text-gray-300"}>★</span>))}
        </div>

        <p className="line-through text-gray-400 mt-1 text-sm sm:text-base">{product.oldPrice} SEK</p>
        <p className="text-lg sm:text-xl font-bold mt-1">{product.price} SEK</p>
        <p className="text-green-600 font-semibold mt-1 text-sm sm:text-base">{product.discountLabel}</p>

        <ul className="mt-4 list-disc list-inside text-sm sm:text-base">
          {product.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
