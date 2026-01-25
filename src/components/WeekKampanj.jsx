import CardProduct from "./CardProduct";
import products from "@/data/products.json"

const WeekKampanj = () => {
    return (
        <div className="py-8 px-4 flex flex-col items-center">
            <h3>Från veckans kampanj!</h3>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-yellow-500 font-bold uppercase tracking-wider text-center">Veckans utvalda</h2>
            <p>Se några av våra hetaste deals här!</p>
            <div className="flex w-full max-w-6xl p-2 sm:p-4 gap-3 sm:gap-4 overflow-x-auto scrollbar-hide">
                
                {products.slice(22, 27).map((product) => (
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
                                subcategoryId={product.subcategoryId}
                                productslug={product.slug}
                                brandId={product.brandId}
                                typeId={product.typeId}
                              />
                ))}
                
            </div>

            <button className="mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition">
                Se alla deals
            </button>
        </div>)
}

export default WeekKampanj