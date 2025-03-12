import React from "react";
import styles from "./NewsLetter.module.css";
import Button from "../../UI/Button";

function NewsLetter() {
  return (
    <section className={styles.newsLetter}>
      <h1>
        Get our stories delivered From <br />
        <span className={styles.bigText}> us to your inbox weekly.</span>
      </h1>
      <form className={styles.newsForm} action="">
        <input type="email" placeholder="Your Email" />
        <Button className={styles.formBtn}>get started</Button>
      </form>
      <p>
        Get a response tomorrow if you submit by 9pm today. If we received after{" "}
        <br />
        <span className={styles.smallText}>
          9pm will get a reponse the following day.
        </span>
      </p>
    </section>
  );
}

export default NewsLetter;
