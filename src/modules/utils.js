export const newDate = () => {
  const date = new Date();
  return date.toISOString().split('T')[0];
};
