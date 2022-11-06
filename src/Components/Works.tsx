import React from "react";
import styled from "styled-components";
import imag1 from "../images/newnext.png";
import imag2 from "../images/react.png";
import imag3 from "../images/nuxt.png";
import imag4 from "../images/veu.png";
import imag5 from "../images/svelte.png";
import imag6 from "../images/angular.png";
import imag7 from "../images/hugo.png";
import imag8 from "../images/ember.png";

const Works: React.FC = () => {
  return (
    <Container>
      <Div1>WORKS WITH 30+ FRAMEWORKS</Div1>
      <Div2>
        <Item1 src={imag1} />
        <Item2 src={imag2} />
        <Item3 src={imag3} />
        <Item4 src={imag4} />
        <Item5 src={imag5} />
        <Item6 src={imag6} />
        <Item7 src={imag7} />
        <Item8 src={imag8} />
      </Div2>
    </Container>
  );
};

export default Works;

const Container = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  margin-top: 40px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const Div1 = styled.div`
  width: 320px;
  display: flex;
  font-size: 17px;
  font-weight: bold;
`;
const Div2 = styled.div`
  width: 40%;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

const Item1 = styled.img`
  width: 50px;
  /* background-color: black; */
  cursor: pointer;
  object-fit: cover;
`;
const Item2 = styled.img`
  width: 50px;
  /* background-color: black; */
  cursor: pointer;
  object-fit: cover;
`;
const Item3 = styled.img`
  width: 50px;
  /* background-color: black; */
  cursor: pointer;
  object-fit: cover;
`;
const Item4 = styled.img`
  width: 50px;
  /* background-color: black; */
  cursor: pointer;
  object-fit: cover;
`;
const Item5 = styled.img`
  width: 50px;
  /* background-color: black; */
  cursor: pointer;
  object-fit: cover;
`;
const Item6 = styled.img`
  width: 50px;
  /* background-color: black; */
  cursor: pointer;
  object-fit: cover;
`;
const Item7 = styled.img`
  width: 50px;
  /* background-color: black; */
  cursor: pointer;
  object-fit: cover;
`;
const Item8 = styled.img`
  width: 50px;
  /* background-color: black; */
  cursor: pointer;
  object-fit: cover;
`;
