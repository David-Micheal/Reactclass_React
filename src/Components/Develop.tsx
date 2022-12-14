import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import GlobalButton from "./GlobalButton";
import { BsFillTriangleFill } from "react-icons/bs";

const Develop: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const myRef1 = useRef() as MutableRefObject<HTMLDivElement>;
  const myRef2 = useRef() as MutableRefObject<HTMLDivElement>;
  const myRef3 = useRef() as MutableRefObject<HTMLDivElement>;

  const col1 = [
    "linear-gradient(to right, blue, skyblue)",
    "linear-gradient(to right, black, black)",
    "linear-gradient(to right, black, black)",
  ];

  const col2 = [
    "linear-gradient(to right, black, black)",
    "linear-gradient(to right, purple, #8c3d66)",
    "linear-gradient(to right, black, black)",
  ];

  const col3 = [
    "linear-gradient(to right, black, black)",
    "linear-gradient(to right, black, black)",
    "linear-gradient(to right, red, orange)",
  ];

  useEffect(() => {
    setInterval(() => {
      setCount((el) => el + 0.25);
    }, 2000);
  });

  useEffect(() => {
    myRef1.current.style.backgroundImage = `${col1[count % col1.length]}`;
  }, [col1]);
  useEffect(() => {
    myRef2.current.style.backgroundImage = `${col2[count % col2.length]}`;
  }, [col2]);
  useEffect(() => {
    myRef3.current.style.backgroundImage = `${col3[count % col3.length]}`;
  }, [col3]);

  return (
    <Container>
      <Div1>
        <Dev ref={myRef1}>Develop.</Dev>
        <Prev ref={myRef2}>Preview.</Prev>
        <Sh ref={myRef3}>Ship.</Sh>
      </Div1>
      <Div2>
        Vercel is the platform for frontend developers, providing the speed and
        <br />
        reliability innovators need to create at the moment of inspiration.
      </Div2>
      <Div3>
        <GlobalButton
          bg="black"
          btnText="Start Deploying"
          icon={<BsFillTriangleFill />}
          col="white"
        />
        <GlobalButton col="black" bg="" icon="" btnText="Get a Demo" />
      </Div3>
    </Container>
  );
};

export default Develop;

const Dev = styled.div`
  /* color: hsl(240, 100%, 50%); */
  background-image: linear-gradient(to right, blue, skyblue);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Prev = styled.div`
  background-image: linear-gradient(to right, purple, #8c3d66);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Sh = styled.div`
  background-image: linear-gradient(to right, red, orange);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
`;
const Div1 = styled.div`
  display: flex;
  font-size: 90px;
  font-weight: bold;
`;
const Div2 = styled.p`
  font-size: 20px;
  text-align: center;
`;
const Div3 = styled.div`
  display: flex;
`;
