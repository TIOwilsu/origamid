const findSlot = (children, Slot) => {
  return children.find((child) => child.type === Slot);
};

const fetchApi = async (url) =>
  await fetch(url)
    .then((response) => response.json())
    .then((data) => data);

export { findSlot, fetchApi };
