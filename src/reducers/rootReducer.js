import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import spacesReducer from '../app/features/spaces/spacesReducer';
import modalReducer from '../app/layout/Modals/modalReducer';
import authReducer from '../app/features/auth/authReducer';
import asyncReducer from '../app/features/async/asyncReducer';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  spaces: spacesReducer,
  form: FormReducer,
  modals: modalReducer,
  auth: authReducer,
  async: asyncReducer
});

export default rootReducer;