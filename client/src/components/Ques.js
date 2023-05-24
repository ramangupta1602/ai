import "./Ques.css";
import { RiSendPlaneFill } from "react-icons/ri";
import { BsPersonCircle } from "react-icons/bs";
import ChatGPTsvg from "./chatgpt-icon-svg.svg";
import { useEffect, useState } from "react";
import Mode from "./Mode";

const examples = [
  "How to use tailwind css with React.js",
  "How to use tailwind css with Next.js",
  "How to use tailwind css with Gatsby",
  "How to use tailwind css with Svelte",
  "How to use tailwind css with Vue",
  "How to use tailwind css with Angular",
]; 

const Ques = () => {

  const [prompt, setPrompt] = useState("");
  const [conversation, setConversation] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(conversation);
  }, [conversation]);

  const handleQuerySubmit = (event) => {
    event.preventDefault();
    window.scrollTo(0, document.body.scrollHeight);
    setLoading(true);
    setConversation((prevData) => [
      ...prevData,
      {
        type: "query",
        text: prompt,
      },
    ]);
    const temp = prompt;
    setPrompt("");
    // we get the reponse from server here.
    getResponseFromServer(temp);
  };
  const getResponseFromServer = async (temp) => {
    try {
      const response = await fetch("http://localhost:5000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: temp }),
      });
      const responseData = await response.json();
      setConversation((prevData) => [
        ...prevData,
        {
          type: "response",
          text: responseData.res,
        },
      ]);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setConversation((prevData) => [
        ...prevData,
        {
          type: "response",
          text: "Something Went Wrong!",
        },
      ]);
      setLoading(false);
    }
  };
  return (
    <div className=" h-[90vh] w-screen bg-[#050509] lg:flex ">
      <div className="w-[20%] border-none lg:w-[20%] md:w-[100%] xs:w-[100%] h-[90vh] bg-[#0c0c15] text-white ">
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

      <div className="app-container">
      <div className="conversation-container">
        {conversation.length === 0 ? (
          <div className="conversation-reponse query-container">
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
          </div>
        ) : (
          <></>
        )}
        {conversation.map((obj, index) =>
          obj.type === "query" ? (
            <div key={index} className="conversation-query query-container">
              <BsPersonCircle />
              <p>{obj.text}</p>
            </div>
          ) : (
            <div key={index} className="conversation-reponse query-container">
              <img src={ChatGPTsvg} alt="" />
              <p>{obj.text}</p>
            </div>
          )
        )}
        {loading ? (
          <div className="conversation-reponse query-container">
            <img src={ChatGPTsvg} alt="" />
            <p>Wait a sec</p>
          </div>
        ) : (
          <></>
        )}
      </div>
      <form className="app-input-container" onSubmit={handleQuerySubmit}>
        <input
          type="text"
          required
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button type="submit" disabled={!prompt || loading}>
          <RiSendPlaneFill />
        </button>
      </form>
    </div>
    </div>
  );
};

export default Ques;
