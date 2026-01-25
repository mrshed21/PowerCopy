
import { IoColorPaletteOutline } from "react-icons/io5";


import klarna from "../assets/klarna.png";
import visa from "../assets/visa.svg";
import master from "../assets/master.svg";
import applepay from "../assets/applepay.svg";
import resurch from "../assets/resurch.png";
import googlepay from "../assets/googlepay.png";
import postnord from "../assets/postnord.svg";
import budbee from "../assets/budbee.svg";
import bring from "../assets/bring.svg";





import { FaFacebookF, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-[#333] text-white  grid  w-full">
            <div className="max-w-6xl py-20 mx-auto px-4">
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                    <div className="text-center md:text-left">
                        <h2 className='text-5xl font-bold'>60</h2>
                        <p className='text-2xl text-yellow-500 mt-1'>DAGARS ÖPPET KÖP</p>
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className='text-5xl font-bold'>SNABB</h2>
                        <p className='text-2xl text-yellow-500 mt-1'>LEVERANS</p>
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className='text-5xl font-bold'>20,000+</h2>
                        <p className='text-2xl text-yellow-500 mt-1'>PRODUKTER I SORTIMENTET</p>
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className='text-5xl font-bold'>2% BONUS</h2>
                        <p className='text-2xl text-yellow-500 mt-1'>UNIK KUNDKLUBB</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                    <div className="text-center md:text-left">
                        <h2 className='text-2xl font-bold  border-b-2 pb-4 border-yellow-500'>Tips & inspiration</h2>
                        <div className="space-y-2 mt-3">
                            <p>köpguider</p>
                            <p>Produkter</p>
                            <p>Information och teknik</p>
                            <p>Inspiration</p>
                        </div>
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className='text-2xl font-bold border-b-2 pb-4 border-yellow-500'>Hjälp & vägledning</h2>
                        <div className="space-y-2 mt-3">
                            <p>Vanliga frågor</p>
                            <p>Ångrat köp och retur</p>
                            <p>Kundservice</p>
                            <p>Villkor</p>
                            <p>Integritetspolicy</p>
                        </div>
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className='text-2xl font-bold border-b-2 pb-4 border-yellow-500'>Tipsar</h2>
                        <div className="space-y-2 mt-3">
                            <p>Bläckväljaren</p>
                            <p>Abonnemang</p>
                            <p>Black Friday</p>
                            <p>Karriär hos POWER</p>
                            <p>MyPOWER</p>
                        </div>
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className='text-2xl font-bold border-b-2 pb-4 border-yellow-500'>Vi är POWER</h2>
                        <div className="space-y-2 mt-3">
                            <p>Om POWER</p>
                            <p>MyPOWER</p>
                            <p>POWER Företag</p>
                            <p>Press</p>
                            <p>Visselblåsning</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex  p-2 flex-col justify-center items-center mx-auto w-full  bg-[#474747] gap-10 py-4">
                <div className="flex items-center  gap-2">
                    <IoColorPaletteOutline />
                    <span>Cookie- och datainställningar</span>
                </div>
                <div className="flex items-center gap-4 text-2xl mt-2">
                    <div className="text-gray-900 bg-gray-300 p-4 rounded-full hover:bg-white cursor-pointer">
                        <FaFacebookF />
                    </div>
                    <div className="text-gray-900 bg-gray-300 p-4 rounded-full hover:bg-white cursor-pointer">
                        <FaInstagram />
                    </div>
                    <div className="text-gray-900 bg-gray-300 p-4 rounded-full hover:bg-white cursor-pointer">
                        <FaYoutube />
                    </div>
                    <div className="text-gray-900 bg-gray-300 p-4 rounded-full hover:bg-white cursor-pointer">
                        <FaLinkedinIn />
                    </div>
                    <div className="text-gray-900 bg-gray-300 p-4 rounded-full hover:bg-white cursor-pointer">
                        <FaTiktok />
                    </div>
                </div>


                <div className="flex gap-2 flex-wrap justify-center">
                    <h3 className="text-xl font-bold">Säker betalning med:</h3>
                    <div className="flex items-center gap-2 w-16 ">
                        <img src={klarna} alt="Klarna" className="h-8 object-contain" />
                    </div>
                    <div className="flex items-center gap-2 w-16 ">
                        <img src={visa} alt="Visa" className="h-8 object-contain" />
                    </div><div className="flex items-center gap-2 w-16 ">
                        <img src={master} alt="Mastercard" className="h-8 object-contain" />
                    </div><div className="flex items-center gap-2 w-16 ">
                        <img src={applepay} alt="Apple Pay" className="h-8 object-contain" />
                    </div>
                    <div className="flex items-center gap-2 w-16 ">
                        <img src={resurch} alt="Resurch" className="h-8 object-contain" />
                    </div>
                    <div className="flex items-center gap-2 w-16 ">
                        <img src={googlepay} alt="Google Pay" className="h-8 object-contain" />
                    </div>
                </div>



                <div className="flex gap-2 flex-wrap">
                    <h3 className="text-xl font-bold">Vi levererar med:</h3>
                    <div className="flex items-center gap-2 w-16 ">
                        <img src={postnord} alt="PostNord" className="h-8 object-contain" />
                    </div>
                    <div className="flex items-center gap-2 w-16 ">
                        <img src={budbee} alt="Budbee" className="h-8 object-contain" />
                    </div>
                    <div className="flex items-center gap-2 w-16 ">
                        <img src={bring} alt="Bring" className="h-8 object-contain" />
                    </div>
                    
                </div>




            </div>


        </footer>
    );
};

export default Footer;