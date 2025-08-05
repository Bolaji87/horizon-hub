import { HiOutlineUser, HiOutlineShoppingCart } from "react-icons/hi2";
import { Link } from "react-router-dom";

import Container from "../ui/Container";
import Logo from "../ui/Logo";
import HamburgerIcon from "../ui/HamburgerIcon";
import HeaderSearchInput from "../ui/HeaderSearchInput";

function Header() {
  return (
    <>
      <header className="w-full border-b bg-white shadow-sm">
        <Container className="flex items-center justify-between gap-3">
          <div className="flex items-center justify-start text-3xl md:hidden">
            <HamburgerIcon />
          </div>
          <Logo />
          <HeaderSearchInput className="hidden sm:block" />

          <ul className="hidden w-full max-w-max items-center justify-end gap-3 px-6 py-3 md:flex">
            <li className="text-lg font-semibold text-gray-500">
              <Link
                to=""
                className="px-5 py-[7.5px] hover:rounded-sm hover:bg-pink-500 hover:text-white"
              >
                Sign In
              </Link>
            </li>
            <li className="flex gap-0.5 rounded-sm bg-green-500 px-5 py-2">
              <HiOutlineShoppingCart className="h-6 w-6 text-gray-800 hover:text-gray-900" />
              <Link className="mr-1 inline-flex" to="">
                My cart
              </Link>
              <div className="ml-2 rounded-sm bg-white px-1 font-semibold text-gray-800 hover:text-gray-900">
                0
              </div>
            </li>
          </ul>

          <div className="flex items-center justify-end gap-3 text-3xl md:hidden">
            <HiOutlineUser />
            <div className="relative flex">
              <HiOutlineShoppingCart />
              <span className="absolute -top-[13px] right-1 z-10 rounded-sm bg-pink-500 px-[3px] py-[0.5px] text-sm font-semibold text-white">
                0
              </span>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}

export default Header;
