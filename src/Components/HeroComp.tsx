import React from "react";
import styled from "styled-components";
import imag2 from "../images/next.png";
import imag4 from "../images/Tri.png";

const HeroComp: React.FC = () => {
  return (
    <Container>
      <Holder>
        <HeroBody src={imag2} />
      </Holder>
      <Triangle>
        <TriLogo src={imag4} />
      </Triangle>
    </Container>
  );
};

export default HeroComp;

const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  background-color: #dbddde;
  flex-direction: column;
  align-items: center;
  /* box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px; */
  box-shadow: 0px 40px 40px rgba(224, 226, 227, 1);
`;
const Holder = styled.div`
  height: 45px;
  width: 250px;
  margin-top: 20px;
`;

const HeroBody = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const Triangle = styled.div`
  height: 190px;
  width: 220px;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;
const TriLogo = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
