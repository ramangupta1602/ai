import { useState } from "react";
import { Button, Space } from 'antd';
import { useNavigate } from "react-router-dom";

const FileUploader = () => {
  const navigate = useNavigate();
  const [files, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files);
  };
  console.log(files);

  function handleUpload(e) {
    e.preventDefault();
    const formData = new FormData();

    if (files !== null) {
      for (let i = 0; i < files.length; i++) {
        formData.append(`files[${i}]`, files[i]);
        navigate("/question");
      }
    } else {
      return;
    }
    fetch("https://httpbin.org/post", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="w-full h-[90%] bg-[#111827] flex items-center justify-center mx-auto"
      style={{
        width: "100%",
        height: "90vh",
        backgroundColor: "#111827",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        paddingBottom: "5vh",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", color: "#fff" }}>
        <input
          type="file"
          multiple
          name="file"
          id="file"
          accept="pdf/*"
          onChange={(e) => handleChange(e)}
        />
         <Space align="end">

        <Button className="bg-white" onClick={handleUpload}>
          Submit
        </Button> 
         </Space>
      </div>
    </div>
  );
};

export default FileUploader;
