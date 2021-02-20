const itemReducersDefault = [];

const itemsReducer = (state = itemReducersDefault, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.item];
    case "EDIT_ITEM":
      return state.map(item => {
        if (item.id === action.id) {
          return {
            ...item,
            ...action.updates
          };
        } else {
          return item;
        }
      });
    case "REMOVE_ITEM":
      return state.filter(({ id }) => id !== action.id);
    case "SET_ITEM":
      return action.item;
    default:
      return state;
  }
};

export default itemsReducer;
