import { useState } from "react";
import Modal from "./Modal";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useAuth } from "../utils/authHook";

function AuthBtns() {
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false)
  const { session } = useAuth();
  const { signOut } = useAuth();
  return !session ? (
    <div className="flex text-base">
      <button
        className="px-2 hover:text-indigo-500 focus:text-red-300"
        onClick={() => setOpenSignIn(true)}
      >
        Sign In
      </button>
      <button className="text-indigo-700 px-2 py-1 border-2  border-indigo-300 rounded-md bg-indigo-200 hover:bg-indigo-300 "
        onClick={()=>setOpenSignUp(true)}
      >
        Sign Up
      </button>
      <Modal open={openSignIn} onClose={() => setOpenSignIn(false)}>
        <SignIn onClose={() => setOpenSignIn(false)} />
      </Modal>
      <Modal open={openSignUp} onClose={()=>setOpenSignUp(false)}>
        <SignUp onClose={()=> setOpenSignUp(false)} />
      </Modal>
    </div>
  ) : (
    <div className="flex text-base">
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}

export default AuthBtns;
