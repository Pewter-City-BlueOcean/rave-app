export const getDaysFromToday = (datetime) => {
  let today = new Date((new Date().toDateString()));
  let eventDate = new Date((new Date(datetime)).toDateString());
  let timeDifference = eventDate.getTime() - today.getTime();
  let days = Math.floor(timeDifference/(1000 * 3600 * 24));
  return days;
};