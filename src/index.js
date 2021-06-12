import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Root from './Root';
import Firebase, { FirebaseContext } from './lib/firebase'
import Store from './Store'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
      <Provider store={Store}>
        <Router>
          <Root />
        </Router>
      </Provider>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);