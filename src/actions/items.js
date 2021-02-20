import database from "../firebase/firebase";

const startAddItem = (itemData = {}) => {
  return dispatch => {
    const {
      brand = "",
      model = "",
      price = 0,
      notes = "",
      dateAcquired = 0
    } = itemData;

    const item = {
      brand: brand,
      model: model,
      price: price,
      notes: notes,
      dateAcquired: dateAcquired
    };

    database
      .ref("collection")
      .push(item)
      .then(ref => {
        dispatch(
          addItem({
            id: ref.key,
            ...item
          })
        );
      })
      .catch(e => {
        console.log("Error encountered", e);
      });
  };
};

const addItem = item => ({
  type: "ADD_ITEM",
  item: item
});

const startEditItem = (id, updates) => {
  return dispatch => {
    database
      .ref(`collection/${id}`)
      .update({
        ...updates
      })
      .then(() => {
        dispatch(editItem(id, updates));
      });
  };
};

const editItem = (id, updates) => ({
  type: "EDIT_ITEM",
  id,
  updates
});

const startRemoveItem = ({ id } = {}) => {
  return dispatch => {
    database
      .ref(`collection/${id}`)
      .remove()
      .then(() => {
        dispatch(removeItem({ id }));
      });
  };
};

const removeItem = ({ id } = {}) => ({
  type: "REMOVE_ITEM",
  id
});

const startSetItem = () => {
  return dispatch => {
    return database.ref("collection").once("value", snapshot => {
      const items = [];

      snapshot.forEach(child => {
        items.push({
          id: child.key,
          ...child.val()
        });
      });

      dispatch(setItem(items));
    });
  };
};

const setItem = item => ({
  type: "SET_ITEM",
  item: item
});

export {
  startAddItem,
  addItem,
  startEditItem,
  editItem,
  startRemoveItem,
  removeItem,
  startSetItem,
  setItem
};
