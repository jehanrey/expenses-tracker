import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { startSetItem } from "./actions/items";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import "./styles/styles.css";

const store = configureStore();

//START - Data Population
// store.dispatch(
//   addItem({
//     brand: "Rolex",
//     model: "1601 Datejust",
//     notes: "blue dial, roman numerals, white gold",
//     price: 9255.0,
//     dateAcquired: 1212412912114
//   })
// );

// store.dispatch(
//   addItem({
//     brand: "Tudor",
//     model: "Black Bay GMT",
//     notes: "BNIB",
//     price: 3900.0,
//     dateAcquired: 1539041145123
//   })
// );

// store.dispatch(
//   addItem({
//     brand: "Seiko",
//     model: "SLA029J",
//     notes: "1000m Zaku II LE",
//     price: 4750.0,
//     dateAcquired: 1555941145123
//   })
// );
//END - Data Population

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

store.dispatch(startSetItem()).then(() => {
  ReactDOM.render(jsx, document.getElementById("app"));
});
