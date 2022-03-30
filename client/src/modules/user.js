import axios from 'axios';

const LOGIN_USER = 'LOGIN_USER';
// const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// const LOGIN_FAILURE = 'LOGIN_FAILURE';

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

const user = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    default:
      return state;
  }
};

export default user;
