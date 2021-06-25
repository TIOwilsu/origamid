const findSlot = (children, Slot) => {
  return children.find((child) => child.type === Slot);
};
const params = (method, body) => ({
  method,
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify(body),
});

const api = {
  get: async (url) => {
    return await fetch(url)
      .then((response) => response.json())
      .then((data) => data);
  },
  post: async (url, body, method = params) => {
    const params = method("POST", body);
    return await fetch(url, params);
  },
};

export { findSlot, api };
