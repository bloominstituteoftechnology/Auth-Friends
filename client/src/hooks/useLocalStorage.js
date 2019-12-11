import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue = {}) => {
  const [state, setState] = useState(() => {
    const item = window.localStorage.getItem(key);

    item ||
      window.localStorage.setItem(key, JSON.stringify(initialValue));

    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;
