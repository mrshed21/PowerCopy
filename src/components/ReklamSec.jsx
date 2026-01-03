import { Button } from "@/components/ui/button";
import JulImg from "../assets/julimg.webp";
import reklambg from "../assets/reklambg.webp"

export default function ReklamSection() {
    return (
        <div className=" my-10 h-120 bg-cover bg-center flex justify-center rounded-xl items-center" style={{ backgroundImage: `url(${reklambg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="flex justify-end items-center w-1/2">
                <img src={JulImg} alt="Julklapp" className="rounded-lg max-w-full h-auto object-cover w-full" />
            </div>
            <div className="text-center flex flex-col justify-center items-center w-1/2 gap-4 max-w-md mx-auto">
                <h3 className="text-xl font-semibold bg-black text-white w-60  py-3 mb-2">Julklappstips</h3>
                <p className="text-white bg-black/50 py-2 w-full">Julklappsköpen klara på några klick</p>
                <Button className="mt-4 w-48 mx-auto bg-yellow-500 py-4 px-8 hover:bg-yellow-600 transition-colors duration-200 rounded-lg whitespace-nowrap text-lg">Se julklappar</Button>
            </div>
        </div>
    )
}
