import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe And Get 20% Off
      </p>
      <p className="text-gray-400 mt-3">
        Subscribe to our newsletter and enjoy an exclusive 20% discount on your
        next purchase! Stay updated on the latest trends and promotions.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          type="email"
          name=""
          id=""
          className="required w-full sm:flex-1 outline-none "
          placeholder="Enter Your Email"
        />
        <button
          type="submit"
          className="bg-[#8075b6] text-white hover:bg-blue-950 text-xs px-10 font-medium py-4 rounded-sm"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
