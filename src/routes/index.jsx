import { Route, Switch } from "react-router";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ProfileData from "../pages/ProfileData";
import AddTech from "../pages/AddTech";

const Routes = () => {
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
        <ProfileData />
      </Route>
      <Route path="/addtech">
        <AddTech />
      </Route>
    </Switch>
  );
};
export default Routes;
