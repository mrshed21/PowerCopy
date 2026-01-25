import React from 'react'
import kampany from '../../assets/kampanj.png';
import bgImage from '../../assets/bg-kampanj.png';

import { Button } from "@/components/ui/button"


export default function Kampanj() {
  return (
    <div className="p-4 sm:p-8  my-6 flex justify-center flex-col mx-auto rounded-lg shadow-lg  " style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <img src={kampany} alt="Kampany Logo" className=" mx-auto w-full max-w-xl" />
      <Button className="mt-4 mx-auto bg-yellow-500 text-white hover:bg-yellow-600 px-6 py-2 rounded-xl font-semibold text-lg">Se alla deals</Button>
    </div>
  )
}
