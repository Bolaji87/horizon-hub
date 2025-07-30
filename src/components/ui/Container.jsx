function Container({ children, className = "" }) {
  return (
    <div
      className={`sm:10 md:12 lg:8 mx-auto w-full max-w-6xl px-6 ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;
