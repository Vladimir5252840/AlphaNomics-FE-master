import React from "react";
import { Route, Redirect } from "react-router";

import routes from "../routes";

const DashboardRouter = () => {
  return (
    <>
      <Route path={"/"} exact>
        <Redirect to={"/top-collections"} />
      </Route>

      {routes.map(({ path, component }, index) => (
        <Route key={index} path={`${path}`} exact component={component} />
      ))}
    </>
  );
}

export default DashboardRouter;
