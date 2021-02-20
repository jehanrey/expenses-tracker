const filtersReducerDefault = {
  sortBy: "date",
  text: "",
  order: "descending"
};

const filtersReducer = (state = filtersReducerDefault, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return {
        ...state,
        sortBy: "price"
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date"
      };
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SET_ORDER_ASC":
      return {
        ...state,
        order: "ascending"
      };
    case "SET_ORDER_DESC":
      return {
        ...state,
        order: "descending"
      };
    default:
      return state;
  }
};

export default filtersReducer;
