import { useState } from "react";
import Modal from "./Modal";
import SignIn from "./SignIn";

function AuthBtns() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex text-base">
      <button
        className="px-2 hover:text-indigo-500 focus:text-red-300"
        onClick={() => setOpen(true)}
      >
        Sign In
      </button>
      <button className="text-indigo-700 px-2 py-1 border-2  border-indigo-300 rounded-md bg-indigo-200 hover:bg-indigo-300 ">
        Sign Up
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <SignIn onClose={() => setOpen(false)} />
      </Modal>
    </div>
  );
}

export default AuthBtns;
