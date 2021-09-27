import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//Hook
import useOnClickOutside from "../../helpers/hooks";

//Icons
import UserIcon from "../../static/icons/user.svg";
import MailIcon from "../../static/icons/mail.svg";
import KeyIcon from "../../static/icons/key.svg";
import KeyLockIcon from "../../static/icons/key-lock.svg";
import GiftIcon from "../../static/icons/gift.svg";

import {
  Input,
  Icon,
  TextField,
  SubmitButton,
  ButtonText,
  OrDivider,
  Line,
  OrText,
  ChangePageText,
} from "../../styles/InputFieldStyles";

export default function LoginForm(props) {
  const { formData, setFormData } = props;
  const [clickedState, setClickedState] = useState("");
  const { email, password } = formData;

  //To update form data
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //To handle UI animations for clicked fields
  const setClicked = (e) => {
    setClickedState(e);
  };

  //For enter clicks
  const ref_input2 = useRef();

  //For Outside Clicks
  const ref = useRef();
  const insideRef = useRef();

  useOnClickOutside(ref, () => {
    setClickedState("");
  });

  useOnClickOutside(insideRef, () => {
    setClickedState("");
  });

  return (
    <div ref={ref}>
      <Wrapper>
        <ContentWrapper>
          <Input name="email" stateName={clickedState}>
            <Icon src={MailIcon} name="email" stateName={clickedState} />
            <TextField
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              onClick={(name) => setClicked("email")}
              stateName={clickedState}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  ref_input2.current.focus();
                  setClicked("password");
                }
              }}
              ref={ref_input2}
              required
            />
          </Input>
          <Input name="password" stateName={clickedState}>
            <Icon src={KeyIcon} name="password" stateName={clickedState} />
            <TextField
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              onClick={(name) => setClicked("password")}
              stateName={clickedState}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  console.log(formData);
                  setClicked("");
                }
              }}
              ref={ref_input2}
              required
            />
          </Input>
          <SubmitButton>
            <ButtonText>Login</ButtonText>
          </SubmitButton>
          <OrDivider>
            <Line />
            <OrText>OR</OrText>
            <Line />
          </OrDivider>
          <Link to={"/register"}>
            <ChangePageText>Register</ChangePageText>
          </Link>
        </ContentWrapper>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 374px;
  height: auto;
  background: rgba(254, 254, 254, 0.82);
  border-radius: 30px;

  @media (max-width: 450px) {
    width: 300px;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  position: relative;
  padding: 20px;
  margin: auto;
  width: 100%;
  gap: 20px;
  justify-items: center;
`;
