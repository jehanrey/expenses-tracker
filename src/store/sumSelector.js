const sumSelector = items => {
  var sum = 0;
  var total = 0;

  items.forEach(item => {
    sum += item.price;
    total++;
  });

  return {
    sum: sum,
    total: total
  };
};

export default sumSelector;
