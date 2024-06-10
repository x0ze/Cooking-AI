import Image from "next/image";
import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/ui/Hero";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-grow">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
