import React from "react";
import { connect } from "react-redux";
import Form from "./Form";
import { startEditItem, startRemoveItem } from "../actions/items";

const Edit = props => (
  <div>
    <Form
      item={props.item}
      handleOnSubmit={item => {
        props.dispatch(startEditItem(props.match.params.id, item));
        props.history.push("/");
      }}
      showImage={false}
    />
    <button
      onClick={() => {
        props.dispatch(startRemoveItem({ id: props.match.params.id }));
        props.history.push("/");
      }}
    >
      Remove
    </button>
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    item: state.items.find(item => item.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(Edit);
