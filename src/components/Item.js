import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Item = ({ id, brand, model, price, dateAcquired }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>
        {brand} {model}
      </h3>
    </Link>
    <p>$ {price.toFixed(2)}</p>
    <p>Acusition Date: {moment(dateAcquired).format("MMM D, YYYY")}</p>
  </div>
);

export default Item;
