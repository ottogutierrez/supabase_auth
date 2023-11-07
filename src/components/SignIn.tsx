import { useState, ChangeEvent, useEffect } from "react";

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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    setFormState(initialFormState);
  }, [onClose]);

  return (
    <div className="w-80 p-1 flex flex-col">
      <div className="text-2xl text-center pb-5">Log In</div>
      <form className="flex flex-col gap-4">
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
        <input
          type="submit"
          value="Log in"
          className="w-full border bg-blue-500 text-gray-200 
          text-xl rounded-md py-2"
        />
      </form>
    </div>
  );
}

export default SignIn;
