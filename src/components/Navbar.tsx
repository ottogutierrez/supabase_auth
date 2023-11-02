import MyNavLink from "./MyNavLink";
import { AiOutlineUser } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import DropDown from "./DropDown";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeDropDown = () => {
    setIsOpen(false);
  };

  const dropDownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        closeDropDown();
      }
    };
    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

  return (
    <nav className="bg-gray-100">
      <div className="max-w-5xl mx-auto flex justify-between items-center text-2xl text-gray-800 ">
        <h1>Logo</h1>
        <div className="flex text-xl">
          <MyNavLink className="px-2 py-4" to="/">
            Home
          </MyNavLink>
          <MyNavLink className="px-2 py-4" to="/about">
            About
          </MyNavLink>
        </div>
        <div ref={dropDownRef} className="relative flex">
          <button
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            className="items-center border-2 rounded-full border-black hover:text-indigo-500 hover:border-indigo-500"
          >
            <AiOutlineUser />
          </button>
          {isOpen && <DropDown />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
