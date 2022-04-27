import React from 'react';
import AuthLayout from '../../auth/AuthLayout';
import BottomBox from '../../auth/BottomBox';
import FormBox from '../../auth/FormBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import Input from '../../auth/Input';
import Button from '../../auth/Button';
import SubTitle from '../../auth/SubTitle';
import Seperator from '../../auth/Seperator';

const handleSubmit = e => {
  e.preventDefault();
};

const LoginPage = () => {
  return (
    <AuthLayout>
      <FormBox>
        <div>
          <FontAwesomeIcon icon={faRightToBracket} size="3x" />
        </div>
        <SubTitle text="Sign In" />
        <form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button btnText="Sign In" />
        </form>
        <Seperator />
      </FormBox>
      <BottomBox cta="Don't have an account" linkText="Sign Up" link="/signup"></BottomBox>
    </AuthLayout>
  );
};

export default LoginPage;
