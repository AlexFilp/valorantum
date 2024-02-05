export const filterWeapons = weapons => {
  return weapons.reduce((result, item) => {
    const { category } = item;
    const simplifiedCategory = category.split('::')[1];

    // Check if there's already an array for the simplifiedCategory, if not, create one.
    if (!result[simplifiedCategory]) {
      result[simplifiedCategory] = [];
    }

    // Push the item into the corresponding simplifiedCategory array.
    result[simplifiedCategory].push(item);

    return result;
  }, {});
};
