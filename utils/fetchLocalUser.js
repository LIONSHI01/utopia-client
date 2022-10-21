export const getLocalUser = () => {
  const user = localStorage.getItem('user')
    ? localStorage.getItem('user')
    : localStorage.clear();

  return user;
};
