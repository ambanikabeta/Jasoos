import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import ImageUploadAndDisplay from "../imageupload";

const Container = styled.div`
  font-family: "Arial, sans-serif";
  padding: 30px;
  text-align: center;
  background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
  min-height: 100vh;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #2d3748;
`;

const Form = styled.form`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #cbd5e0;
  border-radius: 8px;
  width: 100%;
  max-width: 300px;
  box-sizing: border-box;
`;

const FileInput = styled(Input)`
  border: 2px dashed #cbd5e0;
  background: #edf2f7;
`;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #cbd5e0;
  border-radius: 8px;
  width: 100%;
  max-width: 300px;
  box-sizing: border-box;
  resize: vertical;
  white-space:pre-wrap;
`;

const Button = styled.button`
  padding: 12px 20px;
  font-size: 1rem;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #357abd;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginCredentials, setLoginCredentials] = useState({
    id: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginCredentials.id === "admin" && loginCredentials.password === "admin") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid ID or password. Please try again.");
    }
  };

  const handleImageUpload = async (event) => {
    event.preventDefault();
    if (!selectedFile || !description) {
      alert("Please provide both an image and a description.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("description", description);

    try {
      await axios.post("https://jasoosbackend-ofxe.onrender.com/images/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Image uploaded successfully!");
      setSelectedFile(null);
      setDescription("");
    } catch (err) {
      console.error("Error uploading image:", err);
      alert("Error uploading image. Please try again.");
    }
  };

  if (!isLoggedIn) {
    return (
      <Container>
        <Header>Admin Login</Header>
        <LoginContainer>
          <Input
            type="text"
            placeholder="ID"
            value={loginCredentials.id}
            onChange={(e) =>
              setLoginCredentials({ ...loginCredentials, id: e.target.value })
            }
          />
          <Input
            type="password"
            placeholder="Password"
            value={loginCredentials.password}
            onChange={(e) =>
              setLoginCredentials({
                ...loginCredentials,
                password: e.target.value,
              })
            }
          />
          <Button onClick={handleLogin}>Login</Button>
        </LoginContainer>
      </Container>
    );
  }

  return (
    <Container>
            <a style={{
        textDecoration:"none",
        fontFamily:"Poppins",
        color:"black",
        border:"1px solid black",
        padding:"5px 20px",
        position:"absolute",
        left:"20px",
        top:"20px"
      }} href="/">HOME</a>
      <Header>Upload Image</Header>
      <Form onSubmit={handleImageUpload}>
        <FileInput
          type="file"
          onChange={(e) => setSelectedFile(e.target.files[0])}
          accept="image/*"
        />
        <TextArea
          rows="5"
          maxLength={500}
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <p style={{
          fontFamily:"Poppins",
          fontSize:"10px"
        }}>Max 500 Characters</p>
        <Button type="submit">Upload</Button>
      </Form>
      <ImageUploadAndDisplay />
    </Container>
  );
};

export default UploadPage;
