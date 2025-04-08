import React from "react";
import Button from "../../UI/Button";

function NewsLetter() {
  return (
    <section className="flex min-h-fit flex-col items-center justify-center bg-pink-300 py-10 text-purple-900">
      <h1 className="mb-4 text-3xl font-semibold">
        Get our stories delivered From <br />
        <span className="flex items-center justify-center">
          {" "}
          us to your inbox weekly.
        </span>
      </h1>
      <form action="" className="mb-4 flex gap-2 sm:gap-5">
        <input className="w-72 md:w-96" type="email" placeholder="Your Email" />
        <Button type="cto">get started</Button>
      </form>
      <p className="text-xl leading-7">
        Get a response tomorrow if you submit by 9pm today. If we received after{" "}
        <br />
        <span className="flex items-center justify-center">
          9pm will get a reponse the following day.
        </span>
      </p>
    </section>
  );
}

export default NewsLetter;
