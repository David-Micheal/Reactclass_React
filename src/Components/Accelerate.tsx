import React from "react";
import styled from "styled-components";

const Accelerate: React.FC = () => {
  return (
    <Container>
      <Div1>Accelerate with your team</Div1>
      <Div2>
        Frontend development is not meant to be a solo activity. The Vercel
        platform makes it a collaborative experience with deploy previews for
        every code change, by seamlessly integrating with GitHub, GitLab, and
        Bitbucket.
      </Div2>
    </Container>
  );
};

export default Accelerate;

const Container = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  margin-top: 20px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* background-color: red; */
`;
const Div1 = styled.div`
  display: flex;
  font-size: 70px;
  font-weight: bold;
  padding-bottom: 20px;
`;
const Div2 = styled.div`
  width: 60%;
  height: 90px;
  display: flex;
  font-size: 21px;
  text-align: center;
`;
