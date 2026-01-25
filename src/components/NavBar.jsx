import { SlMenu } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { IoChatbubbleOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

import { SidebarTrigger } from "@/components/ui/sidebar"






import logo from "../assets/logo.png";
import { Input } from "./ui/input";
import { Button } from "@/components/ui/button"
import { Link , useNavigate } from "react-router-dom"


const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#474747] w-full text-white p-3 sm:p-4 shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="container max-w-6xl mx-auto flex flex-wrap items-center text-white gap-2 sm:gap-3">
        <p className="bg-black text-white p-2 sm:p-3 rounded hover:bg-gray-600 w-auto cursor-pointer" onClick={() => console.log('Menu clicked')}>
         
         <SidebarTrigger icon={<SlMenu />} />
        </p>
        <Link to="/">
        <img src={logo} alt="PowerCopy Logo" className="h-7 sm:h-8 ml-2 sm:ml-4 object-cover cursor-pointer" />
        </Link>
        <div className="ml-0 sm:ml-4 flex-1 w-full sm:w-auto max-w-none sm:max-w-xs relative mt-2 sm:mt-0 order-last sm:order-none">
          <Input placeholder="Vad letar du efter?" className="bg-white pl-10 text-black w-full" />
          <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        <Button onClick={() => navigate('/kundservice')} variant="default" className="ml-0 sm:ml-4 mt-2 sm:mt-0 flex items-center gap-2 cursor-pointer hover:bg-gray-600 text-xs sm:text-sm px-2 sm:px-3 py-2">
         Kundservice <IoChatbubbleOutline className="h-5 w-5 text-yellow-400" /> 
        </Button>


        <Button variant="default" className="ml-0 sm:ml-4 mt-2 sm:mt-0 flex items-center gap-2 cursor-pointer hover:bg-gray-600 text-xs sm:text-sm px-2 sm:px-3 py-2">
        Hitta varuhus <CiLocationOn className="h-5 w-5 text-yellow-400" /> 
        </Button>



        <Button variant="default" className="ml-0 sm:ml-4 mt-2 sm:mt-0 flex items-center gap-2 cursor-pointer hover:bg-gray-600 px-2 sm:px-3 py-2">
         <FaRegHeart className="h-5 w-5 text-yellow-400" /> 
        </Button>



        <Button variant="default" className="ml-0 sm:ml-4 mt-2 sm:mt-0 flex items-center gap-2 cursor-pointer hover:bg-yellow-600 bg-yellow-500 text-xs sm:text-sm px-2 sm:px-3 py-2">
         Varukorg <IoBagHandleOutline className="h-5 w-5 " /> 
        </Button>


        <Button variant="default" className="ml-0 sm:ml-4 mt-2 sm:mt-0 flex items-center gap-2 cursor-pointer hover:bg-gray-600 text-xs sm:text-sm px-2 sm:px-3 py-2">
         MyPOWER <FaRegUser className="h-5 w-5 text-yellow-400" /> 
        </Button>

      </div>
    </div>
  )
}

export default NavBar