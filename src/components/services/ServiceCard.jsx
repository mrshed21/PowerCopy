import React from 'react'

export default function ServiceCard({ title, description, action }) {
    return (
        <div className='flex flex-col gap-4 items-center justify-center bg-linear-to-r from-blue-100 to-blue-50 w-2/5 rounded-lg my-4 p-4 cursor-pointer hover:scale-105 hover:shadow-lg transition-transform duration-200'>
            <h2 className='font-bold text-center '>{title}</h2>
            <p className='text-center text-sm'>{description}</p>
            <button className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 hover:cursor-pointer'>{action}</button>
        </div>
    )
}
