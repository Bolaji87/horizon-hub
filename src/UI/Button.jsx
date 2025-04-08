import React from "react";
import { Link } from "react-router-dom";

function Button({ children, onClick, to, type }) {
  const base =
    "inline-block rounded-full bg-purple-400 text-sm text-stone-800 font-bold uppercase tracking-wide transition-colors duration-300 ";

  // ("  text-stone-800  hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed");

  const style = {
    cto: base + " py-2.5 px-3",
    primary: base + " py-4 px-6",
  };

  if (to)
    return (
      <Link className={style[type]} to={to}>
        {children}
      </Link>
    );

  return (
    <button onClick={onClick} className={style[type]}>
      {children}
    </button>
  );
}

export default Button;
