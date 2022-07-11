import { Route, Switch } from "react-router-dom";
import LandingPage from "../pages/landingPage";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
