import React from "react";
import picture from "/svg/picture.svg"; 
import styled from "styled-components";
import Form from "../components/form";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding:30px;
`;

const ImageDiv = styled.div`
  display: none;
  width: 40%;
  @media (min-width: 1000px) {
    display: block;
  }
  padding: 80px;
`;

const Image = styled.img`
  padding: 0;
  max-width: 100%;
  vertical-align: middle;
`;
const FormDiv = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.16);
  border-radius: 12px;
  height: 100%;
  padding: 100px;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 50px
  }
`;

function LoginPage() {
  return (
    <Wrap>
      <ImageDiv>
        <Image src={picture} alt="picture" />
      </ImageDiv>
      <FormDiv>
        <Form />
      </FormDiv>
    </Wrap>
  );
}

export default LoginPage;
