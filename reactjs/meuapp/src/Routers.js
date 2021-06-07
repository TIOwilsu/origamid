import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Exercise1 from "./views/Exercise1/index";
import Exercise2 from "./views/Exercise2/index";
import Exercise3 from "./views/Exercise3/index";
import Exercise4 from "./views/Exercise4/index";
import Exercise5 from "./views/Exercise5/index";

const Routes = [
  { path: "/exercise1", title: "Exercício 1", component: Exercise1 },
  { path: "/exercise2", title: "Exercício 2", component: Exercise2 },
  { path: "/exercise3", title: "Exercício 3", component: Exercise3 },
  { path: "/exercise4", title: "Exercício 4", component: Exercise4 },
  { path: "/exercise5", title: "Exercício 5", component: Exercise5 },
];

const Routers = () => {
  return (
    <Router>
      <Switch>
        {Routes.map(({ path, title, component }, key) => (
          <Route path={path} key={key}>
            <h1>{title}</h1>
            {React.createElement(component)}
          </Route>
        ))}
      </Switch>
    </Router>
  );
};

export default Routers;
