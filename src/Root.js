import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Store from './Store'
import Main from "./Pages";
import './css/global.css'
/*
  * create firebase context
  * create store
*/

function Root({ children }) {
  return (
    <Provider store={Store}>
      <Router>
        <Main />
      </Router>
    </Provider>
  );
}

export default Root;
