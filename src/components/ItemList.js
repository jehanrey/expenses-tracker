import React from "react";
import { connect } from "react-redux";
import Item from "./Item";
import selector from "../store/selector";
import sumSelector from "../store/sumSelector";

const ItemList = props => (
  <div>
    <h2>Viewing {sumSelector(props.items).total} item/s</h2>
    <h2>Total Cost: $ {sumSelector(props.items).sum.toFixed(2)}</h2>
    <h2>Item List</h2>
    {props.items.map(item => {
      return <Item key={item.id} {...item} />;
    })}
  </div>
);

const mapStateToProps = state => {
  return {
    items: selector(state.items, state.filters)
  };
};

export default connect(mapStateToProps)(ItemList);
