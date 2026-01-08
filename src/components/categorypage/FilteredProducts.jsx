import React from 'react'

export default function FilteredProducts() {
  return (
    <div>
        <h2>Filter</h2>
        <div>
            <button>Kategori</button>
            <button>Varumärke</button>
            <button>Alla filter</button>
        </div>
        <div>
            <div>
                <h3>Produckter: <span>200</span></h3>
                <select name="" id="">
                    <option value="">Mest relevant</option>
                    <option value="">Pris: Lågt till högt</option>
                    <option value="">Pris: Högt till lågt</option>
                    <option value="">Popularity</option>
                </select>
            </div>
        </div>
        <div>
            Produckter
        </div>



    </div>
  )
}
