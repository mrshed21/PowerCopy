import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselImage() {
  return (
    <Carousel className="my-8 ">
      <CarouselContent>
        <CarouselItem><img src="https://placehold.co/800x400" alt="Slide 1" className="object-cover w-full h-full" /></CarouselItem>
        <CarouselItem><img src="https://placehold.co/800x400" alt="Slide 2" className="object-cover w-full h-full" /></CarouselItem>
        <CarouselItem><img src="https://placehold.co/800x400" alt="Slide 3" className="object-cover w-full h-full" /></CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  )
}