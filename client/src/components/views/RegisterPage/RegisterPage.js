import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { loginUser, signUpUser } from '../../../modules/user';
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

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  });

  const onSubmit = async e => {
    e.preventDefault();
    onReset();

    if (inputs.password !== inputs.confirmPassword) {
      alert('비밀번호와 비밀번호 확인이 맞지 않습니다.');
    }

    const body = {
      email: inputs.email,
      name: inputs.name,
      password: inputs.password,
      confirmPassword: inputs.confirmPassword,
    };

    try {
      const {
        payload: { success },
      } = await dispatch(signUpUser(body));

      if (!success) {
        alert('회원가입에 실패하셨습니다.');
        return;
      }
      navigate('/signin');
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
      name: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <label>Email</label>
        <input type="text" name="email" value={inputs.email} onChange={onChange} />
        <label>Name</label>
        <input type="text" name="name" value={inputs.name} onChange={onChange} />
        <label>Password</label>
        <input type="password" name="password" value={inputs.password} onChange={onChange} />
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={inputs.confirmPassword}
          onChange={onChange}
        />
        <button>회원가입</button>
      </Form>
    </Container>
  );
};

export default RegisterPage;
