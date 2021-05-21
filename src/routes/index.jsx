import { Route, Switch } from "react-router";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ProfileData from "../pages/ProfileData";
import AddTech from "../pages/AddTech";
import { useState } from "react";

const Routes = () => {
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
        <Login />
      </Route>
      <Route path="/profileData">
        <ProfileData
          isAuthorized={isAuthorized}
          setIsAuthorized={setIsAuthorized}
        />
      </Route>
      <Route path="/addtech">
        <AddTech
          isAuthorized={isAuthorized}
          setIsAuthorized={setIsAuthorized}
        />
      </Route>
    </Switch>
  );
};
export default Routes;
