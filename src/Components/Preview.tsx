import React from "react";
import styled from "styled-components";

const Preview: React.FC = () => {
  return (
    <Container>
      <Line></Line>
      <Circle>
        <p>1</p>
      </Circle>
      <Prev>Preview</Prev>
    </Container>
  );
};

export default Preview;

const Container = styled.div`
  height: 250px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
`;

const Line = styled.div`
  width: 1px;
  height: 12vh;
  background-image: linear-gradient(to right, purple, #8c3d66);
  margin-top: 30px;
`;
const Circle = styled.div`
  width: 40px;
  height: 40px;
  background-color: purple;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
  }
`;

const Prev = styled.div`
  display: flex;
  font-size: 25px;
  font-weight: bold;
  background-image: linear-gradient(to right, purple, #ec278d);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
