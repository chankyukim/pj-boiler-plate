import React from 'react';
import AuthLayout from '../../auth/AuthLayout';
import FormBox from '../../auth/FormBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import Input from '../../auth/Input';
import SubTitle from '../../auth/SubTitle';
import Button from '../../auth/Button';
import BottomBox from '../../auth/BottomBox';

const handleSubmit = e => {
  e.preventDefault();
};

const RegisterPage = () => {
  return (
    <AuthLayout>
      <FormBox>
        <div>
          <FontAwesomeIcon icon={faKey} size="3x" />
        </div>
        <SubTitle text="Sign Up" />
        <form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Username" />
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm Password" />

          <Button btnText="Sign Up"></Button>
        </form>
      </FormBox>
      <BottomBox cta="Have an account?" linkText="Sign In" link="/signin"></BottomBox>
    </AuthLayout>
  );
};

export default RegisterPage;
