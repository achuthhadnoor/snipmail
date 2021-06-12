import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router";
import { withFirebase } from "./lib/firebase";
import Main from "./Pages/Home";
import Onboarding from "./Pages/Onboarding";
/*
  * create firebase context
  * create store
*/

function Root({ firebase }) {
  const [user, setUser] = useState(null);
  const history = useHistory();
  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged(
      authUser => {
        if (authUser) {
          return setUser(authUser);
        }
        setUser(null)
        return history.push('/onboard')
      },
    );
    return () => unsubscribe();
  }, [history, firebase.auth])
  // <Main user={user} />
  return (
    <Switch>
      <Route path="/" component={Main} exact />
      <Route path="/onboard" component={Onboarding} />
    </Switch>
  );
}

export default withFirebase(Root);
