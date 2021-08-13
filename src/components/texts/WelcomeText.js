import React from "react";
import styled from "styled-components";

export default function WelcomeText() {
  return (
    <Wrapper>
      <Title>apatize</Title>
      <BottomSection>
        <Tagline>find meals to fit your goals</Tagline>
        <Line />
        <LearnMore>Learn More</LearnMore>
      </BottomSection>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  gap: 50px;
  position: relative;
`;

//Contains Tagline, Line, and Find more
const BottomSection = styled.div`
  display: grid;
  gap: 30px;
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 100px;
  line-height: 130px;
  text-align: center;
  color: white;
`;

const Tagline = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 52px;
  text-align: center;
  color: white;
`;

const Line = styled.div`
  height: 2px;
  width: 100%;
  background: white;
  justify-items: center;
  align-items: center;
`;

const LearnMore = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 21px;
  text-align: center;
  color: white;
  margin-top: 40px;
  :hover {
    cursor: pointer;
  }
`;
