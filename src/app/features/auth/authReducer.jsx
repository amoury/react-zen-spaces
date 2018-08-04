import { LOGIN_USER, SIGN_OUT_USER } from './authActions';

const initialState = {
  authenticated: false,
  currentUser: {}
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { 
        ...state, 
        authenticated: true, 
        currentUser: action.payload.creds.email 
      }
    case SIGN_OUT_USER:
      return {
        ...state,
        authenticated: false,
        currentUser: {}
      }
    default:
      return state;
  }
}

export default authReducer;