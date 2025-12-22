import { SlMenu } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { IoChatbubbleOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

import { SidebarTrigger } from "@/components/ui/sidebar"






import logo from "../assets/logo.svg";
import { Input } from "./ui/input";
import { Button } from "@/components/ui/button"
import { Link , useNavigate } from "react-router-dom"


const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#474747] w-[100vw] text-white p-4 shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="container max-w-6xl mx-auto flex  items-center text-white ">
        <p className="bg-black text-white p-3 rounded hover:bg-gray-600 w-auto cursor-pointer" onClick={() => console.log('Menu clicked')}>
         
         <SidebarTrigger icon={<SlMenu />} />
        </p>
        <Link to="/">
        <img src={logo} alt="PowerCopy Logo" className="h-8 ml-4 object-cover cursor-pointer" />
        </Link>
        <div className="ml-4 flex-1 max-w-xs relative">
          <Input placeholder="Vad letar du efter?" className="bg-white pl-10 text-black" />
          <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        <Button onClick={() => navigate('/kundservice')} variant="default" className="ml-4 flex items-center gap-2 cursor-pointer hover:bg-gray-600">
         Kundservice <IoChatbubbleOutline className="h-5 w-5 text-orange-400" /> 
        </Button>


        <Button variant="default" className="ml-4 flex items-center gap-2 cursor-pointer hover:bg-gray-600">
        Hitta varuhus <CiLocationOn className="h-5 w-5 text-orange-400" /> 
        </Button>



        <Button variant="default" className="ml-4 flex items-center gap-2 cursor-pointer hover:bg-gray-600">
         <FaRegHeart className="h-5 w-5 text-orange-400" /> 
        </Button>



        <Button variant="default" className="ml-4 flex items-center gap-2 cursor-pointer hover:bg-orange-600 bg-orange-500">
         Varukorg <IoBagHandleOutline className="h-5 w-5 " /> 
        </Button>


        <Button variant="default" className="ml-4 flex items-center gap-2 cursor-pointer hover:bg-gray-600">
         MyPOWER <FaRegUser className="h-5 w-5 text-orange-400" /> 
        </Button>

      </div>
    </div>
  )
}

export default NavBar