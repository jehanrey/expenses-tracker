import React from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByDate,
  sortByPrice,
  setOrderAscending,
  setOrderDescending
} from "../actions/filters";

const ItemTextFilters = props => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      placeholder="Text Filter"
      onChange={e => {
        props.dispatch(setTextFilter(e.target.value));
      }}
    />
    <select
      value={props.filters.sortBy}
      onChange={e => {
        e.target.value === "date"
          ? props.dispatch(sortByDate())
          : props.dispatch(sortByPrice());
      }}
    >
      <option value="date">Date</option>
      <option value="price">Price</option>
    </select>
    <button
      onClick={() => {
        props.dispatch(setOrderDescending());
      }}
    >
      &#8595;
    </button>
    <button
      onClick={() => {
        props.dispatch(setOrderAscending());
      }}
    >
      &#8593;
    </button>
  </div>
);

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ItemTextFilters);
