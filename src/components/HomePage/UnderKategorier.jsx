import React from 'react'

import CardCatigory from "@/components/CardCatigory";

export default function UnderKategorier({categories}) {
  return (
    <div className="py-8 flex  flex-col ">
        <h2 className="text-2xl px-4 font-bold mb-4">Underkategorier</h2>
        <div className="flex justify-center gap-4 flex-wrap ">
          {categories.slice(0,10).map((item) => (
            <CardCatigory key={item.id} title={item.name} url={item.slug} />
          ))  }
            
        </div>
    </div>
  )
}
