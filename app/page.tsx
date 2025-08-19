import Hero from "@/app/_components/sections/Hero";
import FlashSales from "@/app/_components/sections/FlashSales";
import BrowserCategory from "./_components/sections/BrowserCategory";
import BestSelling from "./_components/sections/BestSelling";
import MusicExperience from "./_components/sections/MusicExperience";
import ExploreProducts from "./_components/sections/ExploreProducts";

function Page() {
  return (
    <div>
      <Hero />

      <FlashSales />

      <BrowserCategory />

      <BestSelling />

      <MusicExperience />

      <ExploreProducts />
    </div>
  );
}

export default Page;
