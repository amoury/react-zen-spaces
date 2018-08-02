import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import spacesReducer from '../app/features/spaces/spacesReducer';

const rootReducer = combineReducers({
  spaces: spacesReducer,
  form: FormReducer
});

export default rootReducer;