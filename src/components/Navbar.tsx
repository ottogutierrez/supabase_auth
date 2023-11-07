import AuthBtns from "./AuthBtns";
import MyNavLink from "./MyNavLink";

function Navbar() {
  return (
    <nav className="bg-gray-100">
      <div className="max-w-6xl mx-auto flex justify-between items-center text-xl text-gray-800 ">
        <h1 className="text-2xl">Logo</h1>
        <div className="flex text-xl">
          <MyNavLink className="px-2 py-4" to="/">
            Home
          </MyNavLink>
          <MyNavLink className="px-2 py-4" to="/about">
            About
          </MyNavLink>
        </div>
        <AuthBtns />
      </div>
    </nav>
  );
}

export default Navbar;
