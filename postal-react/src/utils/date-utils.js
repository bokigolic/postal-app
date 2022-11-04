export const timestampToUsaDate = (timestamp) =>{
  // const d = new Date(timestamp).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
  const d = new Date(timestamp).toLocaleString('en-us', {dateStyle: "short", timeStyle: 'short' });
  return d;
};


// https://www.freecodecamp.org/news/how-to-format-dates-in-javascript/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat

