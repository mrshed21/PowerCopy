import CardProduct from "./CardProduct";

const WeekKampanj = () => {
    return (
        <div className="py-8 flex flex-col items-center ">
            <h3>Från veckans kampanj!</h3>
            <h2 className="text-4xl font-bold mb-4 text-orange-500 font-bold uppercase tracking-wider">Veckans utvalda</h2>
            <p>Se några av våra hetaste deals här!</p>
            <div className="flex p-4 gap-4 overflow-x-auto scrollbar-hide max-w-6xl">
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
            </div>

            <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition">
                Se alla deals
            </button>
        </div>)
}

export default WeekKampanj