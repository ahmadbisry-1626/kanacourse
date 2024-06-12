import HeroSection from "@/components/HeroSection";
import TopCourses from "@/components/TopCourses";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col">
      <HeroSection />

      <TopCourses />

      <div className="h-[999px]">

      </div>
    </main>
  );
}
