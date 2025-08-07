import React from "react";
import CategoryListHero from "../components/ui/CategoryListHero";

import AdvertImages from "../components/ui/AdvertImages";
import HeroModal from "../components/ui/HeroModal";
import Branding from "../components/ui/Branding";

function Hero() {
  return (
    <div className="mt-4">
      <div
        className="grid h-[70vh] gap-2"
        style={{
          gridTemplateColumns: "12rem 1fr 14rem",
          gridTemplateRows: "1fr 1fr",
        }}
      >
        <aside className="row-span-2 rounded-sm border border-gray-400 bg-white p-4 shadow-lg">
          <CategoryListHero />
        </aside>

        <main className="row-span-2 p-0.5">
          <AdvertImages />
        </main>

        <div className="rounded bg-white p-4 shadow-lg">
          <HeroModal />
        </div>

        <div className="rounded bg-white p-4 shadow-lg">
          <Branding />
        </div>
      </div>
    </div>
  );
}

export default Hero;
