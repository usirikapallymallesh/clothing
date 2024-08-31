import React, { useEffect, useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("SIGN UP");
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // handle form submission
  };
  useEffect(() => {
    // console.log("changed");
    // console.log(currentState);
  }, [currentState]);
  return (
    <div>
      <form
        action=""
        onSubmit={onSubmitHandler}
        className="flex flex-col items-center w-[90] h-[60%]  sm:max-w-96 m-auto mt-14 gap-10 text-gray-800"
      >
        <div className="inline-flex items-center  mb-2 mt-4">
          <p className="prata-regular text-3xl">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>
        <div className="flex flex-col gap-6  w-full ">
          {currentState === "LOG IN" ? (
            <div></div>
          ) : (
            <input
              type="text" // Corrected type from "name" to "text"
              className="w-full px-3 py-2 border border-gray-800"
              placeholder="Name" // Capitalized for consistency
              required
            />
          )}
          {/* {currentState === "Login" ? ():()
        } */}
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-800 "
            placeholder="Email"
            required
          />

          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-800 "
            placeholder="Password "
            required
          />
          <div className="w-full flex justify-between text-sm mt-[-8px]">
            <p className="cursor-pointer">Forgot password</p>
            {currentState === "LOG IN" ? (
              <p
                onClick={() => setCurrentState("SIGN UP")}
                className="cursor-pointer"
              >
                Crate Account
              </p>
            ) : (
              <p
                onClick={() => setCurrentState("LOG IN")}
                className="cursor-pointer"
              >
                Log In
              </p>
            )}
          </div>
          <button className="bg-[#8075b6] text-white font-light px-8 py-2 mt-4">
            {currentState}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
