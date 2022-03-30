import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LandingPage = () => {
  return (
    <Container>
      <h2>시작페이지</h2>
    </Container>
  );
};

export default LandingPage;
