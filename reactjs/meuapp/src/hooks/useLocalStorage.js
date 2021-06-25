import React from "react";

const useLocalStorage = (key, initial) => {
  const [state, setState] = React.useState(() => {
    const local = localStorage.getItem(key);
    return local ? local : initial;
  });

  React.useEffect(() => {
    localStorage.setItem(key, state);
  }, [state, key]);

  return [state, setState];
};

export default useLocalStorage;
