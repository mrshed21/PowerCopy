import CardProduct from "./CardProduct";
import {products} from "@/data/products"

const WeekKampanj = () => {
    return (
        <div className="py-8 flex flex-col items-center ">
            <h3>Från veckans kampanj!</h3>
            <h2 className="text-4xl font-bold mb-4 text-yellow-500 font-bold uppercase tracking-wider">Veckans utvalda</h2>
            <p>Se några av våra hetaste deals här!</p>
            <div className="flex p-4 gap-4 overflow-x-auto scrollbar-hide max-w-6xl">
                
                {products.map((product) => (
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
                        brandId={product.brandId}
                        typeId={product.typeId}
                    />
                ))}
                
            </div>

            <button className="mt-6 px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition">
                Se alla deals
            </button>
        </div>)
}

export default WeekKampanj