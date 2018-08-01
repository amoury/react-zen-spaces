import { combineReducers } from 'redux';

import spacesReducer from '../app/features/spaces/spacesReducer';

const rootReducer = combineReducers({
  spaces: spacesReducer
});

export default rootReducer;