import Image from "next/image";
import OllamaData from "@/components/ollama"
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { StepperExamples } from "@/components/examples";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <StepperExamples />
      <OllamaData></OllamaData>
      <Footer />
    </div>

  );
}
