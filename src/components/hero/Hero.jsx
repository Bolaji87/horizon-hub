import React from "react";
import Button from "../../UI/Button";
import styles from "./Hero.module.css";

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
    <article className={styles.heroContainer}>
      <WelcomeNotes />
      <WelcomeMedia imageData={imageData} />
    </article>
  );
}

function WelcomeNotes() {
  return (
    <section className={styles.notes}>
      <h1>Welcome to Horizon Hub</h1>
      <p>
        Experience the perfect blend of <strong>beauty</strong>,{" "}
        <strong>elegance,</strong>
        <br /> and <strong>comfort</strong> with our exquisite Abayas and
        Jalabs.
      </p>
      <Button className={styles.btn}>Shop Now</Button>
    </section>
  );
}
function WelcomeMedia({ imageData }) {
  return (
    <ul className={styles.media}>
      {imageData.map((data) => (
        <li key={data.id}>
          <img className={styles.heroImage} src={data.image} alt={data.name} />
        </li>
      ))}
    </ul>
  );
}
export default Hero;
