import React from "react";
import styled from "styled-components";
import imag from "../images/exportfunction.png";

const FFFcomp: React.FC = () => {
  return (
    <Container>
      <Div1 src={imag} />
      <Div2>
        <Hd1>
          <Fast>Fast Refresh</Fast>
          <Re>Reliable live-editing experience for your UI components.</Re>
        </Hd1>
        <Hd2>
          <Flexible>Flexible Data Fetching</Flexible>
          <Connect>
            Connect your pages to any data source, headless CMS, or API and make
            it work in everyone’s dev environment.
          </Connect>
        </Hd2>
        <Hd3>
          <Edge>Edge on Localhost</Edge>
          <From>
            From caching to Serverless Functions, all our cloud primitives work
            perfectly on localhost.
          </From>
        </Hd3>
      </Div2>
    </Container>
  );
};
export default FFFcomp;

const Container = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Div1 = styled.img`
  width: 37%;
  height: 95%;
  display: flex;
  object-fit: fill;
`;
const Div2 = styled.div`
  width: 35%;
  height: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;
const Hd1 = styled.div`
  height: 100px;
  width: 500px;
  display: flex;
  flex-direction: column;
`;
const Fast = styled.div`
  display: flex;
  font-size: 30px;
  font-weight: bold;
`;
const Re = styled.div`
  display: flex;
  font-size: 17px;
`;

const Hd2 = styled.div`
  height: 100px;
  width: 500px;
`;

const Flexible = styled.div`
  display: flex;
  font-size: 30px;
  font-weight: bold;
`;
const Connect = styled.div`
  display: flex;
  font-size: 17px;
`;

const Hd3 = styled.div`
  height: 100px;
  width: 500px;
`;

const Edge = styled.div`
  display: flex;
  font-size: 30px;
  font-weight: bold;
`;
const From = styled.div`
  display: flex;
  font-size: 17px;
`;
