export function PresentOrDefault(item, defaultItem) {
  if (item) {
    return item;
  }
  return defaultItem;
}

export function POD(item, defaultItem) {
  // check if some item is present and return the default if it is not present
  if (item) {
    return item;
  }
  return defaultItem;
}
