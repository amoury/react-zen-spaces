import { modalClose } from '../../layout/Modals/modalActions';
import { SubmissionError } from 'redux-form';

export const LOGIN_USER = 'LOGIN_USER';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';
export const REGISTER_USER = 'REGISTER_USER';

export const loginUser = (creds) => {
  return async (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    try {
      await firebase.auth().signInWithEmailAndPassword(creds.email, creds.password);
      dispatch(modalClose());
    } catch(error) { 
      throw new SubmissionError({ _error: 'Login Failed. Invalid username / password' })
    }
  }
}


export const registerUser = (user) => 
  async (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    try {
      let createdUser = await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
      // Update the auth profile
      await createdUser.user.updateProfile({
        displayName: user.displayName
      })

      // create a new profile in firestore
      let newUser = {
        displayName: user.displayName,
        createdAt: firestore.FieldValue.serverTimestamp()
      };
      await firestore.set(`users/${createdUser.user.uid}`, { ...newUser });
      dispatch(modalClose());
    } catch(error) {
      console.log(error);
      throw new SubmissionError({
        _error: error.message
      });
    }
  }
