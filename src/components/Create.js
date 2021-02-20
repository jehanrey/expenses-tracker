import React from "react";
import Form from "./Form";
import { connect } from "react-redux";
import { startAddItem } from "../actions/items";

const Create = props => (
  <div>
    <p>Create Item Record</p>
    <Form
      handleOnSubmit={item => {
        props.dispatch(startAddItem(item));
        props.history.push("/");
      }}
      showImage={false}
    />
  </div>
);

export default connect()(Create);
