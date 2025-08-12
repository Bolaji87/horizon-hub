import Hero from "@/app/_components/sections/Hero";
import ImageCarousel from "@/app/_components/ui/ImageCarousel";
import LatestArrival from "@/app/_components/sections/LatestArrival";
function Page() {
  return (
    <div>
      <Hero />
      <div className="mt-8 w-screen bg-orange-500 p-6">
        <ImageCarousel />
      </div>
      <LatestArrival />
    </div>
  );
}

export default Page;
