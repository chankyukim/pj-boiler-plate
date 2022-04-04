import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../modules/user';

const Auth = (SpecificComponent, option, adminRoute = null) => {
  const AuthenticationCheck = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth());
    }, [dispatch]);

    return <SpecificComponent />;
  };

  return AuthenticationCheck;
};

export default Auth;
