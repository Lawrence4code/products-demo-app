import userActionTypes from './user.types';


const user = JSON.parse(localStorage.getItem('user'));

const initialState = user && user.auth ? user : {
  name: '',
  email: '',
  auth: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case userActionTypes.LOGIN:
      return action.payload;
    case userActionTypes.RE_AUTH:
      return action.payload
    case userActionTypes.LOGOUT:
      return initialState
    default:
      return state;
  }
}
