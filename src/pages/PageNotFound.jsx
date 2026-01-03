import React from 'react'
import notfoundpower from '../assets/404_power.svg'
import bolt from '../assets/bolt.png'
import { Link } from 'react-router-dom'
export default function PageNotFound() {
    return (
        <div className='flex  items-center gap-4 justify-center '>
            <div className='flex pr-4 flex-col gap-4 w-1/2'>
                <h2 className='text-6xl text-yellow-500 font-bold'>Sidan hittades inte</h2>
                <p className='text-2xl  font-bold'>Oj... något gick galet!</p>
                <p>Troligen skulle det finnas något spännande här eller kanske ett par produkter till ett riktigt bra pris. Vänligen kontrollera att adressen stämmer. Om det inte hjälper, får du väldigt gärna höra av dig till oss, så kan vi lösa problemet.</p>

                <Link to="/"><p className='cursor-pointer text-yellow-500 hover:text-yellow-600 transition-all duration-300 underline'>Startsidan</p></Link>
                <Link to="/"><p className='cursor-pointer text-yellow-500 hover:text-yellow-600 transition-all duration-300 underline'>Hitta varuhus</p></Link>
                <Link to="/"><p className='cursor-pointer text-yellow-500 hover:text-yellow-600 transition-all duration-300 underline'>POWER-magasinet</p></Link>
                <Link to="/kundservice"><p className='cursor-pointer text-yellow-500 hover:text-yellow-600 transition-all duration-300 underline'>Kundservice</p></Link>
            </div>
            <div className='relative'>

            <img src={notfoundpower} alt="notfoundpower" />
            <img className='power-bolt' src={bolt} alt="notfoundpower" />
            </div>
        </div>
    )
}
