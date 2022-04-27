import React from 'react';
import styled from 'styled-components';

const SButton = styled.button`
  width: 100%;
  padding: 9px 1.2rem 9px 1.2rem;
  background-color: #0095f6;
  border: none;
  color: white;
  font-size: 1.4rem;
  border-radius: 5px;
  margin-top: 1.6rem;
`;

const Button = ({ btnText }) => {
  return <SButton>{btnText}</SButton>;
};

export default Button;
