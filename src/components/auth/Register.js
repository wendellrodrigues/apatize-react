import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import RegisterForm from "../forms/RegisterForm";
import WelcomeText from "../texts/WelcomeText";

export default function Register() {
  return (
    <Wrapper>
      <ContentWrapper>
        <WelcomeText />
        <RegisterForm />
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 1100px;
  width: 100%;
  background: #e77b7b;
  justify-content: center;
  margin-top: 100px;
  margin: auto;
`;

const ContentWrapper = styled.div`
  position: relative;
  display: grid;
  margin: auto;
  grid-template-columns: auto auto;
  width: 90%;
  top: 30%;
  gap: 200px;
  justify-content: center;
  align-items: top;
`;
