import React from 'react'
import bildreklam from "../assets/bildreklam.webp"

const BildReklam = () => {
  return (
    <div className="my-10 w-full bg-cover h-[300px] bg-center flex justify-center rounded-xl items-center" style={{ backgroundImage: `url(${bildreklam})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        
    </div>
  )
}

export default BildReklam