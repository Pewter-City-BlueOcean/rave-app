export const formatDate = (datetime) => {
  if (datetime !== undefined) {
    return new Date((new Date(datetime)).toDateString());
  }
  return new Date((new Date()).toDateString());
};

export const getDaysFromToday = (datetime) => {
  let today = formatDate();
  let eventDate = formatDate(datetime);
  let timeDifference = eventDate.getTime() - today.getTime();
  let days = Math.floor(timeDifference/(1000 * 3600 * 24));
  return days;
};
