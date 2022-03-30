import { Suspense } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Loader from "../components/Loader";
import DashboardRouter from "./dashboardRouter";

const Router = () => {
  return (
    <BrowserRouter className="dark-theme">
      <Suspense fallback={<Loader />}>
        <Switch>
          <>
            <DashboardRouter />
          </>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;
