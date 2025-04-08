import React from "react";
import Button from "../../UI/Button";

import { useNavigate } from "react-router-dom";

const imageData = [
  {
    name: "display Image",
    id: crypto.randomUUID(),
    image: "/images/fash-display-img2.jpg",
  },
  {
    name: "display Image",
    id: crypto.randomUUID(),
    image: "/images/drewmsuniseximg.jpg",
  },
  {
    name: "display Image",
    id: crypto.randomUUID(),
    image: "/images/fash-display-image.jpg",
  },

  {
    name: "display Image",
    id: crypto.randomUUID(),
    image: "/images/horizon.jpg",
  },
];

function Hero() {
  return (
    <article className="flex min-h-[500px] w-full justify-between px-8 py-3">
      <WelcomeNotes />
      <WelcomeMedia imageData={imageData} />
    </article>
  );
}

function WelcomeNotes() {
  const navigate = useNavigate();
  return (
    // <section className="mt-40 flex flex-col justify-stretch gap-10">
    <section className="mt-25 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-amber-500">
        Welcome to Horizon Hub
      </h1>

      <p className="mb-6 mt-5 text-xl font-semibold italic leading-7 text-amber-700">
        Experience the perfect blend of <strong>beauty</strong>,{" "}
        <strong>elegance,</strong>
        <br /> and <strong>comfort</strong> with our exquisite Abayas and
        Jalabs.
      </p>
      <Button type="primary" onClick={() => navigate("/products")}>
        Shop Now
      </Button>
    </section>
  );
}

function WelcomeMedia({ imageData }) {
  return (
    <ul className="grid h-[250px] grid-cols-2 gap-3 gap-y-7 pt-9">
      {imageData.map((data) => (
        <li key={data.id}>
          <img
            className="h-[180px] w-[250px] rounded-md bg-white object-cover shadow-[12px_10px_4px_4px_rgba(0,0,0,0.2)]"
            src={data.image}
            alt={data.name}
          />
        </li>
      ))}
    </ul>
  );
}

export default Hero;
