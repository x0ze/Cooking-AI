import Image from "next/image";
import { Navbar } from "@/components/ui/layout/Navbar";
import { Hero } from "@/components/ui/layout/Hero";
import { Footer } from "@/components/ui/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-grow">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
