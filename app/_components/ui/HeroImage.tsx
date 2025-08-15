import Image from "next/image";
import React from "react";

function HeroImage() {
  return (
    <div className="h-full w-full pt-6">
      <Image
        width={400}
        height={400}
        quality={100}
        src="/frame-560.png"
        alt="hero image"
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
}

export default HeroImage;
