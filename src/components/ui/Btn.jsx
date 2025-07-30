import React from "react";

function Btn({ children, className = "" }) {
  return (
    <button
      className={`inline-flex min-w-max rounded-full border-none px-5 py-3 ${className}`}
    >
      {children}
    </button>
  );
}

export default Btn;

{
  /* HAMBURGER ICON */
}
{
  /* <Btn className="block text-2xl font-bold sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#cf3082"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Btn> */
}

{
  /* 
DARK MODE
            {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 stroke-pink-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                />
              </svg>
            } */
}
