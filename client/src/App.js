import React from "react";
import Navbar from "./components/Navbar";
import FileUploader from "./components/FileUploader";
import Question from "./components/Question";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ques from "./components/Ques";
import QuesAns from "./components/QuesAns";
import AiScreen from "./components/AiScreen";

const App = () => {
  return (
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<FileUploader />} />
          <Route path="/question" element={<Question />} />
          <Route path="/ques" element={<Ques />} />
          <Route path="/quesans" element={<QuesAns />} />
          <Route path="/ai" element={<AiScreen />} />
        </Routes>
      </Router>
  );
};

export default App;
