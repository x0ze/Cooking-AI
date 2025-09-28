import Image from "next/image";
import OllamaData from "@/components/features/ollama/ollama"
import { Navbar } from "@/components/ui/layout/Navbar";
import { Footer } from "@/components/ui/layout/Footer";
import { StepperContainer } from "@/components/features/stepper/stepper-container";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <StepperContainer />
      <Footer />
    </div>

  );
}
