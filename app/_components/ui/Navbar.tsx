import Container from "./Container";
import HeaderNavItems from "./HeaderNavItems";
import HeaderRightBar from "./HeaderRightBar";
import Logo from "./Logo";

function Navbar() {
  return (
    <div className="border-b border-gray-200 py-3 pb-2">
      <Container className="flex items-center justify-between">
        <Logo />
        <HeaderNavItems />

        <HeaderRightBar />
      </Container>
    </div>
  );
}

export default Navbar;
