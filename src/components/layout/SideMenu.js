import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SideWaysLogo from "../../static/logos/sideways_logo.svg";
import { MenuText } from "../../styles/TextStyles";

export default function SideMenu(props) {
  const { open, setOpen } = props;
  //Menu for when app is at login screen
  const LoginMenu = [
    { title: "Login", link: "/" },
    { title: "Register", link: "/register" },
  ];

  return (
    <Wrapper open={open}>
      <MenuWrapper count={LoginMenu.length}>
        {LoginMenu.map((item, index) => (
          <Link to={item.link}>
            <MenuItem>{item.title}</MenuItem>
          </Link>
        ))}
      </MenuWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: grid;
  background: white;
  height: 100%;
  width: 40%;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  @media (min-width: 760px) {
    display: none;
  }
`;

const MenuWrapper = styled.div`
  display: grid;
  gap: 20px;
  position: absolute;
  top: 7rem;
  left: 2rem;
  padding-right: ${({ open }) => (open ? "50px" : "0px")};
`;

const MenuItem = styled(MenuText)`
  padding: 5px;
`;
