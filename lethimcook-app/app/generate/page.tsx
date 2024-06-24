import Image from "next/image";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Recipe } from "@/components/recipe";
import { RecipeComplete } from "@/components/recipe-complete";
import { RecipeLoader } from "@/components/recipe-loader";

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