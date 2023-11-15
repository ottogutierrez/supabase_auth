import AuthBtns from "./AuthBtns";
import MyNavLink from "./MyNavLink";
import { useAuth } from "../utils/authHook";

function Navbar() {
  const { session } = useAuth();
  return (
    <nav className="bg-gray-100">
      <div className="max-w-6xl mx-auto flex justify-between items-center text-xl text-gray-800 ">
        <h1 className="text-2xl">Logo</h1>
        <div className="flex text-xl">
          <MyNavLink to="/">Home</MyNavLink>
          <MyNavLink to="/about">About</MyNavLink>
          {session && <MyNavLink to="/profile">Profile</MyNavLink>}
        </div>
        <AuthBtns />
      </div>
    </nav>
  );
}

export default Navbar;
