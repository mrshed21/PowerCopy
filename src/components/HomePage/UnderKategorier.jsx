import React from 'react'

import CardCatigory from "@/components/CardCatigory";
import { categories } from '@/data/categories';

export default function UnderKategorier() {
  return (
    <div className="py-8 flex flex-col ">
        <h2 className="text-2xl font-bold mb-4">Underkategorier</h2>
        <div className="flex gap-4 flex-wrap ">
          {categories.slice(0,10).map((item, index) => (
            <CardCatigory key={index} title={item.name} url={item.url} />
          ))  }
            
        </div>
    </div>
  )
}
