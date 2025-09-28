import { AccordionDemo } from "@/components/ui/shadcn/AccordionDemo"; 
import { Navbar } from "@/components/ui/layout/Navbar";
import { Footer } from "@/components/ui/layout/Footer";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <AccordionDemo></AccordionDemo>
      <Footer />
    </div>
  );
}


  