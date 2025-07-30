import { HiOutlineHandThumbDown, HiShoppingCart } from "react-icons/hi2";
import { Link } from "react-router-dom";

import Container from "../ui/Container";
import Btn from "../ui/Btn";
import { useState } from "react";
import Category from "../Category";

function Navbar() {
  const [showCategory, setShowCategory] = useState(false);
  return (
    <header className="w-full bg-white py-3 shadow-lg">
      <Container className="flex items-center justify-between">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 80"
            fill="none"
            className="h-auto w-48"
          >
            <circle
              cx="40"
              cy="40"
              r="20"
              fill="#f472b6
"
            />
            <path
              d="M0 50 Q40 30, 80 50 T160 50"
              stroke="#0F172A"
              strokeWidth="4"
              fill="none"
            />
            <text
              x="90"
              y="55"
              fill="#0F172A"
              fontSize="28"
              fontFamily="sans-serif"
              fontWeight="bold"
            >
              Horizon Hub
            </text>
          </svg>
        </div>
        <nav className="mr-3 inline-flex justify-center sm:mr-0 lg:hidden">
          <select name="" id="">
            <option value="">All products</option>
            <option value="">Female wears</option>
            <option value="">Male wears</option>
            <option value="">Hijabs</option>
            <option value="">Male caps</option>
          </select>
        </nav>
        <nav className="hidden items-center justify-center lg:flex">
          <ul className="flex items-center gap-3">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li className="relative" onMouseEnter={() => setShowCategory(true)}>
              <Link to="/category">Category</Link>

              <div className="absolute -left-[65px] top-[52px] z-10">
                {showCategory && <Category onCategory={setShowCategory} />}
              </div>
            </li>
            <li>
              <HiShoppingCart className="text-xl" />
            </li>
          </ul>
        </nav>

        <div className="ml-4 flex items-center gap-3 sm:ml-0">
          <Link to="" className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="#f472b6"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.5a7.5 7.5 0 0115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75v-.75z"
              />
            </svg>
          </Link>

          <Link to="">
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
                d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414M18.364 17.95l-1.414-1.414M6.05 6.05L4.636 7.464M12 8a4 4 0 100 8 4 4 0 000-8z"
              />
            </svg>
          </Link>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
