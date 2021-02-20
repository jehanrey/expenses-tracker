import React from "react";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
// import FileUploader from "react-firebase-file-uploader";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      brand: props.item ? props.item.brand : "",
      model: props.item ? props.item.model : "",
      notes: props.item ? props.item.notes : "",
      price: props.item ? props.item.price : "",
      dateAcquired: props.item ? moment(props.item.dateAcquired) : moment(),
      dateFocused: false,
      error: ""
    };
  }

  handleOnChangeBrand = e => {
    const brand = e.target.value;
    this.setState(() => ({
      brand: brand
    }));
  };

  handleOnChangeModel = e => {
    const model = e.target.value;
    this.setState(() => ({
      model: model
    }));
  };

  handleOnChangeNotes = e => {
    const notes = e.target.value;
    this.setState(() => ({
      notes: notes
    }));
  };

  handleOnChangePrice = e => {
    const price = e.target.value;
    if (price.match(/^\d{1,}(\.{0,1}\d{0,2})?$/)) {
      this.setState(() => ({
        price: price
      }));
    }
  };

  handleOnDateChange = dateAcquired => {
    this.setState(() => ({
      dateAcquired: dateAcquired
    }));
  };

  handleOnChangeImage = e => {
    const file = e.target.files[0];

    this.setState(() => ({
      image: file
    }));
  };

  handleOnFocusChange = ({ focused }) => {
    this.setState(() => ({
      dateFocused: focused
    }));
  };

  handleOnSubmit = e => {
    e.preventDefault();

    if (!this.state.brand || !this.state.model || !this.state.price) {
      this.setState(() => ({
        error: "Enter a valid Brand, Model, and Price value"
      }));
    } else {
      this.setState(() => ({
        error: ""
      }));
      this.props.handleOnSubmit({
        brand: this.state.brand,
        model: this.state.model,
        notes: this.state.notes,
        price: parseFloat(this.state.price, 10),
        dateAcquired: this.state.dateAcquired.valueOf()
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          {this.props.showImage && (
            <input
              type="file"
              name="image"
              onChange={this.handleOnChangeImage}
            />
          )}
          <input
            type="text"
            name="brand"
            placeholder="Brand"
            autoComplete="off"
            onChange={this.handleOnChangeBrand}
            value={this.state.brand}
            // readOnly={this.props.active}
          />
          <input
            type="text"
            name="model"
            placeholder="Model"
            autoComplete="off"
            onChange={this.handleOnChangeModel}
            value={this.state.model}
          />
          <textarea
            name="notes"
            placeholder="Notes / Additional info"
            onChange={this.handleOnChangeNotes}
            value={this.state.notes}
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            autoComplete="off"
            onChange={this.handleOnChangePrice}
            value={this.state.price}
          />
          <SingleDatePicker
            date={this.state.dateAcquired}
            onDateChange={this.handleOnDateChange}
            focused={this.state.dateFocused}
            onFocusChange={this.handleOnFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => {
              false;
            }}
          />
          <button>Add</button>
        </form>
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    );
  }
}

export default Form;
