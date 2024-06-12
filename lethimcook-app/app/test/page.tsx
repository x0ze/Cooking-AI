import Image from "next/image";
import '@/public/plate.png'
import '@/public/plate-2.png'
import '@/public/life.png'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  return (
    <div className="flex flex-col flex-grow">
        <Carousel orientation="vertical">
          <CarouselContent>
            <CarouselItem><img src="plate.png" alt=""/></CarouselItem>
            <CarouselItem><img src="plate-2.png" alt=""/></CarouselItem>
            <CarouselItem><img src="life.png" alt=""/></CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
    </div>
  );
}
