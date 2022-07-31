import React from "react";
import loadable from "@loadable/component";

import * as routes from "../constans/routes";

export interface Routing {
  path: string;
  component: React.ComponentType;
}

export const routing: Array<Routing> = [
  {
    ...routes.homePage,
    component: loadable(() => import("../features/HomePage")),
  },
  {
    ...routes.basketPage,
    component: loadable(() => import("../features/BasketPage")),
  },
];
