import Hero from "@/app/_components/sections/Hero";
import FlashSales from "@/app/_components/sections/FlashSales";
import BrowserCategory from "./_components/sections/BrowserCategory";
import BestSelling from "./_components/sections/BestSelling";

function Page() {
  return (
    <div>
      <Hero />

      <FlashSales />

      <BrowserCategory />

      <BestSelling />
    </div>
  );
}

export default Page;
