import Image from "next/image";
import { Navbar } from "@/components/ui/layout/Navbar";
import { Footer } from "@/components/ui/layout/Footer";
import { Recipe } from "@/components/features/recipe/recipe";
import { RecipeComplete } from "@/components/features/recipe/recipe-complete";
import { RecipeLoader } from "@/components/features/recipe/recipe-loader";

const Page: React.FC = () => {
  return (
    <div>
      <Navbar></Navbar>
      <RecipeLoader />
      <Footer />
    </div>
  );
}

export default Page;