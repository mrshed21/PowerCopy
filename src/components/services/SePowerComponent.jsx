import logo from '@/assets/logo.png'

export default function SePowerComponent() {
    return (
        <div className='flex flex-col items-center gap-4 justify-center bg-linear-to-r from-cyan-500 to-blue-500 h-[400px] rounded-lg my-4 p-4 '>
            {/* <img className='rounded-lg my-2 max-h-[400px] w-full ' src={SePowerConspt} alt="SePowerConspt" /> */}
            <img className='rounded-lg my-2 max-w-[200px] mx-auto' src={logo} alt="logo" />
            <h3 className='text-2xl font-bold'> Var är min beställning? Var är mitt kvitto?</h3>
            <div className='text-center bg-gray-200  p-2 w-full'>
                <span>Spåra dina beställningar och hitta alla dina kvitton på MyPOWER</span>
            </div>
            <div className='flex gap-2 my-4'>
                <button className='bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer'> Logga in på SePOWER</button>
                <button className='bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer'>Vad är SePower?</button>
            </div>
        </div>
    )
}