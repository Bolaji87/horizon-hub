// import AdvertImages from "@/app/_components/ui/AdvertImages";
// import HeroModal from "@/app/_components/ui/HeroModal";
// import Branding from "@/app/_components/ui/Branding";
// import Container from "@/app/_components/ui/Container";
// import CategoryList from "@/app/_components/ui/CategoryList";

// function Hero() {
//   return (
//     <Container>
//       <div className="mt-4">
//         <div className="grid h-[70vh] grid-cols-[12rem_1fr] gap-2 lg:grid-cols-[12rem_1fr_15rem] lg:grid-rows-[1fr_1fr]">
//           <aside className="row-span-2 rounded-sm border border-gray-100 bg-white p-4 shadow-2xl">
//             <CategoryList />
//           </aside>

//           <main className="row-span-2 p-0.5">
//             <AdvertImages />
//           </main>

//           <div className="hidden rounded bg-white p-4 shadow-lg lg:block">
//             <HeroModal />
//           </div>

//           <div className="hidden rounded bg-white p-4 shadow-lg lg:block">
//             <Branding />
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// }

// export default Hero;

import AdvertImages from "@/app/_components/ui/AdvertImages";
import HeroModal from "@/app/_components/ui/HeroModal";
import Branding from "@/app/_components/ui/Branding";
import Container from "@/app/_components/ui/Container";
import CategoryList from "@/app/_components/ui/CategoryList";

function Hero() {
  return (
    <Container>
      <div className="mt-4">
        <div className="grid h-[70vh] grid-cols-[12rem_1fr] gap-2 lg:grid-cols-[12rem_1fr_15rem] lg:grid-rows-[1fr_1fr]">
          <aside className="row-span-2 rounded-sm border border-gray-100 bg-white p-4 shadow-2xl">
            <CategoryList />
          </aside>

          <main className="row-span-2 p-0.5">
            <AdvertImages />
          </main>

          <div className="hidden rounded bg-white p-4 shadow-lg lg:block">
            <HeroModal />
          </div>

          <div className="hidden rounded bg-white p-4 shadow-lg lg:block">
            <Branding />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Hero;
