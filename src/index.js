import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import './index.css';

import rootReducer from "./rootReducer";
import App from './App';
import * as serviceWorker from './serviceWorker';

const createStoreWithMiddleware = compose(
  applyMiddleware(reduxThunk)(createStore)
);
const store = createStoreWithMiddleware(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);


serviceWorker.unregister();
