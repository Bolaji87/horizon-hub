interface LogoProps {
  className?: string;
}

function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`h-auto w-full max-w-10 md:w-12 lg:w-14 ${className}`}>
      <img
        src="/logo.png"
        alt="Brand logo"
        className="h-full w-full max-w-max rounded-full object-cover"
      />
    </div>
  );
}

export default Logo;
