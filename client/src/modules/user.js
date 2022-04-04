import axios from 'axios';

const LOGIN_USER = 'LOGIN_USER';
const SIGNUP_USER = 'SIGNUP_USER';
const SIGNOUT_USER = 'SIGNOUT_USER';
const AUTH_USER = 'AUTH_USER';

export const loginUser = dataToSubmit => async () => {
  try {
    const { data } = await axios.post('/api/users/signin', dataToSubmit);
    console.log('signin data', data);
    return {
      type: LOGIN_USER,
      payload: data,
    };
  } catch (error) {
    console.log(error);
  }
};

export const signUpUser = dataToSubmit => async () => {
  try {
    const { data } = await axios.post('/api/users/signup', dataToSubmit);
    // console.log('signup data', data);
    return {
      type: SIGNUP_USER,
      payload: data,
    };
  } catch (error) {
    console.log(error);
  }
};

export const signOutUser = () => async () => {
  try {
    const { data } = await axios.get('/api/users/signout');
    console.log('signout data', data);
    return {
      type: SIGNOUT_USER,
      payload: data,
    };
  } catch (error) {
    console.log(error);
  }
};

export const auth = () => async () => {
  try {
    const { data } = await axios.get('/api/users/auth');
    // console.log('authData', data);
    return {
      type: AUTH_USER,
      payload: data,
    };
  } catch (error) {
    console.log(error);
  }
};

const user = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    case SIGNUP_USER:
      return { ...state, success: action.payload };
    case SIGNOUT_USER:
      return { ...state, success: action.payload };
    case AUTH_USER:
      return { ...state, userData: action.payload };
    default:
      return state;
  }
};

export default user;
