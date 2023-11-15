import { useState } from "react";
import Modal from "./Modal";
import SignIn from "./SignIn";
import { useAuth } from "../utils/authHook";

function AuthBtns() {
  const [open, setOpen] = useState(false);
  const { session } = useAuth();
  const { signOut } = useAuth();
  return !session ? (
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
  ) : (
    <div className="flex text-base">
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}

export default AuthBtns;
