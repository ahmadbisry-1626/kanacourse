import HeroSection from "@/components/HeroSection";
import SimpleContact from "@/components/SimpleContact";
import TopCourses from "@/components/TopCourses";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col">
      <HeroSection />

      <TopCourses />

      <SimpleContact />

      <div className="h-[999px]">

      </div>
    </main>
  );
}
