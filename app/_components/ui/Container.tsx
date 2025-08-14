import React from "react";
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-6xl px-6 sm:px-10 md:px-12 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;
