import {
  // Dashboard,
  TopCollections,
} from "./screens";
import Collection from "./screens/Collections";
import React from "react";

// const TopCollections = React.lazy(() => import("./screens/TopCollections"));

const routes = [
  // {
  //   path: "/home",
  //   component: Dashboard,
  // },
  {
    path: "/top-collections",
    component: TopCollections,
  },
  {
    path: "/collection/:slug",
    component: Collection,
  },
];

export default routes;
