import React, { Children } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  padding: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    margin-top: 2.4rem;
  }
`;

const FormBox = ({ children }) => {
  return <Container>{children}</Container>;
};

export default FormBox;
