import React, { useState } from "react";
import styled from "styled-components";
import EyeShow from "/svg/eye-password-show.svg";
import EyeHide from "/svg/eye-password-hide.svg";
function Form() {

    const [viewPassword, setViewPassword] = useState(false);
    const handleVisibility = () => {
        setViewPassword(!viewPassword);
    }
    const [loginId, setLoginId] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (e) => {
        console.log(e.target.name,e.target.value)
        if(e.target.name === "loginId"){
            setLoginId(e.target.value);
        }else{
            setPassword(e.target.value);
        }
    }


  return (
    <>
      <FormContainer>
        <Title>Login</Title>
        <Label htmlFor="loginId">Login ID</Label>
        <Input
          type="text"
          id="loginId"
          value={loginId}
          onChange={handleChange}
          placeholder="Enter Login ID"
          name="loginId"
        />

        <Label htmlFor="password">Password</Label>
        <div style={{ position: "relative" }}>
          <Input
            type={viewPassword? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={handleChange}
            id="password"
            name="password"
          />
          <ShowPasswordImage
          onClick={handleVisibility}
            
            src={viewPassword? EyeShow: EyeHide}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <CheckboxLabel>
            <Checkbox type="checkbox" id="rememberMe" name="rememberMe" />
            Remember Me
          </CheckboxLabel>
          <StyledA href="https://www.google.com"> Change Password</StyledA>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <CheckboxLabel>
            <Checkbox
              type="checkbox"
              id="forgotPassword"
              name="forgotPassword"
            />
            Agree to{" "}
          </CheckboxLabel>
          <StyledA
            href="https://www.google.com"
            style={{ textDecoration: "underline" }}
          >
            {" "}
            Terms and conditions
          </StyledA>
        </div>
        <Submitbutton>Login</Submitbutton>
        <div style={{ alignSelf: "center" }}>
          Dont have an account?{" "}
          <StyledA
            href="#"
            style={{ fontWeight: "bold", textDecoration: "underline" }}
          >
            Register here
          </StyledA>
        </div>
      </FormContainer>
    </>
  );
}

export default Form;

  const Title = styled.h1`
    text-align: center;
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 30px;
  `;

  const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    margin: 20px;
    width: 100%;
    height: auto;
  `;

  const Label = styled.label`
    font-weight: bold;
    margin-bottom: 5px;
    font-family: "Poppins", sans-serif;
    margin-bottom: 8px;
  `;

  const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 25px;
    border: 1px solid #ccc;
    border-radius: 4px;
  `;

  const CheckboxLabel = styled.label`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    color: #737b86;
    font-weight: 400;
    margin-right: 10px;
  `;

  const Checkbox = styled.input`
    margin-right: 20px;
  `;

  const StyledA = styled.a`
    color: #f78719;
    text-decoration: none;
  `;

  const Submitbutton = styled.button`
    font-family: "Poppins", sans-serif;
    color: white;
    background-color: #1575a7;
    padding: 15px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin-block: 20px;
  `;

  const ShowPasswordImage = styled.img`
    width: 20px;
    position: absolute;
    right: 10px;
    top: 20%;
    cursor: pointer;
  `;