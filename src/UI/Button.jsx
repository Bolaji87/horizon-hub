import React from "react";

function Button({ children, className, onclick }) {
  return (
    <button onClick={onclick} className={className}>
      {children}
    </button>
  );
}

export default Button;
