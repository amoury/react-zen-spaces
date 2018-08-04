import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { Provider } from 'react-redux';
import "semantic-ui-css/semantic.min.css";
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/rootReducer';
import firebase from './app/config/firebase';

const rrfConfig = {
  userProfile: 'users',
  attachAuthIsReady: true,
  useFirestoreForProfile: true
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, 
  composeEnhancers(
  applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
