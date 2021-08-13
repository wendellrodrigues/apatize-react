// Burger.js
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function HamburgerButton(props) {
  const { open, setOpen } = props;
  return (
    <Wrapper open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </Wrapper>
  );
}

const Wrapper = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    //#fae6e6"
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "#e77b7b" : "#e77b7b")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media (min-width: 760px) {
    display: none;
  }
`;
