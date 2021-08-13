import React, { Fragment } from "react";
import styled from "styled-components";

const App = () => {
  return (
    <Fragment>
      <Wrapper></Wrapper>
    </Fragment>
  );
};

const Wrapper = styled.div`
  display: grid;
  height: 500px;
  width: 100%;
  background: black;
  margin: 0;
`;

export default App;
