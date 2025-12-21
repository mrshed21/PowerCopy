import React from 'react'

import CardCatigory from "@/components/CardCatigory";

export default function UnderKategorier() {
  return (
    <div className="py-8 flex flex-col ">
        <h2 className="text-2xl font-bold mb-4">Underkategorier</h2>
        <div className="flex gap-4 flex-wrap ">
            <CardCatigory title="Electronics" />
            <CardCatigory title="Clothing" />
            <CardCatigory title="Home & Garden" />
            <CardCatigory title="Sports" />
            <CardCatigory title="Books" />
            <CardCatigory title="Toys" />
            <CardCatigory title="Beauty" />
            <CardCatigory title="Beauty" />
            
            <CardCatigory title="Health" />
            <CardCatigory title="Automotive" />
        </div>
    </div>
  )
}
