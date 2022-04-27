import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  font-size: 1.4rem;
  padding: 7px;
  background-color: #fafafa;
  margin-bottom: 1.4rem;
  border: 0.5px solid rgb(219, 219, 219);
  border-radius: 5px;

  &::placeholder {
    font-size: 1.4rem;
    letter-spacing: 0.5px;
  }

  &:focus {
    outline: 0.3px solid black;
  }
`;

export default Input;
