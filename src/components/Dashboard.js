import React from "react";
import ItemList from "./ItemList";
import ItemFilters from "./ItemFilters";

const Dashboard = () => (
  <div>
    <ItemFilters />
    <ItemList />
  </div>
);

export default Dashboard;
