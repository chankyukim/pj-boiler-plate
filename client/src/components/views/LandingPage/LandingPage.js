import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { signOutUser } from '../../../modules/user';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LandingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickHandler = async () => {
    const {
      payload: { success },
    } = await dispatch(signOutUser());

    if (success) {
      navigate('/signin');
    }
  };
  return (
    <Container>
      <h2>시작페이지</h2>
      <button onClick={onClickHandler}>로그아웃</button>
    </Container>
  );
};

export default LandingPage;
