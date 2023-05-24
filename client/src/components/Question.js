import React from "react";

const Question = () => {
  const examples = [
    "How to use tailwind css with React.js",
    "How to use tailwind css with Next.js",
    "How to use tailwind css with Gatsby",
    "How to use tailwind css with Svelte",
    "How to use tailwind css with Vue",
    "How to use tailwind css with Angular",
  ];

  return (
    <div className=" h-screen w-screen bg-[#050509] lg:flex ">
      <div className="w-[20%] border-none lg:w-[20%] md:w-[100%] xs:w-[100%] h-screen bg-[#0c0c15] text-white ">
        <div className="lg:mt-16 lg:ml-5 xs:mt-0 xs:ml-10 sm:ml-12">
          <select
            className="w-[90%] text-black rounded border-none mt-6"
            data-te-select-init
          >
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
            <option value="6">Six</option>
            <option value="7">Seven</option>
          </select>
          <select
            className="w-[90%] text-black rounded border-none mt-6"
            data-te-select-init
          >
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
            <option value="6">Six</option>
            <option value="7">Seven</option>
          </select>
          <select
            className="w-[90%] text-black rounded border-none mt-6"
            data-te-select-init
          >
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
            <option value="6">Six</option>
            <option value="7">Seven</option>
          </select>
          <select
            className="w-[90%] text-black rounded border-none mt-6"
            data-te-select-init
          >
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
            <option value="6">Six</option>
            <option value="7">Seven</option>
          </select>
          <select
            className="w-[90%] text-black rounded border-none mt-6"
            data-te-select-init
          >
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
            <option value="6">Six</option>
            <option value="7">Seven</option>
          </select>
          <select
            className="w-[90%] text-black rounded border-none mt-6"
            data-te-select-init
          >
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
            <option value="6">Six</option>
            <option value="7">Seven</option>
          </select>
        </div>
      </div>

      <div className="w-[80%] md:w-screen md:bg-[#050509] sm:bg-[#050509] sm:w-screen xs:w-screen xs:bg-[#050509]">
        <div
          className="h-[80%]  flex flex-col justify-center items-center text-white"
        >
          {/* <img
            src="https://openai.com/social/twitter.png"
            className="h-[100%] w-[100%]"
          /> */}
        </div>
        <div className="h-[20%] md:py-4 sm:py-4">
          <div className="flex flex-col justify-center items-center w-full h-full text-white">
            <div className="w-[60%] xs:[60%] flex justify-center relative">
              <input
                type="text"
                className="w-full xs:w-full md:mt-8 xs:mt-8 bg-[#0c0c15]  text-white border rounded-lg p-4"
                placeholder="Type your message here..."
              />
              <span className="absolute right-4 mt-3 md:mt-12 xs:mt-12 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-send"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M10 14l11 -11"></path>
                  <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
                </svg>
              </span>
            </div>
            <small className="text-slate-500">
              AI can generate incorrect information
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
