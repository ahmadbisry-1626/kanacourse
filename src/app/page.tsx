import HeroSection from "@/components/HeroSection";
import SimpleContact from "@/components/SimpleContact";
import TopCourses from "@/components/TopCourses";
import TrendingCourses from "@/components/TrendingCourses";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col">
      <HeroSection />
      <TopCourses />
      <SimpleContact />
      <TrendingCourses />
      <div className="h-[999px]">

      </div>
    </main>
  );
}
