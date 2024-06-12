import { Button } from "./custom/button";
import { buttonVariants } from "./custom/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
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


export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center justify-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              LetHimCook
            </span>{" "}
            : régalez
          </h1>{" "}
          vous grâce à l'{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              IA
            </span>{" "}
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Créer des recettes de cuisine grâce à l'IA. Vous avez des aliments dans votre frigo et ne savez pas quoi faire à manger, utilisez l'IA pour vous concoter des plâts savoureux selon votre régime alimentaire.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <a href="recipe"><Button className="w-full md:w-1/3">Génerer une recette</Button></a>
          
          <a
            rel="noreferrer noopener"
            href="https://github.com/x0ze"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Repository
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
       <Carousel>
  <CarouselContent>
    <CarouselItem><img src="plate.png" alt=""/></CarouselItem>
    <CarouselItem><img src="plate-2.png" alt=""/></CarouselItem>
    <CarouselItem><img src="life.png" alt=""/></CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

      </div>

      {/* Shadow effect */}
      <div className="shadow-custom"></div>
    </section>
  );
};