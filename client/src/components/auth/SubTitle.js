import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
  margin-top: 1.4rem;
  font-size: 2.4rem;
  font-weight: 600;
`;

const SubTitle = ({ text }) => {
  return <Span>{text}</Span>;
};

export default SubTitle;
