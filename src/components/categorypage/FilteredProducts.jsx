import { useState } from 'react'
import FilterSideBar from './FilterSideBar'
import ProductCard from './ProductCard';

import { products } from "@/data/products"


export default function FilteredProducts() {
    const [open, setOpen] = useState(false);

    const filtersButton = [
        "kategori",
        "pris",
        "varumärke",
        "lagerstatus",
        "Alla filter"
    ]

    return (
        <div>
            <FilterSideBar open={open} setOpen={setOpen} />
            <h2 className='text-4xl font-bold my-2 '>Filter</h2>
            <div className='flex gap-2 flex-wrap py-2'>
                {filtersButton.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setOpen(true)}
                        className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/80 transition-colors cursor-pointer"
                    >
                        {filter}
                    </button>
                ))}

            </div>
            <div className='flex justify-between items-center my-5 border-t border-gray-600 pt-2'>
              
                    <h3 className='text-2xl font-bold'>Produckter: <span className='text-yellow-600'>200</span></h3>
                    <select className='px-4 py-2 bg-primary text-white rounded hover:bg-primary/80 transition-colors cursor-pointer' name="" id="">
                        <option value="">Mest relevant</option>
                        <option value="">Pris: Lågt till högt</option>
                        <option value="">Pris: Högt till lågt</option>
                        <option value="">Popularity</option>
                    </select>
                
            </div>
            <div className="space-y-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <div className="flex justify-center my-8">
                <button className="px-6 py-2 bg-primary text-white rounded hover:bg-primary/80 transition-colors cursor-pointer text-2xl font-bold">
                    Ladda fler produkter (20 st)
                </button>
            </div>





        </div>
    )
}
