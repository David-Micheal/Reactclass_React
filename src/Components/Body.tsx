import React from "react";
import CountDownComp from "./CountDownComp";
import HeroComp from "./HeroComp";
import styled from "styled-components";
import Develop from "./Develop";
import Explore from "./Explore";
import StartWith from "./StartWith";
import FFFcomp from "./FFFcomp";
import Works from "./Works";
import Preview from "./Preview";
import Accelerate from "./Accelerate";

const Body: React.FC = () => {
  return (
    <Container>
      <HeroComp />
      <CountDownComp />
      <Develop />
      <Explore />
      <StartWith />
      <FFFcomp />
      <Works />
      <Preview />
      <Accelerate />
    </Container>
  );
};

export default Body;

const Container = styled.div``;
