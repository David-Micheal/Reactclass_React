import React from "react";
import styled from "styled-components";
import logo from "../images/Vercel.png";

const Header: React.FC = () => {
  return (
    <Container>
      <Logo src={logo} />

      <NavHold>
        <Nav>Features</Nav>
        <Nav>Templates</Nav>
        <Nav>Integration</Nav>
        <Nav>Customers</Nav>
        <Nav>Enterprise</Nav>
        <Nav>Pricing</Nav>
      </NavHold>

      <NavAuth>
        <Nav>Contact</Nav>
        <Nav>Login</Nav>
        <Button>Sign-up</Button>
      </NavAuth>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: #dadddd;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img`
  height: 30px;
  width: 120px;
  object-fit: cover;
`;
const NavHold = styled.div`
  display: flex;
  margin-right: 10px;
`;
const NavAuth = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;
`;
const Nav = styled.div`
  margin-right: 17px;
  cursor: pointer;
  color: gray;

  :hover {
    color: black;
    transition: all 400ms;
  }
`;
const Button = styled.div`
  height: 22px;
  width: 70px;
  display: flex;
  background-color: black;
  border-radius: 10px;
  color: white;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;
  border: 2px solid black;
  cursor: pointer;

  :hover {
    background-color: #d3d6d7;
    transition: 350ms;
    color: black;
  }
`;
