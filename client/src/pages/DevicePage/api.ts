export const initPolarFetch = async () => {
  const response = await fetch('/polar/init');
  const data = await response.json();
  return data;
};
