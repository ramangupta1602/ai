import React, { useState, useEffect } from "react";
import axios from 'axios'

const examples = [
  "How to use tailwind css with React.js",
  "How to use tailwind css with Next.js",
  "How to use tailwind css with Gatsby",
  "How to use tailwind css with Svelte",
  "How to use tailwind css with Vue",
  "How to use tailwind css with Angular",
];
const AiScreen = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState();

  const chat = [
    {
      role: "user",
      message: "I want to know how to use tailwind css",
    },
    {
      role: "assistant",
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
      numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
      optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
      obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
      nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
      tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
      quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
      sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
      recusandae alias error harum maxime adipisci amet laborum. Perspiciatis `,
    },
    {
      role: "user",
      message: "How to use tailwind css with react",
    },
    {
      role: "assistant",
      message: `Here is some examples: https://tailwindui.com/docs/guides/create-react-app
      minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
      quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
      fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
      consequuntur! Commodi minima excepturi repudiandae velit hic maxime
      doloremque. Quaerat provident commodi consectetur veniam similique ad 
      earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
      fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
      suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
      modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
      totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
      quasi aliquam eligendi, placeat qui corporis!`,
    },
  ];

  const response = async () => {
   
    // const q = query.replace(/ /g, "+");
   if(query){
    await fetch(`https://api.edamam.com/api/nutrition-data?app_id=98b858f8&app_key=fe3ac82e0939d39fa15062c3903bf3c7&nutrition-type=cooking&ingr=${query}`, {
      method: "GET",
      mode: "cors",
      "Content-Type": "application/json",
      headers: {
        "app_id": "98b858f8",
        "app_key": "fe3ac82e0939d39fa15062c3903bf3c7",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result);
          console.log(result)
        }, 
        (error) => {
          console.log(error);
        }
      );
   }
  };
  useEffect(() => {

  }, [query]); 
  return (
    <div className=" h-screen w-screen bg-[#050509] lg:flex ">
      <div className="w-[20%] lg:w-[20%] md:w-[100%] xs:w-[100%] h-screen bg-[#0c0c15] text-white p-4 lg:py-4 md:py-4 xs:py-4">
        <div className="h-[5%]">
          <button className="w-full h-[50px] border rounded hover:bg-slate-600">
            + New Chat
          </button>
        </div>
        <div className="h-[70%] mt-2 md:mt-4 xs:py-4 lg:overflow-scroll lg:shadow-lg lg:hide-scroll-bar overflow-scroll shadow-lg hide-scroll-bar">
          {[1, 2, 3, 2, 3, 4, 1, 2, 3, 4, 5, 6].map((item, index) => (
            <div className="py-3 md:py-3 text-center lg:text-sm  mt-1 text-lg font-light rounded flex items-center px-8 hover:bg-slate-600 cursor-pointer">
              <span className="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-message"
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
                  <path d="M8 9h8"></path>
                  <path d="M8 13h6"></path>
                  <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path>
                </svg>
              </span>
              My chat history
            </div>
          ))}
        </div>
        <div className="overflow-scroll shadow-lg hide-scroll-bar h-[20%] border-t">
          {[1, 2, 3].map((item, index) => (
            <div className="py-3  text-center mt-1 text-sm font-light rounded flex items-center px-8 hover:bg-slate-600 cursor-pointer">
              <span className="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-settings"
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
                  <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
                  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                </svg>
              </span>
              Code Settings
            </div>
          ))}
        </div>
      </div>
      <div className="w-[80%] md:w-screen md:bg-[#050509] sm:bg-[#050509] sm:w-screen xs:w-screen xs:bg-[#050509]">
        {chat.length > 0 ? (
          <div className="h-[80%] overflow-scroll hide-scroll-bar pt-4" style={{wordBreak:'break-all'}}>
            {chat.map((item, index) => (
              <div
                className={`w-[60%] mx-auto p-4 text-white flex bg-[#0c0c15] rounded`}
              >
                <span className="mr-8 p-2 bg-slate-800 text-white h-full rounded-full">
                  {item.role === "user" ? (
                    <svg 
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-user"
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
                      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-robot"
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
                      <path d="M7 7h10a2 2 0 0 1 2 2v1l1 1v3l-1 1v3a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-3l-1 -1v-3l1 -1v-1a2 2 0 0 1 2 -2z"></path>
                      <path d="M10 16h4"></path>
                      <circle
                        cx="8.5"
                        cy="11.5"
                        r=".5"
                        fill="currentColor"
                      ></circle>
                      <circle
                        cx="15.5"
                        cy="11.5"
                        r=".5"
                        fill="currentColor"
                      ></circle>
                      <path d="M9 7l-1 -4"></path>
                      <path d="M15 7l1 -4"></path>
                    </svg>
                  )}
                </span>
                <div className="leading-loose">{item.message}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-[80%]  flex flex-col justify-center items-center text-white">
            <div className="text-4xl font-bold mb-8 md:mt-4 sm:mt-4 xs:mt-4">
              AppChat
            </div>
            <div className="flex flex-wrap justify-around max-w-[900px] sm:px-2 md:px-2 xs:px-2">
              {examples.map((item, index) => (
                <div className="text-lg font-light mt-4 p-4 max-w-[400px] border xs:w-[100%] rounded cursor-pointer hover:bg-slate-800">
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="h-[20%] md:py-4 sm:py-4">
          <div className="flex flex-col justify-center items-center w-full h-full text-white">
            <div className="w-[60%] xs:[60%] flex justify-center relative">
              <input
                type="text"
                onChange={(e) => setQuery(e.target.value)}
                className="w-full xs:w-full md:mt-8 xs:mt-8 bg-[#0c0c15] pr-16 text-white border rounded-lg p-4"
                placeholder="Type your message here..."
              />
              <span className="absolute right-4 mt-3 md:mt-12 xs:mt-12"  onClick={() => response()}>
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

export default AiScreen;
