// Home page component
import Kampanj from '@/components/HomePage/Kampanj'
import Featurs from '@/components/HomePage/Featurs';
import UnderKategorier from '@/components/HomePage/UnderKategorier';
import CarouselImage from '@/components/CarouselImage';
import PopularaProdukter from '@/components/PopularaProdukter';
import ReklamSection from '@/components/ReklamSec';
import BildReklam from '@/components/BildReklam';
import WeekKampanj from '@/components/WeekKampanj';


// data 
import { categories } from '@/data/categories';



export default function HomePage() {
  return (
    <div className=" min-h-screen max-w-6xl mx-auto ">
        <Kampanj />
        <Featurs />
        <UnderKategorier categories={categories} />
        <CarouselImage />
        <PopularaProdukter />
        <ReklamSection />
        <div className="flex gap-4">
            <BildReklam />
            <BildReklam />
        </div>
        <WeekKampanj />
         <div className="flex gap-4">
            <BildReklam />
            <BildReklam />
            <BildReklam />
        </div>
    </div>
  )
}
