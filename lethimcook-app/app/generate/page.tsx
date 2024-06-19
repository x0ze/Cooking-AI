import Image from "next/image";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Recipe } from "@/components/recipe";
import { RecipeComplete } from "@/components/recipe-complete";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <RecipeComplete />
      <Footer />
    </div>

  );
}
