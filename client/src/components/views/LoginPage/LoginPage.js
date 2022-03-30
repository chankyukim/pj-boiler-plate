import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { loginUser } from '../../../modules/user';
import { useNavigate } from 'react-router-dom';
const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const onSubmit = async e => {
    e.preventDefault();

    onReset();

    const body = {
      email: inputs.email,
      password: inputs.password,
    };

    try {
      const {
        payload: { loginSuccess },
      } = await dispatch(loginUser(body));

      if (loginSuccess) {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const onReset = e => {
    setInputs({
      email: '',
      password: '',
    });
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <label>Email</label>
        <input type="text" name="email" value={inputs.email} onChange={onChange} />
        <label>Password</label>
        <input type="text" name="password" value={inputs.password} onChange={onChange} />
        <button>로그인</button>
      </Form>
    </Container>
  );
};

export default LoginPage;
