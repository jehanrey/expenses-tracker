const sortByPrice = () => ({
  type: "SORT_BY_PRICE"
});

const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text: text
});

const setOrderAscending = () => ({
  type: "SET_ORDER_ASC"
});

const setOrderDescending = () => ({
  type: "SET_ORDER_DESC"
});

export {
  sortByPrice,
  sortByDate,
  setTextFilter,
  setOrderAscending,
  setOrderDescending
};
