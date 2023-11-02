// TODO: IF NO USER IS SIGNED IN, JUST SHOW A BUTTON FOR SIGN IN, OTHERWISE SHOW THIS DROPDOWN

const DropDown = () => {
  const options = [
    { id: 1, text: "Sign In" },
    { id: 2, text: "Sign Out" },
  ];

  return (
    <div className="text-lg w-24 max-w-xs shadow-2xl bg-gray-100  rounded-lg  py-1 absolute flex flex-col text-gray-800 top-12 -right-1">
      <div className="absolute right-3 z-0 bg-gray-100 w-3 h-3 transform rotate-45 -translate-y-2"></div>
      {options.map((item) => (
        <h3
          className="z-10 cursor-pointer rounded-md w-full p-2 hover:bg-gray-200 hover:text-indigo-500"
          key={item.id}
        >
          {item.text}
        </h3>
      ))}
    </div>
  );
};

export default DropDown;
