import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/Carousel"
import '@/public/plate.png'
import '@/public/plate-2.png'
import '@/public/life.png'

export default function plate() {
  return (
    <Carousel opts={{ align: "start" }} orientation="vertical"  className="w-full h-[500px]">
      <CarouselContent>
        <CarouselItem>
          <div>
            <img
              src="plate.png"
              alt="Image 1"
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div>
            <img
              src="plate-2.png"
              alt="Image 2"
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div>
            <img
              src="life.png"
              alt="Image 3"
            />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}