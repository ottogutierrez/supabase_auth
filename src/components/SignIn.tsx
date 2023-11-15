import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useAuth } from "../utils/authHook";
import { useNavigate } from "react-router-dom";

type FormFields = {
  userEmail: string;
  userPassword: string;
};

interface SignInProps {
  onClose: () => void;
}
const initialFormState: FormFields = {
  userEmail: "",
  userPassword: "",
};

function SignIn({ onClose }: SignInProps) {
  const [formState, setFormState] = useState<FormFields>(initialFormState);
  const { signIn } = useAuth();
  const navigate = useNavigate();
  // Handle form change
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // useEffect to clear the form when the modal closes
  useEffect(() => {
    setFormState(initialFormState);
  }, [onClose]);
  // Handle submit the form
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await signIn(formState.userEmail, formState.userPassword);
    } catch (error) {
      // TODO: handle error in a better way (showing a message)
      console.log(error);
      navigate("/");
    }
    setFormState(initialFormState);
    onClose();
  };
  return (
    <div className="w-80 p-1 flex flex-col">
      <div className="text-2xl text-center pb-5">Log In</div>
      <form className="z-50 flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="email"
          name="userEmail"
          placeholder="Type your email"
          value={formState.userEmail}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-2 shadow-md"
        />
        <input
          type="password"
          name="userPassword"
          placeholder="Type your password"
          value={formState.userPassword}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-2 shadow-md"
        />
        <button
          className="w-full border bg-blue-500 text-gray-200
        text-xl rounded-md py-2"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;
