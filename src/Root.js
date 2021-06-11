import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Store from './Store'
import Main from "./Pages";
import ThemeWrapper from "./Theme";

/*
  * create firebase context
  * create store
*/

function Root({ children }) {
  return (
    // <Provider store={Store}>
    <ThemeWrapper>
      <Router>
        <Main />
      </Router>
    </ThemeWrapper>
    // </Provider>
  );
}

export default Root;
