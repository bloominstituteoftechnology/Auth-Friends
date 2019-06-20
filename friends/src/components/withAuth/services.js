export const isBrowser = () => typeof window !== "undefined";

export const getUser = () =>
  isBrowser() && localStorage.getItem("User")
    ? JSON.parse(localStorage.getItem("User"))
    : {};

export const setUser = user =>
  localStorage.setItem("User", JSON.stringify(user));

export const logout = callback => {
  setUser({});
  callback();
};
