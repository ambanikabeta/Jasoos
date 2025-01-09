
import React, { useState } from "react";
import styled from "styled-components";

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

const AdminLogin = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      onLogin(true);
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <Container>
      <Header>Admin Login</Header>
      <Form onSubmit={handleLogin}>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default AdminLogin;
