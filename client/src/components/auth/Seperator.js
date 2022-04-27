import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin: 3rem 0;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 100%;
    height: 1px;
    background-color: rgb(219, 219, 219);
  }

  span {
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 1rem;
    color: #8e8e8e;
  }
`;

const Seperator = () => {
  return (
    <Container>
      <div></div>
      <span>or</span>
      <div></div>
    </Container>
  );
};

export default Seperator;
