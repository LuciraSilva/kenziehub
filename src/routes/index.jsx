import { Route, Switch, useHistory } from "react-router";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ProfileData from "../pages/ProfileData";
import Tech from "../pages/Tech";
import { useState } from "react";

const Routes = () => {
  const history = useHistory();
  const [isAuthorized, setIsAuthorized] = useState(false);
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login setIsAuthorized={setIsAuthorized} />
      </Route>
      <Route path="/profileData">
        {isAuthorized ? <ProfileData /> : history.push("/")}
      </Route>
      <Route path="/tech">
        {isAuthorized && (
          <Tech isAuthorized={isAuthorized}/>
        )}
      </Route>
    </Switch>
  );
};
export default Routes;
