import HeroImage from "@/app/_components/ui/HeroImage";
import Container from "@/app/_components/ui/Container";
import SideBar from "../ui/SideBar";

function Hero() {
  return (
    <Container>
      <div className="grid h-[350px] grid-cols-[14rem_1fr] gap-2 lg:grid-cols-[12rem_1fr] lg:grid-rows-[1fr_1fr]">
        <aside className="row-span-2 border-r-2 border-gray-200 p-4 pl-0">
          <SideBar />
        </aside>

        <main className="row-span-2 p-0.5">
          <HeroImage />
        </main>
      </div>
    </Container>
  );
}

export default Hero;
