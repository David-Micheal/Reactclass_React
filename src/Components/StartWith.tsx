import React from "react";
import styled from "styled-components";

const StartWith: React.FC = () => {
  return (
    <Container>
      <Div1>Start with the developer</Div1>
      <Div2>
        <Letter1>
          Developers love Next.js, the open source React framework Vercel built
          together with Google and Facebook. Next.js powers the biggest websites
          like Patreon, for use cases in e-commerce, travel, news, and
          marketing.
        </Letter1>
        <Letter2>
          Vercel is the best place to deploy any frontend app. Start by
          deploying with zero configuration to our global edge network. Scale
          dynamically to millions of pages without breaking a sweat.
        </Letter2>
      </Div2>
    </Container>
  );
};

export default StartWith;

const Container = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  margin-top: 20px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const Div1 = styled.div`
  display: flex;
  font-size: 70px;
  font-weight: bold;
  padding-bottom: 20px;
`;
const Div2 = styled.div`
  width: 80%;
  height: 50%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding-top: 15px;
`;
const Letter1 = styled.div`
  width: 40%;
  height: 90px;
  display: flex;
  font-size: 18px;
  /* align-items: center; */
`;
const Letter2 = styled.div`
  width: 40%;
  height: 90px;
  display: flex;
  font-size: 18px;
  /* align-items: center; */
`;
