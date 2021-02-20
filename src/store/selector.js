const selector = (items, { sortBy, text, order }) => {
  return items
    .filter(item => {
      const textMatch =
        item.brand.toLowerCase().includes(text.toLowerCase()) ||
        item.model.toLowerCase().includes(text.toLowerCase());

      return textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        if (order === "descending") {
          return a.dateAcquired < b.dateAcquired ? 1 : -1;
        } else if (order === "ascending") {
          return a.dateAcquired > b.dateAcquired ? 1 : -1;
        }
      } else if (sortBy === "price") {
        if (order === "descending") {
          return a.price < b.price ? 1 : -1;
        } else if (order === "ascending") {
          return a.price > b.price ? 1 : -1;
        }
      }
    });
};

export default selector;
