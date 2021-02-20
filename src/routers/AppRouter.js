import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import Create from "../components/Create";
import Edit from "../components/Edit";
import PageNotFound from "../components/PageNotFound";

const AppRouter = () => (
  <div>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/create" component={Create} />
        <Route path="/edit/:id" component={Edit} id=":id" />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default AppRouter;
