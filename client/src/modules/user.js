import axios from 'axios';

const LOGIN_USER = 'LOGIN_USER';
const SIGNUP_USER = 'SIGNUP_USER';

export const loginUser = dataToSubmit => async () => {
  try {
    const { data } = await axios.post('/api/users/signin', dataToSubmit);
    // console.log('data', data);
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

    return {
      type: SIGNUP_USER,
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
    default:
      return state;
  }
};

export default user;
