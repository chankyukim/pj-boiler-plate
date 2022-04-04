import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { auth } from '../modules/user';

const PrivateRoute = () => {
  const dispatch = useDispatch();
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    dispatch(auth()).then(({ payload }) => {
      setIsAuth(payload.isAuth);
      console.log(payload);
    });
  }, [dispatch]);

  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
